import './Stats.scss';

const stats = [
  {
    number: '4.2B+',
    label: 'Ad Impressions / Month',
    text: 'Across all traffic sources',
    delay: '',
  },
  {
    number: '340%',
    label: 'Average ROI',
    text: 'Verified by partners',
    delay: '2',
  },
  {
    number: '7',
    label: 'Verticals Mastered',
    text: 'Dating, Nutra, Gambling & more',
    delay: '3',
  },
  {
    number: '60+',
    label: 'Global GEOs',
    text: 'Tier-1 & emerging markets',
    delay: '4',
  },
];

function Stats() {
  return (
    <section className="stats-band" aria-label="Company statistics">
      <div className="container">
        <div className="stats-row">
          {stats.map((item) => (
            <div className="stat-cell" data-a="up" data-d={item.delay} key={item.label}>
              <h3 className="stat-num">{item.number}</h3>
              <p className="stat-lbl">{item.label}</p>
              <p className="stat-sub">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;