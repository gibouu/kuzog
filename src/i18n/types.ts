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

export interface HydrobioLeadStat {
  value: string;
  label: string;
}

export interface HydrobioProblemStat {
  value: string;
  label: string;
  caption?: string;
  source?: string;
}

export interface HydrobioSolutionComponent {
  name: string;
  role: string;
  bullets: string[];
}

export interface HydrobioRoadmapStep {
  phase: string;
  label: string;
  detail?: string;
}

export interface HydrobioTeamMember {
  name: string;
  role: string;
  bio: string;
  highlights: string[];
}

export interface HydrobioIpCard {
  title: string;
  detail: string;
}

export interface HydrobioImpactStat {
  value: string;
  label: string;
  caption: string;
  source?: string;
}

export interface HydrobioContent {
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    recognition?: string;
    leadStats: HydrobioLeadStat[];
  };
  problem: {
    eyebrow: string;
    title: string;
    body: string;
    stats: HydrobioProblemStat[];
  };
  solution: {
    eyebrow: string;
    title: string;
    components: HydrobioSolutionComponent[];
    synergyLine: string;
  };
  results: {
    eyebrow: string;
    title: string;
    stats: HydrobioImpactStat[];
    footnote: string;
    roadmapHeading: string;
    roadmapSteps: HydrobioRoadmapStep[];
  };
  team: {
    eyebrow: string;
    title: string;
    members: HydrobioTeamMember[];
    ipHeading: string;
    ipCards: HydrobioIpCard[];
  };
  impact: {
    eyebrow: string;
    title: string;
    stats: HydrobioImpactStat[];
    sdgValue: string;
    sdgLabel: string;
    sdgCaption: string;
  };
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

export interface MicroplantesDensityRow {
  method: string;
  density: string;
  surface: string;
  multiplier: string;
}

export interface MicroplantesPartnershipPillar {
  title: string;
  detail: string;
}

export interface MicroplantesContent {
  hero: {
    eyebrow: string;
    title: string;
    tagline: string;
    leadStats: MicroplantesLeadStat[];
  };
  opportunity: {
    eyebrow: string;
    title: string;
    body: string;
    stats: MicroplantesStat[];
  };
  method: {
    eyebrow: string;
    title: string;
    body: string;
    advantageLine: string;
    densityHeading: string;
    densityRows: MicroplantesDensityRow[];
    densityFootnote: string;
  };
  catalogue: {
    eyebrow: string;
    title: string;
    body: string;
    categories: Array<{ name: string; species: string[] }>;
    suggestionHeading: string;
    suggestionBody: string;
    suggestionCta: string;
  };
  site: {
    eyebrow: string;
    title: string;
    body: string;
    stats: MicroplantesStat[];
    advantageLine: string;
    positioning: string;  // NEW — for "Largest in-vitro lab in France at launch"
  };
  partnership: {
    eyebrow: string;
    title: string;
    pillars: MicroplantesPartnershipPillar[];
  };
  contactCTA: {
    title: string;
    description: string;
    ctaLabel: string;
  };
}

export interface GroupActivity {
  title: string;
  detail: string;
  externalUrl?: string;
}

export interface GroupRecognition {
  name: string;
  detail: string;
}

export interface GroupFounder {
  name: string;
  role: string;
  bio: string;
}

export interface GroupContent {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    origin: string;  // NEW — one line, founding context
  };
  activitiesHeading: string;
  activities: GroupActivity[];
  foundersHeading: string;  // NEW
  founders: GroupFounder[];  // NEW
  recognitionHeading: string;
  recognitions: GroupRecognition[];
  contactCTA: {
    title: string;
    description: string;
    ctaLabel: string;
  };
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
  group: GroupContent;

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
