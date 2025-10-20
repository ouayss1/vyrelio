export function CondensedCase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid gap-8 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Étude de cas condensée</h2>
          <div className="mt-6 space-y-4 text-gray-800">
            <p><span className="font-semibold">Problème</span> → Agenda irrégulier, appels saturés, peu de visibilité locale.</p>
            <p><span className="font-semibold">Plan</span> → Site premium, SEO local, prise de RDV + rappels automatiques.</p>
            <p><span className="font-semibold">Résultat</span> → Croissance continue des nouveaux patients et no‑show en baisse.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="rounded-xl border bg-white px-4 py-3"><p className="text-2xl font-extrabold text-emerald-700">–30%</p><p className="text-xs text-gray-600">no‑show</p></div>
            <div className="rounded-xl border bg-white px-4 py-3"><p className="text-2xl font-extrabold text-emerald-700">+40%</p><p className="text-xs text-gray-600">appels qualifiés</p></div>
            <div className="rounded-xl border bg-white px-4 py-3"><p className="text-2xl font-extrabold text-emerald-700">+20%</p><p className="text-xs text-gray-600">patients Maps</p></div>
          </div>
          <div className="mt-8">
            <a href="#cases" className="inline-flex items-center rounded-full border px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">Lire le cas complet</a>
          </div>
        </div>
        <div className="rounded-2xl border bg-white p-6">
          <div className="aspect-video w-full rounded-xl bg-emerald-50" />
          <p className="mt-3 text-sm text-gray-600">Aperçu du plan et des résultats.</p>
        </div>
      </div>
    </section>
  );
}
