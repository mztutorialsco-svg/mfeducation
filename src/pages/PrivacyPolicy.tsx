import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-white px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-amber-400 text-sm font-bold mb-10 hover:text-amber-300 transition-colors">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-black text-white mb-2">Privacy Policy</h1>
        <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full mb-8" />
        <p className="text-gray-400 text-sm mb-8">Last updated: October 2024</p>

        <div className="space-y-6">
          <div className="glass rounded-2xl p-6" style={{ border: '1px solid rgba(245,158,11,0.2)' }}>
            <h2 className="text-base font-black text-amber-400 mb-3">Our Commitment</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              MF Education & Careers is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or enroll in our programs.
            </p>
          </div>

          {[
            {
              title: 'Information We Collect',
              body: 'We may collect the following information: your name and WhatsApp number (when you contact us or enroll), payment transaction reference details (not your full banking information), batch preference, and usage data on our website (via standard browser analytics).',
            },
            {
              title: 'How We Use Your Information',
              body: 'Your information is used to: process enrollment and batch allocation, communicate course details and schedule updates, send reminders and important announcements via WhatsApp, and improve our services and website experience.',
            },
            {
              title: 'Payment Information',
              body: 'Payments are processed securely via Cashfree Payment Gateway, which supports UPI, debit/credit cards, wallets, and other methods. MF Education & Careers does not collect, store, or have access to your bank account details, UPI PIN, or card information. All payment transactions are handled securely by Cashfree Payments.',
            },
            {
              title: 'Data Sharing',
              body: 'We do not sell, rent, or trade your personal information to third parties. Your data may only be shared with service providers directly involved in delivering course content, and only to the extent necessary to provide the service.',
            },
            {
              title: 'Data Retention',
              body: 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. You may request deletion of your data at any time by contacting us on WhatsApp.',
            },
            {
              title: 'WhatsApp Communication',
              body: 'By sharing your WhatsApp number with us, you consent to receive course-related messages. You can opt out at any time by informing us via WhatsApp. We do not use your number for promotional messages unrelated to your enrolled course.',
            },
            {
              title: 'Cookies',
              body: 'Our website may use local storage (similar to cookies) to remember your batch selection for a seamless experience. We do not use tracking cookies or third-party advertising cookies.',
            },
            {
              title: 'Your Rights',
              body: 'You have the right to: access the personal data we hold about you, request correction of inaccurate information, request deletion of your data, and withdraw consent for communication at any time.',
            },
            {
              title: 'Changes to This Policy',
              body: 'We may update this Privacy Policy from time to time. Changes will be posted on this page. Continued use of our services after changes constitutes acceptance of the revised policy.',
            },
            {
              title: 'Contact',
              body: 'For any privacy-related concerns, please contact us via WhatsApp at +91 7207870120.',
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

export default PrivacyPolicy;
