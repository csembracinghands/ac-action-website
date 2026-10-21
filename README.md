# AC-Action — website v2

Static trust website for **AC-Action Ltd**, a workplace vending amenity serving Nottingham and the
surrounding area. People who receive the leaflet or business card can visit it to see that AC-Action
is a genuine local business. Built with React + Vite, plain CSS and a little GSAP.

v1 (the cinematic brochure, with an enquiry form) is a separate repo: `pashovt/ac-action-website`.

## What changed from v1 (client direction)

- **Amenities service.** AC-Action installs, maintains, services and restocks the machines.
- **No mention** of commission, profit splits, costs or "free".
- **No enquiry form.** The contact section shows details only (phone, email, website, area, company name).
- **No service-area checker or radius figure.** Removed completely on the client's instruction
  (2026-10-21) — coverage is described in words only, with a "Get in touch" button.
- **Traditional layout**, modelled on the client's reference
  (exactvending.co.uk/free-business-vending-machines): top bar, header, dark banner, then light
  sections with photos, bullet lists and a Q&A. Navy and gold are kept from the business card.
- **Logo:** the AC mark, redrawn from the client's business card photo. **Name:** AC-Action (never
  "Ac Action" or "AC-Action Show").
- **Photos:** generic stock images for now (credits below). They include real vending machine
  photos in "Machines we install" and an office break area with a machine in "About". There are no
  "illustrative" captions on the page.
- **Company details.** Confirmed by the client (2026-10-21): phone, email, website, company number
  and registered office, in `src/content/site.js → contact`. The registered office and company
  number appear in the footer, as UK law requires.
- **Privacy policy:** the client is drawing it up. Set `contact.privacyPolicyUrl` and a footer link appears.
- **Motion kept to a minimum:**
  - On page load, the hero machine plays a short vend: three keypad presses, and each item pops out
    of the delivery bin and lands beside the machine. It plays once and does not pin the scroll.
  - Gentle fade-ups as sections appear.
  - Softly bobbing product models.
  - With reduced motion, everything is static.

## Page structure (leaflet order)

1. **Cover (hero)**, plus a three-point trust strip
2. **About** (photo and introduction)
3. **What we stock** (three ranges with product models) and **Machines we install** (snack,
   combination and drinks; stock photos)
4. **Why AC-Action** (benefits checklist, plus photos of three sectors: warehouses, call centres and offices)
5. **Our service** (installation, restocking, maintenance and servicing, one local contact) and
   **Service area** (places, in words, with a "Get in touch" button)
6. **Questions and answers**, then **Contact** (details only), then the footer

## Run locally

Requires Node.js 18.18 or later.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build to dist/
npm run preview   # serve dist/
```

## Deploy (Vercel)

- Framework: Vite. Build: `npm run build`. Output: `dist`.
- Every push to `main` deploys to production.
- No server functions and no environment variables are required (the postcode checker and its
  `api/check-postcode.js` function were removed).

## Editing

- **All words, contact details and image paths:** `src/content/site.js`.
- **Phone, email, website, address, company number:** `contact` in `site.js`. While a field is
  empty, the page shows "to be confirmed" rather than a dead link. When a phone number is set it
  also appears in the header.
- **Colours and type:** `src/styles/tokens.css`. **Layout:** `src/styles/sections.css`.
- **Logo:** `src/components/Logo.jsx`. This is a redrawn AC mark; replace it with the client's
  master logo file when it is supplied.
- **Hero vend animation:** `src/hooks/useVendIntro.js`. Which items are vended is set in
  `hero.vend` in `site.js`.

## Analytics (off by default)

`src/lib/analytics.js` loads Microsoft Clarity and captures UTMs only if `VITE_CLARITY_ID` is set.
Before enabling it, cover it in the privacy policy and add cookie consent.

## Launch checklist

- [x] Phone, email, company number and registered office confirmed and added (2026-10-21)
- [ ] Logo master file (current mark is redrawn from the business card photo; swap in when supplied)
- [ ] Privacy policy, linked via `contact.privacyPolicyUrl`
- [ ] Real photos of AC-Action machines and sites
- [ ] Point `ac-action.com` at this deployment, then remove `noindex` from `index.html` and the
      block in `public/robots.txt`
- [ ] Custom domain on Vercel

## Image credits (Unsplash Licence: free to use, no attribution required)

Generic stock photos, used until AC-Action has its own. They are not AC-Action machines, sites or clients.

| File | Photo | Photographer |
|---|---|---|
| `public/media/warehouse.webp` | [Empty modern warehouse](https://unsplash.com/photos/empty-modern-warehouse-interior-with-polished-concrete-floor-3lkaszxWfGc) | Craftsman Concrete Floors |
| `public/media/callcentre.webp` | [Open-plan office](https://unsplash.com/photos/people-working-at-desks-in-open-office-kN_kViDchA0) | Arlington Research |
| `public/media/office-vending.webp` | [Office break area with vending machine](https://unsplash.com/photos/black-and-blue-vending-machine-beside-brown-wooden-cabinet-2hELuLQcEWU) | Petr (@mpetrucho) |
| `public/media/machine-snack.webp` | [Snack vending machine](https://unsplash.com/photos/red-and-black-vending-machine-In51lypcCDA) | Denny Müller |
| `public/media/machine-combo.webp` | [Combination vending machine](https://unsplash.com/photos/grey-vending-machine-r74II0tE7tc) | Stéphan Valentin |
| `public/media/machine-drinks.webp` | [Drinks vending machine](https://unsplash.com/photos/vending-machine-with-assorted-beverage-drinks-qh8jrjbYQbo) | Maximilian Bungart |
| `public/media/workplace.webp` | [Office kitchen](https://unsplash.com/photos/a-kitchen-with-black-cabinets-and-a-white-counter-top-OI6D_VKxSMw) | Craig Lovelidge |

Product models and the favicon are original SVG. The logo mark is redrawn from the client's own
business card.
Font: Montserrat (SIL Open Font License) via Fontsource.
