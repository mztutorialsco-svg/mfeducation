import { motion } from 'framer-motion';
import { BATCHES, WHATSAPP_CHANNEL_URL, UPI_ID, COURSE_FEE } from '../App';

interface MobileStickyCTAProps {
  selectedBatch: typeof BATCHES[0] | null;
}

const MobileStickyCTA = ({ selectedBatch }: MobileStickyCTAProps) => {
  const whatsappMsg = encodeURIComponent('Hi, I am interested in the 7 Days 7 Skills course for ₹699. Please share the details.');
  const whatsappChatUrl = `https://wa.me/917207870120?text=${whatsappMsg}`;


  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="md:hidden mobile-sticky"
    >
      <div className="flex items-center gap-2">
        {/* Pay Button */}
        <a
          href="upi://pay?pa=mfskils.co@okicici&pn=MF%20Education%20%26%20Careers&am=699&cu=INR"
          className="flex-1 flex items-center justify-center gap-1.5 py-3.5 rounded-xl font-extrabold text-black text-sm transition-all active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
            boxShadow: '0 4px 20px rgba(245,158,11,0.4)',
          }}
        >
          <span>PAY ₹699 VIA UPI</span>
        </a>

        {/* WhatsApp Channel Button */}
        <a
          href={WHATSAPP_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-3.5 rounded-xl font-extrabold text-white text-sm transition-all active:scale-95"
          style={{
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            boxShadow: '0 4px 20px rgba(37,211,102,0.3)',
          }}
        >
          <span>📢</span>
          <span>JOIN WHATSAPP</span>
        </a>

        {/* Chat Icon */}
        <a
          href={whatsappChatUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center text-white text-lg transition-all active:scale-95"
          style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.15)',
          }}
          title="WhatsApp Chat"
        >
          💬
        </a>
      </div>

      {selectedBatch && (
        <div className="mt-2 text-center">
          <span className="text-xs text-gray-500">
            Selected: <span className="text-amber-400 font-semibold">{selectedBatch.label} — {selectedBatch.time}</span>
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default MobileStickyCTA;
