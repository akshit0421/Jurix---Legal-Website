import { useState } from 'react';
import './PageContent.css';

const faqs = [
  {
    q: 'What is JuriX?',
    a: 'JuriX is an iOS legal technology app connecting clients with Bar Council verified lawyers. It covers the full journey — finding a lawyer, sending enquiries, encrypted discussions, digital agreement signing, and real-time court updates.',
    defaultOpen: true,
  },
  {
    q: 'How are lawyers verified on JuriX?',
    a: 'Lawyers must provide their Bar Council registration ID and a photo of their Bar ID card. JuriX verifies this through an API or manual review before their profile goes live.',
  },
  {
    q: 'How does the enquiry system work?',
    a: 'Search for a lawyer and tap "Consult" to send an enquiry. The lawyer receives a notification and can accept or decline. You\'re notified immediately of their response.',
  },
  {
    q: 'What happens after a lawyer accepts my enquiry?',
    a: 'The case enters In Discussion mode. You and your lawyer can have a secure in-chat. The lawyer uses this phase to understand your case fully before officially taking it on.',
  },
  {
    q: 'How does the agreement signing process work?',
    a: 'When the lawyer is ready, they upload a legal agreement form through the agreement button. You review, sign, and return it. Once received, the case is officially opened.',
  },
  {
    q: 'Is the chat really private?',
    a: 'Yes. All messages are end-to-end encrypted — only you and your lawyer can read them. Not even JuriX servers can access the content. No third-party services are involved.',
  },
  {
    q: 'How does the lawyer dashboard work?',
    a: 'The dashboard shows real-time hearing updates and daily cause lists from official court APIs, highlighting next upcoming and currently ongoing hearings so lawyers are always prepared.',
  },
  {
    q: 'The app is not working. What should I do?',
    a: (<>Force-close and reopen, check your internet, update from the App Store, restart your iPhone. If it persists, email <a href="mailto:akshit0421@gmail.com">akshit0421@gmail.com</a> with your device model and iOS version.</>),
  },
];

function FaqItem({ q, a, defaultOpen }) {
  const [open, setOpen] = useState(!!defaultOpen);
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <div className="faq-q" onClick={() => setOpen(!open)}>
        {q}
        <span className="faq-toggle">+</span>
      </div>
      <div className="faq-a">{a}</div>
    </div>
  );
}

export default function Support() {
  return (
    <main>
      <div className="page-header">
        <div className="page-header-inner">
          <div className="section-label">Help &amp; Support</div>
          <h1>We're Here to <em>Help You</em></h1>
          <p>Find answers to common questions, understand how the app works, or reach our team directly. We respond within 24–48 hours.</p>
        </div>
      </div>
      <div className="content-wrap">
        <div className="section-label">FAQ</div>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="card" style={{ padding: '0.25rem 2rem' }}>
          {faqs.map((faq, idx) => (
            <FaqItem key={idx} q={faq.q} a={faq.a} defaultOpen={faq.defaultOpen} />
          ))}
        </div>
        <hr className="divider" />
        <div className="cta-card">
          <h3>Still Need Help?</h3>
          <p>Our support team typically responds within 24 hours.</p>
          <a className="btn btn-white" href="mailto:akshit0421@gmail.com">✉️ &nbsp;Email Support</a>
        </div>
      </div>
    </main>
  );
}
