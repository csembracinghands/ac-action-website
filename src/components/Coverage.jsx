import { coverage } from '../content/site.js';
import PanelHead from './PanelHead.jsx';

/** Service area described in words only — no checker, map or individual-area list. */
export default function Coverage() {
  return (
    <section id={coverage.id} className="section coverage-v2" aria-labelledby="coverage-title">
      <div className="container coverage-v2__grid">
        <div className="coverage-v2__text">
          <PanelHead id="coverage-title" eyebrow={coverage.eyebrow} heading={coverage.heading} intro={coverage.body} />
          <a className="btn btn--gold" href={coverage.cta.href} data-reveal>
            {coverage.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
