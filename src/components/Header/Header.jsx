import { useEffect, useState } from 'react';
import './Header.scss';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 55);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <div className="container">
          <div className="nav-inner">
            <a href="/" className="logo" aria-label="Rhine Media home">
              <div className="logo-mark">RM</div>
              <div className="logo-name">
                Rhine <span>Media</span>
              </div>
            </a>

            <ul className="nav-links">
              <li>
                <a href="#verticals">Verticals</a>
              </li>
              <li>
                <a href="#traffic">Traffic Sources</a>
              </li>
              <li>
                <a href="#partners">Partners</a>
              </li>
              <li>
                <a href="#why-us">Why Us</a>
              </li>
              <li>
                <a href="#contacts">Contact</a>
              </li>
            </ul>

            <div className="nav-right">
              <a href="#contacts" className="btn btn-ghost">
                Get in Touch
              </a>

              <a href="#contacts" className="btn btn-primary">
                Start Cooperation
              </a>

              <button
                className="ham"
                type="button"
                aria-label="Open menu"
                aria-expanded={isMenuOpen}
                onClick={() => setIsMenuOpen(true)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`mob-menu ${isMenuOpen ? 'open' : ''}`} id="mobMenu">
        <button
          className="mob-close"
          type="button"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          ✕
        </button>

        <a href="#verticals" className="mob-link" onClick={closeMenu}>
          Verticals
        </a>
        <a href="#traffic" className="mob-link" onClick={closeMenu}>
          Traffic Sources
        </a>
        <a href="#partners" className="mob-link" onClick={closeMenu}>
          Partners
        </a>
        <a href="#why-us" className="mob-link" onClick={closeMenu}>
          Why Us
        </a>
        <a href="#contacts" className="mob-link" onClick={closeMenu}>
          Contact
        </a>

        <a href="#contacts" className="btn btn-primary mob-cta" onClick={closeMenu}>
          Start Cooperation
        </a>
      </div>
    </>
  );
}

export default Header;