import { SiteContent } from '../types';

export const fr: SiteContent = {
  header: {
    logoText: 'KUZOG',
    contactButton: 'Contactez-nous',
  },

  findSolution: {
    title: 'Trouvez Votre Solution',
    description: 'KUZOG est un réseau international de résolveurs de problèmes qui relie les marchés d\'Amérique du Nord et d\'Europe au Moyen-Orient.',
    subtitle: 'Sélectionnez votre profil pour découvrir des solutions adaptées de KUZOG',
  },

  audiences: [
    {
      id: 'manufacturer',
      label: 'Je suis Fabricant',
      shortLabel: 'Fabricant',
      tagline: 'Optimisez la production et connectez-vous à de nouveaux marchés mondiaux.',
      industry: 'Fabrication',
      ctaText: 'Découvrez comment nous pouvons faire évoluer votre production.',
      subSections: [
        {
          id: 'sourcing',
          title: 'Approvisionnement Industriel',
          content: 'Optimisez votre chaîne d\'approvisionnement avec un approvisionnement fiable en matériaux et équipements. Nous connectons les fabricants à des fournisseurs vérifiés sur tous les continents, garantissant qualité, conformité et prix compétitifs.',
        },
        {
          id: 'markets',
          title: 'Expansion de Marché',
          content: 'Pénétrez de nouveaux territoires en toute confiance. KUZOG ouvre des portes vers les marchés internationaux grâce à la mise en relation avec des distributeurs, la facilitation du commerce et le développement de partenariats locaux.',
        },
        {
          id: 'optimization',
          title: 'Excellence de la Chaîne Logistique',
          content: 'Maximisez l\'efficacité grâce à l\'optimisation de bout en bout de la chaîne logistique. Nos consultants analysent vos opérations, identifient les goulets d\'étranglement et mettent en œuvre des solutions qui réduisent les coûts et améliorent les délais de livraison.',
        },
        {
          id: 'technology',
          title: 'Automatisation et ESG',
          content: 'Préparez vos opérations pour l\'avenir avec l\'automatisation et les initiatives de durabilité. Nous guidons l\'intégration technologique pour l\'Industrie 4.0, aidons à atteindre les normes de conformité ESG et vous connectons avec des solutions d\'énergie propre.',
        },
      ],
    },
    {
      id: 'importer',
      label: 'Je suis Importateur / Exportateur',
      shortLabel: 'Import / Export',
      tagline: 'Le commerce simplifié — connectez vos produits aux bons acheteurs.',
      industry: 'Import / Export',
      ctaText: 'Trouvez votre prochain marché.',
      subSections: [
        {
          id: 'facilitation',
          title: 'Facilitation Commerciale',
          content: 'Simplifiez le commerce international avec des services de facilitation de bout en bout. KUZOG agit comme votre partenaire de confiance, connectant les vendeurs aux acheteurs qualifiés et gérant les complexités du commerce transfrontalier.',
        },
        {
          id: 'logistics',
          title: 'Logistique et Conformité',
          content: 'Naviguez dans les douanes, l\'expédition et les exigences réglementaires avec des conseils d\'experts. Nous fournissons une coordination logistique, un soutien à la documentation et des conseils en conformité pour garantir que vos marchandises circulent efficacement à travers les frontières.',
        },
        {
          id: 'certification',
          title: 'Certification des Produits',
          content: 'Répondez aux normes internationales avec un soutien complet à la certification. Nous vous guidons à travers les tests de produits, les protocoles d\'assurance qualité et les approbations réglementaires pour les marchés cibles.',
        },
        {
          id: 'intelligence',
          title: 'Intelligence de Marché',
          content: 'Prenez des décisions éclairées avec des données d\'intelligence de marché et de tarification en temps réel. Notre réseau fournit des informations sur les tendances de la demande, les prix compétitifs et les opportunités émergentes.',
        },
      ],
    },
    {
      id: 'farmer',
      label: 'Je suis Agriculteur',
      shortLabel: 'Agriculteur',
      tagline: 'Autonomiser l\'agriculture par l\'innovation et l\'accès.',
      industry: 'Agriculture',
      ctaText: 'Dites-nous ce dont vous avez besoin — nous vous connecterons à la bonne solution.',
      subSections: [
        {
          id: 'equipment',
          title: 'Équipement et Technologie',
          content: 'Accédez à des équipements agricoles de pointe et à des technologies agricoles intelligentes. Des systèmes d\'irrigation de précision aux solutions de récolte automatisées, nous vous connectons à des fournisseurs qui comprennent vos besoins uniques.',
        },
        {
          id: 'inputs',
          title: 'Semences et Solutions de Sol',
          content: 'Transformez les terrains difficiles avec nos programmes spécialisés d\'amélioration des sols. Nous donnons accès à des semences de qualité supérieure, de la bentonite pour la rétention d\'eau, des mycorhizes pour la santé des racines et des solutions d\'engrais complètes.',
        },
        {
          id: 'infrastructure',
          title: 'Infrastructure Durable',
          content: 'Construisez pour l\'avenir avec irrigation solaire, logements agricoles modulaires et systèmes de gestion de l\'eau conçus pour l\'efficacité. Nous vous aidons à mettre en œuvre une infrastructure qui réduit les coûts tout en augmentant la productivité.',
        },
        {
          id: 'financing',
          title: 'Financement et Soutien',
          content: 'Surmontez les obstacles financiers avec des options de location flexibles et un financement d\'équipement adapté aux cycles agricoles. Notre réseau comprend des partenaires financiers qui comprennent la saisonnalité agricole.',
        },
      ],
    },
    {
      id: 'startup',
      label: 'Je suis une Start-up',
      shortLabel: 'Start-up',
      tagline: 'De l\'idée au marché — KUZOG soutient les innovateurs avec stratégie et réseaux.',
      industry: 'Technologie / Start-ups',
      ctaText: 'Réservez un appel de découverte avec un mentor KUZOG.',
      subSections: [
        {
          id: 'validation',
          title: 'Preuve de Concept',
          content: 'Transformez votre vision en réalité avec un soutien structuré de preuve de concept. Nous vous aidons à valider votre idée, à créer des MVP et à vous connecter avec les premiers adoptants sur différents marchés.',
        },
        {
          id: 'funding',
          title: 'Financement et Partenariats',
          content: 'Naviguez dans le paysage du financement en toute confiance. Nous connectons les start-ups avec des investisseurs providentiels, du capital-risque et des partenaires stratégiques en Amérique du Nord, en Europe et au Moyen-Orient.',
        },
        {
          id: 'market-entry',
          title: 'Stratégie d\'Entrée sur le Marché',
          content: 'Élargissez au-delà des frontières avec des stratégies d\'entrée sur le marché localisées. Nous fournissons des renseignements sur les exigences réglementaires, les considérations culturelles et les paysages concurrentiels.',
        },
        {
          id: 'growth',
          title: 'Image de Marque et Croissance',
          content: 'Évoluez avec impact grâce à l\'image de marque stratégique et au marketing. Nos partenaires vous aident à développer des identités de marque convaincantes, des stratégies de mise sur le marché et des cadres d\'acquisition de clients.',
        },
      ],
    },
  ],

  solutionsCard: {
    contactButton: 'Contactez-nous',
    agriButton: 'Visiter KUZOG AGRI',
  },

  hero: {
    badge: 'Précision Stratégique',
    title: 'Nous acquérons, opérationnalisons et développons des entreprises sur tous les continents.',
    description: 'KUZOG déploie des équipes dirigées par des praticiens pour stabiliser les actifs en difficulté, relancer les projets bloqués et construire des modèles opérationnels internationaux qui résistent à l\'examen.',
    contactButton: 'Contactez-nous',
    exploreButton: 'Explorer les industries',
    operatorsFocus: {
      title: 'Focus des opérateurs',
      description: 'Des praticiens multiculturels intégrés dans chaque région apportent gouvernance, maîtrise du capital et opérations sur le terrain à chaque mandat.',
    },
    deliveryNotes: {
      title: 'Notes de livraison',
      description: 'Utilisez cette carte pour capturer les initiatives à venir, les fenêtres de lancement ou les capacités d\'opérateur sur mesure que vous souhaitez mettre en avant.',
    },
  },

  regionalDelivery: {
    title: 'Livraison Régionale',
    sectionLabel: 'Section 02',
    regions: {
      'Europe': 'Nous acquérons des actifs en difficulté, restructurons les opérations et développons les entreprises agricoles sur les marchés européens.',
      'North America': 'Gestion des relations, lobbying et conseil juridique pour les entreprises nord-américaines cherchant à exporter ou à opérer à l\'étranger.',
      'Middle East': 'Les opérateurs sur le marché coordonnent les partenariats, la livraison de projets et la conformité dans le Golfe et le paysage ME plus large.',
      'Africa': 'Nous créons des entreprises, commandons des usines et gérons des programmes agricoles et technologiques à travers le continent.',
    },
  },

  services: {
    title: 'Services',
    sectionLabel: 'Section 03',
    items: [
      {
        title: 'Exécution privée et sur mesure',
        body: 'Nous gérons les transformations sensibles de manière discrète—alignant opérateurs, financiers et parties prenantes publiques pour que chaque mandat résiste à l\'examen.',
      },
      {
        title: 'Gouvernance axée sur les opérateurs',
        body: 'Les sprints hebdomadaires sur le terrain fusionnent avec des rapports prêts pour le conseil d\'administration, maintenant les feuilles de route, la conformité et la livraison liées partout où nous opérons.',
      },
      {
        title: 'Maîtrise du capital',
        body: 'Nous traduisons les réalités opérationnelles en récits de qualité investisseur afin que les fournisseurs de capitaux voient à la fois le potentiel et les contrôles avant la clôture de l\'accord.',
      },
      {
        title: 'Commerce International',
        body: 'Depuis plus de 10 ans, KUZOG aide les opérateurs africains à sécuriser des biens et services internationaux grâce à un approvisionnement privé et sur mesure, un financement et une logistique.',
      },
    ],
  },

  operations: {
    title: 'Opérations et Éthique',
    sectionLabel: 'Section 04',
    description: 'Nous opérons sous une politique de tolérance zéro sur la corruption. Notre code interne s\'aligne sur les exigences de Sapin II, FCPA et UK Bribery Act, structurant chaque mandat avec des lignes de reporting transparentes et une documentation prête pour l\'audit.',
    commitmentsTitle: 'Engagements de gouvernance',
    commitments: [
      'Sélection complète des partenaires et des intermédiaires avant l\'engagement.',
      'Chaînes d\'approbation documentées et contrôles financiers pour chaque projet.',
      'Agent de conformité dédié pour les mandats sensibles.',
    ],
    viewCodeButton: 'Voir le code d\'éthique',
  },

  otherProjects: {
    title: 'Autres Projets',
    sectionLabel: 'Section 05',
    kuzogConsulting: {
      title: 'KUZOG Consulting Inc.',
      description: 'Gestion de programme et soutien à la conformité en Amérique du Nord, basés à Toronto avec livraison à travers le Canada et les États-Unis.',
      button: 'Visiter kuzog.ca',
    },
    blog: {
      title: 'KUZOG Insights',
      description: 'Explorez nos dernières perspectives sur le commerce international, l\'agriculture durable et les opérations transfrontalières. Analyses pratiques du terrain.',
      button: 'Lire notre blog',
    },
    kuzogAgri: {
      title: 'KUZOG AGRI Inc.',
      description: 'Les microstructures minérales HYDROBIO améliorent l\'eau disponible pour les plantes, la tamponisation des nutriments et les habitats microbiens dans les sols sableux et dégradés—soutenant des zones racinaires résilientes avec une irrigation réduite.',
      button: 'Visiter KUZOG AGRI',
    },
  },

  footer: {
    copyright: '© 2025 KUZOG. Tous droits réservés.',
    privacyLink: 'Politique de confidentialité',
    ethicsLink: 'Code d\'éthique',
  },

  navigation: {
    home: 'Accueil',
    manufacturing: 'Industries',
    trade: 'Commerce',
    startup: 'Start-ups',
    agri: 'AGRI',
    contact: 'Contact',
  },

  contactModal: {
    title: 'Faisons avancer votre projet',
    subtitle: 'Partagez quelques détails et notre équipe répondra dans un délai d\'un jour ouvrable.',
    nameLabel: 'Nom complet',
    emailLabel: 'E-mail',
    industryLabel: 'Industrie',
    messageLabel: 'Message',
    industryOptions: {
      placeholder: 'Sélectionnez votre industrie',
      agriculture: 'Agriculture',
      manufacturing: 'Fabrication',
      importExport: 'Import / Export',
      technology: 'Technologie / Start-ups',
      renewableEnergy: 'Énergie Renouvelable',
      other: 'Autre',
    },
    submitButton: 'Envoyer',
    submittingButton: 'Envoi en cours…',
    emailButton: 'Nous envoyer un e-mail',
    errorRequired: 'Veuillez remplir tous les champs avant d\'envoyer.',
    errorEmail: 'Entrez une adresse e-mail valide.',
    errorSubmit: 'Nous n\'avons pas pu envoyer votre message. Veuillez réessayer.',
    successMessage: 'Message envoyé. Nous répondrons sous peu.',
  },
};
