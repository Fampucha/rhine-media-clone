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
  return (
    <section className="partners" id="partners">
      <div className="container">
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

      <div className="marquee-wrap">
        <Marquee
          speed={40}
          pauseOnHover={true}
          gradient={false}
          autoFill={true}
        >
          {partners.map((partner) => (
            <div className="p-chip" key={partner.name}>
              <div className="p-chip-ico">{partner.icon}</div>
              <span className="p-chip-name">{partner.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

export default Partners;