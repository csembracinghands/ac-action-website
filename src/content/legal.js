/**
 * Legal pages (Terms & Conditions, Privacy Notice, Refunds & Product Faults
 * Policy) — text supplied by the client (CJ, AC-Action) 2026-10-22. Company
 * facts are pulled from `contact`/`brand` in site.js rather than restated,
 * so there is one place to update them.
 */
import { brand, contact } from './site.js';

const lastUpdated = '22 October 2026';

/** Rendered as a definition list by LegalPage. */
const companyFacts = [
  { label: 'Company name', value: brand.legalName },
  { label: 'Company number', value: contact.companyNumber },
  { label: 'Registered address', value: `${contact.address.line1}, ${contact.address.line2}, ${contact.address.country}, ${contact.address.postcode}` },
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { label: 'Telephone', value: contact.phone, href: `tel:${contact.phone.replace(/\s+/g, '')}` },
  { label: 'Website', value: contact.website, href: `https://${contact.website}` },
];

export const terms = {
  id: 'terms',
  path: '/terms',
  title: 'Website Terms and Conditions',
  lastUpdated,
  sections: [
    {
      heading: 'About us',
      paragraphs: [
        `This website is operated by ${brand.legalName}, a company registered in England and Wales.`,
        `In these terms, "we", "us" and "our" refer to ${brand.legalName}.`,
      ],
      facts: companyFacts,
    },
    {
      heading: 'Purpose of this website',
      paragraphs: [
        'This website provides information about our vending machine solutions and allows businesses and other interested parties to learn about our services and contact us.',
        'The information on this website is provided for general information purposes. Contacting us does not automatically create a contract or guarantee that we will provide services.',
      ],
    },
    {
      heading: 'Our services',
      paragraphs: [
        `${brand.legalName} supplies vending machine solutions for suitable business premises. Our services may include discussing vending machine placement, the products offered, installation arrangements and ongoing operational responsibilities.`,
        'The availability and suitability of a service will depend on the individual premises, the proposed arrangement and any agreement reached between the parties.',
      ],
    },
    {
      heading: 'Enquiries and quotations',
      paragraphs: [
        'You may contact us by telephone or email using the details provided on this website.',
        'Any quotation, proposal or other information we provide will be subject to its stated terms and validity period. We reserve the right to amend a quotation before it is accepted, where permitted by law.',
        'A telephone conversation, enquiry or preliminary proposal does not, by itself, create a binding agreement.',
      ],
    },
    {
      heading: 'Separate commercial agreements',
      paragraphs: [
        'Where we agree to install, operate or place vending machines at a business premises, the arrangement may be governed by a separate written agreement.',
        'That agreement will set out the relevant commercial terms, responsibilities, permissions, payment arrangements, maintenance obligations and other conditions applicable to the particular arrangement.',
        'Where a separate agreement applies, its terms will govern the relevant business relationship.',
      ],
    },
    {
      heading: 'Accuracy of website information',
      paragraphs: [
        'We make reasonable efforts to ensure that the information on this website is accurate and up to date. However, we do not guarantee that all information will always be complete, current or free from errors.',
        'We may update, amend or remove website content at any time.',
      ],
    },
    {
      heading: 'Website availability',
      paragraphs: [
        'We aim to keep the website accessible but do not guarantee uninterrupted availability. Access may occasionally be restricted because of maintenance, technical issues or circumstances outside our reasonable control.',
      ],
    },
    {
      heading: 'Acceptable use',
      paragraphs: ['You must not use this website:'],
      list: [
        'For any unlawful, fraudulent or misleading purpose.',
        'To attempt to gain unauthorised access to the website or its hosting systems.',
        'To introduce viruses, malicious code or other harmful material.',
        'In a way that damages, disrupts or interferes with the website or other users.',
        'To copy, misuse or reproduce website content in breach of applicable intellectual property laws.',
      ],
      afterList: ['We may take reasonable steps to protect the website and our business against misuse.'],
    },
    {
      heading: 'Intellectual property',
      paragraphs: [
        `Unless otherwise stated, the website's text, branding, logos, graphics and other original content belong to ${brand.legalName} or are used with permission.`,
        'You may view and print website content for your own personal or internal business reference. You must not reproduce, distribute, commercially exploit or modify our content without our prior written permission, except where permitted by law.',
      ],
    },
    {
      heading: 'Third-party websites',
      paragraphs: [
        'This website may contain links to external websites where appropriate. We do not control external websites and are not responsible for their content, availability, security or privacy practices.',
        "Visiting an external website is at your own discretion and subject to that website's terms.",
      ],
    },
    {
      heading: 'Limitation of liability',
      paragraphs: [
        'Nothing in these terms excludes or limits liability where doing so would be unlawful, including liability for fraud, fraudulent misrepresentation or any other liability that cannot legally be excluded or limited.',
        'To the extent permitted by law, we exclude liability for losses arising from reliance on general website information that is not intended to constitute a formal quotation, professional advice or a binding commercial agreement.',
        'To the extent permitted by law, we are not liable for indirect or consequential losses arising solely from the use of, or inability to use, this website.',
        'These terms do not replace or override any separate written agreement or any rights that cannot legally be excluded.',
      ],
    },
    {
      heading: 'Privacy',
      paragraphs: [
        'We handle personal information in accordance with our separate Privacy Notice, available through the website footer.',
        'Our Privacy Notice explains what personal information we may collect, why we use it, how we protect it and what rights individuals have.',
      ],
      links: [{ label: 'Read our Privacy Notice', href: '/privacy' }],
    },
    {
      heading: 'Changes to these terms',
      paragraphs: [
        'We may update these Terms and Conditions from time to time. The latest version will be published on this website with an updated revision date.',
        'You should review this page periodically.',
      ],
    },
    {
      heading: 'Governing law',
      paragraphs: [
        'These Terms and Conditions are governed by the laws of England and Wales, subject to any mandatory legal protections that apply to the person using the website.',
        'The courts of England and Wales will have jurisdiction where legally appropriate.',
      ],
    },
    {
      heading: 'Contact us',
      paragraphs: ['If you have any questions about these Terms and Conditions, please contact:'],
      facts: companyFacts,
    },
  ],
};

