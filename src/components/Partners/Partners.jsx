import { useEffect, useState } from 'react';
import * as FastMarquee from 'react-fast-marquee';
import './Partners.scss';

const Marquee = FastMarquee.default?.default || FastMarquee.default;

const partners = [
  {
    icon: '🌐',
    name: 'Ads.com',
  },
  {
    icon: '⚡',
    name: 'Tonic',
  },
  {
    icon: '🔭',
    name: 'Visymo',
  },
  {
    icon: '💼',
    name: 'ClickDealer',
  },
  {
    icon: '🏅',
    name: 'VortexHub',
  },
  {
    icon: '🎯',
    name: 'AdVance Pro',
  },
  {
    icon: '💎',
    name: 'PeakNet CPA',
  },
  {
    icon: '🔗',
    name: 'LynkAffiliates',
  },
  {
    icon: '🚀',
    name: 'FluxMedia',
  },
  {
    icon: '🌟',
    name: 'NorthStar Network',
  },
  {
    icon: '📊',
    name: 'Affiliate Networks',
  },
  {
    icon: '🤝',
    name: 'CPA Networks',
  },
];

function Partners() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleMotionPreferenceChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener('change', handleMotionPreferenceChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMotionPreferenceChange);
    };
  }, []);

  return (
    <section className="partners" id="partners">
      <div className="container partners__container">
        <div className="sec-center" data-a="up">
          <p className="eyebrow">Trusted Partners & Networks</p>
          <h2 className="sec-title">
            Working with the <span className="text-gold">Best in Class</span>
          </h2>
          <p className="sec-sub">
            We maintain direct relationships with premium ad networks, affiliate networks and CPA platforms worldwide.
          </p>
        </div>
      </div>

      <div className="partners__marquee">
        <Marquee
          speed={40}
          play={!prefersReducedMotion}
          pauseOnHover={true}
          gradient={false}
          autoFill={true}
        >
          {partners.map((partner) => (
            <div className="partners__chip" key={partner.name}>
              <div className="partners__chip-icon">{partner.icon}</div>
              <span className="partners__chip-name">{partner.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default Partners;
