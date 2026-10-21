import { brand } from '../content/site.js';

const mark = `${import.meta.env.BASE_URL}media/logo-mark.webp`;

/**
 * AC monogram — the exact mark cropped from the client's business card photo
 * (gold on navy, background removed), not a redrawn approximation. Replace
 * with the client's master logo file if one is supplied later.
 */
export function Monogram({ className = '' }) {
  return <img className={`monogram ${className}`} src={mark} alt="" width={447} height={261} aria-hidden="true" />;
}

export default function Logo({ stacked = false, className = '' }) {
  return (
    <span className={`logo${stacked ? ' logo--stacked' : ''} ${className}`}>
      <Monogram />
      <span className="logo__words">
        <span className="logo__name">{brand.name}</span>
        <span className="logo__desc">{brand.descriptor}</span>
      </span>
    </span>
  );
}
