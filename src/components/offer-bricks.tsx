import Link from "next/link";

export function OfferBricks() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20">
      <div className="flex items-end justify-between gap-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Nos offres modulaires</h2>
          <p className="mt-3 text-gray-600">3 briques complémentaires pour attirer, convertir et fidéliser. Choisissez à la carte ou en pack.</p>
        </div>
        <Link href="/pricing" className="hidden sm:inline-flex items-center rounded-full border px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">Voir nos prix</Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border bg-white/80 backdrop-blur p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
          <div className="h-10 w-10 rounded-full bg-emerald-600/10 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M7 4v6M17 4v6" stroke="#059669" strokeWidth="2" strokeLinecap="round"/><rect x="5" y="10" width="14" height="9" rx="2" stroke="#059669" strokeWidth="2"/></svg>
          </div>
          <p className="mt-3 text-xs font-semibold text-emerald-700">Brique 1</p>
          <h3 className="mt-1 text-xl font-semibold text-gray-900">Site premium</h3>
          <p className="mt-2 text-sm text-gray-700">Site haut de gamme optimisé pour la conversion: mobile‑first, pages actes, avis, FAQ, prise de RDV.</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">✓</span> Core Web Vitals élevés</li>
            <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">✓</span> RDV en ligne + suivi conversions</li>
            <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">✓</span> Hébergement France/UE</li>
          </ul>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">Livré en 7–14 j</span>
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">RGPD</span>
          </div>
          <div className="mt-6 flex gap-2">
            <Link href="/pricing" className="inline-flex flex-1 items-center justify-center rounded-full bg-emerald-600 px-3 py-3 text-white text-sm font-semibold hover:bg-emerald-700">Détails & prix</Link>
            <Link href="/#contact" className="inline-flex flex-1 items-center justify-center rounded-full border px-2 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">Parler à un expert</Link>
          </div>
        </div>

        <div className="rounded-3xl border bg-white/80 backdrop-blur p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
          <div className="h-10 w-10 rounded-full bg-emerald-600/10 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 20c4.418 0 8-3.582 8-8" stroke="#059669" strokeWidth="2" strokeLinecap="round"/><path d="M12 4C7.582 4 4 7.582 4 12" stroke="#059669" strokeWidth="2" strokeLinecap="round"/><path d="M7 12h10" stroke="#059669" strokeWidth="2" strokeLinecap="round"/><path d="M12 7v10" stroke="#059669" strokeWidth="2" strokeLinecap="round"/></svg>
          </div>
          <p className="mt-3 text-xs font-semibold text-emerald-700">Brique 2</p>
          <h3 className="mt-1 text-xl font-semibold text-gray-900">SEO local</h3>
          <p className="mt-2 text-sm text-gray-700">Dominez Google Maps et les requêtes locales: GMB/Maps, pages ville‑service, schémas et avis.</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">✓</span> Optimisation fiche Google Business</li>
            <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">✓</span> Pages locales ciblées</li>
            <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">✓</span> Collecte et gestion d’avis</li>
          </ul>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">Top 3 Maps visé</span>
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">Suivi mensuel</span>
          </div>
          <div className="mt-6 flex gap-2">
            <Link href="/pricing" className="inline-flex flex-1 items-center justify-center rounded-full bg-emerald-600 px-3 py-3 text-white text-sm font-semibold hover:bg-emerald-700">Détails & prix</Link>
            <Link href="/#contact" className="inline-flex flex-1 items-center justify-center rounded-full border px-2 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">Parler à un expert</Link>
          </div>
        </div>

        <div className="rounded-3xl border bg-white/80 backdrop-blur p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
          <div className="h-10 w-10 rounded-full bg-emerald-600/10 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M6 8h12" stroke="#059669" strokeWidth="2" strokeLinecap="round"/><path d="M6 12h8" stroke="#059669" strokeWidth="2" strokeLinecap="round"/><rect x="4" y="4" width="16" height="16" rx="3" stroke="#059669" strokeWidth="2"/></svg>
          </div>
          <p className="mt-3 text-xs font-semibold text-emerald-700">Brique 3</p>
          <h3 className="mt-1 text-xl font-semibold text-gray-900">Automations</h3>
          <p className="mt-2 text-sm text-gray-700">Rappels, relances, formulaires intelligents, e‑signature, CRM leads et transferts voix.</p>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">✓</span> Rappels SMS/e‑mail + replanification</li>
            <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">✓</span> Parcours patients automatisés</li>
            <li className="flex items-center gap-2"><span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">✓</span> Journal et reporting</li>
          </ul>
          <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">–30 % no‑show</span>
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">+10 h/sem libérées</span>
          </div>
          <div className="mt-6 flex gap-2">
            <Link href="/pricing" className="inline-flex flex-1 items-center justify-center rounded-full bg-emerald-600 px-3 py-3 text-white text-sm font-semibold hover:bg-emerald-700">Détails & prix</Link>
            <Link href="/#contact" className="inline-flex flex-1 items-center justify-center rounded-full border px-2 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-50">Parler à un expert</Link>
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 font-medium">Pack Essentiel • Site</span>
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 font-medium">Pack Croissance • Site + SEO</span>
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 font-medium">Pack Full • Site + SEO + Automations</span>
          </div>
          <Link href="/pricing" className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-3 text-white text-sm font-semibold hover:bg-emerald-700">Comparer les packs</Link>
        </div>
      </div>
    </section>
  );
}
