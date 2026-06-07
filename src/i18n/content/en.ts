import { SiteContent } from '../types';

export const en: SiteContent = {
  header: {
    logoText: 'KUZOG',
    contactButton: 'Contact us',
  },

  home: {
    cards: {
      hydrobio: {
        name: 'Hydrobio',
        slogan: 'A patent-pending hybrid mineral-biological soil amendment that restores life, water, and yield.',
        cta: 'Discover',
        accent: 'hydrobio',
      },
      microplantes: {
        name: 'Microplantes',
        slogan: 'Set to be France\'s largest plant micropropagation facility.',
        cta: 'Discover',
        accent: 'microplantes',
      },
      group: {
        name: 'The Group',
        slogan: 'Agricultural import/export and industrial commissioning, from Paris.',
        cta: 'Explore',
        accent: 'group',
      },
    },
  },

  hydrobio: {
    hero: {
      eyebrow: 'Soil Innovation',
      title: 'Restoring Soil Life. Saving Water. Feeding the World.',
      tagline: 'Hydrobio is a hybrid mineral-biological soil amendment — clay, zeolite, and mycorrhizal fungi working together to restore degraded soils with a single application.',
      recognition: 'Rotary Club of Paris — 2026 Startup of the Year',
      pilotCta: 'Request pilot information',
      scienceCta: 'Read the science',
      leadStats: [
        { value: '+47%', label: 'Water retention on sandy soils' },
        { value: '+18.7%', label: 'Crop yield vs. untreated control' },
        { value: '3–5 yrs', label: 'Effect duration per application' },
      ],
    },
    problem: {
      eyebrow: 'Why now',
      title: 'Soil is collapsing — and conventional tools only address one dimension at a time.',
      body: 'A third of the world\'s soils are degraded, drought-affected land has doubled in 40 years, and 70% of all freshwater goes to agriculture. Existing inputs treat one dimension — physical, chemical, or biological — but never all three together. Hydrobio combines them into a single application.',
      stats: [],
    },
    solution: {
      eyebrow: 'The science',
      title: 'A hybrid mineral-biological technology.',
      components: [
        {
          name: 'Micronized clay',
          role: 'Colloidal fraction',
          bullets: ['Surface area ×200 vs. standard clays', 'Maximum water retention', 'Homogeneous soil dispersion'],
        },
        {
          name: 'Micronized zeolite',
          role: 'Nutritive reservoir',
          bullets: ['Complex microporosity', 'High cation exchange capacity', 'Progressive nutrient release'],
        },
        {
          name: 'Mycorrhizal consortium',
          role: 'Biological activator',
          bullets: ['Up to 3× faster root colonization', 'Drought stress tolerance', 'Restores soil biodiversity'],
        },
      ],
      synergyLine: 'The minerals act as a substrate for the mycorrhizae — root colonization 3× faster, efficacy 3 to 5 years. A new mode of action.',
    },
    results: {
      eyebrow: 'Results',
      title: 'Measured. Reproducible. Independently validated.',
      stats: [
        { value: '+47%', label: 'Water retention', caption: 'Sandy soils — South Europe & MENA conditions' },
        { value: '+18.7%', label: 'Crop yields', caption: 'vs. untreated control on same soil type' },
        { value: '3–5 yrs', label: 'Efficacy duration', caption: 'Single application' },
        { value: '−20–30%', label: 'Chemical inputs eliminated', caption: 'Less synthetic fertiliser and pesticide reaching the soil' },
      ],
      footnote: 'Controlled trials, to be confirmed in independent field trials.',
      roadmapHeading: 'Our path to commercial launch',
      roadmapSteps: [
        { phase: 'Step 1', label: 'In-house lab validation', detail: 'Complete — formulation locked, mechanism characterised.' },
        { phase: 'Step 2', label: 'Semi-industrial pilots', detail: 'FarmInnLab — running now, results due 2026.' },
        { phase: 'Step 3', label: 'Independent field trials', detail: 'Occitanie — Q2 2027.' },
        { phase: 'Step 4', label: 'EU homologation', detail: 'Hybrid biostimulant — EU Reg. 2019/1009, target 2028.' },
      ],
    },
    team: {
      eyebrow: 'Team & IP',
      title: 'Built by engineers and operators.',
      members: [
        {
          name: 'Gibril Bachouchi',
          role: 'Co-Founder & R&D Director',
          bio: 'Nanotechnology engineer from the University of Waterloo. Inventor of the Hydrobio formulation.',
          highlights: ['Expert in micronisation & nano-soil interaction', 'Cleanroom & contamination protocols', 'USPTO patent holder'],
        },
        {
          name: 'Malik Bachouchi',
          role: 'Co-Founder & CEO',
          bio: 'Wharton School (UPenn) + MSc Computer Science + bachelor in mechanical engineering. 15 years leading large international programs.',
          highlights: ['Industrial program lead', 'International strategy', 'Public-sector partnerships'],
        },
      ],
      ipHeading: 'Intellectual property',
      ipCards: [
        { title: 'USPTO patent filed', detail: 'Composition, mechanism of action and manufacturing process. PCT extension planned for Europe, MENA, and the Americas.' },
        { title: 'Freedom to operate', detail: 'No licensing dependency, no third-party claims. KUZOG owns the full technology stack.' },
        { title: 'EU Reg. 2019/1009', detail: 'Regulatory dossier in preparation with ANSES France and EMA Europe. Status: hybrid biostimulant.' },
      ],
    },
    impact: {
      eyebrow: 'Impact',
      title: 'What changes when Hydrobio scales.',
      stats: [
        { value: '> 0.5 t/ha', label: 'Carbon sequestered per cycle', caption: 'Mycorrhizal networks stabilise soil organic matter across cycles.', source: 'Rillig & Mummey 2006 · Zhu & Miller 2003 · IPCC AR6 AFOLU 2022' },
        { value: '×3', label: 'Soil biodiversity restored', caption: 'Microbial activity rebounds, reversing decades of monoculture damage.', source: 'Smith & Read 2008 · Barea et al. 2005' },
        { value: '−25%', label: 'Nitrate leaching prevented', caption: 'High-CEC zeolite holds nitrogen in the root zone, protecting groundwater.', source: 'Huang & Petrovic 1994 · Kubo et al. 2010' },
        { value: '∞', label: 'Degraded soils made productive', caption: 'Arid, sandy or poor soils restored without excavation or replacement.', source: 'FAO/ITPS 2015 · Nair et al. 2011' },
      ],
      sdgValue: 'SDGs',
      sdgLabel: '2 · 6 · 13 · 15',
      sdgCaption: 'Zero Hunger · Clean Water · Climate Action · Life on Land',
    },
    recognition: {
      eyebrow: 'News & recognition',
      title: 'Third-party signals.',
      items: [
        { kind: 'incubation', source: 'Jeune Entreprise Innovante (JEI)', detail: 'Recognised as a Jeune Entreprise Innovante by the French government — a status granted to companies with substantial R&D investment.' },
        { kind: 'award', source: 'Rotary Club of Paris', date: '2026', detail: 'Hydrobio named Startup of the Year — recognising the formulation\'s technical novelty and impact potential.' },
        { kind: 'award', source: 'Open Carca 2025', detail: 'KUZOG (Hydrobio\'s parent) — laureate of the 2025 Open Carca entrepreneurial competition.' },
        { kind: 'incubation', source: 'AgroParisTech — FarmInnLab', detail: 'Hydrobio\'s semi-industrial pilot programme hosted at the AgroParisTech FarmInnLab incubator.' },
        { kind: 'incubation', source: 'Paris&Co', detail: 'KUZOG (Hydrobio\'s parent) incubated at the Paris&Co innovation ecosystem.' },
        { kind: 'grant', source: 'City of Paris', detail: 'KUZOG awarded a €30,000 industrial-innovation grant from the Ville de Paris.' },
      ],
    },
    contactCTA: {
      title: 'Talk to us about Hydrobio.',
      description: 'Pilot site enquiries, partnership conversations, science questions — we reply within two business days.',
      ctaLabel: 'Get in touch',
    },
  },
  microplantes: {
    hero: {
      eyebrow: 'Plant Sovereignty',
      title: 'Industrial vegetal micropropagation, built in France.',
      tagline: 'Microplantes is the future largest plant micropropagation facility in France — built on the SEBBIN reconversion in Boissy-l\'Aillerie, backed by KUZOG France.',
      leadStats: [
        { value: 'Up to ~10M', label: 'Vitroplants per year at full capacity' },
        { value: '370 m²', label: 'ISO 5 cleanrooms operational' },
        { value: '4', label: 'Strategic crop families' },
      ],
    },
    opportunity: {
      eyebrow: 'The context',
      title: 'France imports most of its young plants. We want to change that.',
      body: 'Sixty percent of young plants sold in France today come from abroad — mostly the Netherlands. The dependency creates sanitary risk, drains capital out of the country, and shrinks the domestic horticultural production base year after year. Microplantes is our contribution to closing that gap, starting with a neutral multi-species industrial platform.',
      stats: [
        { value: '60%', label: 'Imported share of young plants in France', source: 'VALHOR / FranceAgriMer' },
        { value: '12:1', label: 'Import/export ratio', source: 'VALHOR' },
        { value: '5%/yr', label: 'French actors disappearing', source: 'VALHOR' },
      ],
    },
    method: {
      eyebrow: 'The method',
      title: 'Micropropagation: faster, cleaner, denser than conventional propagation.',
      body: 'Meristem culture produces clones that are virus-free, genetically identical to the parent, and ready to scale. A new variety takes 1 to 2 years from selection to commercial volume — versus 10 to 15 years in conventional multiplication. The process runs indoors, 365 days a year, on vertical 5-tier shelving.',
      advantageLine: '80–90% time reduction. 100% sanitary control. Dramatic density advantage.',
      densityHeading: 'Plants per m² per year — comparison',
      densityRows: [
        { method: 'Microplantes (ISO 5 + 5-tier shelving)', density: '~19,000', surface: '370 m²', multiplier: '1× (reference)' },
        { method: 'Intensive greenhouse', density: '~100', surface: '7 ha', multiplier: '189×' },
        { method: 'Strawberry stolons', density: '~50', surface: '14 ha', multiplier: '378×' },
        { method: 'Raspberry drageons', density: '~30', surface: '23 ha', multiplier: '631×' },
        { method: 'Tree grafting', density: '~5', surface: '140 ha', multiplier: '3,784×' },
      ],
      densityFootnote: 'For the same 7M plants/yr target volume. Sources: CTIFL Balandran, GRAB, Plants-de-fraises.fr.',
    },
    catalogue: {
      eyebrow: 'What we produce',
      title: 'A multi-species platform from day one.',
      body: 'Our manufacturing capacity is built to handle hundreds of species. The launch catalogue prioritises high-demand French and EU professional markets, with new species added every quarter based on commercial pull.',
      categories: [
        {
          name: 'Ornamentals',
          species: ['Geraniums', 'Dipladenias', 'Cyclamens', 'Chrysanthemums', 'Orchids', 'Begonias', 'Pansies', 'Impatiens', 'Petunias'],
        },
        {
          name: 'Soft fruits & vegetables',
          species: ['Strawberry', 'Raspberry', 'Blueberry', 'Blackberry', 'Currant', 'Potato', 'Artichoke', 'Asparagus', 'Leafy greens'],
        },
        {
          name: 'Fruit trees & rootstocks',
          species: ['Apple rootstocks', 'Pear rootstocks', 'Cherry rootstocks', 'Vine clones', 'Olive clones', 'Mulberry'],
        },
        {
          name: 'Tropical & strategic',
          species: ['Banana', 'Pineapple (MD2)', 'Date palm', 'Vanilla', 'Ginger', 'Turmeric', 'Medicinal plants'],
        },
      ],
      suggestionHeading: 'Don\'t see your species?',
      suggestionBody: 'We have the capacity to onboard new species fast. Tell us what you need and we\'ll come back with a feasibility and timeline.',
      suggestionCta: 'Suggest a species',
    },
    site: {
      eyebrow: 'The site',
      title: 'France\'s largest in-vitro plant lab, in Boissy-l\'Aillerie.',
      body: 'The Microplantes facility is the former SEBBIN industrial site, repurposed in partnership with SEMAVO (the regional public mixed economy) through a lease-to-own arrangement. The cleanroom envelope and air handling are already in place — the conversion needs only modest refurbishment.',
      stats: [
        { value: '952 m²', label: 'Total covered area on two floors' },
        { value: '370 m²', label: 'ISO 5 cleanrooms already operational' },
        { value: '1,307 m²', label: 'Land footprint' },
      ],
      advantageLine: 'Reconverting an existing industrial asset — faster, cheaper, and lower-risk than building from scratch.',
      positioning: 'At full capacity, Microplantes will produce approximately up to 10 million vitroplants per year — making it the largest dedicated plant micropropagation facility in France.',
    },
    sustainability: {
      eyebrow: 'Why this matters',
      title: 'The case for producing plants in France.',
      body: 'Industrial micropropagation in France isn\'t just a commercial story — it\'s a strategic one. Producing here means less dependency on a handful of foreign suppliers, less freight emissions across the EU corridor, and less risk of importing the next plant pathogen.',
      pillars: [
        { value: 'Sovereignty', title: 'Reducing import dependency', detail: 'France currently imports 60% of its young plants. Domestic production reduces exposure to foreign supply shocks and protects the national horticultural base.' },
        { value: '−CO₂', title: 'Cutting freight emissions', detail: 'Plants produced in Boissy-l\'Aillerie ship hundreds of kilometres, not thousands. Less refrigerated road transport means a materially smaller carbon footprint per plant.' },
        { value: 'Sanitary', title: 'Lowering biosecurity risk', detail: 'Every imported batch of young plants is a vector for new pests and viruses. Producing in-vitro under ISO 5 conditions gives buyers certified-clean material at the source.' },
      ],
    },
    contactCTA: {
      title: 'Talk to us about Microplantes.',
      description: 'Site partnerships, technical questions, commercial enquiries — we reply within two business days.',
      ctaLabel: 'Get in touch',
    },
  },

  footer: {
    copyright: '© 2025 KUZOG. All rights reserved.',
    privacyLink: 'Privacy Policy',
    ethicsLink: 'Ethics Code',
  },

  navigation: {
    home: 'Home',
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
    errorCaptcha: 'Please complete the captcha before submitting.',
    errorSubmit: 'We could not send your message. Please try again.',
    successMessage: 'Message sent. We will respond shortly.',
  },

  group: {
    hero: {
      eyebrow: 'About KUZOG France',
      title: 'KUZOG France — agricultural-focus holding.',
      body: 'KUZOG France is a Paris-based holding company focused on agriculture. We build and operate two industrial agricultural ventures: Hydrobio (hybrid mineral-biological soil amendment + AI formulation engine) and Microplantes (industrial plant micropropagation lab).',
      origin: 'Founded in 2024 by a father-son duo — a nanotech engineer and a Wharton-trained operator — to build agricultural industrial ventures where engineering, capital, and Paris meet.',
    },
    foundersHeading: 'Founders',
    founders: [
      {
        name: 'Gibril-Gabriel Bachouchi',
        role: 'President',
        bio: 'Nanotechnology engineer (University of Waterloo). Cleanroom and contamination-protocol expert.',
      },
      {
        name: 'Malik Bachouchi',
        role: 'Director',
        bio: 'Wharton (UPenn) MBA + MSc Computer Science. 15 years leading large international industrial and financial programs.',
      },
    ],
    recognition: {
      eyebrow: 'Recognition',
      items: [
        { kind: 'incubation', source: 'Paris&Co', detail: 'Incubated at the Paris&Co innovation ecosystem — the leading innovation hub in Paris.' },
        { kind: 'grant', source: 'City of Paris', detail: '€30,000 industrial-innovation grant from the Ville de Paris.' },
        { kind: 'award', source: 'Open Carca 2025', detail: 'Laureate of the 2025 entrepreneurial competition.' },
        { kind: 'award', source: 'Rotary Club of Paris', date: '2026', detail: 'Hydrobio (KUZOG\'s flagship) — Startup of the Year.' },
      ],
    },
    contactCTA: {
      title: 'Talk to KUZOG.',
      description: 'Investment enquiries, partnership conversations, project ideas — we reply within two business days.',
      ctaLabel: 'Get in touch',
    },
  },
};
