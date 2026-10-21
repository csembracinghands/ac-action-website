import { useId } from 'react';
import { brand } from '../content/site.js';

/**
 * AC monogram + wordmark, redrawn as SVG from the client's business card
 * (solid wedge "A" with a small base notch, overlapped by an open "C" ring).
 * Replace with the client's master logo file when supplied.
 */
export function Monogram({ className = '' }) {
  const uid = useId().replace(/:/g, '');
  const g = `gold-${uid}`;
  return (
    <svg className={`monogram ${className}`} viewBox="0 0 150 100" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={g} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#aa8548" />
          <stop offset=".42" stopColor="#e2c78c" />
          <stop offset=".55" stopColor="#f3e2b4" />
          <stop offset="1" stopColor="#a78856" />
        </linearGradient>
      </defs>
      {/* A: solid wedge with a small notch cut from the base */}
      <path d="M56 4 L100 94 L66 94 L56 76 L46 94 L12 94 Z" fill={`url(#${g})`} />
      {/* C: open ring, overlapping the A's upper-right leg */}
      <path d="M133.61 49.57 A40 40 0 1 0 115.2 77.92 L107.78 66.05 A26 26 0 1 1 119.75 47.62 Z" fill={`url(#${g})`} />
    </svg>
  );
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
