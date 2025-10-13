import clsx from 'clsx';
import { X } from 'lucide-react';
import { useCallback, useEffect, useRef } from 'react';

const policyContent = `FR – CODE DE CONDUITE ANTICORRUPTION\nKUZOG FRANCE – Société de conseil – 22, rue Sébastien-Mercier, 75015 Paris, France\n\n1. Préambule et finalité\nKUZOG FRANCE (« KUZOG » ou la Société) exerce des activités de conseil en France et à l’international, y compris dans des zones à risque élevé en matière d’intégrité (notamment certaines régions du Moyen-Orient et d’Afrique). Le présent Code vise à :\n(i) affirmer une tolérance zéro envers la corruption sous toutes ses formes ;\n(ii) opérationnaliser la conformité aux lois françaises (notamment la loi n° 2016-1691 dite Sapin II et le Code pénal), européennes, et, lorsque pertinent, aux textes extra-territoriaux (p. ex. UK Bribery Act, US FCPA) ;\n(iii) encadrer strictement l’usage licite d’intermédiaires, d’apporteurs d’affaires et de commissions professionnelles légales et transparentes ;\n(iv) protéger la Société et ses parties prenantes face aux risques (juridiques, réputationnels, financiers) inhérents aux environnements à haut risque.\n\n2. Champ d’application\nLe Code s’applique à toutes les personnes agissant pour ou au nom de KUZOG : dirigeants, salariés, intérimaires, stagiaires, mandataires sociaux, consultants, agents, intermédiaires, co-traitants, sous-traitants, distributeurs, apporteurs d’affaires, partenaires, ainsi qu’à toute entité contrôlée ou affiliée. KUZOG attend de ses partenaires contractuels qu’ils adoptent des standards équivalents.\n\n3. Principes cardinaux\nTolérance zéro corruption : interdiction absolue d’offrir, promettre, donner, solliciter ou accepter, directement ou indirectement, un avantage indu (monétaire ou non) en vue d’influencer une décision, obtenir/conserver un marché, ou récompenser un acte contraire aux devoirs d’une personne (publique ou privée).\nAucune “facilitation” : les « paiements de facilitation » (sommes versées pour accélérer un acte routinier) sont interdits, même s’ils sont “d’usage” localement, car proscrits par plusieurs législations applicables (notamment UKBA).\nCommissions licites uniquement : les commissions (honoraires d’apport, success fees, rabais, remises, marges distributrices) ne sont licites que si elles rémunèrent des services effectifs et légitimes, font l’objet d’un contrat écrit, sont raisonnables (proportionnées au service), facturées, déclarées et comptabilisées avec transparence.\nTroisièmes parties sous contrôle : recours possible à des intermédiaires uniquement après due diligence proportionnée, contractualisation robuste (clauses anticorruption, audit, résolution), suivi et auditabilité.\nPriorité à la sécurité : en cas de duresse (menace imminente sur la vie/santé/liberté), la protection des personnes prime. Tout paiement sous contrainte doit être signalé immédiatement, documenté et analysé a posteriori.\nVérité comptable : exactitude, exhaustivité et fidélité des livres et enregistrements ; interdiction de tout compte hors livres.\nAlerte protégée : signalement de bonne foi protégé contre toute mesure de rétorsion.\n\n4. Définitions\nPersonne publique : toute personne exerçant une fonction publique (administrations, entreprises publiques/contrôlées, organisations internationales, partis, candidat·e·s, etc.).\nAvantage/chose de valeur : espèces, équivalents, cadeaux, invitations, voyages, hébergements, services, rabais, dons, parrainages, opportunités d’emploi, informations sensibles, etc.\nPaiement de facilitation : paiement visant à accélérer une action administrative courante non discrétionnaire — interdit.\nCommission : rémunération contractuelle d’un service économique réel (apport d’affaires, distribution, représentation, conseil), distincte d’un avantage indu.\n\n5. Opérations dans des zones à risque (Moyen-Orient et autres)\nKUZOG reconnaît que certains marchés comportent :\n• des usages de cadeaux/hospitalités plus marqués ;\n• des chaînes de décision fragmentées impliquant des intermédiaires ;\n• des risques de sollicitations illicites (demande de “pourcentage”, “commission” non justifiée, « frais d’accélération »).\nPosition de KUZOG :\n• Les “parts” exigées par des personnes physiques ou morales sans prestation réelle, et/ou liées à une influence indue, sont prohibées.\n• Les commissions sont autorisées seulement si : (i) justifiées par des prestations réelles, (ii) encadrées par contrat, (iii) conformes aux lois locales et applicables, (iv) raisonnables au regard des usages licites du secteur, (v) facturées et tracées (KYC/IBAN, bénéficiaire effectif identifié), (vi) non versées (directement/indirectement) à une Personne publique ou à une personne agissant pour son compte.\n• Toute demande ambiguë (ex. “cut” informel, frais non documentés, comptes personnels/offshore, entités écrans) doit être refusée et signalée.\n\n6. Interdictions explicites\nPaiements, cadeaux, invitations, avantages à une Personne publique pour obtenir un avantage.\nVersements à des comptes personnels ou entités sans substance économique.\nContrats d’intermédiation sans objet précis, sans livrables, ou à taux manifestement excessif.\nFractionnement/découpage artificiel des paiements pour dissimuler la nature réelle.\nFaux libellés (ex. “consulting fee” couvrant en réalité un pot-de-vin).\nCommissions success fees indexées sur une décision discrétionnaire d’une autorité publique ou d’un acheteur public.\n\n7. Cadeaux, hospitalités, sponsoring, dons\nPermis s’ils sont modestes, occasionnels, transparents, liés à un objectif professionnel légitime, et jamais en période sensible (appel d’offres, décision).\nInterdits s’ils visent à influencer indûment ou créent une obligation.\nDons/sponsoring : interdits envers des entités liées à des décideurs publics lorsque l’effet pourrait être d’influer la décision. Procédure d’approbation préalable requise.\n\n8. Due diligence et contractualisation des intermédiaires\nAvant tout engagement :\n• Due diligence proportionnée (identité/bénéficiaires effectifs, réputation, compétences, conflits d’intérêts, antécédents, PEP/sanctions).\n• Contrat écrit : objet précis, services, durée, rémunération, interdiction de sous-intermédiaires non approuvés, clauses anticorruption (garanties, audit, résiliation, compliance by design), obligations de traçabilité et de coopération.\n• Paiements : virement vers compte professionnel au nom du contractant, dans le pays d’établissement (sauf justification documentée), selon facture conforme ; pas d’espèces, crypto ou compensation opaque.\n\n9. Distinction “frais gouvernementaux” vs. pots-de-vin\nFrais gouvernementaux légitimes : droits, taxes, redevances officiels, tarifés et quittancés par une entité publique. Exiger un reçu et une base juridique.\nPot-de-vin : somme non officielle, sollicitée pour accélérer, orienter ou obtenir une décision ; interdit même s’il est “coutumier”.\n\n10. Duress / menaces\nEn cas de menace immédiate (vie, santé, liberté), la priorité est la sécurité. Tout paiement réalisé sous contrainte doit être : signalé sans délai via le canal d’alerte ; documenté (circonstances, bénéficiaire, témoins, justificatifs) ; revu par la Direction/Conformité pour mesures correctives et notification légale si nécessaire.\n\n11. Comptabilité, contrôles et audit\nTenue des registres fidèle et complète (contrats, factures, ordres de mission, rapports).\nInterdiction de comptes parallèles.\nContrôles internes (segregation of duties, approbations, seuils), revues périodiques, audits ciblés.\nOutils d’analyse des paiements atypiques (juridiction, bénéficiaire, arrondis, pics avant décision, etc.).\n\n12. Formation et sensibilisation\nFormation initiale et rafraîchissements périodiques ; modules spécifiques pour équipes exposées (BD, achats, projets internationaux, relation autorités).\nGuides pratiques (FAQ locales, études de cas, listes de drapeaux rouges).\n\n13. Signalement et protection\nCanaux d’alerte internes confidentiels ; possibilité d’alerte externe selon la loi.\nInterdiction de toute rétorsion envers un lanceur d’alerte de bonne foi.\n\n14. Sanctions\nSanctions disciplinaires internes et contractuelles (jusqu’à la rupture), sans préjudice de poursuites pénales/civiles externes.\nKUZOG se réserve le droit de résilier tout contrat si des non-conformités graves sont établies.\n\n15. Gouvernance et mises à jour\nRéférent·e Conformité désigné·e ; rapport à la Direction.\nRevue annuelle du Code ; mises à jour en fonction des évolutions légales et des risques.\n\n16. Attestation\nJe reconnais avoir lu le présent Code et m’engage à m’y conformer.\nNom / Fonction / Date / Signature\n\nEN – ANTI-CORRUPTION CODE OF CONDUCT\nKUZOG FRANCE – Consulting company – 22, rue Sébastien-Mercier, 75015 Paris, France\n\n1. Purpose and scope\nKUZOG FRANCE (“KUZOG” or the Company) operates in France and internationally, including high-risk markets (e.g., parts of the Middle East and Africa). This Code aims to: (i) enforce zero tolerance for corruption; (ii) ensure compliance with French, EU, and extra-territorial laws (Sapin II, French Criminal Code, UK Bribery Act, US FCPA); (iii) govern lawful intermediaries/commissions; (iv) protect KUZOG and stakeholders from legal, reputational, financial exposure.\n\n2. Core principles\nZero bribery; no facilitation payments; lawful commissions only; third-party control via due diligence and contractual safeguards; safety first in duress situations; accurate books; protected reporting.\n\n3. Definitions\nPublic Official, Thing of value, Facilitation payment, Commission have the same meanings as outlined in the French section.\n\n4. High-risk market operations\nSame risk factors (hospitality customs, intermediated decision chains, illicit solicitations). KUZOG’s stance mirrors the French section: only lawful, documented commissions; ambiguous requests refused and reported.\n\n5. Explicit prohibitions\nPayments or advantages to Public Officials to obtain an advantage; payments to personal/offshore accounts; vague intermediary contracts; artificial splitting; mislabelled payments; improper success fees.\n\n6. Gifts, hospitality, sponsorship, donations\nPermitted only when modest, transparent, and legitimate; prohibited when aimed at influence. Donations/sponsorship linked to decision-makers require prior approval.\n\n7. Due diligence and contracting of intermediaries\nRisk-based due diligence; written contracts with anti-corruption warranties; payments via identifiable professional accounts against proper invoices.\n\n8. Government fees vs. bribes\nOfficial fees are allowed with receipts/legal basis; unofficial payments (“speed money”) remain prohibited.\n\n9. Duress / threats\nWhere immediate threats exist, safety prevails; any payment under duress must be reported, documented, reviewed by Compliance.\n\n10. Books, records, controls, and audit\nMaintain accurate records; prohibit parallel accounts; run internal controls and audits; deploy analytics to flag high-risk payments.\n\n11. Training and awareness\nOnboarding and periodic refreshers; enhanced modules for exposure-prone teams; practical guidance with red-flag checklists.\n\n12. Reporting and protection\nConfidential channels; legal escalation pathways; strict no-retaliation policy for good-faith whistleblowers.\n\n13. Sanctions\nInternal disciplinary measures and contractual remedies, without prejudice to external proceedings; KUZOG may terminate contracts upon serious non-compliance.\n\n14. Governance and updates\nDesignated Compliance lead reporting to management; annual Code review and revisions aligned with evolving law and risk.`;

type PolicyModalProps = {
  open: boolean;
  onClose: () => void;
};

export function PolicyModal({ open, onClose }: PolicyModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  const onOverlayClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <div
      aria-hidden={!open}
      className={clsx(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4 transition-opacity duration-200',
        open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      )}
      onClick={onOverlayClick}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        className={clsx(
          'relative w-full max-w-3xl transform overflow-hidden rounded-[36px] border border-white/50 bg-white/90 shadow-[0_40px_80px_rgba(31,41,51,0.25)] backdrop-blur-2xl transition-all duration-200',
          open ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        )}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full bg-white/70 p-2 text-muted-ink shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          aria-label="Close ethics code"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="max-h-[70vh] overflow-y-auto px-6 py-8 md:px-8">
          <h2 className="text-xl font-semibold text-ink md:text-2xl">KUZOG Ethics Code</h2>
          <pre className="mt-4 whitespace-pre-wrap text-sm leading-6 text-muted-ink md:text-base">
            {policyContent}
          </pre>
        </div>
      </div>
    </div>
  );
}
