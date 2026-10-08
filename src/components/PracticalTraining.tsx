import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const points = [
  'Step-by-step guidance for beginners',
  'Real projects and hands-on practice',
  'Learn how to use skills for freelancing',
  'Learn how to find clients',
  'Resume & portfolio building',
  'Personal attention in a small batch',
];

const PracticalTraining = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="training" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 30% 50%, rgba(34,197,94,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            ref={ref as any}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-semibold text-green-300 mb-5">
              💡 PRACTICAL FIRST APPROACH
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              PRACTICAL &{' '}
              <span className="gradient-text">HANDS-ON</span>
              <br />TRAINING
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Every session is designed for action. No theory overload — just practical skills you can use immediately.
            </p>

            <ul className="space-y-4">
              {points.map((point, i) => (
                <motion.li
                  key={point}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-green-400 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-200 font-medium">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div
              className="glass rounded-3xl p-8 relative overflow-hidden"
              style={{ border: '1px solid rgba(34,197,94,0.2)', boxShadow: '0 0 40px rgba(34,197,94,0.08)' }}
            >
              {/* Background decoration */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 blur-2xl"
                style={{ background: 'radial-gradient(circle, #22c55e, transparent)' }} />

              <div className="relative z-10">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-black text-white mb-4">Learn. Apply. Grow.</h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: '👨‍💻', label: '7 Days', sub: 'Practical Sessions' },
                    { icon: '🕐', label: '90 Min', sub: 'Per Session' },
                    { icon: '👥', label: 'Only 15', sub: 'Members Per Batch' },
                    { icon: '📹', label: 'Lifetime', sub: 'Recording Access' },
                  ].map(item => (
                    <div key={item.label} className="glass rounded-xl p-4 text-center">
                      <div className="text-2xl mb-1">{item.icon}</div>
                      <div className="text-sm font-bold text-white">{item.label}</div>
                      <div className="text-xs text-gray-500">{item.sub}</div>
                    </div>
                  ))}
                </div>

                <div className="glass rounded-xl p-4 text-center"
                  style={{ border: '1px solid rgba(245,158,11,0.2)', background: 'rgba(245,158,11,0.05)' }}>
                  <div className="text-sm font-bold text-yellow-400 mb-1">🏛️ UDYAM REGISTERED</div>
                  <div className="text-xs text-gray-400">Government of India</div>
                </div>
              </div>
            </div>

            {/* Floating tag */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 glass px-4 py-2 rounded-xl"
              style={{ border: '1px solid rgba(34,197,94,0.4)' }}
            >
              <div className="text-xs font-bold text-green-400">LEARN THESE SKILLS</div>
              <div className="text-xs font-black text-white">GET CLIENTS. START EARNING.</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PracticalTraining;
