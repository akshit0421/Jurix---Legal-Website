import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid"></div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot">✦</span>
          India's Legal Companion App
        </div>
        <h1 className="fade-up d1">
          Legal Help.<br />
          <span>Smarter. Faster.</span>
        </h1>
        <p className="hero-desc fade-up d2">
          JuriX connects you with Bar Council verified lawyers — send enquiries, chat securely, sign agreements digitally, and track your case from start to finish.
        </p>
        <div className="hero-cta fade-up d3">
          <a className="btn btn-primary" href="#screenshots">
            See the App
          </a>
          <a className="btn btn-outline" href="#features">
            Explore Features
          </a>
        </div>
        <div className="hero-pills fade-up d4">
          <span className="hero-pill">✅ Bar Council Verified</span>
          <span className="hero-pill">🔒 E2E Encrypted</span>
          <span className="hero-pill">📱 iOS App</span>
        </div>
      </div>
      <div className="hero-visual fade-up d2">
        <div className="phone-wrap">
          <div className="ftag ft1">
            <div className="ftag-icon">✅</div>
            <div className="ftag-text">
              <strong>Enquiry Accepted</strong>Case is In Discussion
            </div>
          </div>
          <div className="ftag ft3">
            <div className="ft3-dot"></div>
            <div className="ftag-text">
              <strong>Chat Encrypted</strong>E2E secured ✓
            </div>
          </div>
          <div className="ftag ft4" style={{ position: 'absolute', bottom: '120px', left: '-58px' }}>
            <div className="ft4-num">142</div>
            <div className="ft4-label">Cases listed today</div>
          </div>
          <div className="phone-frame">
            <div className="phone-inner">
              <img className="phone-screenshot" src="/appss/Jurix1.png" alt="JuriX App - Lawyer Discovery" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
