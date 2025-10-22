import Link from "next/link";

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      {/* Banner démo */}
      <div className="rounded-2xl border bg-emerald-50/60 p-4 text-emerald-800">
        <p className="text-sm">
          Espace démo: toutes les métriques sont initialisées à 0. Pour activer la collecte réelle, prenez un site Vyrelio.
        </p>
      </div>

      {/* KPIs */}
      <div className="grid gap-6 md:grid-cols-4">
        {[{t:"Clics",u:"/mois"},{t:"Leads / RDV",u:"/mois"},{t:"Appels qualifiés",u:"/mois"},{t:"Avis Google",u:"total"}].map(k => (
          <div key={k.t} className="rounded-2xl border bg-white p-6">
            <p className="text-sm text-gray-600">{k.t}</p>
            <p className="mt-1 text-3xl font-extrabold text-gray-900">0 <span className="text-base align-middle font-semibold text-gray-500">{k.u}</span></p>
            <svg viewBox="0 0 120 36" className="mt-3 h-10 w-full">
              <polyline points="0,28 120,28" fill="none" stroke="#E5E7EB" strokeWidth="3" />
              <circle cx="20" cy="28" r="2" fill="#10B981" />
              <circle cx="60" cy="28" r="2" fill="#10B981" />
              <circle cx="100" cy="28" r="2" fill="#10B981" />
            </svg>
          </div>
        ))}
      </div>

      {/* Graphs */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-gray-900">Trafic & conversions</p>
            <span className="text-xs rounded-full bg-gray-100 px-2 py-1 text-gray-700">démo</span>
          </div>
          <svg viewBox="0 0 320 160" className="mt-4 w-full h-40">
            <rect x="0" y="0" width="320" height="160" rx="12" fill="#F0FDFA" />
            <polyline points="20,120 300,120" fill="none" stroke="#D1FAE5" strokeWidth="2" />
            <polyline points="20,120 80,120 140,120 200,120 260,120 300,120" fill="none" stroke="#10B981" strokeWidth="3" />
          </svg>
          <p className="mt-2 text-sm text-gray-600">Collecte réelle inactive. Les courbes s’activeront après le lancement.</p>
        </div>
        <div className="rounded-2xl border bg-white p-6">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-gray-900">Avis Google (évolution)</p>
            <span className="text-xs rounded-full bg-gray-100 px-2 py-1 text-gray-700">démo</span>
          </div>
          <svg viewBox="0 0 320 160" className="mt-4 w-full h-40">
            <rect x="0" y="0" width="320" height="160" rx="12" fill="#F0FDFA" />
            {[20,60,100,140,180,220,260,300].map((x) => (
              <rect key={x} x={x} y={120} width="16" height="8" fill="#A7F3D0" rx="3" />
            ))}
          </svg>
          <div className="mt-2 text-sm text-gray-600">Total: 0 • Note moyenne: 0.0/5</div>
        </div>
      </div>

      {/* Sections fonctionnalités (verrouillées) */}
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {t:"Automations", items:["Rappels RDV","Relance avis","Workflows CRM"]},
          {t:"SEO local", items:["Google Business Profile","Pages actes","Backlinks locaux"]},
          {t:"Publicité", items:["Search","Performance Max","Meta Ads"]},
        ].map((b) => (
          <div key={b.t} className="relative rounded-2xl border bg-white p-6">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-gray-900">{b.t}</p>
              <span className="text-xs rounded-full bg-gray-100 px-2 py-1 text-gray-700">inactif</span>
            </div>
            <ul className="mt-3 space-y-1 text-sm text-gray-700 list-disc pl-5">
              {b.items.map((it)=> <li key={it}>{it}</li>)}
            </ul>
            <div className="absolute inset-0 rounded-2xl bg-white/60" />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="rounded-2xl border bg-emerald-50/60 p-6 flex items-center justify-between flex-wrap gap-3">
        <div>
          <p className="font-semibold text-gray-900">Activez votre tableau de bord avec un site Vyrelio</p>
          <p className="text-sm text-gray-700">Lancement en quelques semaines. Données, avis et automations s’affichent automatiquement.</p>
        </div>
        <Link href="/#contact" className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700">Démarrer</Link>
      </div>
    </div>
  );
}
