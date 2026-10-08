// Vercel Serverless Function — /api/create-order
// Creates a Cashfree order securely using server-side credentials.
// The Secret Key is NEVER exposed to the frontend.

export const config = {
  runtime: 'nodejs20.x',
};

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // CORS headers — restrict to your production domain in production
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { customerName, customerEmail, customerPhone, batchId, batchLabel, batchTime } = req.body || {};

  // Basic validation
  if (!customerName || !customerPhone) {
    return res.status(400).json({ error: 'Customer name and phone are required.' });
  }

  if (!/^\d{10}$/.test(customerPhone.replace(/\s/g, ''))) {
    return res.status(400).json({ error: 'Please enter a valid 10-digit mobile number.' });
  }

  const appId = process.env.CASHFREE_APP_ID;
  const secretKey = process.env.CASHFREE_SECRET_KEY;
  const environment = process.env.CASHFREE_ENV || 'production'; // 'sandbox' or 'production'

  if (!appId || !secretKey) {
    console.error('Cashfree credentials are not configured.');
    return res.status(500).json({ error: 'Payment gateway not configured. Please contact support.' });
  }

  // Unique order ID — timestamp + random to avoid duplicates
  const orderId = `MFE_${Date.now()}_${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

  const cashfreeBaseUrl =
    environment === 'production'
      ? 'https://api.cashfree.com'
      : 'https://sandbox.cashfree.com';

  const orderPayload = {
    order_id: orderId,
    order_amount: 699,
    order_currency: 'INR',
    customer_details: {
      customer_id: `CUST_${customerPhone.replace(/\s/g, '')}`,
      customer_name: customerName.trim(),
      customer_email: customerEmail?.trim() || 'noreply@mfeducation.com',
      customer_phone: customerPhone.replace(/\s/g, ''),
    },
    order_meta: {
      notify_url: process.env.CASHFREE_WEBHOOK_URL || '',
      return_url: `${process.env.SITE_URL || 'https://mfeducation.in'}/payment-status?order_id={order_id}`,
    },
    order_note: `7 Days 7 Skills Course | ${batchLabel || ''} ${batchTime || ''}`.trim(),
    order_tags: {
      course: '7-days-7-skills',
      batch_id: String(batchId || ''),
      batch_label: batchLabel || '',
    },
  };

  try {
    const response = await fetch(`${cashfreeBaseUrl}/pg/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-version': '2023-08-01',
        'x-client-id': appId,
        'x-client-secret': secretKey,
      },
      body: JSON.stringify(orderPayload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Cashfree order creation failed:', data);
      return res.status(response.status).json({
        error: data?.message || 'Failed to create payment order. Please try again.',
      });
    }

    // Return only what the frontend needs — never return the secret key
    return res.status(200).json({
      orderId: data.order_id,
      paymentSessionId: data.payment_session_id,
      orderStatus: data.order_status,
    });
  } catch (err) {
    console.error('Error calling Cashfree API:', err);
    return res.status(500).json({ error: 'Network error while creating order. Please try again.' });
  }
}
