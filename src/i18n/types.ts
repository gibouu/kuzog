// i18n Types - Centralized type definitions for all translatable content

export type Language = 'en' | 'fr' | 'ar';

export interface LanguageConfig {
  code: Language;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
}

export interface HomeCardContent {
  name: string;       // e.g. "Hydrobio"
  slogan: string;     // short one-liner, max ~12 words
  cta: string;
  accent: 'hydrobio' | 'microplantes' | 'group';
}

export interface HomeContent {
  cards: {
    hydrobio: HomeCardContent;
    microplantes: HomeCardContent;
    group: HomeCardContent;
  };
}

export interface RecognitionItem {
  kind: 'award' | 'press' | 'grant' | 'partnership' | 'incubation';
  source: string;
  date?: string;
  detail: string;
  href?: string;
}

export interface RecognitionContent {
  eyebrow: string;
  title?: string;
  items: RecognitionItem[];
}

export interface HydrobioLeadStat {
  value: string;
  label: string;
}

export interface HydrobioSolutionComponent {
  name: string;
  role: string;
  bullets: string[];
}

export interface HydrobioImpactStat {
  value: string;
  label: string;
  caption: string;
  source?: string;
}

export interface HydrobioJourneyStep {
  number: number;
  title: string;
  body: string;
}

export interface HydrobioFormulFeature {
  title: string;
  detail: string;
}

export interface HydrobioRoiRow {
  crop: string;
  irrigation: string;
  fertilizer: string;
  yieldGain: string;
  total: string;
  payback: string;
}

export interface HydrobioCropFamily {
  name: string;
  examples: string;
}

export interface HydrobioSoilType {
  name: string;
  benefit: string;
}

export interface HydrobioFaqItem {
  question: string;
  answer: string;
}

export interface HydrobioSdgCard {
  number: 2 | 6 | 13 | 15;
  name: string;
  impact: string;
}

export interface HydrobioContent {
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    recognition?: string;
    pilotCta: string;
    scienceCta: string;
    leadStats: HydrobioLeadStat[];
  };
  solution: {
    eyebrow: string;
    title: string;
    intro: string;
    components: HydrobioSolutionComponent[];
    synergyLine: string;
  };
  journey: {
    eyebrow: string;
    title: string;
    body: string;
    steps: HydrobioJourneyStep[];
  };
  formul: {
    eyebrow: string;
    title: string;
    tagline: string;
    body: string;
    inputsHeading: string;
    inputs: string[];
    engineHeading: string;
    engineBody: string;
    outputsHeading: string;
    outputs: string[];
    advantagesHeading: string;
    advantages: HydrobioFormulFeature[];
    mlBadge: string;
    mlExplainer: {
      heading: string;
      body: string;
    };
  };
  application: {
    eyebrow: string;
    title: string;
    body: string;
    whenHeading: string;
    whenBody: string;
    doseHeading: string;
    doseBody: string;
    howHeading: string;
    howSteps: string[];
    onSiteHeading: string;
    onSiteBody: string;
    onSitePillars: HydrobioFormulFeature[];
  };
  results: {
    eyebrow: string;
    title: string;
    stats: HydrobioImpactStat[];
    footnote: string;
    roiHeading: string;
    roiCaption: string;
    roiColumns: {
      crop: string;
      irrigation: string;
      fertilizer: string;
      yieldGain: string;
      total: string;
      payback: string;
    };
    roiRows: HydrobioRoiRow[];
  };
  cultures: {
    eyebrow: string;
    title: string;
    body: string;
    cropsHeading: string;
    crops: HydrobioCropFamily[];
    soilsHeading: string;
    soils: HydrobioSoilType[];
  };
  impact: {
    eyebrow: string;
    title: string;
    stats: HydrobioImpactStat[];
    sdgHeading: string;
    sdgIntro: string;
    sdgs: HydrobioSdgCard[];
  };
  innovation: {
    eyebrow: string;
    title: string;
    items: HydrobioFormulFeature[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: HydrobioFaqItem[];
  };
  recognition: RecognitionContent;
  contactCTA: {
    title: string;
    description: string;
    ctaLabel: string;
  };
}

export interface MicroplantesLeadStat {
  value: string;
  label: string;
}

export interface MicroplantesStat {
  value: string;
  label: string;
  caption?: string;
  source?: string;
}

export interface MicroplantesBenefit {
  title: string;
  detail: string;
}

export interface MicroplantesProcessStep {
  number: number;
  title: string;
  body: string;
}

export interface MicroplantesVariety {
  name: string;
  type?: string;
  details: string;
}

export interface MicroplantesFiliere {
  number: string;
  name: string;
  latin: string;
  intro: string;
  varieties: MicroplantesVariety[];
}

export interface MicroplantesPlantFormat {
  format: string;
  description: string;
  audience: string;
}

export interface MicroplantesService {
  title: string;
  detail: string;
}

export interface MicroplantesResearchAxis {
  title: string;
  detail: string;
}

export interface MicroplantesLabSpace {
  title: string;
  detail: string;
}

export interface MicroplantesQualityCommitment {
  title: string;
  detail: string;
}

export interface MicroplantesFaqItem {
  question: string;
  answer: string;
}

