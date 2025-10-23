import { SiteContent } from '../types';

export const en: SiteContent = {
  header: {
    logoText: 'KUZOG',
    contactButton: 'Contact us',
  },

  findSolution: {
    title: 'Find Your Solution',
    description: 'KUZOG is an international network of problem-solvers bridging markets from North America and Europe to the Middle East.',
    subtitle: 'Select your profile to discover tailored solutions from KUZOG',
  },

  audiences: [
    {
      id: 'manufacturer',
      label: "I'm a Manufacturer",
      shortLabel: 'Manufacturer',
      tagline: 'Optimize production and connect with new global markets.',
      industry: 'Manufacturing',
      ctaText: 'Explore how we can scale your production.',
      subSections: [
        {
          id: 'sourcing',
          title: 'Industrial Sourcing',
          content: 'Optimize your supply chain with reliable material and equipment sourcing. We connect manufacturers with vetted suppliers across continents, ensuring quality, compliance, and competitive pricing.',
        },
        {
          id: 'markets',
          title: 'Market Expansion',
          content: 'Break into new territories with confidence. KUZOG opens doors to international markets through distributor matching, trade facilitation, and local partnership development.',
        },
        {
          id: 'optimization',
          title: 'Supply Chain Excellence',
          content: 'Maximize efficiency through end-to-end supply chain optimization. Our consultants analyze your operations, identify bottlenecks, and implement solutions that reduce costs and improve delivery times.',
        },
        {
          id: 'technology',
          title: 'Automation & ESG',
          content: 'Future-proof your operations with automation and sustainability initiatives. We guide technology integration for Industry 4.0, help achieve ESG compliance standards, and connect you with clean energy solutions.',
        },
      ],
    },
    {
      id: 'importer',
      label: "I'm an Importer / Exporter",
      shortLabel: 'Importer / Exporter',
      tagline: 'Trade made simple — connect your products with the right buyers.',
      industry: 'Import / Export',
      ctaText: 'Find your next market.',
      subSections: [
        {
          id: 'facilitation',
          title: 'Trade Facilitation',
          content: 'Simplify international trade with end-to-end facilitation services. KUZOG acts as your trusted partner, connecting sellers with qualified buyers and managing the complexities of cross-border commerce.',
        },
        {
          id: 'logistics',
          title: 'Logistics & Compliance',
          content: 'Navigate customs, shipping, and regulatory requirements with expert guidance. We provide logistics coordination, documentation support, and compliance consulting to ensure your goods move efficiently across borders.',
        },
        {
          id: 'certification',
          title: 'Product Certification',
          content: 'Meet international standards with comprehensive certification support. We guide you through product testing, quality assurance protocols, and regulatory approvals for target markets.',
        },
        {
          id: 'intelligence',
          title: 'Market Intelligence',
          content: 'Make informed decisions with real-time market intelligence and pricing data. Our network provides insights on demand trends, competitive pricing, and emerging opportunities.',
        },
      ],
    },
    {
      id: 'farmer',
      label: "I'm a Farmer",
      shortLabel: 'Farmer',
      tagline: 'Empowering agriculture through innovation and access.',
      industry: 'Agriculture',
      ctaText: "Tell us what you need — we'll connect you to the right solution.",
      subSections: [
        {
          id: 'equipment',
          title: 'Equipment & Technology',
          content: 'Access cutting-edge agricultural equipment and smart farming technologies. From precision irrigation systems to automated harvesting solutions, we connect you with suppliers who understand your unique needs.',
        },
        {
          id: 'inputs',
          title: 'Seeds & Soil Solutions',
          content: 'Transform challenging terrain with our specialized soil enhancement programs. We provide access to premium seeds, bentonite for water retention, mycorrhiza for root health, and comprehensive fertilizer solutions.',
        },
        {
          id: 'infrastructure',
          title: 'Sustainable Infrastructure',
          content: 'Build for the future with solar-powered irrigation, modular farm housing, and water management systems designed for efficiency. We help you implement infrastructure that reduces costs while increasing productivity.',
        },
        {
          id: 'financing',
          title: 'Financing & Support',
          content: 'Overcome financial barriers with flexible leasing options and equipment financing tailored to agricultural cycles. Our network includes financial partners who understand farming seasonality.',
        },
      ],
    },
    {
      id: 'startup',
      label: "I'm a Start-up",
      shortLabel: 'Start-up',
      tagline: 'From idea to market — KUZOG backs innovators with strategy and networks.',
      industry: 'Technology / Startups',
      ctaText: 'Book a discovery call with a KUZOG mentor.',
      subSections: [
        {
          id: 'validation',
          title: 'Proof of Concept',
          content: "Turn your vision into reality with structured proof-of-concept support. We help you validate your idea, build MVPs, and connect with early adopters across different markets.",
        },
        {
          id: 'funding',
          title: 'Funding & Partnerships',
          content: 'Navigate the funding landscape with confidence. We connect startups with angel investors, venture capital, and strategic partners across North America, Europe, and the Middle East.',
        },
        {
          id: 'market-entry',
          title: 'Market Entry Strategy',
          content: 'Expand beyond borders with localized market entry strategies. We provide intelligence on regulatory requirements, cultural considerations, and competitive landscapes.',
        },
        {
          id: 'growth',
          title: 'Branding & Growth',
          content: 'Scale with impact through strategic branding and marketing. Our partners help you develop compelling brand identities, go-to-market strategies, and customer acquisition frameworks.',
        },
      ],
    },
  ],

  solutionsCard: {
    contactButton: 'Contact Us',
    agriButton: 'Visit KUZOG AGRI',
  },

  hero: {
    badge: 'Strategic Precision',
    title: 'We acquire, operationalize, and scale ventures across continents.',
    description: 'KUZOG deploys practitioner-led teams to stabilise distressed assets, revive stalled projects, and build international operating models that withstand scrutiny.',
    contactButton: 'Contact us',
    exploreButton: 'Explore industries',
    operatorsFocus: {
      title: "Operators' focus",
      description: 'Multicultural practitioners embedded in each region bring governance, capital fluency, and on-the-ground operatorship to every mandate.',
    },
    deliveryNotes: {
      title: 'Delivery notes',
      description: 'Use this card to capture upcoming initiatives, launch windows, or bespoke operator capabilities you want to highlight.',
    },
  },

  regionalDelivery: {
    title: 'Regional Delivery',
    sectionLabel: 'Section 02',
    regions: {
      'Europe': 'We acquire distressed assets, restructure operations, and scale agricultural ventures across European markets.',
      'North America': 'Relationship management, lobbying, and legal advisory for North American companies seeking to export or operate abroad.',
      'Middle East': 'In-market operators coordinate partnerships, project delivery, and compliance across the Gulf and wider ME landscape.',
      'Africa': 'We create companies, commission factories, and steward agricultural and technology programmes throughout the continent.',
    },
  },

  services: {
    title: 'Services',
    sectionLabel: 'Section 03',
    items: [
      {
        title: 'Private & tailor-made execution',
        body: 'We manage sensitive transformations discreetly—aligning operators, financiers, and public stakeholders so every mandate holds up under scrutiny.',
      },
      {
        title: 'Operator-first governance',
        body: 'Weekly field sprints merge with board-ready reporting, keeping roadmaps, compliance, and delivery tied together everywhere we operate.',
      },
      {
        title: 'Capital fluency',
        body: 'We translate operating realities into investor-grade narratives so capital providers see both upside and controls before the deal closes.',
      },
      {
        title: 'International Trade',
        body: 'For 10+ years KUZOG has helped African operators secure international goods and services through private, tailored sourcing, financing, and logistics.',
      },
    ],
  },

  operations: {
    title: 'Operations & Ethics',
    sectionLabel: 'Section 04',
    description: 'We operate under a zero-tolerance policy on corruption. Our internal code aligns with Sapin II, FCPA, and UK Bribery Act requirements, structuring every mandate with transparent reporting lines and audit-ready documentation.',
    commitmentsTitle: 'Governance commitments',
    commitments: [
      'Comprehensive partner and intermediary screening before engagement.',
      'Documented approval chains and financial controls for every project.',
      'Dedicated compliance officer for sensitive mandates.',
    ],
    viewCodeButton: 'View ethics code',
  },

  otherProjects: {
    title: 'Other Projects',
    sectionLabel: 'Section 05',
    kuzogConsulting: {
      title: 'KUZOG Consulting Inc.',
      description: 'North American programme management and compliance support, headquartered in Toronto with delivery across Canada and USA.',
      button: 'Visit kuzog.ca',
    },
    blog: {
      title: 'KUZOG Insights',
      description: 'Explore our latest insights on international trade, sustainable agriculture, and cross-border operations. Practical analysis from the field.',
      button: 'Read our blog',
    },
    kuzogAgri: {
      title: 'KUZOG AGRI Inc.',
      description: 'HYDROBIO mineral microstructures improve plant-available water, nutrient buffering, and microbial habitats in sandy and degraded soils—supporting resilient root zones with reduced irrigation.',
      button: 'Visit KUZOG AGRI',
    },
  },

  footer: {
    copyright: '© 2025 KUZOG. All rights reserved.',
    privacyLink: 'Privacy Policy',
    ethicsLink: 'Ethics Code',
  },

  navigation: {
    home: 'Home',
    manufacturing: 'Industries',
    trade: 'Trade',
    startup: 'Start-ups',
    agri: 'AGRI',
    contact: 'Contact',
  },

  contactModal: {
    title: "Let's get your project moving",
    subtitle: 'Share a few details and our team will respond within one business day.',
    nameLabel: 'Full name',
    emailLabel: 'Email',
    industryLabel: 'Industry',
    messageLabel: 'Message',
    industryOptions: {
      placeholder: 'Select your industry',
      agriculture: 'Agriculture',
      manufacturing: 'Manufacturing',
      importExport: 'Import / Export',
      technology: 'Technology / Startups',
      renewableEnergy: 'Renewable Energy',
      other: 'Other',
    },
    submitButton: 'Submit',
    submittingButton: 'Sending…',
    emailButton: 'Email us',
    errorRequired: 'Please complete every field before sending.',
    errorEmail: 'Enter a valid email address.',
    errorSubmit: 'We could not send your message. Please try again.',
    successMessage: 'Message sent. We will respond shortly.',
  },
};
