import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { BATCHES, WHATSAPP_CHANNEL_URL, COURSE_FEE_DISPLAY, UPI_ID, COURSE_FEE } from '../App';

interface FinalCTAProps {
  selectedBatch: typeof BATCHES[0] | null;
}

const FinalCTA = ({ selectedBatch }: FinalCTAProps) => {
  const [ref, inView] = useInView(0.1);
  const whatsappMsg = encodeURIComponent('Hi, I am interested in the 7 Days 7 Skills course for ₹699. Please share the details.');
  const whatsappChatUrl = `https://wa.me/917207870120?text=${whatsappMsg}`;


  return (
    <section className="section-padding relative overflow-hidden">
      {/* Dramatic background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(14,165,233,0.12) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)',
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.5), rgba(139,92,246,0.5), transparent)' }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Headline */}
          <div className="inline-flex items-center gap-2 glass px-5 py-2 rounded-full text-sm font-semibold text-amber-300 mb-6">
            🚀 LIMITED SEATS — DON'T MISS OUT
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
            READY TO LEARN
            <br />
            <span className="gradient-text">7 SKILLS?</span>
          </h2>

          {/* Tagline */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {['LEARN', 'PRACTICE', 'BUILD', 'EARN'].map((word, i) => (
              <span key={word} className="flex items-center gap-2">
                <span className="font-black text-lg md:text-xl tracking-widest gradient-text">{word}</span>
                {i < 3 && <span className="text-amber-400 text-xl">•</span>}
              </span>
            ))}
          </div>

          {/* Info strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-6 mb-10"
          >
            <div className="glass px-6 py-4 rounded-2xl text-center">
              <div className="text-4xl font-black gradient-text-gold">{COURSE_FEE_DISPLAY}</div>
              <div className="text-xs text-gray-500">Complete Course</div>
            </div>
            <div className="glass px-6 py-4 rounded-2xl text-center">
              <div className="text-xl font-bold text-white">12TH OCTOBER</div>
              <div className="text-sm text-amber-300 font-semibold">MONDAY</div>
            </div>
            <div className="glass px-6 py-4 rounded-2xl text-center">
              <div className="text-xl font-bold text-white">ONLY 15</div>
              <div className="text-sm text-yellow-300 font-semibold">MEMBERS PER BATCH</div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="upi://pay?pa=mfskils.co@okicici&pn=MF%20Education%20%26%20Careers&am=699.00&cu=INR"
              className="btn-gold text-center font-extrabold text-lg px-10 py-5"
              style={{ boxShadow: '0 8px 40px rgba(245,158,11,0.4)' }}
            >
              PAY ₹699 VIA UPI
            </a>
            <a
              href={WHATSAPP_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-center font-extrabold text-lg px-10 py-5"
            >
              📢 JOIN WHATSAPP CHANNEL
            </a>
            <a
              href={whatsappChatUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-center font-extrabold text-lg px-10 py-5"
            >
              💬 WHATSAPP FOR DETAILS
            </a>
          </motion.div>

          {selectedBatch && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-5 text-sm text-gray-400"
            >
              Your selected batch: <span className="text-amber-300 font-bold">{selectedBatch.label} — {selectedBatch.time}</span>
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
