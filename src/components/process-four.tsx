"use client";

import { motion } from "framer-motion";

export function ProcessFour() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Process en 4 étapes</h2>
        <p className="mt-3 text-gray-600">Clair, rapide et orienté résultats — du diagnostic à la croissance mensuelle.</p>
      </div>
      {/* Desktop/tablet: serpentine road with anchored steps */}
      <div className="relative mt-12 hidden md:block h-[460px] lg:h-[520px]">
        <div className="pointer-events-none absolute inset-0 z-10 block">
          <svg viewBox="0 0 1200 520" preserveAspectRatio="none" className="h-full w-full">
            <defs>
              <filter id="roadDrop" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="6" flood-color="#000" flood-opacity="0.25" />
              </filter>
            </defs>
            <path d="M30,420 C 180,120 380,480 550,180 S 900,100 1170,360" stroke="#111827" strokeWidth="56" fill="none" strokeLinecap="round" filter="url(#roadDrop)"/>
            <path d="M30,420 C 180,120 380,480 550,180 S 900,100 1170,360" stroke="#ffffff" strokeWidth="7" fill="none" strokeLinecap="round" strokeDasharray="22 22"/>
          </svg>
        </div>

        {/* Stops on the road */}
        <div className="absolute inset-0 z-20">
          {/* Stop 1 */}
          <div className="absolute left-[6%] top-[310px] flex flex-col items-center">
            <div className="h-3 w-3 rounded-full bg-white ring-8 ring-emerald-500/70 shadow" />
          </div>
          {/* Stop 2 */}
          <div className="absolute left-[32%] top-[150px] flex flex-col items-center">
            <div className="h-3 w-3 rounded-full bg-white ring-8 ring-emerald-500/70 shadow" />
          </div>
          {/* Stop 3 */}
          <div className="absolute left-[58%] top-[360px] flex flex-col items-center">
            <div className="h-3 w-3 rounded-full bg-white ring-8 ring-emerald-500/70 shadow" />
          </div>
          {/* Stop 4 */}
          <div className="absolute left-[84%] top-[220px] flex flex-col items-center">
            <div className="h-3 w-3 rounded-full bg-white ring-8 ring-emerald-500/70 shadow" />
          </div>
        </div>

        {/* Anchored cards */}
        <div className="absolute inset-0 z-30">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.00 }}
            className="absolute left-[2%] top-6 w-[22%] group rounded-3xl border bg-white/90 backdrop-blur p-6 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-emerald-300"
          >
            <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-emerald-600 text-white text-sm font-bold flex items-center justify-center">1</div>
            <div className="h-10 w-10 rounded-full bg-emerald-600/10 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#059669" strokeWidth="2"/><path d="M20 20l-3.5-3.5" stroke="#059669" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <p className="mt-4 font-semibold text-gray-900">Audit gratuit (15 min)</p>
            <p className="mt-2 text-sm text-gray-600">On analyse votre visibilité locale, site et parcours RDV pour prioriser les gains rapides.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="absolute left-[28%] bottom-6 w-[22%] group rounded-3xl border bg-white/90 backdrop-blur p-6 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-emerald-300"
          >
            <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-emerald-600 text-white text-sm font-bold flex items-center justify-center">2</div>
            <div className="h-10 w-10 rounded-full bg-emerald-600/10 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#059669" strokeWidth="2"/><path d="M8 9h8M8 13h5" stroke="#059669" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <p className="mt-4 font-semibold text-gray-900">Plan d’action</p>
            <p className="mt-2 text-sm text-gray-600">Roadmap simple: site premium, SEO local, RDV en ligne et rappels automatisés.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="absolute left-[54%] top-8 w-[22%] group rounded-3xl border bg-white/90 backdrop-blur p-6 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-emerald-300"
          >
            <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-emerald-600 text-white text-sm font-bold flex items-center justify-center">3</div>
            <div className="h-10 w-10 rounded-full bg-emerald-600/10 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="#059669" strokeWidth="2" strokeLinecap="round"/><path d="M12 5v14" stroke="#059669" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <p className="mt-4 font-semibold text-gray-900">Production (7–14 j)</p>
            <p className="mt-2 text-sm text-gray-600">Déploiement rapide, tracking des conversions et mise en ligne contrôlée.</p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="absolute left-[80%] bottom-8 w-[22%] group rounded-3xl border bg-white/90 backdrop-blur p-6 shadow-sm hover:-translate-y-1 hover:shadow-md hover:border-emerald-300"
          >
            <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-emerald-600 text-white text-sm font-bold flex items-center justify-center">4</div>
            <div className="h-10 w-10 rounded-full bg-emerald-600/10 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 17l5-5 4 4 6-7" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 20h18" stroke="#059669" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <p className="mt-4 font-semibold text-gray-900">Suivi mensuel</p>
            <p className="mt-2 text-sm text-gray-600">Rapports clairs, optimisations SEO/Ads, automatisations et objectifs patients.</p>
          </motion.div>
        </div>
      </div>

      {/* Mobile: stacked cards (simplified) */}
      <div className="mt-10 grid gap-6 md:hidden">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.45 }} className="rounded-3xl border bg-white/80 backdrop-blur p-6 shadow-sm">
          <div className="h-10 w-10 rounded-full bg-emerald-600/10 flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="#059669" strokeWidth="2"/><path d="M20 20l-3.5-3.5" stroke="#059669" strokeWidth="2" strokeLinecap="round"/></svg></div>
          <p className="mt-4 font-semibold text-gray-900">Audit gratuit (15 min)</p>
          <p className="mt-2 text-sm text-gray-600">On analyse votre visibilité locale, site et parcours RDV pour prioriser les gains rapides.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.45 }} className="rounded-3xl border bg-white/80 backdrop-blur p-6 shadow-sm">
          <div className="h-10 w-10 rounded-full bg-emerald-600/10 flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#059669" strokeWidth="2"/><path d="M8 9h8M8 13h5" stroke="#059669" strokeWidth="2" strokeLinecap="round"/></svg></div>
          <p className="mt-4 font-semibold text-gray-900">Plan d’action</p>
          <p className="mt-2 text-sm text-gray-600">Roadmap simple: site premium, SEO local, RDV en ligne et rappels automatisés.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.45 }} className="rounded-3xl border bg-white/80 backdrop-blur p-6 shadow-sm">
          <div className="h-10 w-10 rounded-full bg-emerald-600/10 flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 12h14" stroke="#059669" strokeWidth="2" strokeLinecap="round"/><path d="M12 5v14" stroke="#059669" strokeWidth="2" strokeLinecap="round"/></svg></div>
          <p className="mt-4 font-semibold text-gray-900">Production (7–14 j)</p>
          <p className="mt-2 text-sm text-gray-600">Déploiement rapide, tracking des conversions et mise en ligne contrôlée.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.45 }} className="rounded-3xl border bg-white/80 backdrop-blur p-6 shadow-sm">
          <div className="h-10 w-10 rounded-full bg-emerald-600/10 flex items-center justify-center"><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 17l5-5 4 4 6-7" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 20h18" stroke="#059669" strokeWidth="2" strokeLinecap="round"/></svg></div>
          <p className="mt-4 font-semibold text-gray-900">Suivi mensuel</p>
          <p className="mt-2 text-sm text-gray-600">Rapports clairs, optimisations SEO/Ads, automatisations et objectifs patients.</p>
        </motion.div>
      </div>
      <div className="mt-10 flex justify-center">
        <a href="/#contact" className="inline-flex items-center rounded-full bg-emerald-600 px-8 py-4 text-white text-base font-semibold hover:bg-emerald-700">Démarrer l’audit</a>
      </div>
    </section>
  );
}
