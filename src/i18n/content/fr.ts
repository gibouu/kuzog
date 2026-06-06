import { SiteContent } from '../types';

export const fr: SiteContent = {
  header: {
    logoText: 'KUZOG',
    contactButton: 'Contactez-nous',
  },

  home: {
    cards: {
      hydrobio: {
        eyebrow: 'Innovation du sol',
        title: 'Restaurer la vie du sol. Économiser l\'eau. Nourrir le monde.',
        microStats: ['+47% rétention d\'eau', '+18,7% rendement', 'Effet 3–5 ans'],
        cta: 'Découvrir Hydrobio',
        accent: 'hydrobio',
      },
      microplantes: {
        eyebrow: 'Souveraineté végétale',
        title: 'Micropropagation végétale industrielle, à l\'échelle française.',
        microStats: ['6–7,5 M plants/an', '370 m² ISO 5', '25 emplois à maturité'],
        cta: 'Découvrir Microplantes',
        accent: 'microplantes',
      },
      group: {
        eyebrow: 'La maison-mère',
        title: 'Importer, fabriquer, investir. Depuis Paris.',
        microStats: [],
        chips: [
          'Import / Export',
          'Commissionnement',
          'Industrie',
          'Conseil',
          'Investissement en actifs distressed',
          'IA',
          'Fonds d\'investissement',
        ],
        cta: 'Explorer le Groupe KUZOG',
        accent: 'group',
      },
    },
    mission: 'KUZOG conçoit et exploite des entreprises à la croisée du sol, du vivant et du capital — depuis Paris.',
  },

  hydrobio: {
    hero: {
      eyebrow: 'Innovation du sol',
      title: 'Restaurer la vie du sol. Économiser l\'eau. Nourrir le monde.',
      tagline: 'Un amendement de sol hybride minéral-biologique révolutionnaire signé KUZOG.',
      leadStats: [
        { value: '+47%', label: 'Rétention d\'eau sur sols sableux' },
        { value: '+18,7%', label: 'Rendements vs. témoin non traité' },
        { value: '3–5 ans', label: 'Durée d\'effet par application' },
      ],
    },
    problem: {
      eyebrow: '01 — Le problème',
      title: 'L\'agriculture fait face à une crise systémique.',
      stats: [
        { value: '×2', label: 'Sécheresse doublée', caption: 'La superficie touchée par la sécheresse a plus que doublé en 40 ans ; l\'agriculture absorbe 80 % de tous les coûts directs.', source: 'FAO' },
        { value: '33%', label: 'Sols dégradés', caption: 'des sols mondiaux sont modérément à fortement dégradés, perdant fertilité et structure.', source: 'FAO/ITPS, 2015' },
        { value: '70%', label: 'Eau prélevée', caption: 'de tous les prélèvements d\'eau potable mondiaux vont à l\'agriculture, ressource sous tension critique.', source: 'UNESCO WWAP, 2024' },
        { value: '×3', label: 'Coût des engrais', caption: 'les prix des engrais chimiques ont atteint 3× leur niveau de 2020, créant une dépendance dangereuse.', source: 'Banque mondiale, 2022' },
      ],
      quote: 'Un producteur de fraises de la vallée du Souss-Massa perd 35 % de son eau d\'irrigation chaque été et fait face à des factures d\'engrais qui ont triplé depuis 2020.',
      quoteSource: 'Boutagayout A, Hamdani A, Boutgayout I et Adiba A, 2025',
      framingLine: 'Les solutions actuelles ne traitent chacune qu\'UNE dimension. Aucune ne combine action physique + chimique + biologique.',
    },
    solution: {
      eyebrow: '02 — La solution',
      title: 'HYDROBIO : la première technologie hybride minérale-biologique.',
      components: [
        {
          name: 'Argile micronisée',
          role: 'Fraction colloïdale',
          bullets: ['Surface spécifique ×200 vs. argiles standard', 'Capacité de rétention d\'eau maximale', 'Dispersion homogène dans le sol'],
        },
        {
          name: 'Zéolite micronisée',
          role: 'Réservoir nutritif',
          bullets: ['Structure de microporosité complexe', 'Capacité d\'échange cationique (CEC) élevée', 'Libération progressive des nutriments'],
        },
        {
          name: 'Consortium mycorhizien',
          role: 'Activateur biologique',
          bullets: ['Colonisation racinaire jusqu\'à 3× plus rapide en conditions contrôlées', 'Tolérance au stress hydrique', 'Restaure la biodiversité du sol'],
        },
      ],
      synergyLine: 'Synergie : les minéraux servent de substrat aux mycorhizes → colonisation racinaire 3× plus rapide + efficacité de 3 à 5 ans.',
    },
    competitiveEdge: {
      eyebrow: '03 — Avantage concurrentiel',
      title: 'HYDROBIO combine des capacités absentes des solutions existantes.',
      columns: ['Engrais chimiques', 'Biostimulants', 'Amendements minéraux', 'HYDROBIO'],
      rows: [
        { criterion: 'Rétention d\'eau', values: ['✗', '✗', 'Partielle', '✓✓✓'] },
        { criterion: 'Effet biologique', values: ['✗', '✓', '✗', '✓✓✓'] },
        { criterion: 'Structure du sol', values: ['✗', '✗', 'Limitée', '✓✓✓'] },
        { criterion: 'Durée d\'effet', values: ['< 1 saison', '< 1 saison', '1–2 ans', '3–5 ans'] },
        { criterion: 'Sans résidu chimique', values: ['✗', 'Partiel', '✓', '✓✓✓'] },
        { criterion: 'Application facile', values: ['✓', '✓', 'Variable', '✓✓✓'] },
      ],
      caption: 'HYDROBIO est la seule solution combinant les 3 dimensions — physique, chimique et biologique — en un seul produit.',
    },
    market: {
      eyebrow: '04 — Opportunité de marché',
      title: 'Demande fondée sur les données foncières et les politiques publiques.',
      cards: [
        { eyebrow: 'Mandat réglementaire', value: '22,8 M ha', label: 'Conversion bio UE d\'ici 2030', caption: 'La stratégie « De la ferme à la table » fixe 25 % des terres en bio d\'ici 2030. Cela représente près de 22,8 M ha à convertir, tous nécessitant des solutions de restauration des sols.', source: 'AEE (2025) · Farm-to-Fork, CE (2020)' },
        { eyebrow: 'Construction de la demande', value: '2,6 Md€', label: 'UE+MENA adressable à 3 % d\'adoption', caption: '130 M ha cultivés UE+MENA × 33 % dégradés = 43 M ha éligibles. À 3 % × 2 000 €/ha = 2,6 Md€. Bâti sur des données d\'usage des sols vérifiées.', source: 'FAO/ITPS (2015) · Eurostat (2020) · Modèle KUZOG' },
        { eyebrow: 'Preuves de catégorie', value: '260 M€+', label: 'Revenu cumulé, analogues directs', caption: 'Valagro (acq. Syngenta, 2020) ~150 M€ · Biolchim ~80 M€ · Symborg (spéc. AMF) 30 M€+. HYDROBIO ajoute un mode d\'action breveté unique.', source: 'EBIC Market Overview (2023)' },
      ],
      tamSamSom: {
        tamValue: '~7 Md€',
        tamLabel: 'TAM',
        tamCaption: 'Marché mondial biostimulants + conditionneurs minéraux projeté d\'ici 2030, à 12 % de TCAC depuis une base de 4 Md$ (2024).',
        tamSource: 'EBIC (2023)',
        samValue: '3,5 Md€',
        samLabel: 'SAM',
        samCaption: 'Segment Europe + MENA (~50 % du mondial, EBIC). Cohérent avec le bottom-up : 43 M ha éligibles à 5 % d\'adoption.',
        samSource: 'EBIC (2023) · FAO/ITPS (2015)',
        somValue: '22 M€',
        somLabel: 'SOM',
        somCaption: 'Objectif 2030 : 11 000 ha traités — France 60 %, Espagne-Italie 20 %, MENA 20 %.',
        somSource: 'Modèle commercial KUZOG',
      },
    },
    results: {
      eyebrow: '05 — Résultats & validation',
      title: 'Performance mesurée, reproductible, indépendante.',
      stats: [
        { value: '+47%*', label: 'Rétention d\'eau', caption: 'Sols sableux — conditions Europe du Sud & MENA' },
        { value: '+18,7%*', label: 'Rendements', caption: 'vs. témoin non traité, même type de sol' },
        { value: '3–5 ans*', label: 'Durée d\'efficacité', caption: 'Application unique vs. renouvellement annuel' },
        { value: '−20–30%*', label: 'Intrants chimiques éliminés', caption: 'Moins d\'engrais et de pesticides de synthèse dans les sols' },
      ],
      footnote: '* essais contrôlés, à confirmer sur le terrain.',
      roadmapHeading: 'Feuille de route de validation',
      roadmapSteps: [
        { phase: 'Confirmé', label: 'Tests de laboratoire interne', detail: 'Validés en interne' },
        { phase: 'En cours', label: 'Tests de laboratoire indépendants', detail: 'Pilotes semi-industriels (FarmInnLab)' },
        { phase: '2027', label: 'Essais de terrain', detail: 'Occitanie' },
        { phase: '2028', label: 'Homologation UE 2019/1009', detail: 'Statut : biostimulant hybride' },
      ],
    },
    businessModel: {
      eyebrow: '06 — Modèle économique',
      title: 'Revenus évolutifs, à forte marge, multicanaux.',
      pricingHeading: 'Grille tarifaire',
      pricing: [
        { label: 'Petites exploitations', price: '1 800 €/ha', margin: 'marge brute 52 %' },
        { label: 'Grandes cultures', price: '2 000 €/ha', margin: 'marge brute 55 %' },
        { label: 'Cultures premium', price: '2 200 €/ha', margin: 'marge brute 59 %' },
      ],
      pricingFootnote: 'Coût de production moyen : ~875 €/ha · Marge brute moyenne : 55,5 %.',
      trajectoryHeading: 'Trajectoire de revenus',
      trajectoryLine: 'Seuil de rentabilité 2028 · Revenu 2030 : 22 M€ · EBITDA 2030 : 54 % · TCAC > 100 %',
      distributionHeading: 'Canaux de distribution',
      distribution: [
        { share: '55%', label: 'B2B direct — grandes exploitations, coopératives' },
        { share: '30%', label: 'Distribution — France + Europe du Sud' },
        { share: '15%', label: 'Licences — MENA, Amérique latine' },
      ],
    },
    gtm: {
      eyebrow: '07 — Stratégie de marché',
      title: 'Déploiement progressif : preuve → pilotes → échelle internationale.',
      steps: [
        { number: 1, title: 'Fermes pilotes', detail: 'Agriculteurs champions, Chambres d\'agriculture, ARVALIS, CTIFL. Données indépendantes certifiées.' },
        { number: 2, title: 'Coopératives', detail: 'Intégration dans les programmes coopératifs français (InVivo, Terrena, Agrial).' },
        { number: 3, title: 'Distributeurs', detail: 'Réseau de distribution d\'intrants : France + Péninsule ibérique + Italie. Accords territoriaux exclusifs.' },
        { number: 4, title: 'Export MENA', detail: 'Partenaires locaux au Maroc, Tunisie, Émirats, Arabie saoudite. Programmes gouvernementaux de sécurité alimentaire.' },
      ],
      priorityLine: 'Priorité : France 60 % · Espagne–Italie 20 % · MENA 20 % · Premier revenu : 12–18 mois.',
      roadmapHeading: 'Feuille de route 36 mois',
      roadmapSteps: [
        { phase: '2024–2025', label: 'Preuve de concept', detail: 'Granulométrie optimisée · Formulation stable définie' },
        { phase: 'T2 2026–2027', label: 'Validation', detail: 'Essais de terrain lancés' },
        { phase: 'T4 2027–2028', label: 'Pré-industrialisation', detail: 'Résultats d\'essais indépendants · Dossier d\'homologation UE' },
        { phase: 'T4 2028', label: 'Lancement commercial', detail: 'Lancement France · Accords MENA signés' },
      ],
    },
    team: {
      eyebrow: '08 — Équipe & PI',
      title: 'Science de pointe × leadership stratégique × exécution internationale.',
      members: [
        {
          name: 'Gibril Bachouchi',
          role: 'Cofondateur & Directeur R&D',
          bio: 'Ingénieur en nanotechnologie de l\'Université de Waterloo. Inventeur de la formulation HYDROBIO.',
          highlights: ['Expert en micronisation & interaction nano-sol', 'Brevets USPTO & propriété intellectuelle', 'Protocoles salles blanches & contamination'],
        },
        {
          name: 'Malik Bachouchi',
          role: 'Cofondateur & PDG',
          bio: 'MSc Informatique UPENN & Wharton School of Finance. 15 ans à diriger des programmes financiers dans des institutions internationales.',
          highlights: ['Direction de programmes industriels d\'envergure', 'Stratégie internationale & levée de fonds', 'Partenariats publics'],
        },
      ],
      ipHeading: 'Propriété intellectuelle & structure juridique',
      ipCards: [
        { title: 'Brevet USPTO déposé', detail: 'Composition, mécanisme d\'action & procédé de fabrication. Extension PCT prévue : Europe, MENA, Amériques.' },
        { title: 'Liberté d\'exploitation', detail: 'Aucune dépendance de licence, aucune revendication de tiers. KUZOG détient toute la pile technologique.' },
        { title: 'Règl. UE 2019/1009', detail: 'Dossier réglementaire en préparation avec l\'ANSES France + l\'EMA Europe. Statut : biostimulant hybride.' },
      ],
    },
    systemicImpact: {
      eyebrow: '09 — Au-delà de la ferme',
      title: 'Ce qui change dans le monde lorsque HYDROBIO passe à l\'échelle.',
      stats: [
        { value: '< 18 mois', label: 'ROI de l\'agriculteur', caption: '400–7 700 € d\'économies/ha/an selon le type de culture (céréales → fraise).', source: 'Modèle KUZOG · Agreste · ARVALIS · CTIFL · FranceAgriMer' },
        { value: '> 0,5 t/ha', label: 'Carbone séquestré par cycle', caption: 'Les réseaux mycorhiziens stabilisent la matière organique au fil des cycles.', source: 'Rillig & Mummey (2006) · Zhu & Miller (2003) · IPCC AR6 AFOLU (2022)' },
        { value: '×3', label: 'Biodiversité du sol restaurée', caption: 'L\'activité microbienne rebondit, inversant des décennies de monoculture.', source: 'Smith & Read (2008) · KUZOG · Barea et al. (2005)' },
        { value: '−25%', label: 'Lessivage des nitrates évité', caption: 'La zéolite à CEC élevée retient l\'azote dans la zone racinaire, protégeant les eaux souterraines.', source: 'Huang & Petrovic (1994) · Kubo et al. (2010)' },
        { value: '∞', label: 'Sols dégradés rendus productifs', caption: 'Sols arides, sableux ou pauvres restaurés sans excavation ni remplacement.', source: 'FAO/ITPS (2015) · Nair et al. (2011)' },
      ],
      sdgValue: 'ODD',
      sdgLabel: '2 · 6 · 13 · 15',
      sdgCaption: 'Faim zéro · Eau propre · Action climatique · Vie terrestre. (ODD ONU 2015–2030 · Farm-to-Fork · Stratégie Sols France · Règl. UE 2019/1009)',
    },
    smallholder: {
      eyebrow: '10 — Impact sur les agriculteurs',
      title: '500 millions de petits exploitants. À une seule mauvaise sécheresse de tout perdre.',
      intro: 'HYDROBIO leur donne une chance de s\'en sortir, avec une application unique qui dure des années, pas une saison.',
      introSource: 'FAO/IFAD — Smallholders, Food Security and the Environment (2013) · FAO Family Farming (2023)',
      body: 'HYDROBIO ne fait pas qu\'améliorer une exploitation. Il restaure un sol, reconstitue l\'eau, reconstruit un écosystème et donne à une famille sa prochaine récolte.',
      stats: [
        { value: '7 700 €', label: 'Gains par ha et par an', caption: '0,5–1,5 saisons selon le type de culture.', source: 'Modèle KUZOG · Agreste · CTIFL · FranceAgriMer · Euronext 2023–24' },
        { value: '3–5 ans', label: 'Efficacité par application', caption: 'L\'architecture minérale du sol persiste au fil des cycles.', source: 'Données labo & pilotes KUZOG' },
        { value: '+47%', label: 'Rétention d\'eau', caption: 'Économise l\'eau d\'aquifères déjà sous tension en Europe du Sud & MENA.', source: 'Données pilotes KUZOG · UNESCO WWAP 2024' },
      ],
      closing: 'Restaurer un sol. Reconstituer l\'eau. Reconstruire un écosystème. Donner à une famille sa prochaine récolte.',
    },
    contactCTA: {
      title: 'Parlons d\'Hydrobio.',
      description: 'Documents investisseurs, demandes de site pilote, conversations de partenariat — nous répondons sous deux jours ouvrés.',
      ctaLabel: 'Nous contacter',
    },
  },

  microplantes: {
    hero: {
      eyebrow: 'Souveraineté végétale',
      title: 'Micropropagation végétale industrielle, à l\'échelle française.',
      tagline: 'Une nouvelle plateforme industrielle issue de la reconversion du site SEBBIN à Boissy-l\'Aillerie — capacité cible 6 à 7,5 M plants/an, portée par KUZOG France et un partenaire costaricien fort de 35 ans d\'expérience.',
      leadStats: [
        { value: '6–7,5 M', label: 'Vitroplants par an à maturité' },
        { value: '370 m²', label: 'Salles blanches ISO 5 prêtes à convertir' },
        { value: '1,564 M€', label: 'Levée brute (1,470 M€ net) pour une participation dans la filiale' },
      ],
    },
    opportunity: {
      eyebrow: '01 — L\'opportunité',
      title: 'La France importe 60 % de ses jeunes plants — la facture dépasse 1 Md€/an.',
      stats: [
        { value: '60 %', label: 'Part importée', caption: 'des jeunes plants vendus en France — principalement des Pays-Bas.', source: 'VALHOR / FranceAgriMer, 2022–2023' },
        { value: '+1 Md€', label: 'Déficit commercial', caption: 'déficit annuel sur les jeunes plants, avec un ratio import/export de 12:1.', source: 'VALHOR' },
        { value: '286 M', label: 'Plants importés/an', caption: 'volume estimé de jeunes plants importés en France.', source: 'Estimation VALHOR' },
        { value: '−5 %/an', label: 'Recul des acteurs français', caption: 'érosion progressive de la base de production horticole nationale.', source: 'VALHOR' },
      ],
      framingLine: 'Un problème de souveraineté, un risque sanitaire, et une fuite de capitaux supérieure au milliard d\'euros par an — et aucun acteur français n\'opère aujourd\'hui une plateforme industrielle neutre, multi-espèces et multi-clients à l\'échelle.',
    },
    method: {
      eyebrow: '02 — La méthode',
      title: 'La micropropagation : plus rapide, plus saine, plus dense que toutes les méthodes conventionnelles.',
      body: 'La culture de méristèmes produit des clones indemnes de virus. Chaque espèce passe en 1 à 2 ans de la sélection au volume commercial — contre 10 à 15 ans en multiplication conventionnelle. Une seule plante mère produit 4 millions d\'œillets ou 50 000 framboisiers en un an, contre 50 plants par les méthodes traditionnelles.',
      advantageLine: 'Gain de temps 80–90 %. Contrôle sanitaire 100 %. Production 365 jours/an, en intérieur, sur rayonnages verticaux à 5 niveaux.',
      densityHeading: 'Densité par m² au sol et par an — comparaison',
      densityRows: [
        { method: 'MICROPLANTES (ISO 5 + rayonnages 5 niveaux)', density: '~19 000', surface: '370 m²', multiplier: '1× (référence)' },
        { method: 'Pépinière intensive sous serre', density: '~100', surface: '7 ha', multiplier: '189×' },
        { method: 'Fraisier (stolons)', density: '~50', surface: '14 ha', multiplier: '378×' },
        { method: 'Framboisier (drageons)', density: '~30', surface: '23 ha', multiplier: '631×' },
        { method: 'Multiplication arboricole (greffage)', density: '~5', surface: '140 ha', multiplier: '3 784×' },
      ],
      densityFootnote: 'À volume cible identique de 7 M plants/an. Sources : CTIFL Balandran, GRAB, Plants-de-fraises.fr.',
    },
    site: {
      eyebrow: '03 — Le site',
      title: 'Une infrastructure de salles blanches déjà en place à Boissy-l\'Aillerie, valorisée 2,5–3 M€.',
      body: 'KUZOG reprend le site industriel SEBBIN via un dispositif de location avec option d\'achat porté par la SEMAVO (société d\'économie mixte régionale), à partir du T4 2026. La reconversion ne nécessite que ~250 k€ de remise à niveau — contre plus de 5 M€ pour construire ex nihilo un environnement comparable.',
      stats: [
        { value: '952 m²', label: 'Surface couverte sur deux étages' },
        { value: '370 m²', label: 'Salles blanches ISO 5 opérationnelles' },
        { value: '11', label: 'Doubles hottes à flux laminaire sur site' },
        { value: '1 307 m²', label: 'Surface foncière' },
      ],
      advantageLine: 'La valeur de remplacement des salles propres, du traitement d\'air compartimenté, des hottes et des équipements spécialisés est estimée entre 2,5 et 3 M€. La liquidation de SEBBIN en 2025 a libéré le site à des conditions attractives.',
    },
    partnership: {
      eyebrow: '04 — Le partenariat',
      title: 'Un partenaire opérationnel costaricien, fort de 35 ans d\'expérience.',
      body: 'KUZOG France conclut un accord stratégique avec Micro Plantas Costa Rica, leader latino-américain fondé en 1990 — capacité de 10 M plants/an, maîtrise de plus de 200 espèces. Son fondateur, Fernando Alvarado, est sur le site de Boissy dès le Jour 1.',
      pillarsHeading: 'Cinq piliers de collaboration',
      pillars: [
        { title: 'Transfert de savoir-faire', detail: 'Protocoles éprouvés sur 35 ans pour plus de 200 espèces, avec des méthodes d\'initiation, de multiplication et d\'acclimatation validées industriellement.' },
        { title: 'Formation du personnel', detail: 'Formation théorique et pratique, organisée entre le Costa Rica et la France, pour une montée en compétence dès la première année.' },
        { title: 'Supervision Jour 1', detail: 'Présence physique de Fernando Alvarado au démarrage pour superviser l\'installation des salles et les premiers explants — sans compromis sur la qualité.' },
        { title: 'Licence d\'exploitation', detail: 'Licence exclusive France + Europe sur les procédés propriétaires Micro Plantas — un avantage concurrentiel immédiat et une barrière d\'entrée technique.' },
        { title: 'R&D conjointe + pipeline d\'espèces', detail: 'Accès à de nouvelles variétés tropicales à fort potentiel européen, protocoles d\'acclimatation co-développés, synergies sur les marchés export.' },
      ],
      partnerName: 'Micro Plantas S.A.',
      partnerCredentials: 'Alajuela, Costa Rica · fondée en 1990 · 10 M plants/an · 200+ espèces.',
    },
    market: {
      eyebrow: '05 — Segments de marché',
      title: 'Quatre segments adressables. Potentiel total > 200 M vitroplants/an en France.',
      segments: [
        { name: 'Ornementales', share: '65–70 %', volume: '150–200 M plants/an', caption: 'Géraniums (22 M), dipladenias (6 M), cyclamens (6 M), chrysanthèmes (30 M), plantes à massif, vivaces, orchidées.' },
        { name: 'Maraîchères', share: 'en forte croissance', volume: '30–50 M plants/an', caption: 'Pomme de terre, fraisier, artichaut, asperge, légumes-feuilles — portée par la demande de plants certifiés indemnes de virus.' },
        { name: 'Arboricoles fruitières', share: 'forte valeur ajoutée', volume: '20–30 M plants/an', caption: 'Petits fruits (framboisier, mûrier, groseillier, myrtillier), porte-greffes pomme/poire/cerise, clones certifiés de vigne et d\'olivier.' },
        { name: 'Tropicales & subtropicales', share: 'niche export', volume: '5–10 M plants/an', caption: 'Bananier, ananas MD2, palmier dattier, vanille, gingembre, curcuma, plantes médicinales — marges premium, orientation export.' },
      ],
      totalLine: 'Volume total estimé : 205–290 M vitroplants/an adressables en France et UE adjacentes.',
    },
    competition: {
      eyebrow: '06 — Paysage concurrentiel',
      title: 'Fragmenté. Majoritairement spécialisé ou captif. Aucune plateforme neutre multi-espèces.',
      competitors: [
        { name: 'Vitropic (CIRAD)', capacity: '3–5 M plants/an', positioning: 'Leader français, espèces tropicales (bananes). Positionnement très spécialisé.' },
        { name: 'Lab. Angevin (André Briant)', capacity: '~1 M plants/an', positioning: 'Intégré verticalement à l\'activité pépinière. Plateforme non neutre.' },
        { name: 'Pépinières & Roseraies Delbard', capacity: '~1,05 M plants/an', positioning: 'Captif : fruitiers, porte-greffes et rosiers pour usage interne.' },
        { name: 'Invenio Solutions', capacity: '500 k+ plants/an', positioning: 'Spécialiste des petits fruits. R&D forte, échelle industrielle plus modeste.' },
        { name: 'CTIFL', capacity: '300–500 k plants/an', positioning: 'Centre technique public, orienté certification, non industriel.' },
        { name: 'Plant Palm Lab. Biotechnologies', capacity: '~250 k plants/an', positioning: 'Spécialiste du palmier dattier.' },
      ],
      positioningLine: 'MICROPLANTES ne se positionne pas comme un énième laboratoire, mais comme la plateforme industrielle amont neutre — fournissant des plants homogènes, certifiés et traçables aux pépiniéristes, obtenteurs, distributeurs et filières spécialisées. Cela transforme une partie des concurrents en partenaires ou clients potentiels.',
    },
    operations: {
      eyebrow: '07 — Opérations & montée en charge',
      title: 'Une plateforme industrielle structurée — de zéro à 25 collaborateurs et 7 M plants/an en 5 ans.',
      body: 'Les effectifs croissent de 0 à mi-2026 à 25 à maturité (extensible à 31 avec une 3e équipe). La production démarre au S2 2027 ; premières ventes commerciales au T4 2027.',
      rampHeading: 'Montée en charge opérationnelle',
      rampSteps: [
        { year: 'Mi-2026', capacity: '—', workforce: 'Équipe fondatrice', caption: 'Création juridique, closing levée T4 2026' },
        { year: 'S1 2027', capacity: 'Remise à niveau', workforce: 'Recrutement + formation', caption: 'Gros œuvre 450 k€ · Recertification ISO 5' },
        { year: 'S2 2027', capacity: 'Démarrage production', workforce: '~15 collaborateurs', caption: 'Premières cultures in vitro · CA Y1 ~397 k€' },
        { year: '2028', capacity: 'Montée en charge', workforce: '~20 collaborateurs', caption: 'CA 1,32 M€ · EBITDA positif (+302 k€)' },
        { year: '2029', capacity: '60 % nominal', workforce: '~22 collaborateurs', caption: 'CA 3,37 M€ · EBITDA 2,17 M€ · Acquisition immobilière' },
        { year: '2030', capacity: '85 % nominal', workforce: '25 collaborateurs', caption: 'CA 4,95 M€ · EBITDA 3,61 M€ (72,9 %)' },
        { year: '2032', capacity: '100 % nominal', workforce: '25 (extensible 31)', caption: 'CA 10,6 M€ · EBITDA 8,7 M€ (82,2 %)' },
      ],
    },
    financials: {
      eyebrow: '08 — Financiers',
      title: 'Rentable dès l\'année 2. Marge EBITDA de 82 % à maturité.',
      body: 'Reconstruit à partir du dossier comité d\'investissement (correction du traitement IS et de l\'amortissement). Seuil de rentabilité atteint en 2028 au niveau de l\'EBITDA ; résultat net cumulé positif dès 2029.',
      years: ['2026', '2027', '2028', '2029', '2030', '2031', '2032'],
      rows: [
        { label: 'Chiffre d\'affaires (k€)', values: ['—', '397', '1 323', '3 371', '4 950', '6 594', '10 596'] },
        { label: 'EBITDA (k€)', values: ['(94)', '(399)', '302', '2 175', '3 609', '4 927', '8 706'] },
        { label: 'Marge EBITDA', values: ['—', '−100 %', '23 %', '64 %', '73 %', '75 %', '82 %'] },
        { label: 'Résultat net (k€)', values: ['(94)', '(485)', '167', '1 610', '2 562', '3 553', '6 389'] },
        { label: 'Trésorerie fin (k€)', values: ['1 440', '269', '301', '1 765', '4 237', '7 670', '13 659'] },
      ],
      capitalStructureHeading: 'Structure du capital (post-levée)',
      capitalStructureLine: 'KUZOG France 75–80 % · Investisseur externe 20–25 %. La dilution des fondateurs est cantonnée au niveau de la filiale, pas de la holding. Emprunt bancaire (450 k€, 7 ans, 4 %) ajouté mi-2029 pour l\'acquisition du bâtiment SEMAVO.',
      roiLine: 'Cumul des résultats nets sur 7 ans : 13,4 M€ — retour 6,8× sur les 1,99 M€ de capital mobilisé.',
    },
    team: {
      eyebrow: '09 — Équipe',
      title: 'Des fondateurs au profil technique et financier complet, et un partenaire industriel de 25 ans.',
      members: [
        {
          name: 'Gibril-Gabriel Bachouchi',
          role: 'Président — KUZOG France',
          bio: 'Ingénieur en nanotechnologie de l\'Université de Waterloo. Expert en salles blanches et protocoles de contamination particulaire/biologique.',
          highlights: ['Conception et sécurisation du centre de propagation', 'Programme R&D avec INRAE + écoles d\'ingénieurs', 'Inventeur de la formulation Hydrobio (USPTO)'],
        },
        {
          name: 'Malik Bachouchi',
          role: 'Directeur — KUZOG France',
          bio: 'MBA Wharton (UPenn) + MSc Informatique + bachelor en ingénierie mécanique. 15 ans à diriger des programmes financiers et industriels internationaux.',
          highlights: ['Référent partenariats publics-privés (SEM, banques, agences)', 'Stratégie internationale & levée de fonds', 'Création et opération de structures à l\'étranger'],
        },
        {
          name: 'Anne Buchwalder',
          role: 'Consultante stratégique',
          bio: 'Conseillère stratégique senior appuyant la structuration et la relation aux parties prenantes.',
          highlights: ['Structuration du projet', 'Gestion des parties prenantes', 'Positionnement stratégique'],
        },
        {
          name: 'Fernando Alvarado',
          role: 'Partenaire stratégique technique — Micro Plantas Costa Rica',
          bio: 'Fondateur de Micro Plantas (Alajuela, 1990). 35 ans d\'expérience opérationnelle. Sur le site de Boissy dès le Jour 1.',
          highlights: ['Protocoles industriels sur 200+ espèces', 'Licence d\'exploitation France + Europe', 'Supervision terrain au démarrage'],
        },
      ],
    },
    successFactors: {
      eyebrow: '10 — Synthèse stratégique',
      title: 'Dix facteurs clés de succès. Le risque transformé en discipline.',
      intro: 'Le dossier identifie dix leviers qui transforment une reconversion industrielle en plateforme fonctionnelle :',
      factors: [
        'Sécurisation et mise à niveau du site de Boissy-l\'Aillerie dans les délais.',
        'Maîtrise des protocoles de micropropagation par espèce — adaptés à une multiplication industrielle, à faible contamination et haute reproductibilité.',
        'Qualité sanitaire et documentaire des plants — identification rigoureuse des lots, traçabilité complète.',
        'Sécurisation rapide des débouchés commerciaux — contrats et accords-cadres avec pépiniéristes, obtenteurs, distributeurs.',
        'Bon positionnement dans la chaîne de valeur — plateforme amont, pas concurrent frontal des pépiniéristes.',
        'Maîtrise de l\'acclimatation et des taux de perte — transition in-vitro vers ex-vitro.',
        'Logiciel de gestion / ERP — gérer simultanément espèces, variétés, cycles, repiquages, lots.',
        'Équipe compétente et stable — recruter, former et fidéliser techniciens, chefs d\'équipe et commerciaux.',
        'Discipline économique des coûts unitaires — optimisation des cadences, réduction des pertes, négociation contractuelle.',
        'Crédibilité réglementaire et commerciale — passeports phytosanitaires, statut sanitaire, droits variétaux, confidentialité.',
      ],
      closing: 'Combinés, ces facteurs transforment MICROPLANTES d\'un laboratoire en une plateforme industrielle française amont au service des filières végétales professionnelles.',
    },
    contactCTA: {
      title: 'Parlons de Microplantes.',
      description: 'Documents investisseurs, due diligence technique, conversations de partenariat — nous répondons sous deux jours ouvrés.',
      ctaLabel: 'Nous contacter',
    },
  },

  findSolution: {
    title: 'Trouvez Votre Solution',
    description: 'KUZOG est un réseau international d\'experts qui relie les marchés d\'Amérique du Nord, d\'Europe et du Moyen-Orient.',
    subtitle: 'Sélectionnez votre profil pour découvrir des solutions professionnelles adaptées',
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
          title: 'Chaîne Logistique',
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
          content: 'Prenez des décisions éclairées avec des données d\'intelligence de marché et de tarification en temps réel. Notre réseau fournit des informations sur les tendances de la demande, les prix compétitifs et les opportunités émergentes. Nous accompagnons votre entrée sur les marchés locaux et élaborons des plans d\'affaires complets.',
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
          content: 'Transformez les terrains difficiles avec nos programmes spécialisés d\'amélioration des sols. Nous donnons accès à des semences de qualité supérieure, des amendements organiques minéraux pour les sols et des solutions d\'engrais complètes.',
        },
        {
          id: 'infrastructure',
          title: 'Infrastructure Durable',
          content: 'Construisez pour l\'avenir avec irrigation solaire, hydroponie, logements agricoles modulaires et systèmes de gestion de l\'eau conçus pour l\'efficacité. Nous vous aidons à mettre en œuvre une infrastructure qui réduit les coûts tout en augmentant la productivité.',
        },
        {
          id: 'financing',
          title: 'Stress Hydrique et Solutions pour Sols',
          content: 'Nous proposons des solutions pour résoudre les défis de stress hydrique, salinité et sols infertiles. Nos programmes vous aident à surmonter les barrières environnementales avec des technologies éprouvées adaptées aux conditions arides et difficiles.',
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
    badge: 'Focus Stratégique',
    title: 'Nous acquérons, opérationnalisons et développons des entreprises sur tous les continents.',
    description: 'KUZOG déploie des équipes dirigées par des praticiens pour stabiliser les actifs en difficulté, relancer les projets bloqués et construire des modèles opérationnels internationaux qui résistent à l\'examen.',
    contactButton: 'Contactez-nous',
    exploreButton: 'Explorer les industries',
    operatorsFocus: {
      title: 'Excellence Opérationnelle',
      description: 'Des praticiens multiculturels intégrés dans chaque région apportent gouvernance, maîtrise du capital et opérations sur le terrain à chaque mandat.',
    },
    deliveryNotes: {
      title: 'Approche',
      description: 'Nous identifions les initiatives à venir, les fenêtres de lancement et les capacités opérationnelles sur mesure adaptées à vos besoins.',
    },
  },

  regionalDelivery: {
    title: 'Projets Réalisés',
    sectionLabel: '',
    regions: {
      'Europe': 'Nous avons acquis des actifs en difficulté, restructuré les opérations et développé les entreprises agricoles sur les marchés européens.',
      'North America': 'Gestion des relations, lobbying et conseil juridique pour les entreprises nord-américaines cherchant à exporter ou à opérer à l\'étranger.',
      'Middle East': 'Les opérateurs sur le marché coordonnent les partenariats, la livraison de projets et la conformité dans le Golfe et le paysage ME plus large.',
      'Africa': 'Nous avons créé des entreprises, commissionné des usines et géré des programmes agricoles et technologiques à travers le continent.',
    },
  },

  services: {
    title: 'Services',
    sectionLabel: '',
    items: [
      {
        title: 'Exécution privée et sur mesure',
        body: 'Nous gérons les transformations sensibles de manière discrète—alignant opérateurs, financiers et parties prenantes publiques pour que chaque mandat résiste à l\'examen.',
      },
      {
        title: 'Gouvernance axée sur les opérateurs',
        body: 'Les opérations sur le terrain s\'intègrent avec des rapports prêts pour le conseil d\'administration, maintenant les feuilles de route, la conformité et la livraison alignées dans toutes les régions.',
      },
      {
        title: 'Maîtrise du capital',
        body: 'Nous traduisons les réalités opérationnelles en récits de qualité investisseur afin que les fournisseurs de capitaux voient à la fois le potentiel et les contrôles avant la clôture de l\'accord.',
      },
      {
        title: 'Commerce International',
        body: 'Depuis plus de 10 ans, KUZOG aide les opérateurs africains à sécuriser des biens et services internationaux grâce à un approvisionnement privé et public, sur mesure, un financement et une logistique.',
      },
    ],
  },

  operations: {
    title: 'Opérations et Éthique',
    sectionLabel: '',
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
    sectionLabel: '',
    kuzogConsulting: {
      title: 'KUZOG Consulting Inc.',
      description: 'Gestion de programme et soutien à la conformité en Amérique du Nord, basés à Toronto avec livraison à travers le Canada et les États-Unis. Partenariat avec de nombreuses entreprises d\'entreposage et d\'équipement logistique.',
      button: 'Visiter kuzog.ca',
    },
    blog: {
      title: 'KUZOG Insights',
      description: 'Explorez nos dernières perspectives sur le commerce international, l\'agriculture durable et les opérations transfrontalières. Analyses pratiques du terrain.',
      button: 'Lire notre blog',
    },
    kuzogAgri: {
      title: 'KUZOG Agriculture',
      description: 'Projets agricoles spécialisés incluant la régénération des sols, les systèmes d\'irrigation de précision et les solutions agricoles durables. Nous accompagnons les agriculteurs avec des technologies éprouvées pour des conditions environnementales difficiles.',
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

  agriPage: {
    header: {
      contactButton: 'Contactez-nous',
    },
    about: {
      badge: 'À propos de KUZOG AGRI',
      title: 'Systèmes Agricoles pour une Planète en Mutation',
      description: 'KUZOG AGRI est un innovateur et fournisseur de services agricoles dédiés à la régénération des sols et à l\'optimisation de l\'utilisation de l\'eau dans les environnements les plus difficiles au monde. Nous travaillons à l\'intersection de la science, de la technologie et de la durabilité, déployant des solutions qui rendent les terres dégradées ou souffrant de stress hydrique à nouveau productives.',
      contactButton: 'Contactez-nous',
      cards: {
        fullCycle: {
          title: 'Partenaire Complet',
          description: 'De la semence au sol aux systèmes, nous fournissons du matériel végétal de haute qualité, concevons des technologies de sol avancées pour l\'efficacité hydrique et des systèmes agricoles adaptatifs alimentés par des énergies renouvelables.',
        },
        globalReach: {
          title: 'Portée Mondiale',
          description: 'Nos projets couvrent l\'Afrique, le Moyen-Orient et l\'Europe — ciblant les zones arides souffrant de désertification et les régions tempérées confrontées aux stress climatiques tels que les inondations, la salinité et l\'épuisement des sols.',
        },
        partnership: {
          title: 'Approche Partenariale',
          description: 'Nous nous associons avec les agriculteurs, les agro-industries, les agences de développement et les gouvernements pour construire la résilience agricole à partir de la base.',
        },
      },
    },
    services: {
      badge: 'Nos Services',
      title: 'Services Agricoles',
      items: [
        {
          title: 'Propagation Végétale et Multiplication Génétique',
          body: 'KUZOG AGRI exploite et s\'associe avec des laboratoires de sélection et de propagation végétale capables de produire des millions de plants de haute qualité chaque année. Notre expertise couvre la production en culture tissulaire, la gestion des pépinières et l\'acclimatation sur le terrain, garantissant que chaque plante que nous livrons est génétiquement pure, exempte de maladies et adaptée au climat.',
          details: [
            'Plants de bananiers, palmiers dattiers et plants d\'ananas',
            'Plants de légumes et espèces horticoles',
            'Plants à cycle rapide (par ex., 45–60 jours) pour programmes de plantation précoce ou commerciale',
          ],
        },
        {
          title: 'Régénération des Sols et Technologies d\'Économie d\'Eau',
          body: 'Nous nous spécialisons dans la transformation de sols de faible fertilité et soumis au stress hydrique en terres productives grâce à des innovations minérales et microbiennes naturelles. Notre plateforme technologique propriétaire combine des microstructures conçues avec des champignons bénéfiques pour optimiser les performances du sol.',
          details: [
            'Utilisation de l\'eau réduite jusqu\'à 50%',
            'Efficacité des engrais améliorée de 15 à 20%',
            'Rendements des cultures augmentés de 20 à 30%, même dans les sols marginaux',
          ],
        },
        {
          title: 'Systèmes Agricoles Contrôlés et Intelligents',
          body: 'Nous concevons et mettons en œuvre des systèmes agricoles à environnement contrôlé et de précision adaptés à divers contextes — des petites exploitations aux projets commerciaux. Nos systèmes sont conçus pour l\'efficacité des ressources, combinant énergie renouvelable et contrôle basé sur les données pour obtenir un rendement maximal avec un apport minimal.',
          details: [
            'Systèmes hydroponiques et aquaponiques',
            'Irrigation et surveillance alimentées par l\'énergie solaire',
            'Systèmes de serre et de plein champ semi-aride',
            'Gestion des cultures assistée par IA et fertigation de précision',
          ],
        },
        {
          title: 'Partenariat et Opérations de Projet',
          body: 'KUZOG AGRI fonctionne par le biais de modèles de partenariat qui alignent l\'innovation scientifique avec l\'exécution sur le terrain. Nous co-développons des "Playbooks Opérationnels" avec nos partenaires locaux, guidant chaque étape du projet pour assurer le transfert de connaissances, le contrôle qualité et la durabilité à long terme de chaque déploiement.',
          details: [
            'Approvisionnement et gestion de la chaîne logistique',
            'Mise en service du système et essais sur le terrain',
            'Formation des équipes locales',
            'Déploiement commercial et expansion',
          ],
        },
      ],
    },
    soilTech: {
      badge: 'Technologie du Sol',
      title: 'Notre Solution Propriétaire',
      subtitle: 'Microstructures de Sol Conçues pour les Environnements Soumis au Stress Hydrique',
      description: 'La plateforme technologique propriétaire de KUZOG AGRI est conçue pour restaurer les sols dégradés, augmenter l\'efficacité hydrique et améliorer la dynamique des nutriments. Elle est le produit d\'années de recherche combinant l\'ingénierie minérale, la microbiologie du sol et l\'agronomie de terrain.',
      features: [
        {
          title: 'Rétention d\'Eau',
          body: 'Nos microstructures minérales propriétaires agissent comme des réservoirs d\'eau. Elles stockent l\'humidité près de la zone racinaire, la libérant progressivement aux plantes en cas de stress de sécheresse — augmentant la capacité d\'eau disponible pour les plantes (AWC) et réduisant la fréquence d\'irrigation.',
        },
        {
          title: 'Tamponnage des Nutriments',
          body: 'Notre cadre minéral adaptatif cultive des microhabitats qui stabilisent l\'échange de nutriments (N, P, K) et de composés carbonés. Le système encourage la colonisation par des champignons bénéfiques et des bactéries du sol, améliorant la biodisponibilité des éléments essentiels et favorisant la fertilité du sol à long terme.',
        },
        {
          title: 'Régénération du Sol',
          body: 'Notre technologie du sol est utilisée non seulement comme amendement du sol mais aussi dans le cadre de programmes de reforestation, de cultures de couverture et de restauration. En reconstruisant la matière organique, elle améliore l\'agrégation, la structure du sol et la séquestration du carbone, régénérant des écosystèmes autrefois considérés comme irrécupérables.',
        },
        {
          title: 'Playbooks Opérationnels',
          body: 'Chaque programme est livré avec un playbook de déploiement — un guide de terrain détaillé co-créé avec nos partenaires. Il couvre les diagnostics de site, les ajustements de formulation, les protocoles de mélange et d\'application, et la surveillance post-application pour assurer des résultats cohérents à toutes les échelles.',
        },
      ],
    },
  },
  group: {
    hero: {
      eyebrow: 'La maison-mère',
      title: 'KUZOG Group — importer, fabriquer, investir. Depuis Paris.',
      body: 'KUZOG France est une holding parisienne qui conçoit et exploite des entreprises à la croisée du sol, du vivant et du capital. Incubée à Paris&Co, soutenue par la Ville de Paris, et lauréate du concours entrepreneurial Open Carca 2025, le groupe structure des projets industriels et d\'investissement à ambition internationale — Hydrobio et Microplantes sont ses deux opérations phares.',
    },
    activitiesHeading: 'Ce que nous faisons',
    activities: [
      { title: 'Import / Export & Commissionnement', detail: 'Approvisionnement et commissionnement industriels clé en main dans l\'UE et MENA — sourcing, logistique, navigation réglementaire, supervision terrain.' },
      { title: 'Industrie', detail: 'Reconversion industrielle de sites en difficulté et constructions ex nihilo. Microplantes en est l\'opération phare.' },
      { title: 'Conseil', detail: 'Stratégie et conseil aux clients de l\'agronomie industrielle et de l\'innovation.', externalUrl: 'https://kuzog.ca' },
      { title: 'Investissement en actifs distressed', detail: 'Acquisitions opportunistes de sites industriels et entreprises à valeur stratégique — la mécanique derrière le site Microplantes.' },
      { title: 'IA appliquée', detail: 'Projets internes d\'IA et conseil — intégration de l\'automatisation et des systèmes de décision dans nos opérations.' },
      { title: 'Fonds d\'investissement', detail: 'Véhicule ancré chez KUZOG pour les ventures adjacentes à la croisée de l\'agronomie, de la deep tech et de la reconversion industrielle.' },
    ],
    recognitionHeading: 'Reconnaissances',
    recognitions: [
      { name: 'Paris&Co', detail: 'Incubée dans l\'écosystème d\'innovation Paris&Co.' },
      { name: 'Ville de Paris', detail: 'Subvention de 30 000 € de la Ville de Paris pour l\'innovation industrielle.' },
      { name: 'Open Carca 2025', detail: 'Lauréate du concours entrepreneurial 2025.' },
    ],
    contactCTA: {
      title: 'Parlons.',
      description: 'Demandes d\'investissement, conversations de partenariat, missions de conseil — nous répondons sous deux jours ouvrés.',
      ctaLabel: 'Nous contacter',
    },
  },
};
