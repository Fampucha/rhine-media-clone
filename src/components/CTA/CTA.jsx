import './CTA.scss';

function CTA() {
  return (
    <>
    <section className="cta" id="contacts">
      <div className="container">
        <div className="cta__box" data-a="scale">
          <p className="eyebrow cta__eyebrow">Let's Scale Together</p>

          <h2 className="cta__title">
            Ready to <span className="text-gold">Maximize</span> Your ROI?
          </h2>

          <p className="cta__text">
            Join the brands and affiliate partners who trust Rhine Media to deliver performance at scale,
            in every major GEO.
          </p>

          <div className="cta__actions">
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

            <a href="#contacts" className="btn btn-gold-outline">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default CTA;
