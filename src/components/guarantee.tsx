"use client";

import { motion } from "framer-motion";
import { CALENDLY_URL } from "@/lib/utils";

export function Guarantee() {
  return (
    <section id="Guarantee" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white" />
      <div className="relative mx-auto max-w-7xl px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-xs font-semibold">Engagement Vyrelio</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Garanties pour avancer sereinement</h2>
          <p className="mt-3 text-gray-600">Nous assumons le risque pour vous permettre de décider sans stress.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
            className="rounded-3xl border bg-white/90 backdrop-blur p-6 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-emerald-600/10 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4Z" stroke="#059669" strokeWidth="2"/><path d="M9.5 12l2 2 3.5-4" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900">« Satisfait ou refait » 30 jours</p>
                <p className="mt-1 text-sm text-gray-600">Si le site livré ne correspond pas à nos standards (vitesse, UX, contenu), nous corrigeons gratuitement sous 30 jours.</p>
                <ul className="mt-3 text-sm text-gray-700 list-disc pl-5">
                  <li>Core Web Vitals élevés</li>
                  <li>Parcours RDV fluide</li>
                  <li>Pages clés finalisées (actes, avis, contact)</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="rounded-3xl border bg-white/90 backdrop-blur p-6 shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-emerald-600/10 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="7" stroke="#059669" strokeWidth="2"/><path d="M12 12l4-2" stroke="#059669" strokeWidth="2" strokeLinecap="round"/><path d="M12 5v2M5 12h2M12 19v-2M19 12h-2" stroke="#059669" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-900">« Objectif patients » sinon mois offert</p>
                <p className="mt-1 text-sm text-gray-600">Si la cible définie ensemble n’est pas atteinte, nous offrons un mois d’accompagnement pour corriger la trajectoire.</p>
                <ul className="mt-3 text-sm text-gray-700 list-disc pl-5">
                  <li>Objectifs clairs et mesurables</li>
                  <li>Suivi conversions et appels</li>
                  <li>Optimisations SEO/Ads incluses</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-6 text-xs text-gray-600 text-center max-w-3xl mx-auto">
          <p>
            Transparence : les performances dépendent du marché local, de la saisonnalité, des avis et de la
            disponibilité de l’équipe. Les objectifs sont définis ensemble et réévalués chaque mois.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2 text-gray-800">
            <span className="text-amber-500 text-xl leading-none">★★★★★</span>
            <span className="text-sm">4,9/5 basé sur des avis vérifiés</span>
          </div>
          <span className="h-4 w-px bg-gray-200 hidden sm:inline-block" />
          <div className="flex items-center gap-3 text-xs text-gray-700">
            <span className="inline-flex items-center rounded-full border px-3 py-1 bg-white">RGPD</span>
            <span className="inline-flex items-center rounded-full border px-3 py-1 bg-white">Hébergement France/UE</span>
            <span className="inline-flex items-center rounded-full border px-3 py-1 bg-white">HTTPS / SSL</span>
          </div>
        </div>

        <p className="mt-6 text-xs text-gray-500 text-center max-w-3xl mx-auto">Garantie applicable aux projets réalisés par Vyrelio, hors modifications majeures du périmètre initial, hors budgets médias. Objectifs définis lors du plan d’action et suivis via nos dashboards.</p>

        <div className="mt-8 flex justify-center gap-3">
          <a href={CALENDLY_URL} className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-white text-sm font-semibold hover:bg-emerald-700">Activer ma garantie</a>
          <a href="#faq" className="inline-flex items-center rounded-full border px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">Voir les conditions</a>
        </div>
      </div>
    </section>
  );
}
