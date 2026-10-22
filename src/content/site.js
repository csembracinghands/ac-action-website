/**
 * AC-Action Ltd — website v2 content (static trust site).
 *
 * Client direction (v2):
 *   - Purpose: people who receive the leaflet / business card visit the site
 *     to see AC-Action is a genuine business. Static, brochure-like.
 *   - It is an AMENITIES service. AC-Action installs, maintains, services and
 *     restocks the machines (confirmed).
 *   - Never mention commission, profit splits or costs.
 *   - No enquiry form. Generic photos for now. Privacy policy to follow.
 *   - No service-area checker or radius figure — removed on the client's
 *     instruction (2026-10-21). Coverage is described in words only.
 *   - Layout modelled on exactvending.co.uk/free-business-vending-machines,
 *     following the leaflet order: cover, introduction, vending offering,
 *     workplace benefits, service & coverage, contact.
 *   - Name is "AC-Action" (never "Ac Action" or "AC Action Show").
 */

const media = (file) => `${import.meta.env.BASE_URL}media/${file}`;

export const brand = {
  // Used only by the Logo wordmark (header, footer, contact panel).
  name: 'AC-Action Ltd',
  legalName: 'AC-Action Ltd',
  descriptor: 'Vending Solutions',
  strapline: ['Snacks', 'Drinks', 'More'],
  tagline: 'Bringing convenience to your building.',
};

/** Confirmed by the client 2026-10-21. */
export const contact = {
  phone: '+44 7466 842330',
  email: 'acactionltd@gmail.com',
  website: 'ac-action.com',
  area: 'Nottingham and the surrounding area',
  address: {
    line1: '82a James Carter Road',
    line2: 'Mildenhall',
    country: 'United Kingdom',
    postcode: 'IP28 7DE',
  },
  companyNumber: '17480497',
  registration: 'Registered in England & Wales',
  privacyPolicyUrl: '', // client is drawing up the privacy policy
};

export const topBar = 'Workplace vending machines — installed, maintained and restocked around Nottingham and the surrounding area';

export const nav = {
  links: [
    { label: 'About', href: '#about' },
    { label: 'What we stock', href: '#range' },
    { label: 'Our machines', href: '#machines' },
    { label: 'Our service', href: '#service' },
    { label: 'Area', href: '#coverage' },
  ],
  cta: { label: 'Get in touch', href: '#contact' },
};

/** Generated sector photography and generic stock photography — see README for credits. */
export const photos = {
  warehouse: { src: media('warehouse-b2b.webp'), width: 1536, height: 1024, alt: 'Warehouse colleagues taking a break beside a stocked vending machine in an active distribution centre.' },
  callcentre: { src: media('callcentre-b2b.webp'), width: 1536, height: 1024, alt: 'Call-centre colleagues taking a short break beside a stocked vending machine.' },
  officeVending: { src: media('office-vending.webp'), width: 1600, height: 1067, alt: 'A bright office break area with a glass-fronted vending machine beside recycling bins.' },
  machineSnack: { src: media('machine-snack.webp'), width: 900, height: 1350, alt: 'A glass-fronted snack vending machine stocked with crisps and chocolate bars.' },
  machineCombo: { src: media('machine-combo.webp'), width: 1000, height: 1000, alt: 'A combination vending machine with snacks on the upper shelves and bottled water and cans below.' },
  machineDrinks: { src: media('machine-drinks.webp'), width: 900, height: 1357, alt: 'A glass-fronted drinks vending machine stocked with bottles and cans.' },
  office: { src: media('office-b2b.webp'), width: 1536, height: 1024, alt: 'Office colleagues using a stocked vending machine in a workplace break area.' },
};

/** Cover. The machine plays a short vend animation once on load. */
export const hero = {
  eyebrow: 'Workplace amenities',
  heading: 'Workplace vending, installed and looked after.',
  lead: 'AC-Action provides snack and drink vending machines as an amenity for warehouses, offices, call centres and high-rise buildings — and we maintain, service and restock them for you.',
  primaryCta: { label: 'Get in touch', href: '#contact' },
  secondaryCta: { label: 'Our service area', href: '#coverage' },
  // Items vended in the intro animation (land beside the machine).
  vend: [
    { key: 4, item: { type: 'crisps', variant: 'amber' } },
    { key: 7, item: { type: 'chocolate', variant: 'purple' } },
    { key: 10, item: { type: 'can', variant: 'coral' } },
  ],
  trust: [
    { title: 'Installed for you', body: 'Delivered, positioned and set up' },
    { title: 'Maintained & restocked', body: 'Serviced and kept stocked by us' },
    { title: 'Local business', body: 'Serving Nottingham and nearby' },
  ],
};

/** Panel 2 — business introduction. */
export const about = {
  id: 'about',
  eyebrow: 'About AC-Action',
  heading: 'A local vending amenity for your building.',
  body: [
    'AC-Action Ltd places vending machines stocked with crisps, chocolate and drinks in workplaces across Nottingham and the surrounding area.',
    'It is a simple amenity for the people who use your building every day. We install the machine, keep it stocked, and maintain and service it — so it is one less thing for you or your facilities team to think about.',
  ],
  photo: 'officeVending',
};

