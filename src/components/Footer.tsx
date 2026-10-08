import { BATCHES, WHATSAPP_CHANNEL_URL, COURSE_FEE_DISPLAY, UPI_ID, COURSE_FEE } from '../App';

const Footer = () => {
  const whatsappMsg = encodeURIComponent('Hi, I am interested in the 7 Days 7 Skills course for ₹699. Please share the details.');
  const whatsappChatUrl = `https://wa.me/917207870120?text=${whatsappMsg}`;


  return (
    <footer
      className="relative pt-16 pb-28 md:pb-16 px-4 md:px-8 border-t"
      style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(3,7,18,0.95)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpg" alt="MF Education & Careers" className="h-16 w-auto rounded-full object-contain shadow-[0_0_15px_rgba(245,158,11,0.2)]" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-5 max-w-sm">
              Empowering learners with practical AI and digital skills for the modern economy. Udyam Registered. Government of India.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={WHATSAPP_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
              >
                📢 WHATSAPP CHANNEL
              </a>
              <a
                href={whatsappChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white border border-white/10 hover:bg-white/5 transition-all"
              >
                💬 CHAT: 7207870120
              </a>
            </div>
          </div>

          {/* Course Info */}
          <div>
            <h4 className="font-black text-white text-sm tracking-widest mb-5">COURSE INFO</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📚 7 Days • 7 Skills</li>
              <li className="text-yellow-400 font-bold">💰 {COURSE_FEE_DISPLAY}</li>
              <li>📅 12th October • Monday</li>
              <li>👥 Only 15 Members Per Batch</li>
              <li>⏱ 90-Minute Sessions</li>
              <li>📹 Lifetime Access to Recordings</li>
              <li>🏛️ Udyam Registered</li>
              <li>🇮🇳 Government of India</li>
            </ul>
          </div>

          {/* Batches */}
          <div>
            <h4 className="font-black text-white text-sm tracking-widest mb-5">BATCH TIMINGS</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {BATCHES.map(batch => (
                <li key={batch.id} className="flex flex-col">
                  <span className="font-bold text-gray-300">{batch.label}</span>
                  <span className="text-xs text-amber-400">{batch.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer CTA */}
        <div
          className="glass rounded-2xl p-6 mb-8"
          style={{ border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="font-black text-white text-lg">ENROLL TODAY</div>
              <div className="text-gray-400 text-sm">WhatsApp: 7207870120</div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="upi://pay?pa=mfskils.co@okicici&pn=MF%20Education%20%26%20Careers&am=699&cu=INR" className="btn-gold text-xs px-5 py-3 font-extrabold">
                PAY ₹699 VIA UPI
              </a>
              <a
                href={WHATSAPP_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-xs px-5 py-3 font-extrabold"
              >
                📢 JOIN CHANNEL
              </a>
              <a
                href={whatsappChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs px-5 py-3 font-extrabold"
              >
                💬 WHATSAPP DETAILS
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © 2024 MF Education & Careers. All rights reserved. Udyam Registered • Government of India.
          </p>
          <div className="flex gap-4 text-xs text-gray-600">
            <a href="#home" className="hover:text-gray-400 transition-colors">Home</a>
            <a href="#skills" className="hover:text-gray-400 transition-colors">7 Skills</a>
            <a href="#batches" className="hover:text-gray-400 transition-colors">Batches</a>
            <a href="#faq" className="hover:text-gray-400 transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