export const privacy = {
  id: 'privacy',
  path: '/privacy',
  title: 'Privacy Notice',
  lastUpdated,
  sections: [
    {
      heading: 'Who we are',
      paragraphs: [
        `${brand.legalName} is responsible for handling personal information in connection with our website and business activities.`,
        `In this notice, "we", "us" and "our" refer to ${brand.legalName}.`,
        'This Privacy Notice explains how we collect, use, store and protect personal information and describes the rights individuals may have under applicable data protection law, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.',
      ],
      facts: companyFacts,
    },
    {
      heading: 'What personal information we collect',
      paragraphs: ['The information we handle will depend on how you interact with our business. It may include:'],
      list: [
        'Contact information: your name, business name, telephone number, email address and business address.',
        'Business enquiry information: details you provide when discussing vending machine placement, business premises, proposals or our services.',
        'Communications: information contained in telephone conversations, emails and other correspondence with us.',
        'Contract and transaction information: details necessary to prepare proposals, enter into agreements, manage our business relationships and maintain relevant records.',
        'Website technical information: limited technical information that may be processed by our website hosting provider or server as part of operating and securing the website, where applicable.',
      ],
      afterList: [
        'We do not operate a website contact form. If you contact us, this will generally be by telephone or email.',
        'Please avoid providing sensitive personal information unless it is genuinely necessary for the matter being discussed.',
      ],
    },
    {
      heading: 'How we obtain personal information',
      paragraphs: ['We may obtain personal information:'],
      list: [
        'Directly from you when you call or email us.',
        'From your employer or business where they provide your details in connection with a business enquiry or proposed arrangement.',
        'From publicly available business sources where we use them appropriately for legitimate business purposes.',
        'Through the technical operation and security of our website, where applicable.',
      ],
    },
    {
      heading: 'Why we use personal information',
      paragraphs: ['We may use personal information to:'],
      list: [
        'Respond to telephone calls, emails and business enquiries.',
        'Discuss vending machine requirements and assess the suitability of proposed premises.',
        'Prepare quotations, proposals and commercial agreements.',
        'Establish and manage business relationships.',
        'Communicate about services, installations, maintenance or other agreed arrangements.',
        'Maintain business, accounting and contractual records.',
        'Protect our website, business and property against fraud, misuse or security threats.',
        'Meet legal and regulatory obligations.',
        'Establish, exercise or defend legal claims where necessary.',
      ],
      afterList: ['We will not use personal information for purposes incompatible with the purpose for which it was collected without an appropriate lawful basis.'],
    },
    {
      heading: 'Our lawful bases for processing',
      paragraphs: [
        'Data protection law requires us to have a lawful basis for processing personal information. Depending on the circumstances, we may rely on:',
      ],
      list: [
        'Legitimate interests: where processing is necessary for our legitimate business interests, such as responding to relevant business enquiries, managing business relationships and protecting our operations, provided those interests are not overridden by the individual’s rights and interests.',
        'Contract: where processing is necessary to take steps requested by an individual before entering into a contract or to perform a contract with them.',
        'Legal obligation: where we must process information to comply with applicable law.',
        'Consent: where consent is the appropriate legal basis, we will seek it and explain how it can be withdrawn.',
      ],
      afterList: ['We will consider the appropriate lawful basis for each relevant processing activity.'],
    },
    {
      heading: 'Business communications and marketing',
      paragraphs: [
        'We may contact business representatives about relevant vending machine services and proposals where we are permitted to do so under applicable data protection and electronic marketing laws.',
        'Where we use legitimate interests, we will consider the relevance of the communication, the reasonable expectations of the individual and their right to object.',
        `If you receive marketing communications from us, you can ask us to stop by contacting ${contact.email}.`,
        'We will respect applicable rules governing telephone calls, email marketing and objections to direct marketing. We will not treat this Privacy Notice as permission to send marketing communications where separate consent or another legal requirement applies.',
      ],
    },
    {
      heading: 'Who we share information with',
      paragraphs: ['We do not sell personal information.', 'We may share relevant information where necessary with:'],
      list: [
        'Our website hosting or technical service provider, where that provider processes information on our behalf.',
        'Professional advisers, such as accountants or legal advisers, where necessary.',
        'Banks, payment providers or other service providers where required for a relevant business transaction.',
        'Regulators, law enforcement agencies or other authorities where we are legally required or permitted to do so.',
        'Other parties where sharing is necessary to establish, exercise or defend legal claims.',
      ],
      afterList: [
        'We will only share information where there is an appropriate reason and lawful basis. We do not use advertising pixels, embedded maps or other third-party website tools as part of our current website setup.',
      ],
    },
    {
      heading: 'International transfers',
      paragraphs: [
        'If personal information is transferred outside the United Kingdom, we will take steps to ensure that the transfer complies with applicable data protection law. This may include using an adequacy regulation or decision, appropriate safeguards or another legally permitted transfer mechanism.',
        'Whether an international transfer occurs will depend on the services and systems actually used to operate our business and website.',
      ],
    },
    {
      heading: 'How long we keep personal information',
      paragraphs: [
        'We keep personal information only for as long as reasonably necessary for the purposes for which it was collected, including legal, accounting, contractual and reporting requirements.',
        'Retention periods may vary depending on the type of information and the circumstances. For example:',
      ],
      list: [
        'Business enquiries may be retained for an appropriate period to follow up on proposals and maintain business records.',
        'Contractual and financial records may be retained for the periods required by law.',
        'Information relevant to a dispute or legal claim may be retained for as long as necessary to address that matter.',
      ],
      afterList: ['When information is no longer required, we will take reasonable steps to delete it or dispose of it securely, subject to applicable legal requirements.'],
    },
    {
      heading: 'Website cookies and technical data',
      paragraphs: [
        'We do not intentionally use advertising cookies, advertising pixels, embedded maps or third-party tracking tools on our website.',
        'Our website hosting provider or website platform may nevertheless process limited technical information or use strictly necessary technologies to deliver, secure or maintain the website. We will check the actual configuration and handle any cookies or similar technologies in accordance with applicable law.',
        "If our website's functionality changes or we introduce tools that collect additional personal information, we will update this Privacy Notice as appropriate and obtain consent where legally required.",
      ],
    },
    {
      heading: 'How we protect personal information',
      paragraphs: [
        'We take reasonable technical and organisational measures to protect personal information against unauthorised access, accidental loss, alteration, disclosure or misuse.',
        'However, no website, email system or method of electronic storage can be guaranteed to be completely secure.',
      ],
    },
    {
      heading: 'Your data protection rights',
      paragraphs: ['Depending on the circumstances and applicable law, you may have the right to:'],
      list: [
        'Access: request a copy of personal information we hold about you.',
        'Rectification: ask us to correct inaccurate or incomplete information.',
        'Erasure: ask us to delete personal information where the legal conditions are met.',
        'Restriction: ask us to restrict how we use your information in certain circumstances.',
        'Data portability: request certain information in a structured, commonly used and machine-readable format where the right applies.',
        'Object: object to processing based on legitimate interests, including direct marketing.',
        'Withdraw consent: withdraw consent where we rely on consent as our lawful basis.',
      ],
      afterList: [
        'These rights are subject to legal conditions and exceptions. We may need to verify your identity before responding to a request.',
        `To exercise a right, contact ${contact.email}. We will respond within the timeframe required by applicable law.`,
      ],
    },
    {
      heading: 'Complaints',
      paragraphs: [
        'If you have concerns about how we handle your personal information, please contact us first so we can try to resolve the issue.',
        "You also have the right to complain to the UK's Information Commissioner's Office (ICO):",
      ],
      links: [
        { label: 'Make a complaint to the ICO', href: 'https://ico.org.uk/make-a-complaint/' },
        { label: 'ICO website', href: 'https://ico.org.uk/' },
      ],
    },
    {
      heading: "Children's information",
      paragraphs: [
        'Our website and business services are directed towards businesses and their representatives, rather than children. We do not knowingly seek to collect personal information from children through the website.',
        'If you believe a child has provided us with personal information unnecessarily, please contact us so we can review the circumstances.',
      ],
    },
    {
      heading: 'Automated decision-making',
      paragraphs: [
        'We do not intend to make decisions about individuals based solely on automated processing, including profiling, that produce legal or similarly significant effects in connection with this website.',
        'If our practices change, we will update this notice and comply with any applicable legal requirements.',
      ],
    },
    {
      heading: 'Links to other websites',
      paragraphs: [
        'Our website may contain links to external websites where appropriate. We are not responsible for the privacy practices or content of those websites.',
        'You should review the privacy notices of external websites before providing personal information to them.',
      ],
    },
    {
      heading: 'Changes to this Privacy Notice',
      paragraphs: [
        'We may update this Privacy Notice to reflect changes in our business, website, systems or legal obligations.',
        'The latest version will be published on our website, together with the date it was last updated.',
      ],
    },
    {
      heading: 'Contact us',
      paragraphs: ['For questions about this Privacy Notice or how we handle personal information, contact:'],
      facts: companyFacts,
    },
  ],
};

