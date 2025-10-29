export function TechMethod() {
  const tools = [
    {
      name: "Figma",
      initials: "FG",
      usage: "Design & maquettes sur mesure",
      trust: "Collaboration directe sur les maquettes avant validation",
      href: "#",
    },
    {
      name: "Next.js / Vercel",
      initials: "NV",
      usage: "Développement & hébergement",
      trust: "Rapidité, sécurité et hébergement européen certifié RGPD",
      icon: "/next.svg",
      href: "#",
    },
    {
      name: "Make / n8n",
      initials: "MN",
      usage: "Automatisations intelligentes",
      trust: "Rappels patients, relances et reporting automatisés",
      href: "#",
    },
    {
      name: "Plausible Analytics",
      initials: "PL",
      usage: "Suivi de performances",
      trust: "Données 100 % anonymisées et accessibles en temps réel",
      href: "#",
    },
    {
      name: "Google Business & Maps",
      initials: "GB",
      usage: "Référencement local",
      trust: "Suivi mensuel des positions et des avis patients",
      icon: "/google.svg",
      href: "#",
    },
    {
      name: "Twilio / WhatsApp API",
      initials: "TW",
      usage: "Communication patient",
      trust: "Rappels SMS conformes aux normes médicales",
      href: "#",
    },
  ];

  return (
    <section className="py-20 bg-brand-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 items-start">
          <div>
            <p className="text-xs font-semibold tracking-wider text-gray-600">Nous utilisons les meilleurs outils</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Développés avec les meilleurs outils et les meilleures pratiques
            </h2>
          </div>
          <div>
            <p className="text-gray-700 md:mt-2">
              Nos solutions ne reposent pas sur des promesses, mais sur une méthodologie claire et des outils de référence.
              Vous savez toujours comment, où et pourquoi vos résultats évoluent.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <div key={t.name} className="rounded-3xl border bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg border bg-white flex items-center justify-center">
                  {t.icon ? (
                    <img src={t.icon as string} alt={t.name} className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-bold text-emerald-600">{t.initials}</span>
                  )}
                </div>
                <p className="text-sm font-extrabold tracking-wide text-gray-900 uppercase">{t.name}</p>
              </div>
              <p className="mt-3 text-sm text-gray-700">{t.usage}</p>
              <p className="mt-1 text-sm text-gray-500">{t.trust}</p>
              <div className="mt-4">
                <a href={(t as any).href || "#"} className="inline-flex items-center text-sm font-semibold text-gray-900 hover:text-emerald-800">
                  Découvrir
                  <svg className="ml-1.5" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5l7 7-7 7" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border bg-emerald-50/70 p-4 sm:p-5 text-sm text-gray-800 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="h-8 w-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 9v6m-3-3h6" stroke="#059669" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 3l9 4v6c0 5-4 7-9 8-5-1-9-3-9-8V7l9-4z" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p>
              Chaque intégration est documentée et validée par nos ingénieurs internes avant mise en ligne.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