/** Panel 3 — vending offering. */
export const range = {
  id: 'range',
  eyebrow: 'What we stock',
  heading: 'Snacks and drinks for every break.',
  intro: 'A familiar, well-stocked selection across three ranges, chosen to suit the people using your building.',
  categories: [
    {
      title: 'Crisps & snacks',
      points: ['Popular crisps and savoury snacks', 'Quick options between tasks or calls'],
      products: [{ type: 'crisps', variant: 'amber' }, { type: 'crisps', variant: 'red' }, { type: 'crisps', variant: 'blue' }],
    },
    {
      title: 'Chocolate & confectionery',
      points: ['Chocolate bars and sweet treats', 'A mid-shift lift for staff and visitors'],
      products: [{ type: 'chocolate', variant: 'purple' }, { type: 'chocolate', variant: 'red' }, { type: 'chocolate', variant: 'gold' }],
    },
    {
      title: 'Bottled & canned drinks',
      points: ['Chilled cans and soft drinks', 'Bottled water'],
      products: [{ type: 'can', variant: 'coral' }, { type: 'bottle' }, { type: 'can', variant: 'teal' }],
    },
  ],
};

/** Machines we install (stock photos — the exact model is matched to each site). */
export const machines = {
  id: 'machines',
  eyebrow: 'Our machines',
  heading: 'Machines we install.',
  intro: 'Modern, reliable machines matched to the size of your site and the people using it.',
  items: [
    { photo: 'machineSnack', title: 'Snack machine', body: 'Crisps, chocolate and confectionery on spiral shelves.', tag: 'Snacks' },
    { photo: 'machineCombo', title: 'Combination machine', body: 'Snacks and chilled drinks in one cabinet, ideal where space is limited.', tag: 'Snacks + drinks' },
    { photo: 'machineDrinks', title: 'Drinks machine', body: 'Chilled cans, soft drinks and bottled water.', tag: 'Drinks' },
  ],
};

/** Panel 4 — workplace benefits ("Why AC-Action"). */
export const benefits = {
  id: 'benefits',
  eyebrow: 'Why AC-Action',
  heading: 'A better building to work in.',
  intro: 'Convenient access to snacks and drinks is a simple upgrade to the amenities your building offers.',
  items: [
    { title: 'Refreshments on site', body: 'Staff and building users can grab a drink or snack without leaving the premises.' },
    { title: 'Suits every shift', body: 'A machine is there whenever your building is open, including early starts, late finishes and night shifts.' },
    { title: 'No extra work for your team', body: 'We install, restock, maintain and service the machine for you.' },
    { title: 'A visible amenity', body: 'A well-stocked machine shows staff and visitors the building is looked after.' },
    { title: 'Ideal for 50+ employees', body: 'Best suited to workplaces and buildings with around fifty or more people on site.' },
  ],
  sectorsHeading: 'Operating in',
  sectors: [
    { title: 'Warehouses', photo: 'warehouse', body: 'Refreshments within reach across long shifts.' },
    { title: 'Call centres', photo: 'callcentre', body: 'Quick breaks without leaving the building.' },
    { title: 'Office spaces', photo: 'office', body: 'A better break area for teams of every size.' },
  ],
};

/** Panel 5 — service ("How we look after your machine") and coverage. */
export const service = {
  id: 'service',
  eyebrow: 'Our service',
  heading: 'We look after everything.',
  intro: 'Once your machine is in place, we keep it clean, stocked and working.',
  blocks: [
    { icon: 'install', title: 'Installation', body: 'We deliver your machine, position it in the agreed spot and set it up ready to use.' },
    { icon: 'restock', title: 'Restocking', body: 'We keep your machine stocked with the products your people buy most.' },
    { icon: 'service', title: 'Maintenance & servicing', body: 'We service the machine and deal with any faults to keep it working.' },
    { icon: 'local', title: 'One local contact', body: 'You deal directly with a local Nottingham-area business.' },
  ],
};

/** Panel 5b — coverage. Described in words only: no checker, no radius figure. */
export const coverage = {
  id: 'coverage',
  eyebrow: 'Service area',
  heading: 'Nottingham and the surrounding area.',
  body: 'We look after workplaces across Nottingham and the surrounding area. Get in touch and we’ll confirm whether we can cover your site.',
  cta: { label: 'Get in touch', href: '#contact' },
};

export const faq = {
  id: 'faq',
  eyebrow: 'Questions',
  heading: 'Questions and answers.',
  items: [
    { q: 'Which areas do you cover?', a: 'We look after workplaces in Nottingham and the surrounding area. Contact us with your location and we’ll confirm whether we can cover your site.' },
    { q: 'What types of workplaces do you work with?', a: 'Warehouses, call centres, high-rise and multi-tenant buildings, and office spaces — generally sites with around fifty or more people.' },
    { q: 'What products are in the machines?', a: 'Crisps and snacks, chocolate and confectionery, and bottled and canned drinks. The selection is chosen to suit the people using your building.' },
    { q: 'Who looks after the machine?', a: 'We do. AC-Action installs, maintains, services and restocks every machine we place.' },
    { q: 'How do we get started?', a: 'Call or email us with a few details about your building and we will arrange a conversation.' },
  ],
};

export const contactSection = {
  id: 'contact',
  eyebrow: 'Contact',
  heading: 'Get in touch.',
  intro: 'Call or email us to talk about a vending machine for your building.',
};

export const footer = {
  links: [
    ...nav.links,
    { label: 'Questions', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ],
  legalLinks: [
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Privacy Notice', href: '/privacy' },
    { label: 'Refunds & Product Faults', href: '/refunds' },
  ],
};
