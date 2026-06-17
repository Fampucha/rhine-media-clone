import './Footer.scss';

const verticalLinks = [
  'Dating Traffic',
  'Nutra Campaigns',
  'Gambling / iGaming',
  'Sweepstakes',
  'Crypto Offers',
  'Adult',
];

const trafficLinks = [
  'Google Ads',
  'Meta Ads',
  'TikTok Ads',
  'PropellerAds',
  'Native Ads',
  'Push & Pop',
];

const companyLinks = [
  {
    label: 'About Rhine Media',
    href: '#why-us',
  },
  {
    label: 'Contact Us',
    href: '#contacts',
  },
  {
    label: 'Partners',
    href: '#partners',
  },
  {
    label: 'Terms of Service',
    href: '#',
  },
  {
    label: 'Privacy Policy',
    href: '#',
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cols">
          <div>
            <a href="/" className="logo" aria-label="Rhine Media home">
              <div className="logo-mark">RM</div>
              <div className="logo-name">
                Rhine <span>Media</span>
              </div>
            </a>

            <p className="fb-desc">
              Premium performance media buying for the world's most ambitious advertisers and affiliate partners.
              Built for scale. Optimised for ROI.
            </p>

            <div className="footer-social">
              <a href="#" className="soc-btn" aria-label="Telegram">
                ✈
              </a>
              <a href="#" className="soc-btn" aria-label="LinkedIn">
                in
              </a>
              <a href="#" className="soc-btn" aria-label="Twitter / X">
                𝕏
              </a>
              <a href="#" className="soc-btn" aria-label="Skype">
                ☁
              </a>
            </div>
          </div>

          <div>
            <h3 className="fc-head">Verticals</h3>
            <ul className="fc-links">
              {verticalLinks.map((link) => (
                <li key={link}>
                  <a href="#verticals">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="fc-head">Traffic Sources</h3>
            <ul className="fc-links">
              {trafficLinks.map((link) => (
                <li key={link}>
                  <a href="#traffic">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="fc-head">Company</h3>
            <ul className="fc-links">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copy">
            © 2026 Rhine Media. All rights reserved.{' '}
            <span className="footer-domain">rhine-media.com</span>
          </p>

          <nav className="f-legal" aria-label="Legal">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#contacts">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;