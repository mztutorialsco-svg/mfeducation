import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const skills = [
  {
    number: '01',
    name: 'GOOGLE FLOW',
    icon: '🎬',
    color: 'from-blue-500 to-cyan-500',
    glow: 'rgba(14,165,233,0.3)',
    points: ['Create cinematic AI videos', 'Create advertisements', 'Create reels'],
    desc: 'AI-powered video creation',
  },
  {
    number: '02',
    name: 'GOOGLE ANTIGRAVITY',
    icon: '🤖',
    color: 'from-purple-500 to-indigo-500',
    glow: 'rgba(139,92,246,0.3)',
    points: ['Build websites', 'Build apps', 'Work with AI agents'],
    desc: 'AI-first development platform',
  },
  {
    number: '03',
    name: 'CHATGPT',
    icon: '💬',
    color: 'from-green-500 to-teal-500',
    glow: 'rgba(34,197,94,0.3)',
    points: ['Prompting', 'Content creation', 'Research', 'Productivity'],
    desc: 'AI writing & productivity',
  },
  {
    number: '04',
    name: 'INSTAGRAM',
    icon: '📸',
    color: 'from-pink-500 to-rose-500',
    glow: 'rgba(236,72,153,0.3)',
    points: ['Reels', 'Content strategy', 'Branding', 'Audience growth'],
    desc: 'Social media mastery',
  },
  {
    number: '05',
    name: 'YOUTUBE',
    icon: '▶️',
    color: 'from-red-500 to-orange-500',
    glow: 'rgba(239,68,68,0.3)',
    points: ['Channel setup', 'Video creation', 'Thumbnails', 'Monetization basics'],
    desc: 'Video content & channel growth',
  },
  {
    number: '06',
    name: 'GITHUB',
    icon: '🐙',
    color: 'from-gray-400 to-gray-600',
    glow: 'rgba(156,163,175,0.3)',
    points: ['Version control', 'Project management', 'Portfolio building'],
    desc: 'Developer workflow & portfolio',
  },
  {
    number: '07',
    name: 'VERCEL',
    icon: '🚀',
    color: 'from-slate-400 to-slate-200',
    glow: 'rgba(148,163,184,0.3)',
    points: ['Deploy websites', 'Deploy apps', 'Go live', 'Deliver projects to clients'],
    desc: 'Deploy & go live instantly',
  },
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const [ref, inView] = useInView(0.1);

  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="skill-card p-6 group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="text-4xl mb-2">{skill.icon}</div>
          <div className="text-xs font-bold tracking-widest text-gray-500 mb-1">DAY {skill.number}</div>
          <h3 className="font-black text-white text-lg leading-tight">{skill.name}</h3>
          <p className="text-xs text-gray-500 mt-1">{skill.desc}</p>
        </div>
        <div
          className={`text-2xl font-black bg-gradient-to-br ${skill.color} bg-clip-text text-transparent opacity-30 group-hover:opacity-100 transition-all duration-500`}
        >
          {skill.number}
        </div>
      </div>

      {/* Divider */}
      <div className={`h-0.5 w-full rounded-full bg-gradient-to-r ${skill.color} mb-4 opacity-30 group-hover:opacity-70 transition-opacity duration-500`} />

      {/* Points */}
      <ul className="space-y-2">
        {skill.points.map((point) => (
          <li key={point} className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
            <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br ${skill.color}`} />
            {point}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const SkillsSection = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="skills" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(139,92,246,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-semibold text-yellow-300 mb-4">
            7 SKILLS IN 7 DAYS
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            MASTER THESE{' '}
            <span className="gradient-text">7 SKILLS</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Each day focuses on one powerful tool — practical, hands-on, and career-ready.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
