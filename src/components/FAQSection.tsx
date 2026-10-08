import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const faqs = [
  {
    q: 'What is the course fee?',
    a: '₹699 for the complete 7-day course.',
  },
  {
    q: 'When does the batch start?',
    a: '12th October, Monday.',
  },
  {
    q: 'What are the batch timings?',
    a: '4 batches are available:\n• 2:00 PM – 3:30 PM\n• 3:45 PM – 5:15 PM\n• 5:30 PM – 7:00 PM\n• 9:30 PM – 11:00 PM',
  },
  {
    q: 'How long is each batch?',
    a: 'Each batch is 90 minutes.',
  },
  {
    q: 'How many members are there in each batch?',
    a: 'Only 15 members per batch — ensuring personal attention.',
  },
  {
    q: 'What skills will I learn?',
    a: 'Google Flow, Google Antigravity, ChatGPT, Instagram, YouTube, GitHub, and Vercel.',
  },
  {
    q: 'Will I get access to recordings?',
    a: 'Yes. Lifetime access to recordings is included with the course.',
  },
  {
    q: 'How can I pay?',
    a: 'You can pay ₹699 securely through our Cashfree checkout. Click the "PAY ₹699" button and enter your details. You can pay using UPI, debit/credit cards, wallets, and more.',
  },
  {
    q: 'How can I join the WhatsApp Channel?',
    a: 'Click the "JOIN WHATSAPP CHANNEL" button anywhere on the page to open the official WhatsApp Channel directly.',
  },
  {
    q: 'How can I contact you?',
    a: 'WhatsApp us at 7207870120. Click the "WHATSAPP FOR DETAILS" button to start a chat.',
  },
];

const FAQItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => {
  const [open, setOpen] = useState(false);
  const [ref, inView] = useInView(0.1);

  return (
    <motion.div
      ref={ref as any}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="faq-item"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/2 transition-colors"
      >
        <span className={`font-semibold text-sm md:text-base transition-colors ${open ? 'text-amber-300' : 'text-white'}`}>
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 ml-4 ${open ? 'text-amber-400' : 'text-gray-500'}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-3">
              {faq.a.split('\n').map((line, i) => (
                <p key={i} className={i > 0 ? 'mt-1' : ''}>
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="faq" className="section-padding relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(14,165,233,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          ref={ref as any}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-3">
            FREQUENTLY ASKED{' '}
            <span className="gradient-text">QUESTIONS</span>
          </h2>
          <p className="text-gray-400 text-lg">Everything you need to know.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
