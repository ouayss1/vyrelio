import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description: "Informations sur les cookies utilisés sur le site Vyrelio",
  alternates: { canonical: "/politique-de-cookies" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Politique de cookies</h1>

      <section className="mt-6 space-y-2 text-gray-700">
        <p>
          Ce site utilise des cookies et technologies similaires. Certains sont strictement nécessaires au fonctionnement du site, d'autres
          (marketing) sont utilisés uniquement avec votre consentement.
        </p>
      </section>

      <section className="mt-8 space-y-2 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">Catégories</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <span className="font-medium text-gray-900">Nécessaires</span> – indispensables pour fournir le site, la sécurité, la
            performance basique. Toujours actifs.
          </li>
          <li>
            <span className="font-medium text-gray-900">Marketing</span> – activent l'intégration Calendly pour la prise de rendez‑vous
            intégrée. Désactivés par défaut, activés uniquement si vous acceptez.
          </li>
        </ul>
      </section>

      <section className="mt-8 space-y-2 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">Tiers utilisés</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Hébergement: Vercel Inc. (ne dépose pas de cookies marketing pour l'affichage du site).</li>
          <li>Prise de rendez‑vous: Calendly LLC – l'intégration peut déposer des cookies marketing lors de l'affichage du widget.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-2 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">Durées de vie</h2>
        <p>
          Votre préférence de consentement est conservée jusqu'à 6 mois, puis il pourra vous être redemandé. Les cookies tiers ont leurs
          propres durées définies par les prestataires.
        </p>
      </section>

      <section className="mt-8 space-y-2 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">Gérer vos préférences</h2>
        <p>
          Vous pouvez modifier votre choix à tout moment en supprimant vos cookies dans votre navigateur ou en ré‑acceptant directement via
          le bandeau si celui‑ci réapparaît. Pour plus d'informations sur vos droits, consultez la
          {" "}
          <Link className="text-emerald-700 underline" href="/politique-de-confidentialite">
            Politique de confidentialité
          </Link>
          .
        </p>
      </section>

      <p className="mt-10 text-sm text-gray-500">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>
    </main>
  );
}
