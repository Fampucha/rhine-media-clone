import { useEffect } from 'react';
import './Hero.scss';

function Hero() {
  useEffect(() => {
    const orbA = document.querySelector('.orb-a');
    const orbB = document.querySelector('.orb-b');

    const handleScroll = () => {
      const y = window.scrollY;

      if (orbA & y != 1000) {
        orbA.style.transform = `translateY(${y * 0.12}px)`;
      }

      if (orbB & y != 1000) {
        orbB.style.transform = `translateY(${y * 0.08}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-grid"></div>
      <div className="orb orb-a"></div>
      <div className="orb orb-b"></div>
      <div className="orb orb-c"></div>

      <div className="hero-deco" aria-hidden="true">
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

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge" data-a="up">
            <span className="badge-pulse"></span>
            Performance Media Buying Team
          </div>

          <h1 className="hero-h1" data-a="up" data-d="1">
            <div>Performance Media</div>
            <span>
              Buying Team <span className="separator">|&nbsp;</span><span className="hl">Rhine Media</span>
            </span>
          </h1>

          <p className="hero-sub" data-a="up" data-d="2">
            We buy traffic for <strong>Dating, Nutra, Gambling, Sweepstakes, iGaming</strong> and more —
            across all major channels, in every major GEO, at premium scale.
          </p>

          <div className="hero-actions" data-a="up" data-d="3">
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

          <div className="hero-kpis" data-a="up" data-d="4">
            <div className="kpi">
              <span className="kpi-v">$12M+</span>
              <span className="kpi-l">Monthly Ad Spend</span>
            </div>
            <div className="kpi">
              <span className="kpi-v">340%</span>
              <span className="kpi-l">Average Campaign ROI</span>
            </div>
            <div className="kpi">
              <span className="kpi-v">8+</span>
              <span className="kpi-l">Traffic Channels</span>
            </div>
            <div className="kpi">
              <span className="kpi-v">60+</span>
              <span className="kpi-l">GEOs Worldwide</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;