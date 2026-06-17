import './WhyChooseUs.scss';

const checklist = [
  {
    title: 'Full Funnel Optimization',
    text: 'From creative A/B testing to post-click landing page optimization. Every touchpoint tracked and improved continuously.',
    delay: '2',
  },
  {
    title: 'Direct Publisher Relationships',
    text: 'We maintain direct deals with top publishers and ad networks — cutting costs and boosting campaign performance.',
    delay: '3',
  },
  {
    title: 'Real-Time Reporting Dashboards',
    text: 'Live dashboards with full transparency on spend, impressions, conversions and revenue attribution — 24/7.',
    delay: '4',
  },
  {
    title: 'Dedicated Account Manager',
    text: 'Every partner gets a dedicated team member. No ticket queues, no delays — direct Telegram/Skype communication.',
    delay: '5',
  },
];

const featureCards = [
  {
    icon: '📈',
    title: 'Data-Driven Buying',
    text: 'Bidding strategies informed by real conversion data. No guesswork — pure performance logic at scale.',
  },
  {
    icon: '🛡️',
    title: 'Brand-Safe Traffic',
    text: 'Custom placement lists and negative keyword exclusions to protect your brand at all times.',
  },
  {
    icon: '🌍',
    title: 'Global GEO Coverage',
    text: 'Tier-1, LATAM, APAC and MENA — we have the infrastructure to scale to any region instantly.',
  },
  {
    icon: '⚡',
    title: '48h Campaign Launch',
    text: 'From brief to live in under 48 hours. Streamlined onboarding means you never miss a traffic window.',
  },
];

function WhyChooseUs() {
  return (
    <section className="section features" id="why-us">
      <div className="container">
        <div className="feat-layout">
          <div className="feat-content">
            <div className="eyebrow" data-a="left">
              Why Choose Rhine Media
            </div>

            <h2 className="sec-title" data-a="left" data-d="1">
              Precision. Scale.
              <br />
              <span className="text-gold">Performance.</span>
            </h2>

            <p className="sec-sub" data-a="left" data-d="2">
              We're not a media network — we're your in-house buying team. Deep expertise,
              real accountability and transparent reporting on every dollar spent.
            </p>

            <div className="check-list">
              {checklist.map((item) => (
                <article className="check-item" data-a="left" data-d={item.delay} key={item.title}>
                  <div className="chk">✓</div>

                  <div className="chk-body">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="feat-cards" data-a="right" data-d="2">
            {featureCards.map((card) => (
              <article className="fc" key={card.title}>
                <div className="fc-ico">{card.icon}</div>
                <h3 className="fc-title">{card.title}</h3>
                <p className="fc-body">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;