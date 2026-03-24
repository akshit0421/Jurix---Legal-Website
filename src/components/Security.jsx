import './Security.css';

const secCards = [
  { icon: '💬', title: 'End-to-End Encrypted Chat', desc: 'In Discussion messages are fully private', badge: 'Active', color: 'g' },
  { icon: '📁', title: 'Secure Document Vault', desc: 'Agreement forms stored with encrypted access', badge: 'Secure', color: 'b' },
  { icon: '🔐', title: 'TLS 1.2+ Encryption', desc: 'All data transfers fully encrypted', badge: 'Verified', color: 'c' },
  { icon: '🪪', title: 'Bar Council Verification', desc: 'Every advocate verified before going live', badge: 'Checked', color: 'g' },
];

export default function Security() {
  return (
    <section className="security-band" id="security">
      <div className="security-inner">
        <div className="security-text fade-up">
          <div className="section-label">Privacy &amp; Security</div>
          <h2>No Third Parties.<br /><span>Ever.</span></h2>
          <p>JuriX is built entirely in-house with security at its core. Every message, document, and case detail stays between you and your lawyer — no external services, no data brokers.</p>
          <ul className="sec-list">
            <li><span className="sec-check">✓</span>End-to-end encrypted chat — even JuriX cannot read messages</li>
            <li><span className="sec-check">✓</span>Agreement documents stored with encrypted access controls</li>
            <li><span className="sec-check">✓</span>All data transfers protected with TLS 1.2+ encryption</li>
            <li><span className="sec-check">✓</span>Bar Council verification before any lawyer goes live</li>
          </ul>
        </div>
        <div className="sec-cards fade-up d2">
          {secCards.map((card, idx) => (
            <div key={idx} className={`sec-card ${card.color}`}>
              <span className="sc-icon">{card.icon}</span>
              <div>
                <div className="sc-title">{card.title}</div>
                <div className="sc-desc">{card.desc}</div>
              </div>
              <span className={`sc-badge ${card.color}`}>{card.badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
