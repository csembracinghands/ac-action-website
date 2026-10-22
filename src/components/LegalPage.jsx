import Stripes from './Stripes.jsx';

/**
 * Generic renderer for the legal pages (Terms, Privacy, Refunds) driven by
 * the structured content in src/content/legal.js. Keeps one component
 * instead of three near-identical ones.
 */
export default function LegalPage({ content }) {
  return (
    <section className="section legal-page" aria-labelledby="legal-title">
      <Stripes corner="tr" className="section__stripes" />
      <div className="container legal-page__container">
        <a className="legal-page__back" href="/">
          ← Back to home
        </a>
        <h1 id="legal-title" className="legal-page__title">
          {content.title}
        </h1>
        <p className="legal-page__updated">Last updated: {content.lastUpdated}</p>

        {content.sections.map((s) => (
          <article className="legal-page__section" key={s.heading}>
            <h2>{s.heading}</h2>
            {s.paragraphs?.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {s.facts ? (
              <dl className="legal-page__facts">
                {s.facts.map((f) => (
                  <div key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.href ? <a href={f.href}>{f.value}</a> : f.value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
            {s.beforeList?.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {s.list ? (
              <ul>
                {s.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
            {s.afterList?.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {s.afterListFinal?.map((p) => (
              <p key={p} className="legal-page__note">
                {p}
              </p>
            ))}
            {s.links ? (
              <p className="legal-page__links">
                {s.links.map((l) => (
                  <a key={l.href} href={l.href}>
                    {l.label}
                  </a>
                ))}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
