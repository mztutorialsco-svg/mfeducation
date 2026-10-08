import { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, CheckCircle, ExternalLink } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { BATCHES, WHATSAPP_CHANNEL_URL, COURSE_FEE, COURSE_FEE_DISPLAY, UPI_ID, START_DATE } from '../App';

interface PaymentSectionProps {
  selectedBatch: typeof BATCHES[0] | null;
}

const PaymentSection = ({ selectedBatch }: PaymentSectionProps) => {
  const [ref, inView] = useInView(0.1);
  const [copied, setCopied] = useState(false);

  const batchMsg = selectedBatch
    ? `${selectedBatch.label} — ${selectedBatch.time}`
    : '[Please select a batch]';

  const confirmationMsg = encodeURIComponent(
    `Hi, I have paid ₹699 for the 7 Days 7 Skills course. I selected ${batchMsg}, starting 12th October. Please confirm my enrollment.`
  );
  const confirmationUrl = `https://wa.me/917207870120?text=${confirmationMsg}`;



  const copyUpiId = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const el = document.createElement('textarea');
      el.value = UPI_ID;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

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
          <p className="text-gray-400 text-lg">Secure your spot with a simple UPI payment.</p>
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

              {/* UPI */}
              <div className="glass rounded-2xl p-4 mb-6">
                <div className="text-xs font-black tracking-widest text-gray-500 mb-2">UPI PAYMENT</div>
                <div className="flex items-center justify-between gap-2">
                  <code className="text-sm text-green-300 font-mono break-all flex-1">{UPI_ID}</code>
                  <button
                    onClick={copyUpiId}
                    className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                      copied
                        ? 'bg-green-500/20 text-green-300 border border-green-500/40'
                        : 'bg-white/10 text-gray-300 border border-white/10 hover:bg-white/20'
                    }`}
                  >
                    {copied ? <CheckCircle size={14} /> : <Copy size={14} />}
                    {copied ? 'COPIED!' : 'COPY'}
                  </button>
                </div>
                {copied && (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs text-green-400 mt-2"
                  >
                    ✓ UPI ID Copied to clipboard!
                  </motion.p>
                )}
              </div>

              {/* Pay Button */}
              <a
                href="upi://pay?pa=mfskils.co@okicici&pn=MF%20Education%20%26%20Careers&am=699&cu=INR"
                className="btn-gold w-full text-center block font-extrabold text-lg mb-3 py-4"
              >
                PAY ₹699 VIA UPI
              </a>

              <p className="text-xs text-gray-500 text-center">
                Opens your UPI app (GPay, PhonePe, Paytm, etc.)
              </p>
            </div>
          </motion.div>

          {/* After Payment Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="glass rounded-3xl p-8 relative overflow-hidden"
            style={{
              border: '1px solid rgba(37,211,102,0.2)',
              boxShadow: '0 0 40px rgba(37,211,102,0.06)',
            }}
          >
            <div className="absolute top-0 left-0 w-40 h-40 opacity-10 blur-3xl pointer-events-none rounded-full"
              style={{ background: 'radial-gradient(circle, #25D366, transparent)' }} />

            <div className="relative z-10">
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">✅</div>
                <h3 className="text-2xl font-black text-white mb-2">PAYMENT DONE?</h3>
                <p className="text-gray-400 text-sm">
                  After payment, confirm your enrollment on WhatsApp.
                </p>
              </div>

              {/* Message preview */}
              <div className="glass rounded-2xl p-4 mb-6">
                <div className="text-xs font-black tracking-widest text-gray-500 mb-2">YOUR MESSAGE (AUTO-FILLED)</div>
                <p className="text-sm text-gray-300 leading-relaxed italic">
                  "Hi, I have paid ₹699 for the 7 Days 7 Skills course. I selected{' '}
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

              <div className="mt-6 glass rounded-xl p-3">
                <p className="text-xs text-gray-500 text-center leading-relaxed">
                  ℹ️ Payment is not automatically verified. Please send the WhatsApp confirmation after paying.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
