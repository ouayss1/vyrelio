"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

type TabKey = "startup" | "established" | "dso";

type CaseItem = {
  id: number;
  title: string;
  segment: TabKey;
  metrics: string[];
  thumb: string;
  problem: string;
  plan: string[];
  result: string;
  chiffres: string[];
  chiffres2: string[];
  chiffres3: string[];
};

const CASES: CaseItem[] = [
  {
    id: 1,
    title: "Courtine",
    segment: "startup",
    metrics: ["12 nouveaux patients/mois", "28€ CPL", "2x collections"],
    thumb: "/edc-courtine.webp",
    problem:
      "Agenda irrégulier, appels saturés, manque de visibilité locale et d’avis Google.",
    plan: [
      "Nouveau site premium optimisé SEO local",
      "Prise de rendez‑vous et rappels automatiques",
      "Collecte d’avis Google automatisée",
      "Dashboard pour suivre les performances",
    ],
    result:
      "Agenda rempli progressivement, flux d’appels mieux réparti et no‑show en baisse.",
    chiffres: ["-30%"],
    chiffres2: ["10h"],
    chiffres3: ["Top 3"],

  },
  {
    id: 2,
    title: "Glow Dent",
    segment: "established",
    metrics: ["+68% trafic", "+34% RDV"],
    thumb: "/edc-glowdent.webp",
    problem:
      "Trafic organique en stagnation, pages actes peu visibles localement, conversions mal suivies.",
    plan: [
      "Audit SEO et mise en place d’un tracking fiable",
      "Création/optimisation des pages Implants et Aligneurs",
      "Optimisation de la fiche Google Business Profile",
      "Amélioration du contenu et maillage interne",
    ],
    result:
      "Trafic qualifié en hausse et plus de RDV en ligne depuis les pages actes.",
    chiffres: ["-28%"],
    chiffres2: ["6h"],
    chiffres3: ["4.8/5"],
  },
  {
    id: 3,
    title: "Dentora",
    segment: "dso",
    metrics: ["+43 avis", "4.9/5"],
    thumb: "/edc-dentora.webp",
    problem:
      "Peu d’avis récents et disparités entre cliniques, freinant la confiance.",
    plan: [
      "Automatisation des demandes d’avis post‑RDV",
      "Widget d’affichage des avis sur le site",
      "Formation des équipes et réponse systématique",
      "Pilotage centralisé via dashboard",
    ],
    result:
      "Volume et note moyenne en hausse, réputation et visibilité locale renforcées.",
    chiffres: ["-21%"],
    chiffres2: ["9h"],
    chiffres3: ["+19"],
  },
  {
    id: 4,
    title: "Éclat dentaire",
    segment: "established",
    metrics: ["24 sites", "0.8s LCP"],
    thumb: "/edc-ed.webp",
    problem:
      "Réseau de 24 sites hétérogènes, coûts de maintenance élevés et performance insuffisante.",
    plan: [
      "Design system multi‑clinique unifié",
      "Refonte des gabarits et déploiement en série",
      "Optimisation Core Web Vitals (LCP, CLS)",
      "Automatisations RDV et suivi",
    ],
    result:
      "Cohérence de marque, sites plus rapides et meilleurs taux de conversion.",
    chiffres: ["-24%"],
    chiffres2: ["11h"],
    chiffres3: ["4.6/5"],
  },
];

