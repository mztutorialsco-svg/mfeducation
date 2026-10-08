import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SkillsSection from './components/SkillsSection';
import BatchSelection from './components/BatchSelection';
import StepsSection from './components/StepsSection';
import PracticalTraining from './components/PracticalTraining';
import EarningSection from './components/EarningSection';
import CourseOffer from './components/CourseOffer';
import PaymentSection from './components/PaymentSection';
import FAQSection from './components/FAQSection';
import UdyamSection from './components/UdyamSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
import Particles from './components/Particles';
import ContactUs from './pages/ContactUs';
import TermsAndConditions from './pages/TermsAndConditions';
import RefundPolicy from './pages/RefundPolicy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Products from './pages/Products';

export const WHATSAPP_NUMBER = '7207870120';
export const WHATSAPP_CHANNEL_URL = 'https://whatsapp.com/channel/0029Vb87ECw3WHTTrs6TsF23';
export const COURSE_FEE = '699';
export const COURSE_FEE_DISPLAY = '₹699';
export const START_DATE = '12th October • Monday';
export const BATCH_SIZE = '15';
export const DURATION = '90 Minutes';

export const BATCHES = [
  { id: 1, label: 'BATCH 01', time: '2:00 PM – 3:30 PM', timeShort: '2:00 PM' },
  { id: 2, label: 'BATCH 02', time: '3:45 PM – 5:15 PM', timeShort: '3:45 PM' },
  { id: 3, label: 'BATCH 03', time: '5:30 PM – 7:00 PM', timeShort: '5:30 PM' },
  { id: 4, label: 'BATCH 04', time: '9:30 PM – 11:00 PM', timeShort: '9:30 PM' },
];

function HomePage() {
  const [selectedBatch, setSelectedBatch] = useState<typeof BATCHES[0] | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('selectedBatch');
    if (saved) {
      try {
        setSelectedBatch(JSON.parse(saved));
      } catch {}
    }
  }, []);

  const handleBatchSelect = (batch: typeof BATCHES[0]) => {
    setSelectedBatch(batch);
    localStorage.setItem('selectedBatch', JSON.stringify(batch));
  };

  return (
    <div className="relative min-h-screen bg-navy-950 overflow-x-hidden">
      <Particles />
      <Navbar selectedBatch={selectedBatch} />
      <main>
        <Hero selectedBatch={selectedBatch} onBatchSelect={handleBatchSelect} />
        <SkillsSection />
        <BatchSelection selectedBatch={selectedBatch} onBatchSelect={handleBatchSelect} />
        <StepsSection />
        <PracticalTraining />
        <EarningSection />
        <CourseOffer selectedBatch={selectedBatch} onBatchSelect={handleBatchSelect} />
        <PaymentSection selectedBatch={selectedBatch} />
        <FAQSection />
        <UdyamSection />
        <FinalCTA selectedBatch={selectedBatch} />
      </main>
      <Footer />
      <MobileStickyCTA selectedBatch={selectedBatch} />
    </div>
  );
}

function PolicyPageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-navy-950 overflow-x-hidden">
      <Particles />
      {children}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<PolicyPageWrapper><ContactUs /></PolicyPageWrapper>} />
      <Route path="/terms" element={<PolicyPageWrapper><TermsAndConditions /></PolicyPageWrapper>} />
      <Route path="/refund-policy" element={<PolicyPageWrapper><RefundPolicy /></PolicyPageWrapper>} />
      <Route path="/privacy-policy" element={<PolicyPageWrapper><PrivacyPolicy /></PolicyPageWrapper>} />
      <Route path="/products" element={<PolicyPageWrapper><Products /></PolicyPageWrapper>} />
    </Routes>
  );
}

export default App;
