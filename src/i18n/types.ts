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

export interface SiteContent {
  // Header
  header: {
    logoText: string;
    contactButton: string;
  };

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
