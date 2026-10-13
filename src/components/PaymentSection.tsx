import { motion } from 'framer-motion';
import { ExternalLink, CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { BATCHES, WHATSAPP_CHANNEL_URL, START_DATE, COURSE_FEE_DISPLAY } from '../App';

interface PaymentSectionProps {
  selectedBatch: typeof BATCHES[0] | null;
}

const PaymentSection = ({ selectedBatch }: PaymentSectionProps) => {
  const [ref, inView] = useInView(0.1);

  const batchMsg = selectedBatch
    ? `${selectedBatch.label} — ${selectedBatch.time}`
    : '[Please select a batch]';

  const confirmationMsg = encodeURIComponent(
    `Hi, I have paid ₹699 for the 7 Days 7 Skills course via UPI. I selected ${batchMsg}, starting 12th October. Please confirm my enrollment.`
  );
  const confirmationUrl = `https://wa.me/917207870120?text=${confirmationMsg}`;

  return (
    <section id="payment" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(245,158,11,0.06) 0%, transparent 70%)',
        }}
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
            SCAN & PAY <span className="gradient-text-gold">{COURSE_FEE_DISPLAY}</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg">
            Scan using Google Pay, PhonePe or any UPI app.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {/* QR Code Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between"
            style={{
              border: '1px solid rgba(245,158,11,0.3)',
              boxShadow: '0 0 40px rgba(245,158,11,0.1)',
            }}
          >
            <div
              className="absolute top-0 right-0 w-40 h-40 opacity-10 blur-3xl pointer-events-none rounded-full"
              style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }}
            />

            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Fee Header */}
              <div className="mb-4">
                <div className="text-xs font-black tracking-widest text-gray-400 mb-1">COURSE FEE</div>
                <div className="text-5xl md:text-6xl font-black gradient-text-gold">{COURSE_FEE_DISPLAY}</div>
                <div className="text-xs text-gray-400 mt-1">Complete 7-Day Course</div>
              </div>

              {/* QR Image Container */}
              <div className="w-full max-w-[280px] sm:max-w-[320px] bg-white rounded-3xl p-3 sm:p-4 shadow-2xl border-2 border-amber-400/40 my-2 transition-transform hover:scale-[1.02] duration-300">
                <img
                  src="/upi-qr.png"
                  alt="UPI QR Code - Scan & Pay ₹699"
                  className="w-full h-auto object-contain rounded-2xl block select-none"
                  loading="eager"
                />
              </div>

              {/* Instructions */}
              <p className="text-sm font-semibold text-amber-300 mt-3">
                Scan using Google Pay, PhonePe or any UPI app.
              </p>
              <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                <span>UPI ID:</span>
                <span className="font-mono text-amber-400 font-semibold select-all">mfskils.co@okicici</span>
              </div>
            </div>
          </motion.div>

          {/* Confirmation & Batch Details Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="glass rounded-3xl p-6 md:p-8 relative overflow-hidden flex flex-col justify-between"
            style={{
              border: '1px solid rgba(37,211,102,0.25)',
              boxShadow: '0 0 40px rgba(37,211,102,0.06)',
            }}
          >
            <div
              className="absolute top-0 left-0 w-40 h-40 opacity-10 blur-3xl pointer-events-none rounded-full"
              style={{ background: 'radial-gradient(circle, #25D366, transparent)' }}
            />

            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                {/* Header */}
                <div className="text-center mb-5">
                  <div className="text-4xl mb-2">✅</div>
                  <h3 className="text-2xl font-black text-white mb-1">
                    AFTER SCANNING & PAYING
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Confirm your enrollment on WhatsApp to complete your registration.
                  </p>
                </div>

                {/* Selected Batch */}
                <div className="glass rounded-2xl p-4 mb-4">
                  <div className="text-xs font-black tracking-widest text-gray-400 mb-2">
                    SELECTED BATCH
                  </div>
                  {selectedBatch ? (
                    <div>
                      <div className="text-white font-bold">{selectedBatch.label}</div>
                      <div className="text-amber-300 font-semibold">{selectedBatch.time}</div>
                      <div className="text-xs text-gray-400 mt-1">📅 {START_DATE}</div>
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

                {/* Message preview */}
                <div className="glass rounded-2xl p-4 mb-5">
                  <div className="text-xs font-black tracking-widest text-gray-400 mb-2">
                    YOUR CONFIRMATION MESSAGE (AUTO-FILLED)
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed italic">
                    "Hi, I have paid ₹699 for the 7 Days 7 Skills course via UPI. I selected{' '}
                    <span className="text-amber-300 font-semibold">{batchMsg}</span>, starting 12th October. Please confirm my enrollment."
                  </p>
                </div>
              </div>

              <div>
                <a
                  href={confirmationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full text-center block font-extrabold text-base mb-3 shadow-lg"
                >
                  ✅ WHATSAPP FOR CONFIRMATION
                </a>

                <div className="text-center text-gray-500 text-xs mb-3">— or —</div>

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

                <div className="mt-4 glass rounded-xl p-3">
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-400 text-center">
                    <CheckCircle2 size={14} className="text-amber-400 flex-shrink-0" />
                    <span>Instant confirmation on WhatsApp (+91 7207870120)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
