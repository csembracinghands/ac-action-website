> **v2 note:** this brief describes v1. v2 follows the client direction in README.md:
> - a static trust site
> - an amenities service
> - no form
> - no commission, profit-split or "free" wording
> - layout modelled on Exact Vending
> - motion limited to a one-off hero vend

# AC-Action — website design brief

Brochure-style website for AC-Action Ltd, built with the Cinematic Website Toolset workflow
(`/Users/tes/Documents/Business/Website building toolset`). The client brief was a six-panel A5
portrait leaflet; this site is that leaflet, made for the web.

## Client facts (source: brief + business card)

- **Name:** **AC-Action** (company: AC-Action Ltd). The card template's "AC-Action Show" is a
  mistake. "Show" must never appear.
- **Descriptor:** Vending Solutions · Snacks · Drinks · More.
- **Offer:** crisps & snacks, chocolate & confectionery, bottled & canned drinks.
- **Sites:** warehouses, call centres, high-rise buildings, office spaces. Ideal for workplaces with 50+ employees.
- **Area:** businesses in Nottingham and the surrounding area (no fixed radius is published).
- **Lines:** "Bringing convenience to your building." · "Quality snacks and drinks, conveniently placed in your workplace."
- **Audience:** business owners, facilities managers, building decision-makers.
- **Goal:** introduce the business, show the workplace benefit, and drive enquiries with a clear CTA and contact details.

## Level 2 — References

- **Business card:** colour, type and the gold diagonal stripe motif.
- **Brochures (client-supplied):**
  - tri-fold panel rhythm
  - "Why partner with us" checklists with round ticks
  - numbered "How it works" steps
  - service icons
  - the cover as a strong brand moment
- **Six reference sites:** captured in `research/` (summary in `research/reference-summary.md`).
  - **Brodericks:** best visual.
  - **easyVend and Westomatic:** best operational detail.
  - **The rest:** flat, used for content only.

## Level 3 — Design system

- **Colour** (sampled from the card image):
  - navy `#0d1823` / `#141c26` / `#19222c`
  - gold `#aa8548 → #c7a569 → #d5b57a` (gradient, with a highlight `#f0dca8`)
  - cream `#f3f1ed`
  - gold-ink `#7a5c27` for small gold text on cream (AA contrast)
- **Type:** Montserrat Variable (OFL, self-hosted). The card's geometric caps use wide tracking (0.16–0.4em); headings are 700 weight.
- **Shape:** 6px buttons and inputs, 14px cards, gold gradient fills on primary actions.
- **Rhythm:** six "panels", alternating navy and cream, each numbered `0X / 06` like a leaflet.

## Signature motion

- **Hero leaflet:** an A5 cover drawn from the card. On desktop the hero pins, the copy steps aside and
  the leaflet glides to centre. The left flap then the right flap swing open in 3D (GSAP drives a CSS
  `--fold` variable) to reveal three inside panels.
  - Native scrolling, roughly 1.3 viewports.
  - Mobile, reduced-motion and no-JS visitors see the closed cover.
- **Product models:** crisps, chocolate, cans and bottles as SVG. They float with scroll parallax and bob gently.
- **Other motion:** section reveals (opacity only, focus-safe). The service-area checker and
  radius map were removed on the client's instruction (2026-10-21).

## Level 4 — Media

- **Photography:** Unsplash Licence stand-ins (see README).
- **Product art:** original SVG.
- **Shot list for the client:**
  1. AC-Action machine(s) on site, eye level, in a well-lit staff area
  2. Close-up of a stocked machine front (crisps, chocolate, drinks)
  3. Restocking or cleaning (hands only)
  4. One real client site per sector (warehouse, call centre, high-rise, office)

## Confirmed by the client (2026-10-21)

- Phone: +44 7466 842330 · Email: acactionltd@gmail.com · Website: ac-action.com
- Registered office: 82a James Carter Road, Mildenhall, United Kingdom, IP28 7DE
- Company number 17480497, registered in England & Wales
- No service-area checker or mile radius — coverage is described in words only

## Still to confirm with the client

- Logo master file (the current mark is an exact crop from the business card photo, not a redraw)
- Service arrangements: installation, restocking frequency, maintenance and fault reporting
- Payment options (cash / contactless)
- Commercial model and costs to the host
- Exact towns to list under "Service area"
- Privacy policy
- Analytics consent
