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
  eyebrow: string;
  title: string;
  microStats: string[];
  cta: string;
  accent: 'hydrobio' | 'microplantes' | 'group';
  chips?: string[]; // group card only
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

export interface HydrobioMarketCard {
  eyebrow: string;
  value: string;
  label: string;
  caption: string;
  source?: string;
}

export interface HydrobioTamSamSom {
  tamValue: string;
  tamLabel: string;
  tamCaption: string;
  tamSource?: string;
  samValue: string;
  samLabel: string;
  samCaption: string;
  samSource?: string;
  somValue: string;
  somLabel: string;
  somCaption: string;
  somSource?: string;
}

export interface HydrobioRoadmapStep {
  phase: string;
  label: string;
  detail?: string;
}

export interface HydrobioPricingTier {
  label: string;
  price: string;
  margin: string;
}

export interface HydrobioDeploymentStep {
  number: number;
  title: string;
  detail: string;
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
    stats: HydrobioProblemStat[];
    quote: string;
    quoteSource: string;
    framingLine: string;
  };
  solution: {
    eyebrow: string;
    title: string;
    components: HydrobioSolutionComponent[];
    synergyLine: string;
  };
  competitiveEdge: {
    eyebrow: string;
    title: string;
    columns: string[];
    rows: { criterion: string; values: string[] }[];
    caption: string;
  };
  market: {
    eyebrow: string;
    title: string;
    cards: HydrobioMarketCard[];
    tamSamSom: HydrobioTamSamSom;
  };
  results: {
    eyebrow: string;
    title: string;
    stats: HydrobioImpactStat[];
    footnote: string;
    roadmapHeading: string;
    roadmapSteps: HydrobioRoadmapStep[];
  };
  businessModel: {
    eyebrow: string;
    title: string;
    pricingHeading: string;
    pricing: HydrobioPricingTier[];
    pricingFootnote: string;
    trajectoryHeading: string;
    trajectoryLine: string;
    distributionHeading: string;
    distribution: { share: string; label: string }[];
  };
  gtm: {
    eyebrow: string;
    title: string;
    steps: HydrobioDeploymentStep[];
    priorityLine: string;
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
  systemicImpact: {
    eyebrow: string;
    title: string;
    stats: HydrobioImpactStat[];
    sdgValue: string;
    sdgLabel: string;
    sdgCaption: string;
  };
  smallholder: {
    eyebrow: string;
    title: string;
    intro: string;
    introSource: string;
    body: string;
    stats: HydrobioImpactStat[];
    closing: string;
  };
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
