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
        <div className="footer__cols">
          <div className="footer__brand">
            <a href="/" className="footer__logo" aria-label="Rhine Media home">
              <p className="footer__logo-mark">RM</p>
              <p className="footer__logo-name">
                Rhine <span>Media</span>
              </p>
            </a>

            <p className="footer__description">
              Premium performance media buying for the world's most ambitious advertisers and affiliate partners.
              Built for scale. Optimised for ROI.
            </p>

            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Telegram">
                ✈
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                in
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter / X">
                𝕏
              </a>
              <a href="#" className="footer__social-link" aria-label="Skype">
                ☁
              </a>
            </div>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Verticals</h3>
            <ul className="footer__links">
              {verticalLinks.map((link) => (
                <li key={link}>
                  <a href="#verticals">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Traffic Sources</h3>
            <ul className="footer__links">
              {trafficLinks.map((link) => (
                <li key={link}>
                  <a href="#traffic">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__heading">Company</h3>
            <ul className="footer__links">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            © 2026 Rhine Media. All rights reserved.{' '}
            <span className="footer__domain">rhine-media.com</span>
          </p>

          <nav className="footer__legal" aria-label="Legal">
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
