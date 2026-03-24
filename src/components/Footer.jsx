import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/JurixNoBG.png" alt="JuriX Logo" />
            <p>JuriX is trusted legal companion — connecting clients with verified lawyers, delivering real-time court updates, and keeping every interaction private and secure.</p>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <Link to="/support">Support</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copy">© 2026 JuriX. All rights reserved. Made in India 🇮🇳</div>
        </div>
      </div>
    </footer>
  );
}
