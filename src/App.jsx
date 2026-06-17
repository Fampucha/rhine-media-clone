import { useEffect } from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Stats from './components/Stats/Stats';
import Verticals from './components/Verticals/Verticals';
import Channels from './components/Channels/Channels';
import Partners from './components/Partners/Partners';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

function App() {
   useEffect(() => {
    const revealEls = document.querySelectorAll('[data-a]');

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('vis');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -48px 0px',
      },
    );

    revealEls.forEach((el) => revealObserver.observe(el));

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  return (
    <>
      <Header />

      <main>
        <Hero />
        <Stats />
        <Verticals />
        <Channels />
        <Partners />
        <WhyChooseUs />
        <CTA />
      </main>

      <Footer />
    </>
  );
}

export default App;
