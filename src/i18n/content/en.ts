import { SiteContent } from '../types';

export const en: SiteContent = {
  header: {
    logoText: 'KUZOG',
    contactButton: 'Contact us',
  },

  findSolution: {
    title: 'Find Your Solution',
    description: 'KUZOG is an international network of problem-solvers bridging markets from North America and Europe and the Middle East.',
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
          title: 'Supply Chain',
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
          content: 'Make informed decisions with real-time market intelligence and pricing data. Our network provides insights on demand trends, competitive pricing, and emerging opportunities. We support your local market entry and help create comprehensive business plans.',
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
          title: 'Seeds & Fertilizers',
          content: 'Transform challenging terrain with our specialized soil enhancement programs. We provide access to premium seeds, mineral organic soil amendments, and comprehensive fertilizer solutions.',
        },
        {
          id: 'infrastructure',
          title: 'Sustainable Infrastructure',
          content: 'Build for the future with solar-powered irrigation, hydroponics, modular farm housing, and water management systems designed for efficiency. We help you implement infrastructure that reduces costs while increasing productivity.',
        },
        {
          id: 'financing',
          title: 'Water Stress & Soil Solutions',
          content: 'We provide solutions to solve water stress, salinity, and infertile soil challenges. Our programs help you overcome environmental barriers with proven technologies adapted to arid and challenging conditions.',
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
      title: "Operator Excellence",
      description: 'Multicultural practitioners embedded in each region bring governance, capital fluency, and on-the-ground operatorship to every mandate.',
    },
    deliveryNotes: {
      title: 'Approach',
      description: 'We capture upcoming initiatives, launch windows, and bespoke operator capabilities tailored to your needs.',
    },
  },

  regionalDelivery: {
    title: 'Past Projects',
    sectionLabel: '',
    regions: {
      'Europe': 'We acquired distressed assets, restructured operations, and scaled agricultural ventures across European markets.',
      'North America': 'Relationship management, lobbying, and legal advisory for North American companies seeking to export or operate abroad.',
      'Middle East': 'In-market operators coordinate partnerships, project delivery, and compliance across the Gulf and wider ME landscape.',
      'Africa': 'We created companies, commissioned factories, and stewarded agricultural and technology programmes throughout the continent.',
    },
  },

  services: {
    title: 'Services',
    sectionLabel: '',
    items: [
      {
        title: 'Private & tailor-made execution',
        body: 'We manage sensitive transformations discreetly—aligning operators, financiers, and public stakeholders so every mandate holds up under scrutiny.',
      },
      {
        title: 'Operator-first governance',
        body: 'Field operations integrate with board-ready reporting, keeping roadmaps, compliance, and delivery aligned across all regions.',
      },
      {
        title: 'Capital fluency',
        body: 'We translate operating realities into investor-grade narratives so capital providers see both upside and controls before the deal closes.',
      },
      {
        title: 'International Trade',
        body: 'For 10+ years KUZOG has helped African operators secure international goods and services through private and public, tailored sourcing, financing, and logistics.',
      },
    ],
  },

  operations: {
    title: 'Operations & Ethics',
    sectionLabel: '',
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
    sectionLabel: '',
    kuzogConsulting: {
      title: 'KUZOG Consulting Inc.',
      description: 'North American programme management and compliance support, headquartered in Toronto with delivery across Canada and USA. Partnered with numerous warehouse and logistics equipment companies.',
      button: 'Visit kuzog.ca',
    },
    blog: {
      title: 'KUZOG Insights',
      description: 'Explore our latest insights on international trade, sustainable agriculture, and cross-border operations. Practical analysis from the field.',
      button: 'Read our blog',
    },
    kuzogAgri: {
      title: 'KUZOG Agriculture',
      description: 'Specialized agriculture projects including soil regeneration, precision irrigation systems, and sustainable farming solutions. We support farmers with proven technologies for challenging environmental conditions.',
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

  agriPage: {
    header: {
      contactButton: 'Contact us',
    },
    about: {
      badge: 'About KUZOG AGRI',
      title: 'Agricultural Systems for a Changing Planet',
      description: 'KUZOG AGRI is an agricultural innovation and service provider dedicated to regenerating soils and optimizing water use in the world\'s most challenging environments. We work at the intersection of science, technology, and sustainability, deploying solutions that make degraded or water-stressed lands productive again.',
      contactButton: 'Contact us',
      cards: {
        fullCycle: {
          title: 'Full-Cycle Partner',
          description: 'From seed to soil to systems, we supply high-quality plant material, engineer advanced soil technologies for water efficiency, and design adaptive farming systems powered by renewable energy.',
        },
        globalReach: {
          title: 'Global Reach',
          description: 'Our projects span Africa, the Middle East, and Europe — targeting arid zones suffering from desertification and temperate regions facing climate stresses such as floods, salinity, and soil exhaustion.',
        },
        partnership: {
          title: 'Partnership Approach',
          description: 'We partner with farmers, agri-industries, development agencies, and governments to build agricultural resilience from the ground up.',
        },
      },
    },
    services: {
      badge: 'Our Services',
      title: 'Agricultural Services',
      items: [
        {
          title: 'Plant Propagation & Genetic Multiplication',
          body: 'KUZOG AGRI operates and partners with plant breeding and propagation laboratories capable of producing millions of high-quality seedlings annually. Our expertise covers tissue-culture production, nursery management, and field acclimatization, ensuring that every plant we deliver is genetically pure, disease-free, and climate-adapted.',
          details: [
            'Banana plants, date palms, and pineapple plants',
            'Vegetable seedlings and horticultural species',
            'Rapid-cycle seedlings (e.g., 45–60 days) for early-stage or commercial planting programs',
          ],
        },
        {
          title: 'Soil Regeneration & Water-Saving Technologies',
          body: 'We specialize in transforming low-fertility and water-stressed soils into productive land through natural mineral and microbial innovations. Our proprietary soil technology platform combines engineered microstructures with beneficial fungi to optimize soil performance.',
          details: [
            'Water use is reduced by up to 50%',
            'Fertilizer efficiency improves by 15–20%',
            'Crop yields increase by 20–30%, even in marginal soils',
          ],
        },
        {
          title: 'Controlled & Smart Farming Systems',
          body: 'We design and implement controlled-environment and precision farming systems adapted to diverse contexts — from smallholder farms to commercial projects. Our systems are built for resource efficiency, combining renewable energy and data-driven control to achieve maximum yield with minimal input.',
          details: [
            'Hydroponic and aquaponic systems',
            'Solar-powered irrigation and monitoring',
            'Greenhouse and semi-arid open-field systems',
            'AI-assisted crop management and precision fertigation',
          ],
        },
        {
          title: 'Partnership & Project Operations',
          body: 'KUZOG AGRI works through partnership models that align scientific innovation with on-the-ground execution. We co-develop "Operator Playbooks" with local partners, guiding each stage of the project to ensure knowledge transfer, quality control, and long-term sustainability of each deployment.',
          details: [
            'Sourcing and supply chain management',
            'System commissioning and field trials',
            'Training of local teams',
            'Commercial rollout and scale-up',
          ],
        },
      ],
    },
    soilTech: {
      badge: 'Soil Technology',
      title: 'Our Proprietary Solution',
      subtitle: 'Engineered Soil Microstructures for Water-Stressed Environments',
      description: 'KUZOG AGRI\'s proprietary soil technology platform is designed to restore degraded soils, increase water efficiency, and enhance nutrient dynamics. It is the product of years of research combining mineral engineering, soil microbiology, and field agronomy.',
      features: [
        {
          title: 'Water Retention',
          body: 'Our proprietary mineral microstructures act as water reservoirs. They store moisture near the root zone, releasing it gradually to plants under drought stress — increasing plant-available water capacity (AWC) and reducing irrigation frequency.',
        },
        {
          title: 'Nutrient Buffering',
          body: 'Our adaptive mineral framework cultivates microhabitats that stabilize the exchange of nutrients (N, P, K) and carbon compounds. The system encourages colonization by beneficial fungi and soil bacteria, improving the bioavailability of essential elements and promoting long-term soil fertility.',
        },
        {
          title: 'Soil Regeneration',
          body: 'Our soil technology is used not only as a soil amendment but also as part of reforestation, cover-crop, and restoration programs. By rebuilding organic matter, it enhances soil aggregation, structure, and carbon sequestration, regenerating ecosystems that were once considered beyond recovery.',
        },
        {
          title: 'Operator Playbooks',
          body: 'Each program is delivered with a deployment playbook — a detailed field guide co-created with our partners. It covers site diagnostics, formulation adjustments, mixing and application protocols, and post-application monitoring to ensure consistent results across scales.',
        },
      ],
    },
  },
};
