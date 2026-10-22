import TopBar from './components/TopBar.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Range from './components/Range.jsx';
import Machines from './components/Machines.jsx';
import Benefits from './components/Benefits.jsx';
import Service from './components/Service.jsx';
import Coverage from './components/Coverage.jsx';
import Faq from './components/Faq.jsx';
import ContactPanel from './components/ContactPanel.jsx';
import Footer from './components/Footer.jsx';
import LegalPage from './components/LegalPage.jsx';
import { legalPages } from './content/legal.js';
import { useReveals } from './hooks/useReveals.js';

/**
 * Static trust site following the leaflet order:
 * cover → introduction → vending offering (range + machines) → workplace
 * benefits → service & coverage → questions → contact.
 *
 * Also serves the legal pages (Terms, Privacy, Refunds) at their own path —
 * matched against window.location.pathname. No router library: this is a
 * handful of static pages, not an app that needs client-side navigation.
 */
export default function App() {
  useReveals();
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const legalContent = legalPages.find((p) => p.path === path);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <TopBar />
      <Header />
      <main id="main" tabIndex={-1}>
        {legalContent ? (
          <LegalPage content={legalContent} />
        ) : (
          <>
            <Hero />
            <About />
            <Range />
            <Machines />
            <Benefits />
            <Service />
            <Coverage />
            <Faq />
            <ContactPanel />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