export const refunds = {
  id: 'refunds',
  path: '/refunds',
  title: 'Refunds & Product Faults Policy',
  lastUpdated,
  sections: [
    {
      heading: 'Our refund policy',
      paragraphs: [
        `${brand.legalName} aims to provide a reliable vending machine service. If you pay for a product that does not dispense, are charged incorrectly, or receive a faulty or unsafe product, please contact us so we can investigate and help resolve the issue.`,
      ],
    },
    {
      heading: 'How to request a refund or report a fault',
      paragraphs: ['Please contact us using the details below:'],
      facts: companyFacts.filter((f) => f.label === 'Telephone' || f.label === 'Email'),
      beforeList: ['To help us investigate your request, please provide:'],
      list: [
        'The location of the vending machine.',
        'The date and approximate time of the incident.',
        'The product involved.',
        'A brief description of what happened.',
        'The amount paid and, if available, your payment receipt or transaction reference.',
      ],
      afterListFinal: ['Please do not send your full payment-card details.'],
    },
    {
      heading: 'Failed dispenses and incorrect charges',
      paragraphs: [
        'If you have paid for a product but it has not been dispensed, or you believe you have been charged incorrectly, contact us with the relevant details.',
        'We will review your request and, where reasonably necessary, check the machine or payment transaction. Where a payment was taken but no product was supplied, or a refund is otherwise legally due, we will arrange an appropriate remedy.',
        'Depending on the circumstances, this may include a refund or replacement where appropriate and legally permitted.',
      ],
    },
    {
      heading: 'Faulty or unsafe products',
      paragraphs: [
        'If you receive a product that appears faulty, damaged or unsafe, please do not consume it.',
        'Contact us promptly and explain the issue so that we can investigate and take any appropriate action. Please clearly identify any potential safety concern when contacting us.',
      ],
    },
    {
      heading: 'Response and refund processing times',
      paragraphs: [
        'We aim to respond to refund requests and product fault reports as soon as reasonably possible.',
        'The time taken for a refund to reach you may depend on the payment method and payment provider. We will comply with any applicable legal deadlines and requirements.',
      ],
    },
    {
      heading: 'Your statutory rights',
      paragraphs: [
        'This policy does not affect your statutory consumer rights under applicable UK law.',
        'Nothing in this policy excludes or restricts any legal rights or remedies that cannot lawfully be excluded or restricted.',
      ],
    },
    {
      heading: 'Contact details',
      paragraphs: [],
      facts: companyFacts,
    },
  ],
};

export const legalPages = [terms, privacy, refunds];
