import { Link } from 'react-router-dom';
import { WHATSAPP_CHANNEL_URL } from '../App';

const ContactUs = () => {
  const whatsappMsg = encodeURIComponent('Hi, I have a query regarding the 7 Days 7 Skills course. Please help.');
  const whatsappChatUrl = `https://wa.me/917207870120?text=${whatsappMsg}`;

  return (
    <div className="min-h-screen bg-navy-950 text-white px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-amber-400 text-sm font-bold mb-10 hover:text-amber-300 transition-colors">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-black text-white mb-2">Contact Us</h1>
        <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full mb-8" />
        <div className="glass rounded-2xl p-8 mb-6" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
          <h2 className="text-xl font-black text-amber-400 mb-6">Get In Touch</h2>
          <div className="space-y-5 text-gray-300">
            <div className="flex items-start gap-4">
              <span className="text-2xl">🏢</span>
              <div>
                <div className="font-bold text-white">MF Education &amp; Careers</div>
                <div className="text-sm text-gray-400">Udyam Registered • Government of India</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">📱</span>
              <div>
                <div className="font-bold text-white">WhatsApp Support</div>
                <div className="text-sm text-gray-400">+91 7207870120</div>
                <a href={whatsappChatUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">📢</span>
              <div>
                <div className="font-bold text-white">WhatsApp Channel</div>
                <div className="text-sm text-gray-400">Stay updated with all announcements</div>
                <a href={WHATSAPP_CHANNEL_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all hover:scale-105"
                  style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
                  📢 Join WhatsApp Channel
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-2xl">💳</span>
              <div>
                <div className="font-bold text-white">UPI Payment Queries</div>
                <div className="text-sm text-gray-400">UPI ID: mfskils.co@okicici</div>
              </div>
            </div>
          </div>
        </div>
        <div className="glass rounded-2xl p-8" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
          <h2 className="text-xl font-black text-amber-400 mb-4">Business Hours</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Monday – Saturday: 9:00 AM – 9:00 PM IST<br />
            Sunday: 10:00 AM – 6:00 PM IST<br /><br />
            We typically respond within 2–4 hours during business hours. For urgent payment queries, please reach us directly on WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
