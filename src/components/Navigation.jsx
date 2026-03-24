import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navigation.css';

const SECTIONS = ['features', 'screenshots', 'team'];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    closeMenu();
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (path) => location.pathname === path;
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (location.pathname !== '/') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    const hero = document.querySelector('.hero');
    if (hero) {
      const heroObserver = new IntersectionObserver(
        (entries) => { if (entries[0].isIntersecting) setActiveSection('home'); },
        { rootMargin: '0px 0px -60% 0px' }
      );
      heroObserver.observe(hero);
    }

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/') setActiveSection('home');
  }, [location.pathname]);

  const isSection = (id) => location.pathname === '/' && activeSection === id;
  const isHome = location.pathname === '/' && !SECTIONS.includes(activeSection);

  return (
    <nav id="mn" className={isOpen ? 'nav-open' : ''}>
      <Link to="/" className="nav-logo" onClick={closeMenu}>
        <img src="/JurixNoBG.png" alt="JuriX Logo" />
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/" className={isHome ? 'active' : ''} onClick={() => { closeMenu(); setActiveSection('home'); }}>
            Home
          </Link>
        </li>
        <li><a href="#features" className={isSection('features') ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</a></li>
        <li><a href="#screenshots" className={isSection('screenshots') ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('screenshots'); }}>Screenshots</a></li>
        <li><a href="#team" className={isSection('team') ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}>Team</a></li>
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
