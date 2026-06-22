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
    <>
    <section className="section why-choose" id="why-us">
      <div className="container">
        <div className="why-choose__layout">
          <div className="why-choose__content">
            <p className="eyebrow" data-a="left">
              Why Choose Rhine Media
            </p>

            <h2 className="sec-title" data-a="left" data-d="1">
              Precision. Scale.
              <br />
              <span className="text-gold">Performance.</span>
            </h2>

            <p className="sec-sub" data-a="left" data-d="2">
              We're not a media network — we're your in-house buying team. Deep expertise,
              real accountability and transparent reporting on every dollar spent.
            </p>

            <div className="why-choose__check-list">
              {checklist.map((item) => (
                <article className="why-choose__check-item" data-a="left" data-d={item.delay} key={item.title}>
                  <div className="why-choose__check-icon">✓</div>
                  <div className="why-choose__check-body">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="why-choose__cards" data-a="right" data-d="2">
            {featureCards.map((card) => (
              <article className="why-choose__card" key={card.title}>
                <div className="why-choose__card-icon">{card.icon}</div>
                <h3 className="why-choose__card-title">{card.title}</h3>
                <p className="why-choose__card-text">{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default WhyChooseUs;
