import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Vyrelio",
  alternates: { canonical: "/mentions-legales" },
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">Mentions légales</h1>

      <section className="mt-8 space-y-2 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">Éditeur du site</h2>
        <p>Nom / Raison sociale : Zerfaoui Yahya</p>
        <p>Forme juridique : Micro‑entreprise</p>
        <p>SIREN / SIRET : en cours d’immatriculation</p>
        <p>Adresse du siège : Rue Jean Prévost, France</p>
        <p>Contact : contact@vyrelio.fr</p>
      </section>

      <section className="mt-8 space-y-2 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">Responsable de la publication</h2>
        <p>Zerfaoui Yahya</p>
      </section>

      <section className="mt-8 space-y-2 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">Hébergement et nom de domaine</h2>
        <p>Hébergeur : Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États‑Unis – https://vercel.com</p>
        <p>Registrar du nom de domaine : OVHcloud SAS, 2 rue Kellermann, 59100 Roubaix, France – Tél. +33 9 72 10 10 07 – https://www.ovhcloud.com</p>
      </section>

      <section className="mt-8 space-y-2 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">Propriété intellectuelle</h2>
        <p>Le contenu du site (textes, visuels, marques, logos, etc.) est protégé par le droit de la propriété intellectuelle. Toute reproduction ou représentation non autorisée est interdite.</p>
      </section>

      <section className="mt-8 space-y-2 text-gray-700">
        <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
        <p>Pour toute question, vous pouvez écrire à : contact@vyrelio.fr</p>
      </section>

      <p className="mt-10 text-sm text-gray-500">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p>
    </main>
  );
}
