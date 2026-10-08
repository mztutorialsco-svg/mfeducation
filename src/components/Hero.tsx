import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { WHATSAPP_CHANNEL_URL, BATCHES, COURSE_FEE_DISPLAY, START_DATE, BATCH_SIZE } from '../App';

interface HeroProps {
  selectedBatch: typeof BATCHES[0] | null;
  onBatchSelect: (batch: typeof BATCHES[0]) => void;
}

const Hero = ({ selectedBatch, onBatchSelect }: HeroProps) => {
  const whatsappMsg = encodeURIComponent('Hi, I am interested in the 7 Days 7 Skills course for ₹699. Please share the details.');
  const whatsappChatUrl = `https://wa.me/917207870120?text=${whatsappMsg}`;

  const skills = [
    { icon: '🎬', name: 'Google Flow' },
    { icon: '🤖', name: 'Google Antigravity' },
    { icon: '💬', name: 'ChatGPT' },
    { icon: '📸', name: 'Instagram' },
    { icon: '▶️', name: 'YouTube' },
    { icon: '🐙', name: 'GitHub' },
    { icon: '🚀', name: 'Vercel' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(14,165,233,0.12) 0%, rgba(139,92,246,0.08) 40%, transparent 70%), linear-gradient(180deg, #030712 0%, #0a0f1e 50%, #030712 100%)',
      }}
    >
      {/* Animated glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none animate-pulse"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none animate-pulse"
        style={{ background: 'radial-gradient(circle, #d97706, transparent)', animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex justify-center lg:justify-start"
            >
              <img src="/logo.jpg" alt="MF Education & Careers" className="h-32 md:h-40 w-auto rounded-full object-contain shadow-[0_0_30px_rgba(245,158,11,0.2)]" />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-semibold text-amber-300 mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              UDYAM REGISTERED • GOVERNMENT OF INDIA
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-6"
            >
              <span className="gradient-text-hero">7 DAYS.</span>
              <br />
              <span className="gradient-text-hero">7 SKILLS.</span>
              <br />
              <span className="text-white text-4xl md:text-5xl lg:text-5xl">ONE STEP CLOSER</span>
              <br />
              <span className="gradient-text-gold text-4xl md:text-5xl lg:text-5xl">TO EARNING.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Master 7 powerful AI and digital tools through practical, hands-on training.
            </motion.p>

            {/* Key Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <div className="glass px-5 py-3 rounded-2xl text-center">
                <div className="text-3xl md:text-4xl font-black gradient-text-gold">{COURSE_FEE_DISPLAY}</div>
                <div className="text-xs text-gray-400 font-medium">Complete 7-Day Course</div>
              </div>
              <div className="glass px-5 py-3 rounded-2xl text-center">
                <div className="text-lg font-bold text-white">12TH OCTOBER</div>
                <div className="text-sm text-amber-300 font-semibold">MONDAY</div>
              </div>
              <div className="glass px-5 py-3 rounded-2xl text-center">
                <div className="text-lg font-bold text-white">ONLY {BATCH_SIZE}</div>
                <div className="text-sm text-yellow-300 font-semibold">MEMBERS PER BATCH</div>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-2 mb-8"
            >
              {['LEARN', 'PRACTICE', 'BUILD', 'EARN'].map((word, i) => (
                <span key={word} className="flex items-center gap-2">
                  <span className="font-black text-sm md:text-base tracking-widest gradient-text">{word}</span>
                  {i < 3 && <span className="text-amber-400 text-sm">•</span>}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a href="#payment" className="btn-primary text-center text-sm md:text-base font-extrabold">
                🚀 ENROLL NOW • {COURSE_FEE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-center text-sm md:text-base font-extrabold"
              >
                📢 JOIN WHATSAPP CHANNEL
              </a>
              <a
                href={whatsappChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-center text-sm md:text-base font-extrabold"
              >
                💬 WHATSAPP FOR DETAILS
              </a>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Center card */}
              <div className="relative glass rounded-3xl p-8 text-center gradient-border"
                style={{ boxShadow: '0 0 60px rgba(14,165,233,0.15), 0 0 120px rgba(139,92,246,0.08)' }}>
                <div className="text-6xl md:text-7xl font-black mb-3"
                  style={{ background: 'linear-gradient(135deg, #f59e0b, #fbbf24)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  7
                </div>
                <div className="text-xl font-bold text-white mb-1">DAYS • 7 SKILLS</div>
                <div className="text-sm text-gray-400 mb-6">Complete AI & Digital Training</div>

                {/* Skills grid */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  {skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                      className="flex flex-col items-center gap-1 glass rounded-xl p-2"
                    >
                      <span className="text-xl">{skill.icon}</span>
                      <span className="text-xs text-gray-300 leading-tight text-center" style={{ fontSize: '9px' }}>
                        {skill.name.split(' ')[1] || skill.name}
                      </span>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.1 }}
                    className="flex flex-col items-center gap-1 glass rounded-xl p-2"
                  >
                    <span className="text-xl">⚡</span>
                    <span className="text-xs text-gray-300 leading-tight text-center" style={{ fontSize: '9px' }}>
                      +More
                    </span>
                  </motion.div>
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>📅 12th October</span>
                  <span>👥 15 Members</span>
                  <span>🕐 90 Min</span>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass px-3 py-2 rounded-xl text-sm font-bold text-green-400"
                style={{ border: '1px solid rgba(34,197,94,0.3)' }}
              >
                ♾️ Lifetime Access
              </motion.div>
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 glass px-3 py-2 rounded-xl text-sm font-bold text-yellow-400"
                style={{ border: '1px solid rgba(245,158,11,0.3)' }}
              >
                🏛️ Govt. Registered
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center mt-12 gap-2"
        >
          <span className="text-xs text-gray-500">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border-2 border-gray-600 rounded-full flex justify-center pt-1"
          >
            <div className="w-1 h-2 bg-amber-400 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
