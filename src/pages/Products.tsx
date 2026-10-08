import { Link } from 'react-router-dom';
import { WHATSAPP_CHANNEL_URL } from '../App';

const Products = () => {
  const whatsappMsg = encodeURIComponent('Hi, I want to enroll in the 7 Days 7 Skills course for ₹699. Please share the details.');
  const whatsappChatUrl = `https://wa.me/917207870120?text=${whatsappMsg}`;

  const skills = [
    { day: 'Day 1', skill: 'AI Tools for Productivity', icon: '🤖', desc: 'Master ChatGPT, Gemini, and AI productivity tools to work 10x faster.' },
    { day: 'Day 2', skill: 'Canva Design Mastery', icon: '🎨', desc: 'Create professional graphics, posts, and marketing materials with Canva.' },
    { day: 'Day 3', skill: 'Content Creation & Writing', icon: '✍️', desc: 'Write compelling content for social media, blogs, and business communication.' },
    { day: 'Day 4', skill: 'Digital Marketing Basics', icon: '📢', desc: 'Understand SEO, social media marketing, and digital growth strategies.' },
    { day: 'Day 5', skill: 'Freelancing & Income Generation', icon: '💰', desc: 'Learn how to earn online with your skills through freelancing platforms.' },
    { day: 'Day 6', skill: 'Personal Branding', icon: '🌟', desc: 'Build your online presence and establish yourself as a credible professional.' },
    { day: 'Day 7', skill: 'Business Setup & Growth', icon: '🚀', desc: 'Learn how to start, register, and grow a small business or side hustle.' },
  ];

  return (
    <div className="min-h-screen bg-navy-950 text-white px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-amber-400 text-sm font-bold mb-10 hover:text-amber-300 transition-colors">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-black text-white mb-2">Products &amp; Services</h1>
        <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full mb-8" />

        {/* Main product card */}
        <div className="glass rounded-2xl p-8 mb-8" style={{ border: '1px solid rgba(245,158,11,0.3)' }}>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
            <div>
              <div className="text-amber-400 text-xs font-black tracking-widest mb-2">FEATURED PROGRAM</div>
              <h2 className="text-3xl font-black text-white">7 Days • 7 Skills</h2>
              <p className="text-gray-400 text-sm mt-1">Live Online Training | Starting 12th October</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black text-amber-400">₹699</div>
              <div className="text-gray-400 text-xs mt-1">One-time Payment • INR</div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              { icon: '📅', label: '7 Days', sub: 'Live Sessions' },
              { icon: '⏱', label: '90 Min', sub: 'Per Session' },
              { icon: '👥', label: '15 Seats', sub: 'Per Batch' },
              { icon: '📹', label: 'Lifetime', sub: 'Recordings' },
            ].map((f) => (
              <div key={f.label} className="text-center p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.04)' }}>
                <div className="text-xl mb-1">{f.icon}</div>
                <div className="font-black text-white text-sm">{f.label}</div>
                <div className="text-gray-500 text-xs">{f.sub}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/#payment"
              className="btn-gold text-center font-extrabold text-sm px-6 py-3">
              💳 PAY ₹699 — ENROLL NOW
            </a>
            <a href={WHATSAPP_CHANNEL_URL} target="_blank" rel="noopener noreferrer"
              className="btn-whatsapp text-center font-extrabold text-sm px-6 py-3">
              📢 JOIN WHATSAPP CHANNEL
            </a>
            <a href={whatsappChatUrl} target="_blank" rel="noopener noreferrer"
              className="btn-outline text-center font-extrabold text-sm px-6 py-3">
              💬 ASK DETAILS
            </a>
          </div>
        </div>

        {/* Skills breakdown */}
        <h2 className="text-2xl font-black text-white mb-4">What You Will Learn</h2>
        <div className="space-y-3 mb-8">
          {skills.map((item) => (
            <div key={item.day} className="glass rounded-xl p-4 flex items-start gap-4" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
              <div className="text-3xl">{item.icon}</div>
              <div>
                <div className="text-xs text-amber-400 font-black tracking-widest mb-0.5">{item.day}</div>
                <div className="font-black text-white text-sm">{item.skill}</div>
                <div className="text-gray-400 text-xs mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Who is this for */}
        <div className="glass rounded-2xl p-8" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
          <h2 className="text-xl font-black text-amber-400 mb-4">Who Is This For?</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            {[
              'Students looking to build income-generating skills',
              'Job seekers wanting to stand out with digital skills',
              'Homemakers exploring work-from-home opportunities',
              'Small business owners wanting to grow online',
              'Professionals looking to upskill with AI & digital tools',
              'Anyone who wants to earn from their skills starting this week',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-amber-400 font-black mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Products;
