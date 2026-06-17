import './Verticals.scss';

const verticals = [
  {
    icon: '💘',
    title: 'Dating',
    text: 'Mainstream & adult dating campaigns. SOI, DOI and trial offers across tier-1 GEOs with proven funnels.',
    label: 'High Volume',
    delay: '1',
  },
  {
    icon: '💊',
    title: 'Nutra',
    text: 'Weight loss, supplements, skincare. Native & push traffic specialization with compliant creatives.',
    label: 'Premium GEOs',
    delay: '2',
  },
  {
    icon: '🎰',
    title: 'Gambling',
    text: 'Online casino, sports betting, poker. FTD-focused funnels with high player LTV and retention.',
    label: 'Top ROI',
    delay: '3',
  },
  {
    icon: '🔞',
    title: 'Adult',
    text: 'Adult content & services. Compliant campaigns via premium adult traffic networks at scale.',
    label: 'Specialized',
    delay: '4',
  },
  {
    icon: '🎁',
    title: 'Sweepstakes',
    text: 'CC-submit & SOI sweeps. Push, pop and display traffic with high conversion rates globally.',
    label: 'Mass Scale',
    delay: '1',
  },
  {
    icon: '₿',
    title: 'Crypto Offers',
    text: 'Crypto trading platforms, wallets and exchange offers. FTD & CPA models in regulated GEOs.',
    label: 'Emerging',
    delay: '2',
  },
  {
    icon: '📱',
    title: 'Mainstream',
    text: 'App installs, e-commerce, utilities. Google, Meta and TikTok performance campaigns at scale.',
    label: 'Versatile',
    delay: '3',
  },
  {
    icon: '🎮',
    title: 'iGaming',
    text: 'Fantasy sports, esports betting and skill-based gaming platforms. Fast-growing vertical expertise.',
    label: 'Fast Growth',
    delay: '4',
  },
];

function Verticals() {
  return (
    <section className="section verticals" id="verticals">
      <div className="container">
        <div className="sec-center" data-a="up">
          <p className="eyebrow">Our Verticals</p>

          <h2 className="sec-title">
            Niches We <span className="text-gold">Dominate</span>
          </h2>

          <p className="sec-sub">
            Deep expertise across the highest-performing verticals in performance marketing.
          </p>
        </div>

        <div className="v-grid">
          {verticals.map((vertical) => (
            <article
              className="v-card"
              data-a="up"
              data-d={vertical.delay}
              key={vertical.title}
            >
              <span className="v-emoji">{vertical.icon}</span>
              <h3 className="v-name">{vertical.title}</h3>
              <p className="v-desc">{vertical.text}</p>
              <span className="v-pill">{vertical.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Verticals;