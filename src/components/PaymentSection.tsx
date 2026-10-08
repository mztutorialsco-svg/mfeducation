import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Shield, Loader2, AlertCircle, CheckCircle2, X, User, Phone, Mail } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { useCashfreePayment } from '../hooks/useCashfreePayment';
import { BATCHES, WHATSAPP_CHANNEL_URL, START_DATE, COURSE_FEE_DISPLAY } from '../App';

interface PaymentSectionProps {
  selectedBatch: typeof BATCHES[0] | null;
}

const PaymentSection = ({ selectedBatch }: PaymentSectionProps) => {
  const [ref, inView] = useInView(0.1);
  const payment = useCashfreePayment({ selectedBatch });

  const batchMsg = selectedBatch
    ? `${selectedBatch.label} — ${selectedBatch.time}`
    : '[Please select a batch]';

  const confirmationMsg = encodeURIComponent(
    `Hi, I have paid ₹699 for the 7 Days 7 Skills course (Order: ${payment.paidOrderId || 'N/A'}). I selected ${batchMsg}, starting 12th October. Please confirm my enrollment.`
  );
  const confirmationUrl = `https://wa.me/917207870120?text=${confirmationMsg}`;

  return (
    <section id="payment" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(245,158,11,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
            PAY &{' '}
            <span className="gradient-text-gold">JOIN</span>
          </h2>
          <p className="text-gray-400 text-lg">Secure checkout powered by Cashfree Payment Gateway.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Payment Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass rounded-3xl p-8 relative overflow-hidden"
            style={{
              border: '1px solid rgba(245,158,11,0.25)',
              boxShadow: '0 0 40px rgba(245,158,11,0.08)',
            }}
          >
            <div className="absolute top-0 right-0 w-40 h-40 opacity-10 blur-3xl pointer-events-none rounded-full"
              style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }} />

            <div className="relative z-10">
              {/* Fee */}
              <div className="text-center mb-6">
                <div className="text-sm font-black tracking-widest text-gray-400 mb-1">COURSE FEE</div>
                <div className="text-6xl font-black gradient-text-gold">{COURSE_FEE_DISPLAY}</div>
                <div className="text-xs text-gray-500 mt-1">Complete 7-Day Course</div>
              </div>

              {/* Selected Batch */}
              <div className="glass rounded-2xl p-4 mb-5">
                <div className="text-xs font-black tracking-widest text-gray-500 mb-2">SELECTED BATCH</div>
                {selectedBatch ? (
                  <div>
                    <div className="text-white font-bold">{selectedBatch.label}</div>
                    <div className="text-amber-300 font-semibold">{selectedBatch.time}</div>
                    <div className="text-xs text-gray-500 mt-1">
                      📅 {START_DATE}
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="text-yellow-400 font-semibold text-sm">⚠ No batch selected</div>
                    <a href="#batches" className="text-xs text-amber-400 underline mt-1 block">
                      → Click here to select a batch
                    </a>
                  </div>
                )}
              </div>

              {/* Payment Status Display */}
              <AnimatePresence mode="wait">
                {payment.status === 'success' ? (
                  <PaymentSuccess orderId={payment.paidOrderId} />
                ) : payment.status === 'failed' ? (
                  <PaymentFailed message={payment.errorMessage} onRetry={payment.retry} />
                ) : payment.showForm ? (
                  <PaymentForm payment={payment} />
                ) : (
                  <motion.div
                    key="pay-btn"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {/* Pay Button */}
                    <button
                      onClick={payment.openForm}
                      className="btn-gold w-full text-center block font-extrabold text-lg mb-3 py-4 cursor-pointer"
                    >
                      PAY {COURSE_FEE_DISPLAY} — SECURE CHECKOUT
                    </button>

                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                      <Shield size={12} />
                      <span>Secured by Cashfree • UPI, Cards, Wallets & More</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* After Payment Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="glass rounded-3xl p-8 relative overflow-hidden"
            style={{
              border: `1px solid ${payment.status === 'success' ? 'rgba(34,197,94,0.4)' : 'rgba(37,211,102,0.2)'}`,
              boxShadow: `0 0 40px ${payment.status === 'success' ? 'rgba(34,197,94,0.15)' : 'rgba(37,211,102,0.06)'}`,
            }}
          >
            <div className="absolute top-0 left-0 w-40 h-40 opacity-10 blur-3xl pointer-events-none rounded-full"
              style={{ background: 'radial-gradient(circle, #25D366, transparent)' }} />

            <div className="relative z-10">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{payment.status === 'success' ? '🎉' : '✅'}</div>
                <h3 className="text-2xl font-black text-white mb-2">
                  {payment.status === 'success' ? 'PAYMENT SUCCESSFUL!' : 'PAYMENT DONE?'}
                </h3>
                <p className="text-gray-400 text-sm">
                  {payment.status === 'success'
                    ? 'Confirm your enrollment on WhatsApp to complete registration.'
                    : 'After payment, confirm your enrollment on WhatsApp.'}
                </p>
              </div>

              {/* Message preview */}
              <div className="glass rounded-2xl p-4 mb-6">
                <div className="text-xs font-black tracking-widest text-gray-500 mb-2">YOUR MESSAGE (AUTO-FILLED)</div>
                <p className="text-sm text-gray-300 leading-relaxed italic">
                  "Hi, I have paid ₹699 for the 7 Days 7 Skills course{payment.paidOrderId ? ` (Order: ${payment.paidOrderId})` : ''}. I selected{' '}
                  <span className="text-amber-300 font-semibold">{batchMsg}</span>, starting 12th October. Please confirm my enrollment."
                </p>
              </div>

              <a
                href={confirmationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full text-center block font-extrabold text-base mb-4"
              >
                ✅ WHATSAPP FOR CONFIRMATION
              </a>

              <div className="text-center text-gray-500 text-sm mb-4">— or —</div>

              <a
                href={WHATSAPP_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white transition-all duration-300 border border-white/10 hover:bg-white/5"
              >
                <span>📢</span>
                JOIN WHATSAPP CHANNEL
                <ExternalLink size={14} />
              </a>

              {payment.status !== 'success' && (
                <div className="mt-6 glass rounded-xl p-3">
                  <p className="text-xs text-gray-500 text-center leading-relaxed">
                    ℹ️ After paying via Cashfree, please send the WhatsApp confirmation to complete enrollment.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Customer Details Modal Overlay */}
      <AnimatePresence>
        {payment.showForm && payment.status === 'collecting' && (
          <PaymentFormOverlay payment={payment} />
        )}
      </AnimatePresence>
    </section>
  );
};

/* ─── Inline Sub-components ─── */

function PaymentForm({ payment }: { payment: ReturnType<typeof useCashfreePayment> }) {
  return (
    <motion.div
      key="form"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
      {payment.status === 'processing' ? (
        <div className="flex flex-col items-center gap-3 py-6">
          <Loader2 size={32} className="text-amber-400 animate-spin" />
          <p className="text-gray-300 font-semibold">Opening secure checkout...</p>
          <p className="text-xs text-gray-500">Please do not close this page.</p>
        </div>
      ) : (
        <div className="space-y-3 mb-4">
          <div className="relative">
            <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Full Name *"
              value={payment.customerDetails.name}
              onChange={e => payment.updateCustomer('name', e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-amber-400/50 focus:outline-none transition-colors"
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

          {payment.errorMessage && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-xl px-3 py-2"
            >
              <AlertCircle size={14} />
              {payment.errorMessage}
            </motion.div>
          )}

          <button
            onClick={payment.initiatePayment}
            className="btn-gold w-full text-center font-extrabold text-lg py-4 cursor-pointer"
          >
            PROCEED TO PAY {COURSE_FEE_DISPLAY}
          </button>
          <button
            onClick={payment.closeForm}
            className="w-full text-center text-xs text-gray-500 hover:text-gray-300 transition-colors py-1 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      )}
    </motion.div>
  );
}

function PaymentFormOverlay({ payment }: { payment: ReturnType<typeof useCashfreePayment> }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={e => { if (e.target === e.currentTarget) payment.closeForm(); }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="glass rounded-3xl p-8 w-full max-w-md relative"
        style={{
          border: '1px solid rgba(245,158,11,0.25)',
          boxShadow: '0 0 60px rgba(245,158,11,0.1)',
        }}
      >
        <button
          onClick={payment.closeForm}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-6">
          <div className="text-sm font-black tracking-widest text-gray-400 mb-1">SECURE CHECKOUT</div>
          <div className="text-4xl font-black gradient-text-gold">{COURSE_FEE_DISPLAY}</div>
          <div className="text-xs text-gray-500 mt-1">7 Days • 7 Skills Course</div>
        </div>

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
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-red-400 text-xs bg-red-500/10 border border-red-500/20 rounded-xl px-3 py-2 mb-3"
          >
            <AlertCircle size={14} />
            {payment.errorMessage}
          </motion.div>
        )}

        <button
          onClick={payment.initiatePayment}
          disabled={payment.status === 'processing'}
          className="btn-gold w-full text-center font-extrabold text-lg py-4 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {payment.status === 'processing' ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 size={20} className="animate-spin" />
              PROCESSING...
            </span>
          ) : (
            `PAY ${COURSE_FEE_DISPLAY} SECURELY`
          )}
        </button>

        <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-3">
          <Shield size={12} />
          <span>Secured by Cashfree • UPI, Cards, Wallets & More</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PaymentSuccess({ orderId }: { orderId: string }) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="text-center py-4"
    >
      <CheckCircle2 size={48} className="text-green-400 mx-auto mb-3" />
      <p className="text-green-300 font-bold text-lg mb-1">Payment Successful!</p>
      <p className="text-xs text-gray-500 mb-2">Order ID: {orderId}</p>
      <p className="text-sm text-gray-400">
        Now confirm your enrollment via WhatsApp →
      </p>
    </motion.div>
  );
}

function PaymentFailed({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <motion.div
      key="failed"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="text-center py-4"
    >
      <AlertCircle size={40} className="text-red-400 mx-auto mb-3" />
      <p className="text-red-300 font-bold mb-2">Payment Not Completed</p>
      <p className="text-xs text-gray-400 mb-4 px-4">{message}</p>
      <button
        onClick={onRetry}
        className="btn-gold w-full text-center font-extrabold text-base py-3 cursor-pointer"
      >
        🔄 TRY AGAIN
      </button>
    </motion.div>
  );
}

export default PaymentSection;