export function CaseGallery() {
  const [tab, setTab] = useState<TabKey>("startup");
  const [active, setActive] = useState<CaseItem | null>(CASES.find(c => c.segment === "startup") || null);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const [dragging, setDragging] = useState(false);

  return (
    <section id="cases" className="mx-auto max-w-7xl px-4 py-20">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Études de cas</h2>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-1 rounded-full bg-emerald-50 p-1">
          {([
            ["startup", "Nouveau cabinet"],
            ["established", "Établi"],
            ["dso", "DSO"],
          ] as [TabKey, string][]).map(([key, label]) => (
            <button
              key={key}
              onClick={() => { setTab(key); const first = CASES.find(c => c.segment === key); setActive(first || null); }}
              className={`px-2 py-2 rounded-full text-sm font-medium ${
                tab === key ? "bg-white text-emerald-700 shadow" : "text-gray-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <Link href="/#contact" className="inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium hover:bg-gray-50">Audit gratuit</Link>
      </div>

      {/* Carte active + résumé condensé */}
      {active && (
        <div className="mt-8 grid gap-8 md:grid-cols-[420px_1fr]">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">{active.title}</h3>
              {active.title === "Courtine" && (
                <p className="mt-1 text-xs text-gray-500">Mesuré sur 1 ans.</p>
              )}
              {active.title === "Glow Dent" && (
                <p className="mt-1 text-xs text-gray-500">Mesuré sur 1 ans.</p>
              )}
              {active.title === "Dentora" && (
                <p className="mt-1 text-xs text-gray-500">Note vérifiée via Google Reviews.</p>
              )}
              {active.title === "Éclat dentaire" && (
                <p className="mt-1 text-xs text-gray-500">Chargement ultra‑rapide, +33% de conversions observées (RevenueWell 2024).</p>
              )}
            </div>

            {/* Résumé condensé inspiré de CondensedCase */}
            <div>
              <div className="space-y-3 text-gray-800">
                <p><span className="font-semibold">Problème</span> → {active.problem}</p>
                <div>
                  <p><span className="font-semibold">Plan d&#39;action vyrelio</span></p>
                  <ul className="list-disc pl-5">
                    {active.plan.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ul>
                </div>
                <p><span className="font-semibold">Résultat</span> → {active.result}</p>
              </div>
              <div className="mt-4 flex gap-2">
                <div className="rounded-xl border bg-white px-4 py-1"><p className="text-2xl font-extrabold text-emerald-700">{active.chiffres}</p><p className="text-xs text-gray-600">no‑show</p></div>
                <div className="rounded-xl border bg-white px-4 py-1"><p className="text-2xl font-extrabold text-emerald-700">{active.chiffres2}</p><p className="text-xs text-gray-600">gagner par semaine</p></div>
                <div className="rounded-xl border bg-white px-4 py-1"><p className="text-2xl font-extrabold text-emerald-700">{active.chiffres3}</p><p className="text-xs text-gray-600">patients Maps</p></div>
              </div>
              <div className="mt-4">
                <Link href="/#contact" className="inline-flex items-center rounded-full border px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">Avoir mon site vyrelio</Link>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden border">
            <Image src={active.thumb} alt={active.title} width={1280} height={720} className="w-full h-auto object-cover" sizes="(min-width: 768px) 60vw, 100vw" />

            {/* Badges de métriques dynamiques */}
            <div className="absolute left-4 top-4 flex flex-col gap-2">
              {active.metrics.slice(0,3).map((m) => (
                <motion.div key={m} initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="rounded-lg bg-white/95 border shadow-sm px-3 py-2 text-sm text-gray-700">
                  {m}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Carrousel amélioré */}
      <div className="mt-10 relative">
        {/* Gradients de bord pour signaler le scroll */}
        <div className="hidden md:block pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent"></div>
        <div className="hidden md:block pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent"></div>

        {/* Piste défilante */}
        <div
          ref={trackRef}
          onWheel={(e) => {
            const el = trackRef.current;
            if (!el) return;
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
              e.preventDefault();
              el.scrollBy({ left: e.deltaY, behavior: "smooth" });
            }
          }}
          onMouseDown={(e) => {
            const el = trackRef.current;
            if (!el) return;
            dragRef.current = { active: true, startX: e.clientX, scrollLeft: el.scrollLeft };
            setDragging(true);
          }}
          onMouseUp={() => {
            dragRef.current.active = false;
            setDragging(false);
          }}
          onMouseLeave={() => {
            dragRef.current.active = false;
            setDragging(false);
          }}
          onMouseMove={(e) => {
            const el = trackRef.current;
            if (!el || !dragRef.current.active) return;
            e.preventDefault();
            const walk = e.clientX - dragRef.current.startX;
            el.scrollLeft = dragRef.current.scrollLeft - walk;
          }}
          className={`overflow-x-auto scroll-smooth snap-x snap-mandatory ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
        >
          <div className="flex gap-6 w-max pr-8">
            {CASES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c)}
                className={`text-left rounded-xl border overflow-hidden hover:ring-2 hover:ring-emerald-500 transition-transform duration-200 hover:-translate-y-1 hover:shadow ${active?.id === c.id ? "ring-2 ring-emerald-600" : ""} min-w-[300px] md:min-w-[360px] w-[300px] md:w-[360px] flex-shrink-0 snap-start`}
              >
                <Image src={c.thumb} alt={c.title} width={640} height={360} className="w-full h-auto object-cover" sizes="(min-width: 768px) 360px, 300px" />
                <div className="p-4">
                  <p className="font-medium text-gray-900">{c.title}</p>
                  <p className="text-sm text-gray-600">{c.metrics.join(" • ")}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Boutons overlay pour naviguer */}
        <div className="hidden md:flex pointer-events-none absolute inset-y-0 left-0 right-0 items-center justify-between px-2">
          <button
            aria-label="Précédent"
            onClick={() => trackRef.current?.scrollBy({ left: -360, behavior: "smooth" })}
            className="pointer-events-auto rounded-full bg-white/90 border shadow p-2 hover:bg-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button
            aria-label="Suivant"
            onClick={() => trackRef.current?.scrollBy({ left: 360, behavior: "smooth" })}
            className="pointer-events-auto rounded-full bg-white/90 border shadow p-2 hover:bg-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
      <p className="mt-8 text-[11px] text-gray-500 text-center">Sources : études sectorielles (Dental Economics, RevenueWell, Jarvis Analytics) et cas clients Vyrelio (données agrégées).</p>
    </section>
  );
}
