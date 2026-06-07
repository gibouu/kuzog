import { SiteContent } from '../types';

export const fr: SiteContent = {
  header: {
    logoText: 'KUZOG',
    contactButton: 'Contactez-nous',
  },

  home: {
    cards: {
      hydrobio: {
        name: 'Hydrobio',
        slogan: 'Un amendement de sol hybride minéral-biologique en attente de brevet, qui restaure vie, eau et rendement.',
        cta: 'Découvrir',
        accent: 'hydrobio',
      },
      microplantes: {
        name: 'Microplantes',
        slogan: 'Bientôt la plus grande installation de micropropagation végétale de France.',
        cta: 'Découvrir',
        accent: 'microplantes',
      },
      group: {
        name: 'Le Groupe',
        slogan: 'Import-export agricole et commissionnement industriel, depuis Paris.',
        cta: 'Explorer',
        accent: 'group',
      },
    },
  },

  hydrobio: {
    hero: {
      eyebrow: 'Innovation du sol',
      title: 'Restaurer la vie du sol. Économiser l\'eau. Nourrir le monde.',
      tagline: 'Hydrobio est un amendement de sol hybride minéral-biologique — argile, zéolite et champignons mycorhiziens qui travaillent ensemble pour restaurer les sols dégradés en une seule application.',
      recognition: 'Rotary Club de Paris — Startup de l\'année 2026',
      pilotCta: 'Demander un site pilote',
      scienceCta: 'Lire la science',
      leadStats: [
        { value: '+47%', label: 'Rétention d\'eau sur sols sableux' },
        { value: '+18,7%', label: 'Rendement vs. témoin non traité' },
        { value: '3–5 ans', label: 'Effet par application' },
      ],
    },
    problem: {
      eyebrow: 'Pourquoi maintenant',
      title: 'Le sol s\'effondre — et les outils conventionnels ne traitent qu\'une dimension à la fois.',
      body: 'Un tiers des sols mondiaux sont dégradés, la superficie touchée par la sécheresse a doublé en 40 ans, et 70 % de toute l\'eau douce part dans l\'agriculture. Les intrants existants traitent une dimension — physique, chimique ou biologique — mais jamais les trois ensemble. Hydrobio les combine en une seule application.',
      stats: [],
    },
    solution: {
      eyebrow: 'La science',
      title: 'Une technologie hybride minérale-biologique.',
      components: [
        {
          name: 'Argile micronisée',
          role: 'Fraction colloïdale',
          bullets: ['Surface spécifique ×200 vs. argiles standard', 'Rétention d\'eau maximale', 'Dispersion homogène dans le sol'],
        },
        {
          name: 'Zéolite micronisée',
          role: 'Réservoir nutritif',
          bullets: ['Microporosité complexe', 'Capacité d\'échange cationique élevée', 'Libération progressive des nutriments'],
        },
        {
          name: 'Consortium mycorhizien',
          role: 'Activateur biologique',
          bullets: ['Colonisation racinaire jusqu\'à 3× plus rapide', 'Tolérance au stress hydrique', 'Restaure la biodiversité du sol'],
        },
      ],
      synergyLine: 'Les minéraux servent de substrat aux mycorhizes — colonisation racinaire 3× plus rapide, efficacité de 3 à 5 ans. Un nouveau mode d\'action.',
    },
    results: {
      eyebrow: 'Résultats',
      title: 'Mesurés. Reproductibles. Validés.',
      stats: [
        { value: '+47%', label: 'Rétention d\'eau', caption: 'Sols sableux — Europe du Sud & MENA' },
        { value: '+18,7%', label: 'Rendements', caption: 'vs. témoin non traité, même type de sol' },
        { value: '3–5 ans', label: 'Durée d\'efficacité', caption: 'Application unique' },
        { value: '−20–30%', label: 'Intrants chimiques éliminés', caption: 'Moins d\'engrais et de pesticides de synthèse' },
      ],
      footnote: 'Essais contrôlés, à confirmer en essais de terrain indépendants.',
      roadmapHeading: 'Notre chemin vers le lancement commercial',
      roadmapSteps: [
        { phase: 'Étape 1', label: 'Validation en laboratoire interne', detail: 'Complète — formulation figée, mécanisme caractérisé.' },
        { phase: 'Étape 2', label: 'Pilotes semi-industriels', detail: 'FarmInnLab — en cours, résultats attendus en 2026.' },
        { phase: 'Étape 3', label: 'Essais de terrain indépendants', detail: 'Occitanie — T2 2027.' },
        { phase: 'Étape 4', label: 'Homologation UE', detail: 'Biostimulant hybride — Règl. UE 2019/1009, cible 2028.' },
      ],
    },
    team: {
      eyebrow: 'Équipe & PI',
      title: 'Construit par des ingénieurs et des opérateurs.',
      members: [
        {
          name: 'Gibril Bachouchi',
          role: 'Cofondateur & Directeur R&D',
          bio: 'Ingénieur en nanotechnologie de l\'Université de Waterloo. Inventeur de la formulation Hydrobio.',
          highlights: ['Expert en micronisation & interaction nano-sol', 'Protocoles salles blanches & contamination', 'Détenteur de brevet USPTO'],
        },
        {
          name: 'Malik Bachouchi',
          role: 'Cofondateur & PDG',
          bio: 'Wharton School (UPenn) + MSc Informatique + bachelor en ingénierie mécanique. 15 ans à diriger de grands programmes internationaux.',
          highlights: ['Direction de programmes industriels', 'Stratégie internationale', 'Partenariats publics-privés'],
        },
      ],
      ipHeading: 'Propriété intellectuelle',
      ipCards: [
        { title: 'Brevet USPTO déposé', detail: 'Composition, mécanisme d\'action et procédé de fabrication. Extension PCT prévue : Europe, MENA, Amériques.' },
        { title: 'Liberté d\'exploitation', detail: 'Aucune dépendance de licence, aucune revendication de tiers. KUZOG détient toute la pile technologique.' },
        { title: 'Règl. UE 2019/1009', detail: 'Dossier réglementaire en préparation avec l\'ANSES France et l\'EMA Europe. Statut : biostimulant hybride.' },
      ],
    },
    impact: {
      eyebrow: 'Impact',
      title: 'Ce qui change quand Hydrobio passe à l\'échelle.',
      stats: [
        { value: '> 0,5 t/ha', label: 'Carbone séquestré par cycle', caption: 'Les réseaux mycorhiziens stabilisent la matière organique du sol.', source: 'Rillig & Mummey 2006 · IPCC AR6 AFOLU 2022' },
        { value: '×3', label: 'Biodiversité du sol restaurée', caption: 'L\'activité microbienne rebondit, inversant des décennies de monoculture.', source: 'Smith & Read 2008 · Barea et al. 2005' },
        { value: '−25%', label: 'Lessivage des nitrates évité', caption: 'La zéolite à CEC élevée retient l\'azote dans la zone racinaire.', source: 'Huang & Petrovic 1994 · Kubo et al. 2010' },
        { value: '∞', label: 'Sols dégradés rendus productifs', caption: 'Sols arides, sableux ou pauvres restaurés sans excavation ni remplacement.', source: 'FAO/ITPS 2015 · Nair et al. 2011' },
      ],
      sdgValue: 'ODD',
      sdgLabel: '2 · 6 · 13 · 15',
      sdgCaption: 'Faim zéro · Eau propre · Action climatique · Vie terrestre',
    },
    recognition: {
      eyebrow: 'Actualités & reconnaissances',
      title: 'Signaux tiers.',
      items: [
        { kind: 'incubation', source: 'Jeune Entreprise Innovante (JEI)', detail: 'Reconnue Jeune Entreprise Innovante par l\'État français — statut accordé aux entreprises avec un investissement substantiel en R&D.' },
        { kind: 'award', source: 'Rotary Club de Paris', date: '2026', detail: 'Hydrobio désignée Startup de l\'année — reconnaissance de la nouveauté technique et du potentiel d\'impact de la formulation.' },
        { kind: 'award', source: 'Open Carca 2025', detail: 'KUZOG (la maison-mère d\'Hydrobio) — lauréate du concours entrepreneurial Open Carca 2025.' },
        { kind: 'incubation', source: 'AgroParisTech — FarmInnLab', detail: 'Programme pilote semi-industriel d\'Hydrobio hébergé à l\'incubateur AgroParisTech FarmInnLab.' },
        { kind: 'incubation', source: 'Paris&Co', detail: 'KUZOG (la maison-mère d\'Hydrobio) incubée à l\'écosystème d\'innovation Paris&Co.' },
        { kind: 'grant', source: 'Ville de Paris', detail: 'KUZOG bénéficie d\'une subvention de 30 000 € de la Ville de Paris pour l\'innovation industrielle.' },
      ],
    },
    contactCTA: {
      title: 'Parlons d\'Hydrobio.',
      description: 'Demandes de sites pilotes, conversations de partenariat, questions scientifiques — nous répondons sous deux jours ouvrés.',
      ctaLabel: 'Nous contacter',
    },
  },

  microplantes: {
    hero: {
      eyebrow: 'Souveraineté végétale',
      title: 'Micropropagation végétale industrielle, conçue en France.',
      tagline: 'Microplantes est le futur plus grand laboratoire de micropropagation végétale de France — issu de la reconversion du site SEBBIN à Boissy-l\'Aillerie, porté par KUZOG France.',
      leadStats: [
        { value: 'Jusqu\'à ~10 M', label: 'Vitroplants par an à pleine capacité' },
        { value: '370 m²', label: 'Salles blanches ISO 5 opérationnelles' },
        { value: '4', label: 'Filières stratégiques' },
      ],
    },
    opportunity: {
      eyebrow: 'Le contexte',
      title: 'La France importe la majorité de ses jeunes plants. Nous voulons changer cela.',
      body: '60 % des jeunes plants vendus en France viennent aujourd\'hui de l\'étranger — majoritairement des Pays-Bas. Cette dépendance crée un risque sanitaire, draine du capital hors du pays et fait reculer la base de production horticole française année après année. Microplantes est notre contribution pour combler cet écart, en commençant par une plateforme industrielle neutre multi-espèces.',
      stats: [
        { value: '60 %', label: 'Part importée des jeunes plants en France', source: 'VALHOR / FranceAgriMer' },
        { value: '12:1', label: 'Ratio import/export', source: 'VALHOR' },
        { value: '5 %/an', label: 'Acteurs français en recul', source: 'VALHOR' },
      ],
    },
    method: {
      eyebrow: 'La méthode',
      title: 'La micropropagation : plus rapide, plus saine, plus dense que les méthodes classiques.',
      body: 'La culture de méristèmes produit des clones indemnes de virus, génétiquement identiques au parent, et prêts à passer à l\'échelle. Une nouvelle variété passe en 1 à 2 ans de la sélection au volume commercial — contre 10 à 15 ans en multiplication conventionnelle. Le procédé tourne en intérieur, 365 jours par an, sur rayonnages verticaux à 5 niveaux.',
      advantageLine: 'Gain de temps 80–90 %. Contrôle sanitaire 100 %. Avantage de densité spectaculaire.',
      densityHeading: 'Densité par m² au sol et par an — comparaison',
      densityRows: [
        { method: 'Microplantes (ISO 5 + rayonnages 5 niveaux)', density: '~19 000', surface: '370 m²', multiplier: '1× (référence)' },
        { method: 'Pépinière intensive sous serre', density: '~100', surface: '7 ha', multiplier: '189×' },
        { method: 'Fraisier (stolons)', density: '~50', surface: '14 ha', multiplier: '378×' },
        { method: 'Framboisier (drageons)', density: '~30', surface: '23 ha', multiplier: '631×' },
        { method: 'Multiplication arboricole (greffage)', density: '~5', surface: '140 ha', multiplier: '3 784×' },
      ],
      densityFootnote: 'À volume cible identique de 7 M plants/an. Sources : CTIFL Balandran, GRAB, Plants-de-fraises.fr.',
    },
    catalogue: {
      eyebrow: 'Ce que nous produisons',
      title: 'Une plateforme multi-espèces dès le démarrage.',
      body: 'Notre capacité industrielle est conçue pour traiter des centaines d\'espèces. Le catalogue de lancement priorise les marchés professionnels français et européens à forte demande, avec de nouvelles espèces ajoutées chaque trimestre en fonction de la traction commerciale.',
      categories: [
        {
          name: 'Ornementales',
          species: ['Géraniums', 'Dipladenias', 'Cyclamens', 'Chrysanthèmes', 'Orchidées', 'Bégonias', 'Pensées', 'Impatiens', 'Pétunias'],
        },
        {
          name: 'Petits fruits & maraîchères',
          species: ['Fraisier', 'Framboisier', 'Myrtillier', 'Mûrier', 'Groseillier', 'Pomme de terre', 'Artichaut', 'Asperge', 'Légumes-feuilles'],
        },
        {
          name: 'Arboricoles & porte-greffes',
          species: ['Porte-greffes pomme', 'Porte-greffes poire', 'Porte-greffes cerise', 'Clones de vigne', 'Clones d\'olivier', 'Mûrier'],
        },
        {
          name: 'Tropicales & stratégiques',
          species: ['Bananier', 'Ananas (MD2)', 'Palmier dattier', 'Vanille', 'Gingembre', 'Curcuma', 'Plantes médicinales'],
        },
      ],
      suggestionHeading: 'Votre espèce n\'y est pas ?',
      suggestionBody: 'Nous avons la capacité d\'intégrer rapidement de nouvelles espèces. Dites-nous ce dont vous avez besoin et nous reviendrons vers vous avec une faisabilité et un calendrier.',
      suggestionCta: 'Suggérer une espèce',
    },
    site: {
      eyebrow: 'Le site',
      title: 'Le plus grand laboratoire in vitro végétal de France, à Boissy-l\'Aillerie.',
      body: 'Le site Microplantes est l\'ancien établissement industriel SEBBIN, repris en partenariat avec la SEMAVO (société d\'économie mixte régionale) via un dispositif de location avec option d\'achat. L\'enveloppe propre et le traitement d\'air sont déjà en place — la conversion ne nécessite qu\'une remise à niveau modeste.',
      stats: [
        { value: '952 m²', label: 'Surface couverte sur deux étages' },
        { value: '370 m²', label: 'Salles blanches ISO 5 opérationnelles' },
        { value: '1 307 m²', label: 'Surface foncière' },
      ],
      advantageLine: 'Reconvertir un actif industriel existant — plus rapide, plus économique et moins risqué que de construire ex nihilo.',
      positioning: 'À pleine capacité, Microplantes produira environ jusqu\'à 10 millions de vitroplants par an — devenant ainsi le plus grand laboratoire dédié à la micropropagation végétale en France.',
    },
    sustainability: {
      eyebrow: 'Pourquoi cela compte',
      title: 'Pourquoi produire les plants en France.',
      body: 'La micropropagation industrielle en France n\'est pas seulement une affaire commerciale — c\'est une affaire stratégique. Produire ici, c\'est moins dépendre d\'une poignée de fournisseurs étrangers, moins d\'émissions de fret sur le corridor européen, et moins de risque d\'importer le prochain pathogène végétal.',
      pillars: [
        { value: 'Souveraineté', title: 'Réduire la dépendance aux importations', detail: 'La France importe aujourd\'hui 60 % de ses jeunes plants. Une production nationale réduit l\'exposition aux chocs d\'approvisionnement étrangers et protège la base horticole française.' },
        { value: '−CO₂', title: 'Réduire les émissions de fret', detail: 'Les plants produits à Boissy-l\'Aillerie parcourent des centaines de kilomètres, pas des milliers. Moins de transport routier réfrigéré, donc une empreinte carbone par plant nettement plus faible.' },
        { value: 'Sanitaire', title: 'Diminuer le risque biosécuritaire', detail: 'Chaque lot importé est un vecteur potentiel de nouveaux ravageurs et virus. Une production in vitro en ISO 5 fournit aux acheteurs un matériel certifié sain à la source.' },
      ],
    },
    contactCTA: {
      title: 'Parlons de Microplantes.',
      description: 'Partenariats site, questions techniques, demandes commerciales — nous répondons sous deux jours ouvrés.',
      ctaLabel: 'Nous contacter',
    },
  },

  footer: {
    copyright: '© 2025 KUZOG. Tous droits réservés.',
    privacyLink: 'Politique de confidentialité',
    ethicsLink: 'Code d\'éthique',
  },

  navigation: {
    home: 'Accueil',
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
    errorCaptcha: 'Veuillez compléter le captcha avant d\'envoyer.',
    errorSubmit: 'Nous n\'avons pas pu envoyer votre message. Veuillez réessayer.',
    successMessage: 'Message envoyé. Nous répondrons sous peu.',
  },

  group: {
    hero: {
      eyebrow: 'À propos de KUZOG France',
      title: 'KUZOG France — holding à vocation agricole.',
      body: 'KUZOG France est une holding parisienne à vocation agricole. Nous concevons et exploitons deux entreprises industrielles agricoles : Hydrobio (amendement de sol hybride minéral-biologique + moteur de formulation IA) et Microplantes (laboratoire industriel de micropropagation végétale).',
      origin: 'Fondée en 2024 par un duo père-fils — un ingénieur nanotech et un opérateur formé à Wharton — pour construire des entreprises industrielles agricoles à la croisée de l\'ingénierie, du capital et de Paris.',
    },
    foundersHeading: 'Fondateurs',
    founders: [
      { name: 'Gibril-Gabriel Bachouchi', role: 'Président', bio: 'Ingénieur en nanotechnologie (Université de Waterloo). Expert en salles blanches et protocoles de contamination.' },
      { name: 'Malik Bachouchi', role: 'Directeur', bio: 'MBA Wharton (UPenn) + MSc Informatique. 15 ans à diriger de grands programmes industriels et financiers internationaux.' },
    ],
    recognition: {
      eyebrow: 'Reconnaissances',
      items: [
        { kind: 'incubation', source: 'Paris&Co', detail: 'Incubée à l\'écosystème d\'innovation Paris&Co — le principal hub d\'innovation de la capitale.' },
        { kind: 'grant', source: 'Ville de Paris', detail: 'Subvention de 30 000 € de la Ville de Paris pour l\'innovation industrielle.' },
        { kind: 'award', source: 'Open Carca 2025', detail: 'Lauréate du concours entrepreneurial 2025.' },
        { kind: 'award', source: 'Rotary Club de Paris', date: '2026', detail: 'Hydrobio (le projet phare de KUZOG) — Startup de l\'année.' },
      ],
    },
    contactCTA: {
      title: 'Parlons à KUZOG.',
      description: 'Demandes d\'investissement, conversations de partenariat, idées de projets — nous répondons sous deux jours ouvrés.',
      ctaLabel: 'Nous contacter',
    },
  },
};
