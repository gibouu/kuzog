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
  };

  // Navigation
  navigation: {
    home: string;
    contact: string;
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

}
