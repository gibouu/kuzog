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
      tagline: 'HYDROBIO is a hybrid mineral-biological soil amendment — micronised minerals + a living mycorrhizal consortium. One application regenerates your soil, retains water, and feeds your crops — for 3 to 5 years. And thanks to our HydrobioFormul AI app, each dose is custom-calculated for your soil and crop.',
      recognition: 'Rotary Club of Paris — 2026 Startup of the Year',
      pilotCta: 'Request a soil analysis',
      scienceCta: 'Discover HydrobioFormul',
      leadStats: [
        { value: '+47%', label: 'Water retention on sandy soils' },
        { value: '+18.7%', label: 'Crop yield vs. untreated control' },
        { value: '3–5 yrs', label: 'Effect duration per application' },
      ],
    },
    solution: {
      eyebrow: 'The product',
      title: 'A hybrid mineral-biological amendment — not just a fertiliser.',
      intro: 'HYDROBIO does more than deliver nutrients: it restores the soil\'s capacity to hold water, exchange nutrients, and host microbial life. It acts on all three dimensions of soil fertility — physical, chemical, and biological — in a single product. Three complementary components, one living mineral matrix.',
      components: [
        { name: 'Micronised clay', role: 'Colloidal fraction', bullets: ['Specific surface area ×200 — maximal water retention', 'Homogeneous soil dispersion'] },
        { name: 'Micronised zeolite', role: 'Nutrient reservoir', bullets: ['High cation-exchange capacity', 'Progressive nutrient release'] },
        { name: 'Mycorrhizal consortium', role: 'Biological activator', bullets: ['Faster root colonisation, better water and nutrient uptake', 'Drought-stress tolerance, restored soil biodiversity'] },
      ],
      synergyLine: 'The minerals act as a physical scaffold for the mycorrhizae — root colonisation is faster, the effect extends to 3-5 years. A living mineral matrix, not just a mix.',
    },
    journey: {
      eyebrow: 'How it works',
      title: 'Your journey in 4 steps.',
      body: 'From soil analysis to application, a simple path tailored to your land.',
      steps: [
        { number: 1, title: 'Soil analysis', body: 'A field sample reveals texture, pH, cation-exchange capacity, organic matter, biological state, water-holding capacity, and degradation level.' },
        { number: 2, title: 'Crop & objectives', body: 'We identify the target crop, the climate context (rainfall, water stress, irrigation), and your objectives: save water, boost yields, restore degraded soil.' },
        { number: 3, title: 'HydrobioFormul (AI)', body: 'Our proprietary AI application calculates the exact composition (clay/zeolite/mycorrhiza ratios) and the per-hectare dose, tailored to your soil and your crop.' },
        { number: 4, title: 'On-site formulation & application', body: 'The amendment is formulated on site according to the recipe and applied in a simple spreading + light incorporation step. One application covers 3 to 5 years.' },
      ],
    },
    formul: {
      eyebrow: 'HydrobioFormul',
      title: 'AI formulation engine.',
      tagline: 'Intelligence at the service of every soil.',
      body: 'HydrobioFormul is HYDROBIO\'s proprietary application, powered by artificial intelligence. It transforms a soil analysis into a custom formulation: the exact amendment composition and dose adapted to your soil, climate, and crop. No more generic product — every parcel gets the recipe that suits it.',
      inputsHeading: 'Inputs',
      inputs: [
        'Soil characteristics — texture, pH, CEC, organic matter, water-holding capacity',
        'Climate context — rainfall, water-stress exposure',
        'Target crop and objectives (water, yield, restoration)',
      ],
      engineHeading: 'The engine',
      engineBody: 'An agronomic model coupled with a predictive AI engine, trained on pedoclimatic data and HYDROBIO trial results. It simulates the soil\'s response and determines the optimal combination of the three components.',
      outputsHeading: 'Outputs',
      outputs: [
        'Exact composition — clay/zeolite/mycorrhiza ratios',
        'Per-hectare dose and application schedule',
        'Simulated gains — water retention, yield, ROI estimate',
        'Production-ready formulation sheet, fully traced',
      ],
      advantagesHeading: 'Why it matters',
      advantages: [
        { title: 'Precision', detail: 'Each soil is unique — so is the formulation.' },
        { title: 'Performance', detail: 'Efficacy and ROI are maximised.' },
        { title: 'Traceability', detail: 'Every recommendation is documented (inputs, dose, justification).' },
        { title: 'Simplicity', detail: 'You enter the data, the app does the rest.' },
        { title: 'Continuous improvement', detail: 'The engine learns from new trials and field results.' },
      ],
    },
    application: {
      eyebrow: 'Application',
      title: 'Simple, one-time, integrated into your itinerary.',
      body: 'HYDROBIO is applied once and lasts 3 to 5 years — no annual reapplication.',
      whenHeading: 'When',
      whenBody: 'Preferably at soil preparation, before sowing or planting. For perennial crops (orchards, soft fruits), apply at the base or in the inter-row.',
      doseHeading: 'Dose',
      doseBody: 'The exact dose is determined by HydrobioFormul based on your soil and your crop — typically a few hundred kg/ha for an application that lasts 3 to 5 years.',
      howHeading: 'How',
      howSteps: [
        'Uniform spreading on the parcel (centrifugal or broadcast spreader).',
        'Light surface incorporation to bring the amendment into contact with the future root zone.',
        'For perennials: localised at the base or in the row, then light scratching.',
      ],
      onSiteHeading: 'On-site formulation',
      onSiteBody: 'Rather than a generic product manufactured in a factory and stored for months, HYDROBIO is formulated on site according to the recipe calculated by HydrobioFormul.',
      onSitePillars: [
        { title: 'Biological freshness', detail: 'Living mycorrhizae are integrated just before application, for maximum viability.' },
        { title: 'Customisation', detail: 'Composition adjusted to each soil and each batch — no generic stock.' },
        { title: 'Logistics & cost', detail: 'Dry components shipped (denser), assembly happens locally — less transport, less loss, reduced carbon footprint.' },
      ],
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
      roiHeading: 'ROI by crop',
      roiCaption: 'Total per-hectare-per-year gains and payback period. Sources: Agreste, ARVALIS, CTIFL, FranceAgriMer, Euronext.',
      roiRows: [
        { crop: 'Strawberry', irrigation: '€420', fertilizer: '€90', yieldGain: '+6 t/ha → €7,200', total: '€7,710 / ha / yr', payback: '< 4 months' },
        { crop: 'Apple', irrigation: '€280', fertilizer: '€68', yieldGain: '+5.3 t/ha → €2,888', total: '€3,236 / ha / yr', payback: '~8 months' },
        { crop: 'Wheat', irrigation: '€98', fertilizer: '€53', yieldGain: '+1.1 t/ha → €248', total: '€399 / ha / yr', payback: '~5 years' },
      ],
    },
    cultures: {
      eyebrow: 'Crops & soils',
      title: 'Where the soil suffers, HYDROBIO makes the difference.',
      body: 'HYDROBIO works across high-value crops, broadacre cereals, perennials and market gardening — with the exact benefit estimated by HydrobioFormul from your soil analysis.',
      cropsHeading: 'Crops',
      crops: [
        { name: 'High-value crops', examples: 'Strawberry and soft fruits, fruit trees (apple, pear, cherry)' },
        { name: 'Broadacre crops', examples: 'Wheat and other cereals' },
        { name: 'Perennials & market gardening', examples: 'Case-by-case adaptation via HydrobioFormul' },
      ],
      soilsHeading: 'Soil types',
      soils: [
        { name: 'Sandy soils', benefit: 'Maximal gain in water retention' },
        { name: 'Degraded soils', benefit: 'Structure and biological life restored' },
        { name: 'Arid / water-stressed soils', benefit: 'Increased resilience against drought' },
      ],
    },
    impact: {
      eyebrow: 'Environmental impact',
      title: 'Produce more with less water and fewer inputs.',
      stats: [
        { value: '> 0.5 t/ha', label: 'Carbon sequestered per cycle', caption: 'Mycorrhizal networks stabilise soil organic matter across cycles.', source: 'Rillig & Mummey 2006 · Zhu & Miller 2003 · IPCC AR6 AFOLU 2022' },
        { value: '×3', label: 'Soil biodiversity restored', caption: 'Microbial activity rebounds, reversing decades of monoculture damage.', source: 'Smith & Read 2008 · Barea et al. 2005' },
        { value: '−25%', label: 'Nitrate leaching prevented', caption: 'High-CEC zeolite holds nitrogen in the root zone.', source: 'Huang & Petrovic 1994 · Kubo et al. 2010' },
        { value: '∞', label: 'Degraded soils made productive', caption: 'Arid, sandy or poor soils restored without excavation or replacement.', source: 'FAO/ITPS 2015 · Nair et al. 2011' },
      ],
      sdgValue: 'SDGs',
      sdgLabel: '2 · 6 · 13 · 15',
      sdgCaption: 'Zero Hunger · Clean Water · Climate Action · Life on Land',
    },
    innovation: {
      eyebrow: 'Innovation & technology',
      title: 'Breakthrough science, simple product.',
      items: [
        { title: 'Controlled granulometry', detail: 'Precise micronisation, specific surface area ×200.' },
        { title: 'Living mineral matrix', detail: 'Mycorrhizae integrated into the minerals — effective even in poor or arid soils.' },
        { title: 'Long-lasting effect (3-5 yrs)', detail: 'Soil architecture persists across multiple cycles — costs reduced by 60-80%.' },
        { title: 'USPTO patent filed', detail: 'Composition, mechanism of action, and process. PCT extension underway.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Common questions, direct answers.',
      items: [
        { question: 'What is HYDROBIO?', answer: 'A hybrid amendment combining micronised minerals (clay, zeolite) and a living mycorrhizal consortium — acting on the structure, nutrition, and biological life of the soil all at once.' },
        { question: 'Is it a fertiliser?', answer: 'No. HYDROBIO restores the soil\'s ability to retain water and nutrients and to feed the plant, which reduces the need for fertilisers and irrigation.' },
        { question: 'What is HydrobioFormul?', answer: 'Our AI application that calculates the exact composition and dose from your soil analysis and target crop, and simulates expected gains.' },
        { question: 'Do I need to get my soil analysed?', answer: 'Yes — it\'s step 1. The analysis lets HydrobioFormul personalise the formulation. We support you with sampling.' },
        { question: 'How is it applied?', answer: 'Simple spreading then light surface incorporation, at soil preparation. A single application covers 3 to 5 years.' },
        { question: 'Why on-site formulation?', answer: 'To preserve the viability of the living mycorrhizae, adapt the composition to each soil, and reduce transport and losses.' },
        { question: 'Are there chemical residues?', answer: 'No. The technology leaves no chemical residue and is compatible with organic farming.' },
        { question: 'Which crops and soils?', answer: 'High-value crops (strawberry, apple…), broadacre crops (wheat), particularly on sandy, degraded, or water-stressed soils.' },
        { question: 'Is it a GMO?', answer: 'No. HYDROBIO acts on the soil and on root symbiosis, not on the plant\'s genome.' },
        { question: 'When is it available?', answer: 'First deployments are underway; broader French commercialisation from late 2026 (EU 2019/1009 homologation in preparation).' },
      ],
    },
    recognition: {
      eyebrow: 'Recognition',
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
      title: 'Get your soil analysed.',
      description: 'Request a soil analysis and receive your custom formulation. We reply within two business days.',
      ctaLabel: 'Request a soil analysis',
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
