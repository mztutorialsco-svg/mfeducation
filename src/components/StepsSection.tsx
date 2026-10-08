import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const steps = [
  {
    number: '01',
    title: 'LEARN',
    icon: '📚',
    desc: 'Understand AI and digital tools through expert-led, beginner-friendly sessions.',
    color: 'from-blue-500 to-cyan-500',
    glowColor: 'rgba(14,165,233,0.4)',
  },
  {
    number: '02',
    title: 'PRACTICE',
    icon: '💪',
    desc: 'Work on practical tasks and exercises designed for real-world application.',
    color: 'from-purple-500 to-pink-500',
    glowColor: 'rgba(139,92,246,0.4)',
  },
  {
    number: '03',
    title: 'BUILD',
    icon: '🏗️',
    desc: 'Create real projects and build a portfolio that showcases your skills.',
    color: 'from-amber-500 to-orange-500',
    glowColor: 'rgba(245,158,11,0.4)',
  },
  {
    number: '04',
    title: 'EARN',
    icon: '💰',
    desc: 'Use your skills for freelancing, client projects, and online opportunities.',
    color: 'from-green-500 to-emerald-500',
    glowColor: 'rgba(34,197,94,0.4)',
  },
];

const StepsSection = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="steps" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(245,158,11,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
            YOUR JOURNEY:{' '}
            <span className="gradient-text">4 STEPS</span>
          </h2>
          <p className="text-gray-400 text-lg">From zero to earning — step by step.</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 z-0"
            style={{ background: 'linear-gradient(90deg, rgba(14,165,233,0.8), rgba(139,92,246,0.8), rgba(245,158,11,0.8), rgba(34,197,94,0.8))' }}>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="h-full origin-left"
              style={{ background: 'linear-gradient(90deg, rgba(14,165,233,0.8), rgba(139,92,246,0.8), rgba(245,158,11,0.8), rgba(34,197,94,0.8))' }}
            />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="text-center group"
              >
                {/* Number circle */}
                <div className="relative inline-block mb-6">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-black text-xl mx-auto transition-all duration-300 group-hover:scale-110`}
                    style={{ boxShadow: `0 0 0 4px rgba(255,255,255,0.05), 0 0 20px ${step.glowColor}` }}
                  >
                    {step.icon}
                  </div>
                  <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-black text-xs`}>
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="card p-5">
                  <h3 className={`text-2xl font-black mb-2 bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
