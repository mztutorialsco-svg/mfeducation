import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-white px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-amber-400 text-sm font-bold mb-10 hover:text-amber-300 transition-colors">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-black text-white mb-2">Terms &amp; Conditions</h1>
        <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full mb-8" />
        <p className="text-gray-400 text-sm mb-8">Last updated: October 2024</p>

        <div className="space-y-8">
          {[
            {
              title: '1. Acceptance of Terms',
              body: 'By enrolling in any course or program offered by MF Education & Careers, you agree to be bound by these Terms & Conditions. Please read them carefully before making any payment or registration.',
            },
            {
              title: '2. Course Description',
              body: 'MF Education & Careers offers the "7 Days • 7 Skills" program — a 7-day live training course priced at ₹699 INR. Each session is 90 minutes long, conducted live via online platforms. Recordings are provided with lifetime access.',
            },
            {
              title: '3. Registration & Payment',
              body: 'Registration is confirmed only upon successful payment of ₹699 INR. Payment is accepted via Cashfree Payment Gateway (UPI, cards, wallets, and other methods). Seats are strictly limited to 15 members per batch. Enrollment is on a first-come, first-served basis.',
            },
            {
              title: '4. Batch Allocation',
              body: 'After payment, learners are allocated to a batch based on availability and their preference. MF Education & Careers reserves the right to adjust batch timings with prior notice. Batch switching may be accommodated subject to seat availability.',
            },
            {
              title: '5. Intellectual Property',
              body: 'All course content, materials, recordings, and resources provided by MF Education & Careers are proprietary. Learners are granted a personal, non-transferable license to access the content for their own learning. Recording, redistributing, reselling, or sharing course content without express written permission is strictly prohibited.',
            },
            {
              title: '6. Code of Conduct',
              body: 'Learners are expected to maintain respectful conduct during all live sessions. MF Education & Careers reserves the right to remove any learner from the program without refund for misconduct, disruptive behavior, or violation of community guidelines.',
            },
            {
              title: '7. Limitation of Liability',
              body: 'MF Education & Careers is not responsible for any indirect, incidental, or consequential damages arising from course participation. The maximum liability is limited to the course fee paid (₹699 INR).',
            },
            {
              title: '8. Changes to Terms',
              body: 'MF Education & Careers reserves the right to update these Terms & Conditions at any time. Changes will be communicated via WhatsApp Channel or the website. Continued use of our services constitutes acceptance of the revised terms.',
            },
            {
              title: '9. Governing Law',
              body: 'These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in India.',
            },
            {
              title: '10. Contact',
              body: 'For any queries regarding these Terms, please contact us via WhatsApp at +91 7207870120.',
            },
          ].map((section) => (
            <div key={section.title} className="glass rounded-2xl p-6" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
              <h2 className="text-base font-black text-amber-400 mb-3">{section.title}</h2>
              <p className="text-gray-300 text-sm leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
