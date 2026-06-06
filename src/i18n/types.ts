// i18n Types - Centralized type definitions for all translatable content

export type Language = 'en' | 'fr' | 'ar';

export interface LanguageConfig {
  code: Language;
  name: string;
  nativeName: string;
  dir: 'ltr' | 'rtl';
}

export interface AudienceSubSection {
  id: string;
  title: string;
  content: string;
}

export interface AudienceContent {
  id: 'manufacturer' | 'importer' | 'farmer' | 'startup';
  label: string;
  shortLabel: string; // For mobile/small screens
  tagline: string;
  industry: string;
  subSections: AudienceSubSection[];
  ctaText: string;
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
  mission: string;
}

export interface HydrobioLeadStat {
  value: string;
  label: string;
}

export interface HydrobioProblemStat {
  value: string;
  label: string;
  caption: string;
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

export interface MicroplantesMarketSegment {
  name: string;
  share: string;
  volume: string;
  caption: string;
}

export interface MicroplantesCompetitor {
  name: string;
  capacity: string;
  positioning: string;
}

export interface MicroplantesRampStep {
  year: string;
  capacity: string;
  workforce: string;
  caption?: string;
}

export interface MicroplantesFinancialRow {
  label: string;
  values: string[];
}

export interface MicroplantesTeamMember {
  name: string;
  role: string;
  bio: string;
  highlights: string[];
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
    stats: MicroplantesStat[];
    framingLine: string;
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
  site: {
    eyebrow: string;
    title: string;
    body: string;
    stats: MicroplantesStat[];
    advantageLine: string;
  };
  partnership: {
    eyebrow: string;
    title: string;
    body: string;
    pillarsHeading: string;
    pillars: MicroplantesPartnershipPillar[];
    partnerName: string;
    partnerCredentials: string;
  };
  market: {
    eyebrow: string;
    title: string;
    segments: MicroplantesMarketSegment[];
    totalLine: string;
  };
  competition: {
    eyebrow: string;
    title: string;
    competitors: MicroplantesCompetitor[];
    positioningLine: string;
  };
  operations: {
    eyebrow: string;
    title: string;
    body: string;
    rampHeading: string;
    rampSteps: MicroplantesRampStep[];
  };
  financials: {
    eyebrow: string;
    title: string;
    body: string;
    years: string[];
    rows: MicroplantesFinancialRow[];
    capitalStructureHeading: string;
    capitalStructureLine: string;
    roiLine: string;
  };
  team: {
    eyebrow: string;
    title: string;
    members: MicroplantesTeamMember[];
  };
  successFactors: {
    eyebrow: string;
    title: string;
    intro: string;
    factors: string[];
    closing: string;
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

export interface GroupContent {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
  };
  activitiesHeading: string;
  activities: GroupActivity[];
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

  // Find Your Solution Section
  findSolution: {
    title: string;
    description: string;
    subtitle: string;
  };

  // Audiences
  audiences: AudienceContent[];

  // Solutions Card
  solutionsCard: {
    contactButton: string;
    agriButton: string;
  };

  // Hero Section
  hero: {
    badge: string;
    title: string;
    description: string;
    contactButton: string;
    exploreButton: string;
    operatorsFocus: {
      title: string;
      description: string;
    };
    deliveryNotes: {
      title: string;
      description: string;
    };
  };

  // Regional Delivery
  regionalDelivery: {
    title: string;
    sectionLabel: string;
    regions: {
      [key: string]: string;
    };
  };

  // Services
  services: {
    title: string;
    sectionLabel: string;
    items: Array<{
      title: string;
      body: string;
    }>;
  };

  // Operations & Ethics
  operations: {
    title: string;
    sectionLabel: string;
    description: string;
    commitmentsTitle: string;
    commitments: string[];
    viewCodeButton: string;
  };

  // Other Projects
  otherProjects: {
    title: string;
    sectionLabel: string;
    kuzogConsulting: {
      title: string;
      description: string;
      button: string;
    };
    kuzogAgri: {
      title: string;
      description: string;
      button: string;
    };
    blog: {
      title: string;
      description: string;
      button: string;
    };
  };

  // Footer
  footer: {
    copyright: string;
    privacyLink: string;
    ethicsLink: string;
  };

  // Navigation
  navigation: {
    home: string;
    manufacturing: string;
    trade: string;
    startup: string;
    agri: string;
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
    errorSubmit: string;
    successMessage: string;
  };

  // AGRI Page
  agriPage: {
    header: {
      contactButton: string;
    };
    about: {
      badge: string;
      title: string;
      description: string;
      contactButton: string;
      cards: {
        fullCycle: {
          title: string;
          description: string;
        };
        globalReach: {
          title: string;
          description: string;
        };
        partnership: {
          title: string;
          description: string;
        };
      };
    };
    services: {
      badge: string;
      title: string;
      items: Array<{
        title: string;
        body: string;
        details: string[];
      }>;
    };
    soilTech: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
      features: Array<{
        title: string;
        body: string;
      }>;
    };
  };
}
