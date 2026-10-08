import { useState, useCallback } from 'react';
import { BATCHES, COURSE_FEE_DISPLAY } from '../App';

// TypeScript declaration for the Cashfree global loaded via CDN
declare global {
  interface Window {
    Cashfree: (config: { mode: string }) => {
      checkout: (options: {
        paymentSessionId: string;
        redirectTarget: string;
      }) => Promise<{ error?: { message: string }; redirect?: boolean; paymentDetails?: unknown }>;
    };
  }
}

export type PaymentStatus = 'idle' | 'collecting' | 'processing' | 'success' | 'failed';

interface CustomerDetails {
  name: string;
  email: string;
  phone: string;
}

interface UseCashfreePaymentOptions {
  selectedBatch: typeof BATCHES[0] | null;
  onSuccess?: (orderId: string) => void;
}

export function useCashfreePayment({ selectedBatch, onSuccess }: UseCashfreePaymentOptions) {
  const [status, setStatus] = useState<PaymentStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [paidOrderId, setPaidOrderId] = useState('');
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    name: '',
    email: '',
    phone: '',
  });

  const openForm = useCallback(() => {
    setShowForm(true);
    setStatus('collecting');
    setErrorMessage('');
  }, []);

  const closeForm = useCallback(() => {
    setShowForm(false);
    setStatus('idle');
    setErrorMessage('');
  }, []);

  const updateCustomer = useCallback((field: keyof CustomerDetails, value: string) => {
    setCustomerDetails(prev => ({ ...prev, [field]: value }));
  }, []);

  const initiatePayment = useCallback(async () => {
    const { name, email, phone } = customerDetails;

    // Validation
    if (!name.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!phone.trim() || !/^\d{10}$/.test(phone.replace(/\s/g, ''))) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    // Check Cashfree SDK loaded
    if (typeof window.Cashfree !== 'function') {
      setErrorMessage('Payment gateway is loading. Please wait a moment and try again.');
      return;
    }

    setStatus('processing');
    setErrorMessage('');

    try {
      // Step 1: Create order via backend
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: name.trim(),
          customerEmail: email.trim() || undefined,
          customerPhone: phone.replace(/\s/g, ''),
          batchId: selectedBatch?.id,
          batchLabel: selectedBatch?.label,
          batchTime: selectedBatch?.time,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus('failed');
        setErrorMessage(data.error || 'Failed to create order. Please try again.');
        return;
      }

      const { paymentSessionId, orderId } = data;

      // Step 2: Open Cashfree Checkout modal
      const cashfree = window.Cashfree({ mode: 'production' });

      const result = await cashfree.checkout({
        paymentSessionId,
        redirectTarget: '_modal',
      });

      // Step 3: Handle result
      if (result.error) {
        // User cancelled or payment failed in the modal
        setStatus('failed');
        setErrorMessage(result.error.message || 'Payment was not completed. Please try again.');
        return;
      }

      if (result.redirect) {
        // Redirect-based payment — status will be checked on return
        return;
      }

      // Step 4: Verify payment on server
      const verifyRes = await fetch(`/api/verify-payment?order_id=${orderId}`);
      const verifyData = await verifyRes.json();

      if (verifyData.orderStatus === 'PAID') {
        setStatus('success');
        setPaidOrderId(orderId);
        setShowForm(false);
        onSuccess?.(orderId);
      } else {
        setStatus('failed');
        setErrorMessage(
          `Payment status: ${verifyData.orderStatus || 'unknown'}. If amount was debited, please contact support with Order ID: ${orderId}`
        );
      }
    } catch (err) {
      console.error('Payment error:', err);
      setStatus('failed');
      setErrorMessage('Something went wrong. Please check your connection and try again.');
    }
  }, [customerDetails, selectedBatch, onSuccess]);

  const retry = useCallback(() => {
    setStatus('collecting');
    setErrorMessage('');
  }, []);

  return {
    status,
    errorMessage,
    showForm,
    customerDetails,
    paidOrderId,
    openForm,
    closeForm,
    updateCustomer,
    initiatePayment,
    retry,
    courseFeeDisplay: COURSE_FEE_DISPLAY,
  };
}
