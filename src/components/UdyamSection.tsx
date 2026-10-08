import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const UdyamSection = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section className="py-12 px-4 relative">
      <div className="max-w-3xl mx-auto">
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 glass rounded-3xl p-8"
          style={{
            border: '1px solid rgba(245,158,11,0.2)',
            background: 'linear-gradient(135deg, rgba(245,158,11,0.04) 0%, rgba(255,255,255,0.02) 100%)',
          }}
        >
          {/* Left badge */}
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, rgba(245,158,11,0.2), rgba(245,158,11,0.05))',
                border: '2px solid rgba(245,158,11,0.3)',
              }}
            >
              🏛️
            </div>
            <div>
              <div className="text-xs font-black tracking-[0.2em] text-yellow-400 mb-1">GOVERNMENT OF INDIA</div>
              <div className="text-xl md:text-2xl font-black text-white">UDYAM REGISTERED</div>
              <div className="text-xs text-gray-400 mt-1">Ministry of Micro, Small & Medium Enterprises</div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-16 bg-white/10" />
          <div className="sm:hidden w-full h-px bg-white/10" />

          {/* Right info */}
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-green-400">VERIFIED & REGISTERED</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              MF Education & Careers is officially registered under the Udyam Registration scheme by the Government of India.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UdyamSection;
