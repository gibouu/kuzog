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
        slogan: 'A hybrid mineral-biological soil amendment that restores life, water, and yield.',
        cta: 'Discover',
        accent: 'hydrobio',
      },
      microplantes: {
        name: 'Microplantes',
        slogan: 'Industrial vegetal micropropagation, built in France.',
        cta: 'Discover',
        accent: 'microplantes',
      },
      group: {
        name: 'KUZOG France',
        slogan: 'The Paris-based holding behind Hydrobio, Microplantes, and a portfolio of industrial ventures.',
        cta: 'About us',
        accent: 'group',
      },
    },
    mission: 'KUZOG builds and operates ventures at the intersection of soil, plants, and capital — from Paris.',
  },

  hydrobio: {
    hero: {
      eyebrow: 'Soil Innovation',
      title: 'Restoring Soil Life. Saving Water. Feeding the World.',
      tagline: 'Hydrobio is a hybrid mineral-biological soil amendment — clay, zeolite, and mycorrhizal fungi working together to restore degraded soils with a single application.',
      leadStats: [
        { value: '+47%', label: 'Water retention on sandy soils' },
        { value: '+18.7%', label: 'Crop yield vs. untreated control' },
        { value: '3–5 yrs', label: 'Effect duration per application' },
      ],
    },
    problem: {
      eyebrow: 'The problem we work on',
      title: 'Soil is collapsing under climate stress and intensive agriculture.',
      body: 'Drought-affected land has doubled in 40 years. A third of global soils are moderately or highly degraded. Agriculture absorbs 70% of all freshwater withdrawals worldwide. We started Hydrobio because the conventional toolbox treats one dimension at a time — physical, chemical, or biological — but never all three together.',
      stats: [
        { value: '×2', label: 'Drought-affected area in 40 years', source: 'FAO' },
        { value: '33%', label: 'Global soils degraded', source: 'FAO/ITPS, 2015' },
        { value: '70%', label: 'Freshwater going to agriculture', source: 'UNESCO WWAP, 2024' },
      ],
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
      roadmapHeading: 'Where we are',
      roadmapSteps: [
        { phase: 'Done', label: 'Internal lab tests', detail: 'Validated in-house' },
        { phase: 'In progress', label: 'Independent lab tests', detail: 'Semi-industrial pilots (FarmInnLab)' },
        { phase: '2027', label: 'Field trials', detail: 'Occitanie' },
        { phase: '2028', label: 'EU homologation', detail: 'Hybrid biostimulant — EU Reg. 2019/1009' },
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
      tagline: 'Microplantes reconverts the ex-SEBBIN industrial site in Boissy-l\'Aillerie into a multi-species in-vitro plant production centre — backed by KUZOG France and a 35-year Costa Rican operating partner.',
      leadStats: [
        { value: '6–7.5M', label: 'Vitroplants per year at maturity' },
        { value: '370 m²', label: 'ISO 5 cleanrooms ready to convert' },
        { value: '200+', label: 'Species mastered via our Costa Rican partner' },
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
    site: {
      eyebrow: 'The site',
      title: 'A cleanroom infrastructure already standing in Boissy-l\'Aillerie.',
      body: 'The Microplantes site is the former SEBBIN industrial facility, repurposed in partnership with SEMAVO (the regional public mixed economy) through a lease-to-own arrangement. The conversion needs only modest refurbishment — the cleanroom envelope, air handling, and laminar flow hoods are already in place.',
      stats: [
        { value: '952 m²', label: 'Total covered area on two floors' },
        { value: '370 m²', label: 'ISO 5 cleanrooms already operational' },
        { value: '11', label: 'Double laminar flow hoods on site' },
        { value: '1,307 m²', label: 'Land footprint' },
      ],
      advantageLine: 'Reconverting an existing industrial asset — faster, cheaper, and lower-risk than building from scratch.',
    },
    partnership: {
      eyebrow: 'The partnership',
      title: 'A 35-year operational partner from Costa Rica.',
      body: 'Microplantes is launched in partnership with Micro Plantas Costa Rica, a Latin American leader founded in 1990 with mastery of more than 200 species. The partnership brings proven industrial protocols, hands-on training, and on-site supervision from Day 1.',
      pillarsHeading: 'How we collaborate',
      pillars: [
        { title: 'Know-how transfer', detail: 'Protocols proven over 35 years on 200+ species — initiation, multiplication, acclimation.' },
        { title: 'Staff training', detail: 'Theoretical and practical training, organised between Costa Rica and France.' },
        { title: 'Day-1 supervision', detail: 'Fernando Alvarado physically on site to commission the rooms and the first explants.' },
        { title: 'Process licence', detail: 'Exclusive France + Europe licence to Micro Plantas\' proprietary processes.' },
        { title: 'Joint R&D', detail: 'Shared pipeline of tropical varieties with European potential.' },
      ],
      partnerName: 'Micro Plantas S.A.',
      partnerCredentials: 'Alajuela, Costa Rica · founded 1990 · 10M plants/yr · 200+ species.',
    },
    team: {
      eyebrow: 'Team',
      title: 'Founders, advisors, and an industrial partner.',
      members: [
        {
          name: 'Gibril-Gabriel Bachouchi',
          role: 'President — KUZOG France',
          bio: 'Nanotechnology engineer from the University of Waterloo. Cleanroom and contamination-protocol expert. Inventor of the Hydrobio formulation.',
          highlights: ['Designs and secures the propagation centre', 'R&D linkages with INRAE and engineering schools', 'Cleanroom & ISO 5 protocols'],
        },
        {
          name: 'Malik Bachouchi',
          role: 'Director — KUZOG France',
          bio: 'Wharton (UPenn) MBA + MSc Computer Science + bachelor in mechanical engineering. 15 years leading large international programs.',
          highlights: ['Public-private partnerships', 'International strategy', 'Founding and operating ventures abroad'],
        },
        {
          name: 'Anne Buchwalder',
          role: 'Strategic Consultant',
          bio: 'Senior strategic advisor supporting project structuring and stakeholder relationships.',
          highlights: ['Project structuring', 'Stakeholder management', 'Strategic positioning'],
        },
        {
          name: 'Fernando Alvarado',
          role: 'Strategic Technical Partner — Micro Plantas Costa Rica',
          bio: 'Founder of Micro Plantas (Alajuela, 1990). 35 years of operational experience. On site at Boissy from Day 1.',
          highlights: ['Industrial protocols on 200+ species', 'Process licence for France + Europe', 'On-site supervision during start-up'],
        },
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
      eyebrow: 'The Parent Operation',
      title: 'KUZOG Group — import, manufacture, invest. From Paris.',
      body: 'KUZOG France is a Paris-based holding building and operating ventures at the intersection of soil, plants, and capital. Incubated at Paris&Co, backed by the City of Paris, and laureate of the 2025 Open Carca entrepreneurial competition, the group structures industrial and investment projects with international ambitions — Hydrobio and Microplantes are its two flagship operations.',
    },
    activitiesHeading: 'What we do',
    activities: [
      { title: 'Import / Export & Commissioning', detail: 'Turnkey procurement and industrial commissioning across the EU and MENA — sourcing, logistics, regulatory navigation, on-site supervision.' },
      { title: 'Manufacturing', detail: 'Industrial reconversion of distressed sites and greenfield builds. Microplantes is the flagship.' },
      { title: 'Consulting', detail: 'Strategy and advisory for industrial agronomy and innovation clients.', externalUrl: 'https://kuzog.ca' },
      { title: 'Distressed-Asset Investing', detail: 'Opportunistic acquisitions of industrial sites and businesses with strategic value — the playbook behind the Microplantes site.' },
      { title: 'Applied AI', detail: 'Internal AI projects and advisory — building automation and decision systems into our operations.' },
      { title: 'Investment Fund', detail: 'A KUZOG-anchored vehicle for adjacent ventures at the intersection of agronomy, deep tech, and industrial reconversion.' },
    ],
    recognitionHeading: 'Recognition',
    recognitions: [
      { name: 'Paris&Co', detail: 'Incubated at the Paris&Co innovation ecosystem.' },
      { name: 'City of Paris', detail: '€30,000 grant from the Ville de Paris for industrial innovation.' },
      { name: 'Open Carca 2025', detail: 'Laureate of the 2025 entrepreneurial competition.' },
    ],
    contactCTA: {
      title: 'Talk to KUZOG.',
      description: 'Investment enquiries, partnership conversations, advisory mandates — we reply within two business days.',
      ctaLabel: 'Get in touch',
    },
  },
};
