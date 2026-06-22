import { useEffect } from 'react';
import './Hero.scss';

function Hero() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const hero = document.querySelector('.hero');
    const orbA = document.querySelector('.hero__orb_a');
    const orbB = document.querySelector('.hero__orb_b');
    let heroHeight = hero?.offsetHeight ?? 0;
    let animationFrameId = null;

    if (prefersReducedMotion) {
      return undefined;
    }

    const updateHeroHeight = () => {
      heroHeight = hero?.offsetHeight ?? 0;
    };

    const updateParallax = () => {
      const y = window.scrollY;

      if (!heroHeight || y > heroHeight) {
        animationFrameId = null;
        return;
      }

      if (orbA) {
        orbA.style.transform = `translateY(${y * 0.12}px)`;
      }

      if (orbB) {
        orbB.style.transform = `translateY(${y * 0.08}px)`;
      }

      animationFrameId = null;
    };

    const handleScroll = () => {
      
      if (!heroHeight || window.scrollY > heroHeight) {
        return;
      }

      if (animationFrameId) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(updateParallax);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateHeroHeight);
    updateHeroHeight();
    updateParallax();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateHeroHeight);

      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero__grid"></div>
      <div className="hero__orb hero__orb_a"></div>
      <div className="hero__orb hero__orb_b"></div>
      <div className="hero__orb hero__orb_c"></div>

      <div className="hero__deco" aria-hidden="true">
        <svg
          viewBox="0 0 600 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="400" cy="400" r="320" stroke="rgba(201,151,59,0.6)" strokeWidth="1" />
          <circle cx="400" cy="400" r="220" stroke="rgba(62,114,236,0.5)" strokeWidth="0.8" />
          <circle cx="400" cy="400" r="120" stroke="rgba(201,151,59,0.4)" strokeWidth="0.6" />
          <line x1="80" y1="400" x2="720" y2="400" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <line x1="400" y1="80" x2="400" y2="720" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
          <circle cx="400" cy="80" r="5" fill="rgba(201,151,59,0.8)" />
          <circle cx="720" cy="400" r="5" fill="rgba(62,114,236,0.8)" />
          <circle cx="400" cy="720" r="5" fill="rgba(201,151,59,0.8)" />
          <circle cx="80" cy="400" r="5" fill="rgba(62,114,236,0.8)" />
        </svg>
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          <div className="hero__badge" data-a="up">
            <span className="hero__badge-pulse"></span>
            Performance Media Buying Team
          </div>

          <h1 className="hero__title" data-a="up" data-d="1">
            <div>Performance Media</div>
            <span>
              Buying Team <span className="hero__separator">|&nbsp;</span><span className="hero__highlight">Rhine Media</span>
            </span>
          </h1>

          <p className="hero__subtitle" data-a="up" data-d="2">
            We buy traffic for <strong>Dating, Nutra, Gambling, Sweepstakes, iGaming</strong> and more —
            across all major channels, in every major GEO, at premium scale.
          </p>

          <div className="hero__actions" data-a="up" data-d="3">
            <a href="#contacts" className="btn btn-primary">
              Start Cooperation
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path
                  d="M1 6.5h11M6.5 1.5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a href="#contacts" className="btn btn-ghost">
              Get in Touch
            </a>
          </div>

          <div className="hero__kpis" data-a="up" data-d="4">
            <div className="hero__kpi">
              <span className="hero__kpi-value">$12M+</span>
              <span className="hero__kpi-label">Monthly Ad Spend</span>
            </div>
            <div className="hero__kpi">
              <span className="hero__kpi-value">340%</span>
              <span className="hero__kpi-label">Average Campaign ROI</span>
            </div>
            <div className="hero__kpi">
              <span className="hero__kpi-value">8+</span>
              <span className="hero__kpi-label">Traffic Channels</span>
            </div>
            <div className="hero__kpi">
              <span className="hero__kpi-value">60+</span>
              <span className="hero__kpi-label">GEOs Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