export interface MicroplantesContent {
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    positioning?: string;
    leadStats: MicroplantesLeadStat[];
  };
  whyInVitro: {
    eyebrow: string;
    title: string;
    body: string;
    benefits: MicroplantesBenefit[];
  };
  process: {
    eyebrow: string;
    title: string;
    body: string;
    steps: MicroplantesProcessStep[];
  };
  filieres: {
    eyebrow: string;
    title: string;
    body: string;
    items: MicroplantesFiliere[];
  };
  formats: {
    eyebrow: string;
    title: string;
    body: string;
    audienceLabel: string;
    items: MicroplantesPlantFormat[];
  };
  services: {
    eyebrow: string;
    title: string;
    body: string;
    items: MicroplantesService[];
  };
  rnd: {
    eyebrow: string;
    title: string;
    body: string;
    axes: MicroplantesResearchAxis[];
  };
  lab: {
    eyebrow: string;
    title: string;
    body: string;
    spaces: MicroplantesLabSpace[];
    capacityHeading: string;
    capacityBody: string;
  };
  quality: {
    eyebrow: string;
    title: string;
    body: string;
    commitments: MicroplantesQualityCommitment[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: MicroplantesFaqItem[];
  };
  contactCTA: {
    title: string;
    description: string;
    ctaLabel: string;
  };
}

export interface JobPosting {
  id: string;
  company: 'hydrobio' | 'microplantes';
  department: string;
  title: string;
  contract: string;
  location: string;
  mission: string;
  responsibilities: string[];
  profile: string[];
}

export interface CareersContent {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
  };
  filters: {
    searchPlaceholder: string;
    allCompanies: string;
    allDepartments: string;
  };
  empty: string;
  applyCta: string;
  // {count} is interpolated; provide singular ("one") and plural ("other") forms.
  results: {
    one: string;
    other: string;
  };
  companyLabels: {
    hydrobio: string;
    microplantes: string;
  };
  responsibilitiesHeading: string;
  profileHeading: string;
  spontaneousHeading: string;
  spontaneousBody: string;
  spontaneousCta: string;
  jobs: JobPosting[];
}

export interface SiteContent {
  // Header
  header: {
    logoText: string;
    contactButton: string;
    selectLanguage: string;
  };

  // Home
  home: HomeContent;
  hydrobio: HydrobioContent;
  microplantes: MicroplantesContent;
  careers: CareersContent;

  // Footer
  footer: {
    copyright: string;
    privacyLink: string;
    ethicsLink: string;
    careersLink: string;
  };

  // Navigation
  navigation: {
    home: string;
    contact: string;
    blog: string;
  };

  // Blog (placeholder page)
  blog: {
    eyebrow: string;
    title: string;
    body: string;
    backHome: string;
  };

  // Recognition card kind labels (shared across product pages)
  recognitionKinds: {
    award: string;
    press: string;
    grant: string;
    partnership: string;
    incubation: string;
  };

  // Ethics policy modal
  policyModal: {
    title: string;
    closeLabel: string;
  };

  // 404 / unknown route
  notFound: {
    eyebrow: string;
    title: string;
    message: string;
    backHome: string;
  };

  // Contact Modal
  contactModal: {
    eyebrow: string;
    closeLabel: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    industryLabel: string;
    messageLabel: string;
    industryOptions: {
      placeholder: string;
      agriculture: string;
      manufacturing: string;
      importExport: string;
      technology: string;
      renewableEnergy: string;
      other: string;
    };
    submitButton: string;
    submittingButton: string;
    emailButton: string;
    errorRequired: string;
    errorEmail: string;
    errorCaptcha: string;
    errorSubmit: string;
    successMessage: string;
  };

  // Product figures (inline-SVG diagrams)
  figures: FiguresContent;
}

export interface FiguresContent {
  // Microplantes
  multiplication: {
    tag: string;
    title: string;
    caption: string;
    gen: string; // "GEN" prefix for generation rows
    micropropagation: string;
    conventional: string;
    thousands: string; // "16 → thousands"
  };
  notGmo: {
    tag: string;
    title: string;
    caption: string;
    gmo: string;
    dnaAltered: string;
    foreignGene: string;
    micropropagation: string;
    mother: string;
    genome: string;
    unchanged: string;
    wholePlantCopied: string;
  };
  labJourney: {
    tag: string;
    title: string;
    caption: string;
    inLab: string;
    outGrowers: string;
    hood: string;
    growthRoom: string;
    rooting: string;
    greenhouse: string;
    growers: string;
  };
  virusFree: {
    tag: string;
    title: string;
    caption: string;
    shootTip: string;
    virusesLag: string;
    apicalDome: string;
    exciseTip: string;
    uniform: string;
  };
  // Hydrobio
  surfaceArea: {
    tag: string;
    title: string;
    caption: string;
    grain: string;
    micronised: string;
    surfaceArea: string;
  };
  holdsWater: {
    tag: string;
    title: string;
    caption: string;
    root: string;
    holdsLabel: string;
    waterBadge: string;
  };
  porous: {
    tag: string;
    title: string;
    caption: string;
    water: string;
    nutrients: string;
    porousLabel: string;
  };
  mycorrhizae: {
    tag: string;
    title: string;
    caption: string;
    root: string;
    rootHairs: string;
    fungi: string;
    reachLabel: string;
  };
}
