import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { BATCHES, WHATSAPP_CHANNEL_URL, COURSE_FEE_DISPLAY, START_DATE } from '../App';

interface CourseOfferProps {
  selectedBatch: typeof BATCHES[0] | null;
  onBatchSelect: (batch: typeof BATCHES[0]) => void;
}

const CourseOffer = ({ selectedBatch, onBatchSelect }: CourseOfferProps) => {
  const [ref, inView] = useInView(0.1);
  const whatsappMsg = encodeURIComponent('Hi, I am interested in the 7 Days 7 Skills course for ₹699. Please share the details.');
  const whatsappChatUrl = `https://wa.me/917207870120?text=${whatsappMsg}`;

  return (
    <section id="course-details" className="section-padding relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(139,92,246,0.08) 50%, rgba(245,158,11,0.05) 100%)',
            border: '1px solid rgba(14,165,233,0.2)',
            boxShadow: '0 0 60px rgba(14,165,233,0.1), 0 0 120px rgba(139,92,246,0.06)',
          }}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, #d97706, transparent)' }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }} />

          <div className="relative z-10 p-8 md:p-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-semibold text-amber-300 mb-4">
                🎓 COMPLETE COURSE OFFER
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-2">
                7 DAYS •{' '}
                <span className="gradient-text">7 SKILLS</span>
              </h2>
              <div className="text-6xl md:text-7xl font-black gradient-text-gold my-4">
                {COURSE_FEE_DISPLAY}
              </div>
              <p className="text-gray-300 text-lg font-semibold">
                STARTING: <span className="text-amber-300">{START_DATE}</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {/* Batches */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-sm font-black tracking-widest text-gray-400 mb-4">AVAILABLE BATCHES</h3>
                <div className="space-y-3">
                  {BATCHES.map(batch => (
                    <button
                      key={batch.id}
                      onClick={() => onBatchSelect(batch)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                        selectedBatch?.id === batch.id
                          ? 'bg-amber-500/20 border border-blue-400/60 text-amber-300'
                          : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-amber-500/10 hover:border-blue-500/30'
                      }`}
                    >
                      <span className="font-black">{batch.label}</span>
                      <span>{batch.time}</span>
                      {selectedBatch?.id === batch.id && <span className="text-green-400">✓</span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Course includes */}
              <div className="glass rounded-2xl p-6">
                <h3 className="text-sm font-black tracking-widest text-gray-400 mb-4">WHAT'S INCLUDED</h3>
                <ul className="space-y-3">
                  {[
                    { icon: '⏱', text: '90-Minute Live Sessions' },
                    { icon: '👥', text: 'Only 15 Members Per Batch' },
                    { icon: '📹', text: 'Lifetime Access to Recordings' },
                    { icon: '🎯', text: '7 Practical AI & Digital Skills' },
                    { icon: '💼', text: 'Freelancing & Portfolio Guidance' },
                    { icon: '🏛️', text: 'Udyam Registered • Govt. of India' },
                  ].map(item => (
                    <li key={item.text} className="flex items-center gap-3 text-sm text-gray-300">
                      <span className="text-lg">{item.icon}</span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#payment" className="btn-gold text-center font-extrabold">
                💳 PAY {COURSE_FEE_DISPLAY} VIA UPI
              </a>
              <a
                href={WHATSAPP_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-center font-extrabold"
              >
                📢 JOIN WHATSAPP CHANNEL
              </a>
              <a
                href={whatsappChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-center font-extrabold"
              >
                💬 WHATSAPP FOR DETAILS
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseOffer;
