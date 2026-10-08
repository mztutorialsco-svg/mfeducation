import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const earningOpportunities = [
  {
    icon: '💼',
    title: 'FREELANCING SERVICES',
    desc: 'Offer your AI and digital skills as a freelancer to clients around the world.',
    color: 'from-blue-500 to-cyan-500',
    border: 'rgba(14,165,233,0.2)',
  },
  {
    icon: '🤝',
    title: 'CLIENT PROJECTS',
    desc: 'Take on real client projects — from website building to content creation.',
    color: 'from-purple-500 to-pink-500',
    border: 'rgba(139,92,246,0.2)',
  },
  {
    icon: '📱',
    title: 'CONTENT CREATION',
    desc: 'Monetize YouTube, Instagram, and other platforms through content and brand deals.',
    color: 'from-red-500 to-orange-500',
    border: 'rgba(239,68,68,0.2)',
  },
  {
    icon: '🤖',
    title: 'AI SERVICES FOR BUSINESSES',
    desc: 'Help businesses integrate AI tools into their workflow and charge for expertise.',
    color: 'from-teal-500 to-green-500',
    border: 'rgba(20,184,166,0.2)',
  },
  {
    icon: '🌐',
    title: 'ONLINE OPPORTUNITIES',
    desc: 'Explore the growing digital economy — there are many avenues to build income online.',
    color: 'from-amber-500 to-yellow-500',
    border: 'rgba(245,158,11,0.2)',
  },
];

const EarningSection = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="earning" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 70% 50%, rgba(245,158,11,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-semibold text-yellow-300 mb-4">
            💰 OPPORTUNITIES AWAIT
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            HOW YOU CAN{' '}
            <span className="gradient-text-gold">EARN</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            These skills open real doors. Here are some of the ways you can start building income:
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {earningOpportunities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card p-6 group"
              style={{ border: `1px solid ${item.border}` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:scale-110`}>
                {item.icon}
              </div>
              <h3 className={`font-black text-sm tracking-wider mb-2 bg-gradient-to-br ${item.color} bg-clip-text text-transparent`}>
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="glass rounded-2xl p-5 text-center max-w-2xl mx-auto"
          style={{ border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-gray-500 text-sm">
            ℹ️ These are potential opportunities based on the skills taught. Actual results depend on individual effort, practice, and market conditions. No specific income is guaranteed.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EarningSection;
