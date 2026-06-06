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
      title: 'Industrial vegetal micropropagation, at French scale.',
      tagline: 'A new industrial platform reconverting the SEBBIN site in Boissy-l\'Aillerie into a 6–7.5M plant/yr in-vitro production centre — backed by KUZOG France and a 35-year Costa Rican partner.',
      leadStats: [
        { value: '6–7.5M', label: 'Vitroplants per year at maturity' },
        { value: '370 m²', label: 'ISO 5 cleanrooms ready to convert' },
        { value: '€1.564M', label: 'Raise (€1.470M net) for a filiale stake' },
      ],
    },
    opportunity: {
      eyebrow: '01 — The Opportunity',
      title: 'France imports 60% of its young plants — and the bill is north of €1 billion a year.',
      stats: [
        { value: '60%', label: 'Imported share', caption: 'of young plants sold in France — mostly from the Netherlands.', source: 'VALHOR / FranceAgriMer, 2022–2023' },
        { value: '€1B+', label: 'Trade deficit', caption: 'annual deficit on young plants, with a 12:1 import/export ratio.', source: 'VALHOR' },
        { value: '286M', label: 'Plants imported / yr', caption: 'estimated volume of young plants imported into France.', source: 'VALHOR estimate' },
        { value: '−5%/yr', label: 'French actors declining', caption: 'progressive shrinkage of the domestic horticultural production base.', source: 'VALHOR' },
      ],
      framingLine: 'A sovereignty problem, a sanitary risk, and a >€1B/yr leakage in capital — and no French actor today operates a neutral, multi-species, multi-client industrial platform at scale.',
    },
    method: {
      eyebrow: '02 — The Method',
      title: 'Micropropagation: faster, cleaner, denser than every conventional alternative.',
      body: 'Meristem culture produces virus-free clones. Each species takes 1–2 years from selection to commercial volume — versus 10–15 in conventional multiplication. A single mother plant yields 4 million carnations or 50,000 raspberry plants in a year, against 50 by traditional propagation.',
      advantageLine: '80–90% time reduction. 100% sanitary control. Production runs 365 days a year, indoors, on vertical 5-tier shelving.',
      densityHeading: 'Plants per m² per year — comparison',
      densityRows: [
        { method: 'MICROPLANTES (ISO 5 + 5-tier shelving)', density: '~19,000', surface: '370 m²', multiplier: '1× (reference)' },
        { method: 'Intensive greenhouse', density: '~100', surface: '7 ha', multiplier: '189×' },
        { method: 'Strawberry stolons', density: '~50', surface: '14 ha', multiplier: '378×' },
        { method: 'Raspberry drageons', density: '~30', surface: '23 ha', multiplier: '631×' },
        { method: 'Tree grafting', density: '~5', surface: '140 ha', multiplier: '3,784×' },
      ],
      densityFootnote: 'For the same 7M plants/yr target volume. Sources: CTIFL Balandran, GRAB, Plants-de-fraises.fr.',
    },
    site: {
      eyebrow: '03 — The Site',
      title: 'A €2.5–3M cleanroom infrastructure already standing in Boissy-l\'Aillerie.',
      body: 'KUZOG takes over the SEBBIN industrial site through a lease-to-own arrangement with SEMAVO (regional public mixed economy), starting Q4 2026. The reconversion needs only ~€250k of refurbishment — versus €5M+ to build a comparable cleanroom from scratch.',
      stats: [
        { value: '952 m²', label: 'Total covered area on two floors' },
        { value: '370 m²', label: 'ISO 5 cleanrooms already operational' },
        { value: '11', label: 'Double laminar flow hoods on site' },
        { value: '1,307 m²', label: 'Land footprint' },
      ],
      advantageLine: 'The replacement value of the cleanrooms, compartmented air handling, hoods, and specialised equipment is conservatively €2.5–3M. SEBBIN\'s 2025 liquidation removed a competitor and unlocked the site at attractive terms.',
    },
    partnership: {
      eyebrow: '04 — The Partnership',
      title: 'A 35-year operational partner from Costa Rica.',
      body: 'KUZOG France signs a strategic agreement with Micro Plantas Costa Rica, a Latin-American leader founded in 1990 — 10M plants/yr capacity, mastery of 200+ species. Their founder, Fernando Alvaredo, is on the Boissy site from Day 1.',
      pillarsHeading: 'Five collaboration pillars',
      pillars: [
        { title: 'Know-how transfer', detail: 'Protocols proven over 35 years on 200+ species, with industrial-grade initiation, multiplication, and acclimation methods.' },
        { title: 'Staff training', detail: 'Theoretical + practical training, organised between Costa Rica and France, accelerating year-1 competence.' },
        { title: 'Day-1 supervision', detail: 'Fernando Alvaredo physically present at start-up to commission rooms and the first explants — no compromise on quality.' },
        { title: 'Process licence', detail: 'Exclusive France + Europe licence to Micro Plantas\' proprietary processes — an immediate competitive advantage and a high barrier to entry.' },
        { title: 'Joint R&D + species pipeline', detail: 'Access to tropical varieties with European potential, jointly developed acclimation protocols, export synergies.' },
      ],
      partnerName: 'Micro Plantas S.A.',
      partnerCredentials: 'Alajuela, Costa Rica · founded 1990 · 10M plants/yr · 200+ species.',
    },
    market: {
      eyebrow: '05 — Market Segments',
      title: 'Four addressable segments. Total potential >200M vitroplants/yr in France alone.',
      segments: [
        { name: 'Ornamentals', share: '65–70%', volume: '150–200M plants/yr', caption: 'Geraniums (22M), dipladenias (6M), cyclamens (6M), chrysanthemums (30M), bedding plants, perennials, orchids.' },
        { name: 'Vegetable / market gardening', share: 'fast-growing', volume: '30–50M plants/yr', caption: 'Potato, strawberry, artichoke, asparagus, leafy vegetables — driven by demand for certified, virus-free starting material.' },
        { name: 'Fruit / arboricultural', share: 'high value-add', volume: '20–30M plants/yr', caption: 'Soft fruits (raspberry, mulberry, currant, blueberry), apple/pear/cherry rootstocks, certified vine and olive clones.' },
        { name: 'Tropical & subtropical', share: 'export niche', volume: '5–10M plants/yr', caption: 'Banana, MD2 pineapple, date palm, vanilla, ginger, turmeric, medicinal plants — premium margins, export-driven.' },
      ],
      totalLine: 'Total estimated volume: 205–290M vitroplants/yr addressable in France + EU adjacents.',
    },
    competition: {
      eyebrow: '06 — Competitive Landscape',
      title: 'Fragmented. Mostly specialised or captive. No neutral multi-species platform.',
      competitors: [
        { name: 'Vitropic (CIRAD)', capacity: '3–5M plants/yr', positioning: 'French leader, tropical species (bananas). Most specialised — limited multi-species relevance.' },
        { name: 'Lab. Angevin (André Briant)', capacity: '~1M plants/yr', positioning: 'Vertically integrated into pépinière business. Not a neutral platform.' },
        { name: 'Pépinières & Roseraies Delbard', capacity: '~1.05M plants/yr', positioning: 'Captive: fruit trees, rootstocks, roses for own use.' },
        { name: 'Invenio Solutions', capacity: '500k+ plants/yr', positioning: 'Soft-fruit specialist. Strong technical R&D, smaller industrial scale.' },
        { name: 'CTIFL', capacity: '300–500k plants/yr', positioning: 'Public technical centre, certification-focused, not industrial.' },
        { name: 'Plant Palm Lab. Biotechnologies', capacity: '~250k plants/yr', positioning: 'Date-palm specialist.' },
      ],
      positioningLine: 'MICROPLANTES positions itself not as another lab, but as the neutral upstream industrial platform — supplying homogeneous, certified, traceable plants to pépiniéristes, breeders, distributors, and specialised filières. This reframes most competitors into potential partners or customers.',
    },
    operations: {
      eyebrow: '07 — Operations & Ramp',
      title: 'A staffed industrial platform — from zero to 25 employees and 7M plants/yr in 5 years.',
      body: 'Workforce builds from 0 in mid-2026 to 25 at maturity (extensible to 31 with a 3rd production crew). Production starts H2 2027; first commercial sales Q4 2027.',
      rampHeading: 'Operational ramp',
      rampSteps: [
        { year: 'Mid-2026', capacity: '—', workforce: 'Founding team', caption: 'Legal creation, fundraising closing Q4 2026' },
        { year: 'H1 2027', capacity: 'Refurbishment', workforce: 'Recruitment + training', caption: '€450k major works · ISO 5 recertification' },
        { year: 'H2 2027', capacity: 'Production launch', workforce: '~15 staff', caption: 'First in-vitro cultures · ~€397k revenue Y1' },
        { year: '2028', capacity: 'Scale-up', workforce: '~20 staff', caption: '€1.32M revenue · EBITDA positive (+€302k)' },
        { year: '2029', capacity: '60% nominal', workforce: '~22 staff', caption: '€3.37M revenue · EBITDA €2.17M · Building acquisition' },
        { year: '2030', capacity: '85% nominal', workforce: '25 staff', caption: '€4.95M revenue · EBITDA €3.61M (72.9%)' },
        { year: '2032', capacity: 'Full nominal', workforce: '25 (31 extensible)', caption: '€10.6M revenue · EBITDA €8.7M (82.2%)' },
      ],
    },
    financials: {
      eyebrow: '08 — Financials',
      title: 'Profitable from year 2. EBITDA margin 82% at maturity.',
      body: 'Reconstructed from the investment-committee dossier (IS treatment + amortisation corrected). Break-even achieved 2028 at the EBITDA level; cumulative net result turns positive in 2029.',
      years: ['2026', '2027', '2028', '2029', '2030', '2031', '2032'],
      rows: [
        { label: 'Revenue (€k)', values: ['—', '397', '1,323', '3,371', '4,950', '6,594', '10,596'] },
        { label: 'EBITDA (€k)', values: ['(94)', '(399)', '302', '2,175', '3,609', '4,927', '8,706'] },
        { label: 'EBITDA margin', values: ['—', '−100%', '23%', '64%', '73%', '75%', '82%'] },
        { label: 'Net result (€k)', values: ['(94)', '(485)', '167', '1,610', '2,562', '3,553', '6,389'] },
        { label: 'Cash position (€k)', values: ['1,440', '269', '301', '1,765', '4,237', '7,670', '13,659'] },
      ],
      capitalStructureHeading: 'Capital structure (post-raise)',
      capitalStructureLine: 'KUZOG France 75–80% · External investor 20–25%. Founder dilution is contained at the filiale level, not the holding. Bank loan (€450k, 7-yr, 4%) added mid-2029 for the SEMAVO building acquisition.',
      roiLine: 'Cumulated net result over 7 years: €13.4M — 6.8× return on the €1.99M capital mobilised.',
    },
    team: {
      eyebrow: '09 — Team',
      title: 'Founders with the right technical and financial DNA, plus a 25-yr industrial partner.',
      members: [
        {
          name: 'Gibril-Gabriel Bachouchi',
          role: 'President — KUZOG France',
          bio: 'Nanotechnology engineer from the University of Waterloo. Cleanroom and particulate/biological contamination expert.',
          highlights: ['Designs and secures the propagation centre', 'Wants to build R&D linkages with INRAE + engineering schools', 'Inventor of the Hydrobio formulation (USPTO)'],
        },
        {
          name: 'Malik Bachouchi',
          role: 'Director — KUZOG France',
          bio: 'Wharton School (UPenn) MBA + MSc Computer Science + bachelor in mechanical engineering. 15 years leading large international financial and industrial programs.',
          highlights: ['Public-private partnership lead (SEMs, banks, agencies)', 'International strategy & fundraising', 'Founding & operating ventures abroad'],
        },
        {
          name: 'Anne Buchwalder',
          role: 'Strategic Consultant',
          bio: 'Senior strategic advisor supporting the project structuring and stakeholder relationships.',
          highlights: ['Project structuring', 'Stakeholder management', 'Strategic positioning'],
        },
        {
          name: 'Fernando Alvarado',
          role: 'Strategic Technical Partner — Micro Plantas Costa Rica',
          bio: 'Founder of Micro Plantas (Alajuela, 1990). 35 years of operational experience. On site at Boissy from Day 1.',
          highlights: ['Industrial protocols on 200+ species', 'Process licence for France + Europe', 'On-the-ground supervision during start-up'],
        },
      ],
    },
    successFactors: {
      eyebrow: '10 — Strategic Synthesis',
      title: 'Ten key success factors. Reframing risk as discipline.',
      intro: 'The dossier identifies ten levers that turn an industrial reconversion into a working platform:',
      factors: [
        'Securing and refurbishing the Boissy-l\'Aillerie site on time.',
        'Mastering micropropagation protocols across species — adapted to industrial multiplication, low contamination, high reproducibility.',
        'Sanitary and documentary quality of plants — rigorous lot identification, full traceability.',
        'Securing commercial outlets fast — contracts and frame agreements with pépiniéristes, breeders, distributors.',
        'Right positioning in the value chain — as upstream platform, not as competitor to pépiniéristes.',
        'Mastering acclimation and loss rates — in-vitro → ex-vitro transition.',
        'ERP / production-management software — managing many species, varieties, cycles, repots, batches simultaneously.',
        'Competent and stable team — recruiting, training, and retaining technicians, team leads, and commercial staff.',
        'Unit-cost discipline — optimising cadence, reducing losses, negotiating remunerative contracts.',
        'Regulatory and commercial credibility — passeports phytosanitaires, sanitary status, plant breeder rights, confidentiality.',
      ],
      closing: 'Combined, these factors turn MICROPLANTES from a laboratory into a French upstream industrial platform serving the professional vegetal filières.',
    },
    contactCTA: {
      title: 'Talk to us about Microplantes.',
      description: 'Investor materials, technical due diligence, partnership conversations — we reply within two business days.',
      ctaLabel: 'Get in touch',
    },
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
    badge: 'Strategic Focus',
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
