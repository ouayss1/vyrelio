export type PostSection = {
  heading: string;
  body?: string[];
  bullets?: string[];
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  updatedAt?: string; // ISO
  author: string;
  tags: string[];
  heroImage?: string;
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: "seo-local-cabinet-dentaire",
    title: "SEO local pour cabinets dentaires: la méthode simple en 7 étapes",
    description:
      "Devenez visible sur Google Maps et les requêtes locales: fiche Google Business, pages ville-service, avis, et maillage interne.",
    date: "2025-10-14",
    author: "Vyrelio",
    tags: ["SEO local", "Google Business", "Maps"],
    heroImage: "/blog/seo-local.jpg",
    sections: [
      {
        heading: "1) Optimiser votre fiche Google Business (GMB)",
        bullets: [
          "Nom clair + catégorie principale + catégories secondaires",
          "Description orientée bénéfices et mots-clés locaux",
          "Horaires exacts + URL de prise de rendez-vous",
          "Photos récentes de haute qualité (équipe, cabinet, before/after)",
        ],
      },
      {
        heading: "2) Collecter et répondre aux avis",
        bullets: [
          "Demandez un avis 15–30 minutes après le RDV (SMS/email)",
          "Répondez à 100 % des avis (même négatifs) avec empathie",
          "Intégrez un QR code avis à l'accueil",
        ],
      },
      {
        heading: "3) Pages ville-service (ex: 'Implants dentaires à Lyon')",
        bullets: [
          "1 page par service important × zone locale",
          "Structure H1/H2/H3 claire + FAQ + appels à l'action",
          "Preuves: photos, cas, avis, certifications",
        ],
      },
      {
        heading: "4) Données structurées & maillage",
        bullets: [
          "Schema.org LocalBusiness + FAQPage",
          "Liens internes entre services, villes et FAQ",
          "Lien fort vers la page de prise de RDV",
        ],
      },
      {
        heading: "5) Rapidité & mobile-first",
        bullets: [
          "Core Web Vitals (LCP, CLS) optimisés",
          "Images compressées, lazy-loading, police système",
        ],
      },
      {
        heading: "6) Suivi & amélioration continue",
        bullets: [
          "Suivi des positions Maps et organiques",
          "Traquer les conversions: appels, clics RDV, formulaires",
        ],
      },
      {
        heading: "7) Foire aux questions (FAQ)",
        bullets: [
          "Tarifs, déroulé, contre-indications, délais",
          "Réassurance: douleurs, durée, remboursement",
        ],
      },
    ],
  },
  {
    slug: "outils-automatisation-cabinet-dentaire-gagner-10-heures",
    title:
      "Les 3 outils qui font gagner 10 heures par semaine à un cabinet dentaire (et augmentent la satisfaction des patients)",
    description:
      "Réservation en ligne, communication automatisée et gestion centralisée: les 3 outils concrets pour gagner ~10 h/semaine et améliorer l'expérience patient.",
    date: "2025-10-15",
    author: "Vyrelio",
    tags: [
      "Automatisation cabinet dentaire",
      "Outils cabinet dentaire",
      "Gain de temps dentiste",
      "Gestion cabinet dentaire",
      "Prise de rendez-vous en ligne",
    ],
    heroImage: "/blog/outils-automatisation-cabinet.jpg",
    sections: [
      {
        heading: "Introduction",
        body: [
          "Les cabinets modernes ont besoin de processus fluides. Appels, rappels, messages, facturation: autant de tâches répétitives qui grignotent le temps clinique.",
          "Selon XLDent (2024), les cabinets qui automatisent gagnent en moyenne 10 h/semaine et réduisent leurs coûts de 30 %. Voici 3 outils concrets pour y parvenir.",
        ],
      },
      {
        heading: "1) Outil #1 : La prise de rendez-vous en ligne intelligente",
        body: [
          "Les patients veulent réserver à toute heure, sans appeler. 77 % jugent essentiel de gérer leurs RDV en ligne (Jarvis Analytics 2024), mais seuls 26 % des cabinets l'offrent.",
        ],
        bullets: [
          "Agenda rempli 24/7, moins d'appels manqués",
          "Rappels automatiques: absences −78 %",
          "≈ 3 h/semaine de secrétariat libérées",
          "Outils: Vyrelio Scheduling, Doctolib Pro, Google Calendar + Zapier/Make",
        ],
      },
      {
        heading: "2) Outil #2 : La communication automatisée avec les patients",
        body: [
          "Un patient non rappelé est souvent un patient perdu. Les suivis oubliés coûtent très cher (Dental Economics, 2024).",
        ],
        bullets: [
          "SMS: rappel J−1 et confirmation instantanée",
          "E‑mails post‑soin: remerciement + demande d’avis Google",
          "Messages préventifs: contrôles semestriels",
          "Outils: Vyrelio Comms, Twilio Studio / MessageBird Flows, HubSpot Healthcare",
          "+25 % de satisfaction et +20 % de ré‑engagement observés",
        ],
      },
      {
        heading: "3) Outil #3 : La gestion centralisée (administratif + facturation)",
        body: [
          "Tableurs et logiciels déconnectés = perte de temps, erreurs et stress. La centralisation change tout.",
        ],
        bullets: [
          "Pré‑remplissage automatique des informations patient",
          "Synchronisation assurance/mutuelle",
          "Alertes de stock (consommables, matériel)",
          "Stats en temps réel: CA, taux de remplissage, etc.",
          "Outils: Vyrelio Desk, DentaGest Pro / Julie, Make / Airtable",
          "Planet DDS (2024): jusqu’à +15 % de marge avec un back‑office digitalisé",
        ],
      },
      {
        heading: "Bilan concret : ~10 heures gagnées/semaine",
        bullets: [
          "Prise de RDV & rappels: ~4 h → ~0,5 h (gain ~3,5 h)",
          "Communication patients: ~3 h → ~0,5 h (gain ~2,5 h)",
          "Administration & facturation: ~5 h → ~1 h (gain ~4 h)",
          "Total: ~12 h+ → ~2 h (≈ 10 h gagnées/semaine)",
        ],
        body: [
          "≈ 40 h/mois récupérées — l'équivalent d’une semaine complète réinvestissable dans le soin.",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "L’automatisation n’est plus un luxe: c’est la meilleure façon d’allouer du temps médical tout en augmentant les revenus.",
          "Réservation en ligne, communication automatisée et gestion centralisée transforment productivité, satisfaction et image.",
          "Vous voulez estimer votre gain potentiel ? Demandez votre audit gratuit.",
        ],
      },
      {
        heading: "Sources",
        bullets: [
          "XLDent, Patient Experience Report 2024 (https://www.xldent.com/)",
          "Jarvis Analytics, Online Scheduling Insights 2024 (https://www.jarvisanalytics.com/)",
          "Dental Economics, The 3 Million Dollar Communication Problem 2024 (https://www.dentaleconomics.com/)",
          "Planet DDS, Digital Dental Office Study 2024 (https://www.planetdds.com/)",
        ],
      },
    ],
  },
  {
    slug: "augmenter-avis-google-cabinet-dentaire",
    title: "Comment augmenter vos avis Google (sans spammer)",
    description:
      "Un système éthique pour obtenir plus d'avis 5★: timing, messages, QR codes et réponses efficaces.",
    date: "2025-10-14",
    author: "Vyrelio",
    tags: ["Avis", "Google", "Réputation"],
    heroImage: "/blog/avis-google.jpg",
    sections: [
      {
        heading: "1) Le bon moment",
        body: [
          "Envoyez la demande d'avis 15–30 minutes après le rendez-vous: le patient a encore l'expérience fraîche et positive.",
        ],
      },
      {
        heading: "2) Le bon message",
        bullets: [
          "Personnalisez: prénom + acte (ex: détartrage)",
          "Lien direct vers votre page d'avis",
          "Expliquez l'utilité des avis pour les autres patients",
        ],
      },
      {
        heading: "3) QR code et affichage",
        body: [
          "Placez un QR code discret à l'accueil et en salle d'attente.",
        ],
      },
      {
        heading: "4) Répondre à 100 % des avis",
        bullets: [
          "Remerciez pour les avis positifs (prénom + point précis)",
          "Pour un avis négatif: excuses, solution concrète, contact privé",
        ],
      },
      {
        heading: "5) Suivi mensuel",
        body: [
          "Fixez un objectif chiffré (ex: +10 avis/mois) et suivez l'évolution.",
        ],
      },
    ],
  },
  {
    slug: "pourquoi-reservation-en-ligne-patients-dentaires",
    title:
      "Pourquoi 77 % des patients veulent réserver leur rendez-vous dentaire en ligne (et ce que cela dit sur votre cabinet)",
    description:
      "Les patients exigent la réservation en ligne: attentes, impacts business, et plan d'action concret pour moderniser votre cabinet.",
    date: "2025-10-15",
    author: "Vyrelio",
    tags: [
      "Réservation en ligne",
      "Automations",
      "Jarvis Analytics",
      "Dental Economics",
    ],
    heroImage: "/blog/reservation-en-ligne-dentaire.jpg",
    sections: [
      {
        heading: "Introduction",
        body: [
          "Le comportement des patients a profondément changé. Aujourd’hui, 77 % des patients déclarent vouloir réserver, modifier ou annuler leurs rendez-vous en ligne (Jarvis Analytics, 2024).",
          "Pour un cabinet dentaire, ce n’est plus un confort mais une nécessité: un patient frustré par un appel manqué part… et ne revient pas.",
          "Dans cet article: pourquoi les patients exigent la réservation en ligne, ce que cela change pour les cabinets, et comment l’automatisation peut transformer votre gestion.",
        ],
      },
      {
        heading: "1) Le patient moderne veut la simplicité",
        body: [
          "Les patients d’aujourd’hui vivent sur leur smartphone. Selon Dental Economics (2024), plus de 70 % des rendez-vous médicaux commencent par une recherche Google. Pourtant, seuls 26 % des cabinets dentaires proposent une réservation directe sur leur site.",
          "Conséquence: beaucoup de cabinets perdent des patients chaque semaine — souvent sans le savoir.",
          "\"Je voulais juste prendre rendez-vous rapidement, mais personne ne répondait au téléphone.\" — Témoignage relevé (Jarvis Analytics, 2024)",
        ],
      },
      {
        heading: "2) Les attentes ont changé (et elles sont précises)",
        bullets: [
          "Réserver en dehors des heures d’ouverture (soir et week-end)",
          "Recevoir des rappels automatiques pour ne pas oublier",
          "Modifier ou annuler sans devoir appeler",
          "Recevoir une confirmation instantanée par SMS ou e‑mail",
        ],
        body: [
          "77 % des patients jugent indispensable de pouvoir gérer leurs rendez-vous en ligne (Jarvis Analytics, 2024). Pour un cabinet: le téléphone ne suffit plus.",
        ],
      },
      {
        heading: "3) Les conséquences concrètes pour votre cabinet",
        bullets: [
          "Un rendez‑vous manqué/jour coûte 20 000 à 70 000 € par an (Dental Economics, 2024)",
          "Les rappels automatisés réduisent les absences de 78 % (XLDent, 2024)",
          "La digitalisation libère ~10 h/semaine de tâches administratives",
        ],
        body: [
          "Autrement dit: la réservation en ligne = du temps gagné + du chiffre d’affaires conservé.",
        ],
      },
      {
        heading: "4) Mettre en place un système efficace (checklist)",
        bullets: [
          "Intégrer la prise de RDV directement sur le site (pas de redirection externe)",
          "Connecter le module à l’agenda interne (Doctolib, Google Calendar, etc.)",
          "Automatiser les rappels SMS/e‑mail",
          "Suivre les no‑shows et les conversions",
          "Bouton \"Réserver maintenant\" visible dès l’arrivée",
        ],
        body: [
          "Astuce Vyrelio: un site optimisé SEO avec RDV intégré peut augmenter de ~35 % les nouveaux patients en 3 mois.",
        ],
      },
      {
        heading: "5) Perception patient: professionnalisme & confiance",
        bullets: [
          "38 % des visiteurs quittent un site mal conçu (MySocialPractice, 2024)",
          "57 % ne recommandent pas un site non mobile (MySocialPractice, 2024)",
          "Un parcours de réservation clair est un fort signal de sérieux",
        ],
      },
      {
        heading: "Conclusion",
        body: [
          "Les patients veulent réserver en ligne; les cabinets qui s’adaptent gagnent en visibilité, efficacité et rentabilité.",
          "En 2025, ne pas offrir la réservation en ligne, c’est laisser vos concurrents prendre l’avantage.",
          "Vous voulez savoir combien de rendez‑vous votre site actuel vous fait perdre ? Demandez votre audit gratuit.",
        ],
      },
      {
        heading: "Sources",
        bullets: [
          "Jarvis Analytics — Online Scheduling Report 2024 (https://www.jarvisanalytics.com/)",
          "Dental Economics — The Cost of Missed Appointments, 2024 (https://www.dentaleconomics.com/)",
          "XLDent — Patient Experience Study 2024 (https://www.xldent.com/)",
          "MySocialPractice — Dental Website Statistics 2024 (https://mysocialpractice.com/)",
        ],
      },
    ],
  },
];

export function getAllPosts(): Post[] {
  return posts
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
