import { Link } from 'react-router-dom';

const RefundPolicy = () => {
  const whatsappMsg = encodeURIComponent('Hi, I would like to request a refund for the 7 Days 7 Skills course. Please help.');
  const whatsappChatUrl = `https://wa.me/917207870120?text=${whatsappMsg}`;

  return (
    <div className="min-h-screen bg-navy-950 text-white px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-amber-400 text-sm font-bold mb-10 hover:text-amber-300 transition-colors">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-black text-white mb-2">Refund &amp; Cancellation Policy</h1>
        <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full mb-8" />
        <p className="text-gray-400 text-sm mb-8">Last updated: October 2024</p>

        <div className="space-y-6">
          <div className="glass rounded-2xl p-6" style={{ border: '1px solid rgba(245,158,11,0.2)' }}>
            <h2 className="text-base font-black text-amber-400 mb-3">Overview</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              At MF Education & Careers, we are committed to delivering high-quality training. We understand that situations may arise where a refund is needed. Please read our policy carefully before enrolling.
            </p>
          </div>

          {[
            {
              title: 'Cancellation Before Course Start',
              body: 'If you cancel your enrollment at least 48 hours before the first session of your batch, you are eligible for a full refund of ₹699 INR. Cancellation requests must be submitted via WhatsApp at +91 7207870120.',
            },
            {
              title: 'Cancellation After Course Start',
              body: 'Once the course has started (after the first session), no refunds will be issued. By attending even one session, you are considered an active learner and the course fee is non-refundable.',
            },
            {
              title: 'Batch Rescheduling',
              body: 'If MF Education & Careers cancels or reschedules a batch due to unforeseen circumstances, learners will be offered either a transfer to the next available batch or a full refund of ₹699 INR.',
            },
            {
              title: 'Duplicate Payment',
              body: 'In the event of a duplicate or erroneous payment, the excess amount will be fully refunded within 5–7 business days after verification. Please contact us immediately on WhatsApp with payment proof.',
            },
            {
              title: 'Refund Process',
              body: 'Approved refunds will be processed within 5–7 business days to the original payment method (bank account linked to the UPI ID used). MF Education & Careers is not responsible for delays caused by banking intermediaries.',
            },
            {
              title: 'Non-Refundable Situations',
              body: 'Refunds will not be issued for: failure to attend sessions, dissatisfaction after course completion, technical issues on the learner\'s side (internet, device, etc.), or voluntary withdrawal after the first session.',
            },
          ].map((section) => (
            <div key={section.title} className="glass rounded-2xl p-6" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
              <h2 className="text-base font-black text-amber-400 mb-3">{section.title}</h2>
              <p className="text-gray-300 text-sm leading-relaxed">{section.body}</p>
            </div>
          ))}

          <div className="glass rounded-2xl p-6" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
            <h2 className="text-base font-black text-amber-400 mb-3">Contact for Refunds</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              To initiate a refund, please contact us on WhatsApp with your payment details and the reason for cancellation.
            </p>
            <a href={whatsappChatUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #25D366, #128C7E)' }}>
              💬 Request Refund via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
