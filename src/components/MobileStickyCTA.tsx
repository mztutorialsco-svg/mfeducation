import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Shield, AlertCircle, X, User, Phone, Mail } from 'lucide-react';
import { BATCHES, WHATSAPP_CHANNEL_URL, COURSE_FEE_DISPLAY } from '../App';
import { useCashfreePayment } from '../hooks/useCashfreePayment';

interface MobileStickyCTAProps {
  selectedBatch: typeof BATCHES[0] | null;
}

const MobileStickyCTA = ({ selectedBatch }: MobileStickyCTAProps) => {
  const whatsappMsg = encodeURIComponent('Hi, I am interested in the 7 Days 7 Skills course for ₹699. Please share the details.');
  const whatsappChatUrl = `https://wa.me/917207870120?text=${whatsappMsg}`;
  const payment = useCashfreePayment({ selectedBatch });
  const [showMobileForm, setShowMobileForm] = useState(false);

  const handlePayClick = () => {
    setShowMobileForm(true);
    payment.openForm();
  };

  const handleClose = () => {
    setShowMobileForm(false);
    payment.closeForm();
  };

  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="md:hidden mobile-sticky"
      >
        <div className="flex items-center gap-2">
          {/* Pay Button — opens Cashfree checkout form */}
          <button
            onClick={handlePayClick}
            className="flex-1 flex items-center justify-center gap-1.5 py-3.5 rounded-xl font-extrabold text-black text-sm transition-all active:scale-95 cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
              boxShadow: '0 4px 20px rgba(245,158,11,0.4)',
            }}
          >
            <span>PAY {COURSE_FEE_DISPLAY}</span>
          </button>

          {/* WhatsApp Channel Button */}
          <a
            href={WHATSAPP_CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-3.5 rounded-xl font-extrabold text-white text-sm transition-all active:scale-95"
            style={{
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
            }}
          >
            <span>📢</span>
            <span>JOIN WHATSAPP</span>
          </a>

          {/* Chat Icon */}
          <a
            href={whatsappChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center text-white text-lg transition-all active:scale-95"
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
            title="WhatsApp Chat"
          >
            💬
          </a>
        </div>

        {selectedBatch && (
          <div className="mt-2 text-center">
            <span className="text-xs text-gray-500">
              Selected: <span className="text-amber-400 font-semibold">{selectedBatch.label} — {selectedBatch.time}</span>
            </span>
          </div>
        )}
      </motion.div>

      {/* Mobile Payment Form Overlay */}
      <AnimatePresence>
        {showMobileForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] flex items-end sm:items-center justify-center"
            onClick={e => { if (e.target === e.currentTarget) handleClose(); }}
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              className="glass rounded-t-3xl sm:rounded-3xl p-6 w-full sm:max-w-md relative"
              style={{
                border: '1px solid rgba(245,158,11,0.25)',
                boxShadow: '0 -8px 40px rgba(0,0,0,0.4)',
              }}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              <div className="text-center mb-5">
                <div className="text-sm font-black tracking-widest text-gray-400 mb-1">SECURE CHECKOUT</div>
                <div className="text-3xl font-black gradient-text-gold">{COURSE_FEE_DISPLAY}</div>
              </div>

              {payment.status === 'success' ? (
                <div className="text-center py-4">
                  <div className="text-4xl mb-2">🎉</div>
                  <p className="text-green-300 font-bold text-lg">Payment Successful!</p>
                  <p className="text-xs text-gray-500 mb-3">Order: {payment.paidOrderId}</p>
                  <button onClick={handleClose} className="btn-gold w-full py-3 font-bold cursor-pointer">
                    DONE
                  </button>
                </div>
              ) : payment.status === 'failed' ? (
                <div className="text-center py-4">
                  <AlertCircle size={36} className="text-red-400 mx-auto mb-2" />
                  <p className="text-red-300 font-bold mb-2">Payment Not Completed</p>
                  <p className="text-xs text-gray-400 mb-4">{payment.errorMessage}</p>
                  <button onClick={payment.retry} className="btn-gold w-full py-3 font-bold cursor-pointer">
                    🔄 TRY AGAIN
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-3 mb-4">
                    <div className="relative">
                      <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="text"
                        placeholder="Full Name *"
                        value={payment.customerDetails.name}
                        onChange={e => payment.updateCustomer('name', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-amber-400/50 focus:outline-none transition-colors"
                        autoFocus
                      />
                    </div>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="tel"
                        placeholder="Mobile Number (10 digits) *"
                        value={payment.customerDetails.phone}
                        onChange={e => payment.updateCustomer('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-amber-400/50 focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="relative">
                      <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input
                        type="email"
                        placeholder="Email (optional)"
                        value={payment.customerDetails.email}
                        onChange={e => payment.updateCustomer('email', e.target.value)}
                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-amber-400/50 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {payment.errorMessage && (
                    <div className="flex items-center gap-2 text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-xl px-3 py-2 mb-3">
                      <AlertCircle size={14} />
                      {payment.errorMessage}
                    </div>
                  )}

                  <button
                    onClick={payment.initiatePayment}
                    disabled={payment.status === 'processing'}
                    className="btn-gold w-full text-center font-extrabold text-base py-4 cursor-pointer disabled:opacity-50"
                  >
                    {payment.status === 'processing' ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 size={18} className="animate-spin" />
                        PROCESSING...
                      </span>
                    ) : (
                      `PAY ${COURSE_FEE_DISPLAY} SECURELY`
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-3">
                    <Shield size={12} />
                    <span>Secured by Cashfree</span>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileStickyCTA;
