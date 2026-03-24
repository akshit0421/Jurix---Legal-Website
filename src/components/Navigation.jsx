import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const closeMenu = () => setIsOpen(false);

  return (
    <nav id="mn" className={isOpen ? 'nav-open' : ''}>
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <img src="/JurixNoBG.png" alt="JuriX Logo" />
      </Link>
      <ul className="nav-links">
        <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMenu}>Home</Link></li>
        <li><a href="#features" onClick={closeMenu}>Features</a></li>
        <li><a href="#screenshots" onClick={closeMenu}>Screenshots</a></li>
        <li><Link to="/support" className={isActive('/support') ? 'active' : ''} onClick={closeMenu}>Support</Link></li>
        <li><Link to="/privacy" className={isActive('/privacy') ? 'active' : ''} onClick={closeMenu}>Privacy</Link></li>
      </ul>
      <div className="nav-toggle" id="nt" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
