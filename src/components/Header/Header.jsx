import { useEffect, useRef, useState } from 'react';
import './Header.scss';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrolledRef = useRef(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const nextIsScrolled = window.scrollY > 55;

      if (nextIsScrolled !== isScrolledRef.current) {
        isScrolledRef.current = nextIsScrolled;
        setIsScrolled(nextIsScrolled);
      }
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
      <header>
        <nav className={`navbar ${isScrolled ? 'navbar_scrolled' : ''}`} id="navbar">
          <div className="container">
            <div className="navbar__inner">
              <a href={import.meta.env.BASE_URL} className="navbar__logo" aria-label="Rhine Media home">
                <p className="navbar__logo-mark">RM</p>
                <p className="navbar__logo-name">
                  Rhine <span>Media</span>
                </p>
              </a>

              <ul className="navbar__links">
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

              <div className="navbar__actions">
                <a href="#contacts" className="btn btn-ghost">
                  Get in Touch
                </a>

                <a href="#contacts" className="btn btn-primary">
                  Start Cooperation
                </a>

                <button
                  className="navbar__toggle"
                  type="button"
                  aria-label="Open menu"
                  aria-expanded={isMenuOpen}
                  onClick={() => setIsMenuOpen(true)}
                >
                  <span className="navbar__toggle-line"></span>
                  <span className="navbar__toggle-line"></span>
                  <span className="navbar__toggle-line"></span>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu_open' : ''}`} id="mobMenu">
          <button
            className="mobile-menu__close"
            type="button"
            aria-label="Close menu"
            onClick={closeMenu}
          >
            ✕
          </button>

          <a href="#verticals" className="mobile-menu__link" onClick={closeMenu}>
            Verticals
          </a>
          <a href="#traffic" className="mobile-menu__link" onClick={closeMenu}>
            Traffic Sources
          </a>
          <a href="#partners" className="mobile-menu__link" onClick={closeMenu}>
            Partners
          </a>
          <a href="#why-us" className="mobile-menu__link" onClick={closeMenu}>
            Why Us
          </a>
          <a href="#contacts" className="mobile-menu__link" onClick={closeMenu}>
            Contact
          </a>

          <a href="#contacts" className="btn btn-primary mobile-menu__cta" onClick={closeMenu}>
            Start Cooperation
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
