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
      tagline: 'HYDROBIO est un amendement agronomique qui combine des minéraux micronisés et un consortium mycorhizien vivant. Une seule application régénère votre sol, retient l\'eau et nourrit vos cultures — pour 3 à 5 ans. Et grâce à notre application HydrobioFormul, chaque dose est calculée sur mesure pour votre sol et votre culture.',
      recognition: 'Rotary Club de Paris — Startup de l\'année 2026',
      pilotCta: 'Demander une analyse de sol',
      scienceCta: 'Découvrir HydrobioFormul',
      leadStats: [
        { value: '+47%', label: 'Rétention d\'eau sur sols sableux' },
        { value: '+18,7%', label: 'Rendement vs. témoin non traité' },
        { value: '3–5 ans', label: 'Effet par application' },
      ],
    },
    solution: {
      eyebrow: 'Le produit',
      title: 'Un amendement hybride minéral-biologique — pas seulement un engrais.',
      intro: 'HYDROBIO ne se contente pas d\'apporter des nutriments : il restaure la capacité du sol à retenir l\'eau, échanger les nutriments et héberger la vie microbienne. Il agit sur les trois dimensions de la fertilité du sol — physique, chimique et biologique — en un seul produit. Trois composants complémentaires, une matrice minérale vivante.',
      components: [
        { name: 'Argile micronisée', role: 'Fraction colloïdale', bullets: ['Surface spécifique ×200 — rétention d\'eau maximale', 'Dispersion homogène dans le sol'] },
        { name: 'Zéolite micronisée', role: 'Réservoir nutritif', bullets: ['Capacité d\'échange cationique élevée', 'Libération progressive des nutriments'] },
        { name: 'Consortium mycorhizien', role: 'Activateur biologique', bullets: ['Colonisation racinaire plus rapide, meilleure absorption d\'eau et de nutriments', 'Tolérance au stress hydrique, biodiversité du sol restaurée'] },
      ],
      synergyLine: 'Les minéraux servent d\'échafaudage physique aux mycorhizes — la colonisation racinaire est plus rapide, l\'effet s\'étend sur 3 à 5 ans. Une matrice minérale vivante, pas seulement un mélange.',
    },
    journey: {
      eyebrow: 'Comment ça marche',
      title: 'Votre parcours en 4 étapes.',
      body: 'De l\'analyse du sol à l\'application, un chemin simple adapté à votre terrain.',
      steps: [
        { number: 1, title: 'Analyse du sol', body: 'Un prélèvement de terrain révèle texture, pH, capacité d\'échange cationique, matière organique, état biologique, capacité de rétention en eau et niveau de dégradation.' },
        { number: 2, title: 'Culture & objectifs', body: 'Nous identifions la culture cible, le contexte climatique (pluviométrie, stress hydrique, irrigation) et vos objectifs : économiser l\'eau, booster les rendements, restaurer un sol dégradé.' },
        { number: 3, title: 'HydrobioFormul (IA)', body: 'Notre application IA propriétaire calcule la composition exacte (ratios argile/zéolite/mycorhize) et la dose à l\'hectare, adaptées à votre sol et votre culture.' },
        { number: 4, title: 'Formulation sur site & application', body: 'L\'amendement est formulé sur site selon la recette et appliqué en un simple épandage + légère incorporation. Une seule application couvre 3 à 5 ans.' },
      ],
    },
    formul: {
      eyebrow: 'HydrobioFormul',
      title: 'Moteur de formulation IA.',
      tagline: 'L\'intelligence au service de chaque sol.',
      body: 'HydrobioFormul est l\'application propriétaire d\'HYDROBIO, propulsée par l\'intelligence artificielle. Elle transforme une analyse de sol en formulation sur mesure : la composition exacte de l\'amendement et la dose adaptées à votre sol, votre climat et votre culture. Fini le produit générique — chaque parcelle obtient la recette qui lui convient.',
      inputsHeading: 'Entrées',
      inputs: [
        'Caractéristiques du sol — texture, pH, CEC, matière organique, capacité de rétention en eau',
        'Contexte climatique — pluviométrie, exposition au stress hydrique',
        'Culture cible et objectifs (eau, rendement, restauration)',
      ],
      engineHeading: 'Le moteur',
      engineBody: 'Un modèle agronomique couplé à un moteur IA prédictif, entraîné sur des données pédoclimatiques et les résultats des essais HYDROBIO. Il simule la réponse du sol et détermine la combinaison optimale des trois composants.',
      outputsHeading: 'Sorties',
      outputs: [
        'Composition exacte — ratios argile/zéolite/mycorhize',
        'Dose à l\'hectare et calendrier d\'application',
        'Gains simulés — rétention d\'eau, rendement, estimation ROI',
        'Fiche de formulation prête à la production, entièrement tracée',
      ],
      advantagesHeading: 'Pourquoi ça compte',
      advantages: [
        { title: 'Précision', detail: 'Chaque sol est unique — la formulation aussi.' },
        { title: 'Performance', detail: 'L\'efficacité et le ROI sont maximisés.' },
        { title: 'Traçabilité', detail: 'Chaque recommandation est documentée (entrées, dose, justification).' },
        { title: 'Simplicité', detail: 'Vous saisissez les données, l\'application fait le reste.' },
        { title: 'Amélioration continue', detail: 'Le moteur apprend des nouveaux essais et résultats de terrain.' },
      ],
    },
    application: {
      eyebrow: 'Application',
      title: 'Simple, unique, intégrée à votre itinéraire.',
      body: 'HYDROBIO s\'applique une fois et dure 3 à 5 ans — pas de réapplication annuelle.',
      whenHeading: 'Quand',
      whenBody: 'De préférence à la préparation du sol, avant le semis ou la plantation. Pour les cultures pérennes (vergers, petits fruits), appliquer au pied ou dans l\'inter-rang.',
      doseHeading: 'Dose',
      doseBody: 'La dose exacte est déterminée par HydrobioFormul en fonction de votre sol et de votre culture — typiquement quelques centaines de kg/ha pour une application qui dure 3 à 5 ans.',
      howHeading: 'Comment',
      howSteps: [
        'Épandage uniforme sur la parcelle (épandeur centrifuge ou à la volée).',
        'Légère incorporation superficielle pour mettre l\'amendement en contact avec la future zone racinaire.',
        'Pour les pérennes : localisé au pied ou en ligne, puis léger griffage.',
      ],
      onSiteHeading: 'Formulation sur site',
      onSiteBody: 'Plutôt qu\'un produit générique fabriqué en usine et stocké pendant des mois, HYDROBIO est formulé sur site selon la recette calculée par HydrobioFormul.',
      onSitePillars: [
        { title: 'Fraîcheur biologique', detail: 'Les mycorhizes vivantes sont intégrées juste avant l\'application, pour une viabilité maximale.' },
        { title: 'Personnalisation', detail: 'Composition ajustée à chaque sol et chaque lot — pas de stock générique.' },
        { title: 'Logistique & coût', detail: 'Composants secs expédiés (plus denses), assemblage local — moins de transport, moins de pertes, empreinte carbone réduite.' },
      ],
    },
    results: {
      eyebrow: 'Résultats',
      title: 'Mesurés. Reproductibles. Validés indépendamment.',
      stats: [
        { value: '+47%', label: 'Rétention d\'eau', caption: 'Sols sableux — Europe du Sud & MENA' },
        { value: '+18,7%', label: 'Rendements', caption: 'vs. témoin non traité, même type de sol' },
        { value: '3–5 ans', label: 'Durée d\'efficacité', caption: 'Application unique' },
        { value: '−20–30%', label: 'Intrants chimiques éliminés', caption: 'Moins d\'engrais et de pesticides de synthèse' },
      ],
      footnote: 'Essais contrôlés, à confirmer en essais de terrain indépendants.',
      roiHeading: 'ROI par culture',
      roiCaption: 'Gains totaux par hectare et par an, et délai de retour sur investissement. Sources : Agreste, ARVALIS, CTIFL, FranceAgriMer, Euronext.',
      roiRows: [
        { crop: 'Fraise', irrigation: '420 €', fertilizer: '90 €', yieldGain: '+6 t/ha → 7 200 €', total: '7 710 € / ha / an', payback: '< 4 mois' },
        { crop: 'Pomme', irrigation: '280 €', fertilizer: '68 €', yieldGain: '+5,3 t/ha → 2 888 €', total: '3 236 € / ha / an', payback: '~8 mois' },
        { crop: 'Blé', irrigation: '98 €', fertilizer: '53 €', yieldGain: '+1,1 t/ha → 248 €', total: '399 € / ha / an', payback: '~5 ans' },
      ],
    },
    cultures: {
      eyebrow: 'Cultures & sols',
      title: 'Là où le sol souffre, HYDROBIO fait la différence.',
      body: 'HYDROBIO fonctionne sur les cultures à haute valeur, les grandes cultures céréalières, les pérennes et le maraîchage — avec le bénéfice exact estimé par HydrobioFormul à partir de votre analyse de sol.',
      cropsHeading: 'Cultures',
      crops: [
        { name: 'Cultures à haute valeur', examples: 'Fraise et petits fruits, arbres fruitiers (pomme, poire, cerise)' },
        { name: 'Grandes cultures', examples: 'Blé et autres céréales' },
        { name: 'Pérennes & maraîchage', examples: 'Adaptation au cas par cas via HydrobioFormul' },
      ],
      soilsHeading: 'Types de sol',
      soils: [
        { name: 'Sols sableux', benefit: 'Gain maximal en rétention d\'eau' },
        { name: 'Sols dégradés', benefit: 'Structure et vie biologique restaurées' },
        { name: 'Sols arides / en stress hydrique', benefit: 'Résilience accrue face à la sécheresse' },
      ],
    },
    impact: {
      eyebrow: 'Impact environnemental',
      title: 'Produire plus avec moins d\'eau et moins d\'intrants.',
      stats: [
        { value: '> 0,5 t/ha', label: 'Carbone séquestré par cycle', caption: 'Les réseaux mycorhiziens stabilisent la matière organique du sol sur plusieurs cycles.', source: 'Rillig & Mummey 2006 · Zhu & Miller 2003 · IPCC AR6 AFOLU 2022' },
        { value: '×3', label: 'Biodiversité du sol restaurée', caption: 'L\'activité microbienne rebondit, inversant des décennies de dommages liés à la monoculture.', source: 'Smith & Read 2008 · Barea et al. 2005' },
        { value: '−25%', label: 'Lessivage des nitrates évité', caption: 'La zéolite à CEC élevée retient l\'azote dans la zone racinaire.', source: 'Huang & Petrovic 1994 · Kubo et al. 2010' },
        { value: '∞', label: 'Sols dégradés rendus productifs', caption: 'Sols arides, sableux ou pauvres restaurés sans excavation ni remplacement.', source: 'FAO/ITPS 2015 · Nair et al. 2011' },
      ],
      sdgValue: 'ODD',
      sdgLabel: '2 · 6 · 13 · 15',
      sdgCaption: 'Faim zéro · Eau propre · Action climatique · Vie terrestre',
    },
    innovation: {
      eyebrow: 'Innovation & technologie',
      title: 'Science de rupture, produit simple.',
      items: [
        { title: 'Granulométrie contrôlée', detail: 'Micronisation précise, surface spécifique ×200.' },
        { title: 'Matrice minérale vivante', detail: 'Mycorhizes intégrées dans les minéraux — efficace même sur sols pauvres ou arides.' },
        { title: 'Effet longue durée (3-5 ans)', detail: 'L\'architecture du sol persiste sur plusieurs cycles — coûts réduits de 60 à 80 %.' },
        { title: 'Brevet USPTO déposé', detail: 'Composition, mécanisme d\'action et procédé. Extension PCT en cours.' },
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Questions fréquentes, réponses directes.',
      items: [
        { question: 'Qu\'est-ce qu\'HYDROBIO ?', answer: 'Un amendement hybride qui combine des minéraux micronisés (argile, zéolite) et un consortium mycorhizien vivant — agissant à la fois sur la structure, la nutrition et la vie biologique du sol.' },
        { question: 'Est-ce un engrais ?', answer: 'Non. HYDROBIO restaure la capacité du sol à retenir l\'eau et les nutriments et à nourrir la plante, ce qui réduit le besoin en engrais et en irrigation.' },
        { question: 'Qu\'est-ce qu\'HydrobioFormul ?', answer: 'Notre application IA qui calcule la composition exacte et la dose à partir de votre analyse de sol et de votre culture cible, et simule les gains attendus.' },
        { question: 'Dois-je faire analyser mon sol ?', answer: 'Oui — c\'est l\'étape 1. L\'analyse permet à HydrobioFormul de personnaliser la formulation. Nous vous accompagnons pour le prélèvement.' },
        { question: 'Comment s\'applique-t-il ?', answer: 'Épandage simple puis légère incorporation superficielle, à la préparation du sol. Une seule application couvre 3 à 5 ans.' },
        { question: 'Pourquoi la formulation sur site ?', answer: 'Pour préserver la viabilité des mycorhizes vivantes, adapter la composition à chaque sol et réduire le transport et les pertes.' },
        { question: 'Y a-t-il des résidus chimiques ?', answer: 'Non. La technologie ne laisse aucun résidu chimique et est compatible avec l\'agriculture biologique.' },
        { question: 'Quelles cultures et quels sols ?', answer: 'Cultures à haute valeur (fraise, pomme…), grandes cultures (blé), particulièrement sur sols sableux, dégradés ou en stress hydrique.' },
        { question: 'Est-ce un OGM ?', answer: 'Non. HYDROBIO agit sur le sol et sur la symbiose racinaire, pas sur le génome de la plante.' },
        { question: 'Quand est-il disponible ?', answer: 'Premiers déploiements en cours ; commercialisation française élargie à partir de fin 2026 (homologation UE 2019/1009 en préparation).' },
      ],
    },
    recognition: {
      eyebrow: 'Reconnaissances',
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
      title: 'Faites analyser votre sol.',
      description: 'Demandez une analyse de sol et recevez votre formulation sur mesure. Nous répondons sous deux jours ouvrés.',
      ctaLabel: 'Demander une analyse de sol',
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
