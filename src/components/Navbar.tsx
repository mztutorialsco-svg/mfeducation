import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { WHATSAPP_CHANNEL_URL, BATCHES } from '../App';

interface NavbarProps {
  selectedBatch: typeof BATCHES[0] | null;
}

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: '7 Skills' },
  { href: '#batches', label: 'Batches' },
  { href: '#training', label: 'Training' },
  { href: '#earning', label: 'Earning' },
  { href: '#course-details', label: 'Course Details' },
  { href: '#faq', label: 'FAQ' },
];

const Navbar = ({ selectedBatch }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const whatsappMsg = encodeURIComponent('Hi, I am interested in the 7 Days 7 Skills course for ₹699. Please share the details.');
  const whatsappChatUrl = `https://wa.me/917207870120?text=${whatsappMsg}`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass-dark shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center group flex-shrink-0">
            <img src="/logo.jpg" alt="MF Education & Careers" className="h-14 w-auto rounded-full object-contain shadow-[0_0_15px_rgba(245,158,11,0.3)] transition-transform group-hover:scale-105" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={WHATSAPP_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold px-4 py-2 rounded-xl text-white transition-all duration-300 flex items-center gap-2"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)', boxShadow: '0 4px 15px rgba(37,211,102,0.3)' }}
            >
              <span>📢</span>
              <span className="hidden lg:inline">JOIN WHATSAPP CHANNEL</span>
              <span className="lg:hidden">CHANNEL</span>
            </a>
            <a
              href="#payment"
              className="btn-primary text-sm px-4 py-2"
            >
              ENROLL NOW
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass-dark border-t border-white/10 pb-4">
          <div className="max-w-7xl mx-auto px-4 pt-2 space-y-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-white px-4 py-3 rounded-lg hover:bg-white/5 transition-all font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 space-y-3">
              <a
                href={WHATSAPP_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp block text-center text-sm"
              >
                📢 JOIN WHATSAPP CHANNEL
              </a>
              <a
                href="#payment"
                onClick={() => setIsOpen(false)}
                className="btn-primary block text-center text-sm"
              >
                ENROLL NOW
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
