import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données personnelles (RGPD)",
  alternates: { canonical: "/politique-de-confidentialite" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Politique de confidentialité</h1>

      <section className="mt-8 space-y-2 text-gray-700">
        <p>La présente politique décrit la manière dont Vyrelio traite vos données personnelles conformément au RGPD.</p>
      </section>

      <section className="mt-8 space-y-2 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">Responsable de traitement</h2>
        <p>Zerfaoui Yahya – Micro‑entreprise</p>
        <p>Adresse : Rue Jean Prévost, France</p>
        <p>Contact : contact@vyrelio.fr</p>
      </section>

      <section className="mt-8 space-y-2 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">Données collectées</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Données d’identification et de contact lorsque vous nous écrivez ou réservez un rendez‑vous (nom, e‑mail, téléphone, message).</li>
          <li>Données de rendez‑vous via Calendly lorsque vous utilisez le module d’agenda.</li>
          <li>Données techniques et cookies strictement nécessaires au fonctionnement du site.</li>
          <li>Cookies marketing liés à l’intégration Calendly uniquement si vous donnez votre consentement.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-2 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">Finalités et bases légales</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Répondre à vos demandes et fournir nos services (mesures précontractuelles/contrat).</li>
          <li>Prise de rendez‑vous et suivi des échanges (intérêt légitime et/ou contrat).</li>
          <li>Prospection et communication avec votre accord lorsque requis (consentement).</li>
          <li>Amélioration du site et sécurité (intérêt légitime).</li>
        </ul>
      </section>

      <section className="mt-8 space-y-2 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">Durées de conservation</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Prospects: jusqu’à 3 ans après le dernier contact.</li>
          <li>Clients: pendant la relation contractuelle puis 5 ans maximum.</li>
          <li>Données de rendez‑vous: selon la politique de Calendly.</li>
          <li>Cookies: selon leur durée de vie, voir <Link className="text-emerald-700 underline" href="/politique-de-cookies">Politique de cookies</Link>.</li>
        </ul>
      </section>

      <section className="mt-8 space-y-2 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">Destinataires</h2>
        <p>Accès limité aux équipes internes et à nos prestataires techniques:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Hébergement: Vercel Inc. (USA)</li>
          <li>Registrar: OVHcloud (France)</li>
          <li>Prise de rendez‑vous: Calendly LLC (USA)</li>
        </ul>
      </section>

      <section className="mt-8 space-y-2 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">Transferts hors UE</h2>
        <p>Certains prestataires situés aux États‑Unis peuvent impliquer un transfert de données. Des garanties appropriées sont mises en place (clauses contractuelles types de la Commission européenne, mesures de sécurité).</p>
      </section>

      <section className="mt-8 space-y-2 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">Vos droits</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Droit d’accès, rectification, effacement, limitation, opposition et portabilité.</li>
          <li>Retrait du consentement à tout moment pour les traitements fondés sur le consentement.</li>
          <li>Réclamation auprès de la CNIL: <a className="text-emerald-700 underline" href="https://www.cnil.fr/">cnil.fr</a>.</li>
        </ul>
        <p>Pour exercer vos droits: contact@vyrelio.fr.</p>
      </section>

      <p className="mt-10 text-sm text-gray-500">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>
    </main>
  );
}
