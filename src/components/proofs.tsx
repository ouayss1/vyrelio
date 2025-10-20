export function Proofs() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Confiance & transparence</h2>
          <div className="mt-6 max-w-xl space-y-3">
            {[
              "Contrats sans engagement (vous partez quand vous voulez)",
              "Propriété totale des actifs (site, domaines, comptes publicitaires)",
              "Reporting en temps réel (tableaux de bord partagés)",
              "Méthodologie documentée et auditable",
              "Références vérifiables sur demande",
              "Cas publics consultables",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.704 5.29a1 1 0 010 1.42l-7.2 7.2a1 1 0 01-1.42 0l-3.2-3.2a1 1 0 011.42-1.42l2.49 2.49 6.49-6.49a1 1 0 011.42 0z" clipRule="evenodd"/></svg>
                </span>
                <p className="text-gray-800">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#cases" className="inline-flex items-center rounded-full border px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">Voir nos cas publics</a>
            <a href="#discovery" className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700">Parler à un expert</a>
          </div>
        </div>
        <div className="rounded-2xl border bg-white p-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {[{t:"RGPD",s:"Conforme"},{t:"Hébergement",s:"France / UE"},{t:"Sécurité",s:"HTTPS / SSL"},{t:"Propriété",s:"Vous gardez tout"},{t:"Engagement",s:"Sans durée"}].map(b => (
              <div key={b.t} className="rounded-xl border p-4 text-center">
                <div className="mx-auto mb-2 h-10 w-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  {b.t === "RGPD" ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ) : b.t === "Hébergement" ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M8 6v8" />
                    </svg>
                  ) : b.t === "Sécurité" ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ) : b.t === "Propriété" ? (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 20h10a2 2 0 002-2V9l-7-5-7 5v9a2 2 0 002 2z" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <p className="text-sm font-semibold text-gray-900">{b.t}</p>
                <p className="text-xs text-gray-600 mt-1">{b.s}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-gray-600">Aucune promesse chiffrée non vérifiable. Des preuves concrètes sur demande.</p>
        </div>
      </div>
    </section>
  );
}
