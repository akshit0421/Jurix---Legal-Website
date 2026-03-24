import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid"></div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h1 className="fade-up d1">
          Connect with Lawyers.<br />
          <span>Know Your Case.</span>
        </h1>
        <p className="hero-desc fade-up d2">
          JuriX bridges the gap between clients and verified advocates — from your first enquiry to a signed legal agreement, with real-time court updates along the way.
        </p>
        <div className="hero-cta fade-up d3">
          <a className="btn btn-primary" href="#download">
            Download on App Store
          </a>
          <a className="btn btn-outline" href="#learn">
            Learn More
          </a>
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
              <img className="phone-screenshot" src="/JurixNoBG.png" alt="App Screenshot" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
