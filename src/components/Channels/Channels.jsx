import './Channels.scss';

const channels = [
  {
    icon: '🚀',
    title: 'PropellerAds',
    text: 'Push / Pop / OnClick',
    delay: '1',
  },
  {
    icon: '🔍',
    title: 'Google Ads',
    text: 'Search / Display / YouTube',
    delay: '2',
  },
  {
    icon: '🍎',
    title: 'Apple Search Ads',
    text: 'iOS App Install',
    delay: '3',
  },
  {
    icon: '📘',
    title: 'Meta Ads',
    text: 'Facebook / Instagram',
    delay: '4',
  },
  {
    icon: '🎵',
    title: 'TikTok Ads',
    text: 'In-Feed / TopView / Spark',
    delay: '1',
  },
  {
    icon: '📰',
    title: 'Native Ads',
    text: 'Taboola / Outbrain',
    delay: '2',
  },
  {
    icon: '🔔',
    title: 'Push Notifications',
    text: 'Web & In-App Push',
    delay: '3',
  },
  {
    icon: '💥',
    title: 'Pop Traffic',
    text: 'Popunder / Interstitial',
    delay: '4',
  },
];

function Channels() {
  return (
    <section className="section traffic" id="traffic">
      <div className="container">
        <div className="sec-center" data-a="up">
          <p className="eyebrow">Traffic Sources We Master</p>
          <h2 className="sec-title">
            Every Major <span className="text-blue">Channel</span>
          </h2>
          <p className="sec-sub">
            Full-stack traffic expertise across paid, native, push and programmatic channels worldwide.
          </p>
        </div>

        <div className="src-grid">
          {channels.map((channel) => (
            <article className="src-card" data-a="scale" data-d={channel.delay} key={channel.title}>
              <div className="src-ico">{channel.icon}</div>
              <h3 className="src-name">{channel.title}</h3>
              <p className="src-sub">{channel.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Channels;