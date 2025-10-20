"use client";

import { useEffect, useState } from "react";

export default function NousRejoindre() {
  const [copied, setCopied] = useState(false);
  const [referralLink, setReferralLink] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(window.location.origin);
      url.searchParams.set("via", "votre-prenom");
      setReferralLink(url.toString());
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const mailReferral = `mailto:?subject=Referral%20Vyrelio&body=Je%20souhaite%20parrainer%20un%20cabinet.%20Coordonn%C3%A9es%20:%0A-%20Nom%20:%0A-%20Email%20:%0A-%20T%C3%A9l%C3%A9phone%20:%0A-%20Ville%20:%0A-%20Sp%C3%A9cialit%C3%A9%20:%0A%0ALien%20utile%20:%20${encodeURIComponent(referralLink)}`;

  const mailApply = (role: string) =>
    `mailto:?subject=Candidature%20${encodeURIComponent(role)}%20-%20Vyrelio&body=Bonjour%20Vyrelio,%0A%0AJe%20souhaite%20candidater%20au%20poste%20:${encodeURIComponent(
      role
    )}.%0A%0AProfil%20:%20%0A- Exp%C3%A9riences%20:%0A- Jour%20disponibles%20:%0A- TJM/Commission%20:%0A%0ALiens%20:%20Portfolio%2FLinkedIn%2FDrive%20...`;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-emerald-50/60">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Nous rejoindre & Parrainage
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Faites grandir des cabinets de santé avec nous. Full remote, sans
              horaires imposés, et rémunération à la performance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={mailReferral}
                className="inline-flex items-center rounded-full border px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-white bg-white"
              >
                Parrainer un cabinet
              </a>
              <a
                href={mailApply("Candidature Spontanée")}
                className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700"
              >
                Candidater (freelance)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Referral */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
              Programme de parrainage
            </h2>
            <p className="mt-3 text-gray-700">
              Si vous nous présentez un cabinet qui signe avec Vyrelio, vous
              touchez un pourcentage sur la collaboration. Simple, transparent,
              gagnant-gagnant.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border bg-white p-5">
                <p className="text-sm font-semibold text-emerald-700">Étape 1</p>
                <p className="mt-1 text-gray-800">Mise en relation / envoi du lead</p>
              </div>
              <div className="rounded-xl border bg-white p-5">
                <p className="text-sm font-semibold text-emerald-700">Étape 2</p>
                <p className="mt-1 text-gray-800">On audite, on close, on démarre</p>
              </div>
              <div className="rounded-xl border bg-white p-5">
                <p className="text-sm font-semibold text-emerald-700">Étape 3</p>
                <p className="mt-1 text-gray-800">Vous recevez votre pourcentage</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={handleCopy}
                className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700"
              >
                {copied ? "Lien copié !" : "Copier mon lien de parrainage"}
              </button>
              <a
                href={mailReferral}
                className="inline-flex items-center rounded-full border px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Envoyer un lead par email
              </a>
            </div>

            <p className="mt-3 text-xs text-gray-500">
              Le pourcentage dépend du type de mission et est confirmé à la
              signature.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">Ce que nous recherchons</h3>
            <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
              <li>Professionnalisme et sens client</li>
              <li>Culture performance et ownership</li>
              <li>Communication claire et asynchrone</li>
            </ul>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <div className="rounded-xl border p-4">
                <p className="text-sm text-gray-600">Type</p>
                <p className="font-semibold text-gray-900">Freelance / Mission</p>
              </div>
              <div className="rounded-xl border p-4">
                <p className="text-sm text-gray-600">Mode</p>
                <p className="font-semibold text-gray-900">Full remote</p>
              </div>
              <div className="rounded-xl border p-4">
                <p className="text-sm text-gray-600">Horaires</p>
                <p className="font-semibold text-gray-900">Flexibles (no time tracking)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rôles ouverts */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
            Rôles ouverts (freelance)
          </h2>
          <p className="mt-2 text-gray-700">
            Travail 100% à distance, sans engagement d’heures. Rémunération à la
            performance (commission / projet / primes).
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Closer (Sales)",
                points: [
                  "Qualification, démo, closing",
                  "Culture KPI & pipeline",
                  "Commission attractive",
                ],
              },
              {
                title: "Media Buyer (Paid)",
                points: [
                  "Google Ads / Meta / PMax",
                  "Tracking & ROAS",
                  "Scaling local + multi-cliniques",
                ],
              },
              {
                title: "SEO / Content", 
                points: [
                  "SEO local, sémantique médicale",
                  "Pages actes, EEAT",
                  "Process IA + édition humaine",
                ],
              },
              {
                title: "Dev Web (Next.js)",
                points: [
                  "UI réactive, performance",
                  "Design system multi-sites",
                  "Automations & intégrations",
                ],
              },
              {
                title: "Motion / Design",
                points: [
                  "Design premium, brand",
                  "Shorts, assets ads",
                  "Outils : Figma/AE/CapCut",
                ],
              },
              {
                title: "Ops / Automation",
                points: [
                  "Zaps, CRM, RDV, rappels",
                  "Dashboards & QA",
                  "Docs & process",
                ],
              },
            ].map((role) => (
              <div key={role.title} className="rounded-2xl border bg-white p-6 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{role.title}</h3>
                  <ul className="mt-3 space-y-2 text-gray-700 list-disc pl-5">
                    {role.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6">
                  <a
                    href={mailApply(role.title)}
                    className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700"
                  >
                    Candidater
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section>
        <div className="mx-auto max-w-7xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
            Ce que vous y gagnez
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border bg-white p-6">
              <p className="text-sm text-gray-600">Organisation</p>
              <p className="mt-1 text-gray-900 font-semibold">Full remote, asynchrone</p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <p className="text-sm text-gray-600">Temps</p>
              <p className="mt-1 text-gray-900 font-semibold">Pas d’horaires imposés</p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <p className="text-sm text-gray-600">Engagement</p>
              <p className="mt-1 text-gray-900 font-semibold">Pas d’engagement (freelance)</p>
            </div>
            <div className="rounded-2xl border bg-white p-6">
              <p className="text-sm text-gray-600">Rémunération</p>
              <p className="mt-1 text-gray-900 font-semibold">À la performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-emerald-50/60">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-extrabold text-gray-900">
                Prêt à nous recommander ou à collaborer ?
              </h3>
              <p className="mt-2 text-gray-700">
                On reste simples et efficaces : une intro et on s’occupe du reste.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={mailReferral}
                className="inline-flex items-center rounded-full border px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-white bg-white"
              >
                Parrainer un cabinet
              </a>
              <a
                href={mailApply("Candidature Spontanée")}
                className="inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700"
              >
                Candidater (freelance)
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
