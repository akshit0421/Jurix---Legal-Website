import './AgreementFlow.css';

const steps = [
  { icon: '📨', title: 'Client Sends Enquiry', desc: 'Describes their legal need' },
  { icon: '✅', title: 'Lawyer Accepts', desc: 'Case enters In Discussion' },
  { icon: '💬', title: 'Encrypted Chat', desc: 'Lawyer gathers case details' },
  { icon: '📋', title: 'Agreement Uploaded', desc: 'Lawyer uploads the form' },
  { icon: '✍️', title: 'Client Signs & Returns', desc: 'Case is officially opened', green: true },
];

export default function AgreementFlow() {
  return (
    <section className="agreement-section">
      <div className="agreement-inner">
        <div className="section-label" style={{ justifyContent: 'center' }}>Case Opening Flow</div>
        <h2>From Enquiry to<br />Officially Opened Case</h2>
        <p>JuriX's structured agreement process ensures every case is documented, signed, and legally sound before proceeding.</p>
        <div className="agreement-flow">
          {steps.map((step, idx) => (
            <div key={idx} className="aflow-row">
              <div className={`aflow-step fade-up d${idx}`}>
                <div className="aflow-icon" style={step.green ? { background: '#22c55e' } : {}}>{step.icon}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </div>
              {idx < steps.length - 1 && <div className="aflow-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
