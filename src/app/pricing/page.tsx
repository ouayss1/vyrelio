import type { Metadata } from "next";
import { CALENDLY_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tarifs | Agence marketing dentaire",
  description:
    "Tarifs Vyrelio: site performant, SEO local, automatisations et acquisition patients pour cabinets dentaires.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Tarifs | Agence marketing dentaire",
    description:
      "Tarifs Vyrelio: site performant, SEO local, automatisations et acquisition patients pour cabinets dentaires.",
    type: "website",
    url: "https://www.vyrelio.fr/pricing",
  },
};
export default function PricingPage() {
	return (
		<div className="min-h-screen">
			<section className="mx-auto max-w-7xl px-4 py-16">
				<div className="text-center max-w-3xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Tarifs clairs et transparents</h1>
					<p className="mt-4 text-gray-600">Offre principale en paiement unique. Upsells disponibles en abonnement mensuel.</p>
				</div>

				{/* Main one-time offer */}
				<div className="mt-12 grid lg:grid-cols-3 gap-6 items-stretch">
					<div className="lg:col-span-2 rounded-3xl border bg-white p-8 shadow-sm">
						<p className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-xs font-semibold">Offre principale</p>
						<h2 className="mt-3 text-3xl font-extrabold text-gray-900">Site haute performance + Mise en place acquisition</h2>
						<p className="mt-3 text-gray-700">Conception sur‑mesure, SEO local, suivi conversions, tracking appels, pages actes et formation équipe.</p>
						<p className="mt-6 text-2xl font-extrabold text-gray-900">2 500€ — 6 000€</p>
						<p className="text-sm text-gray-600">Selon taille du projet, nombre de pages et options graphiques.</p>
						<div className="mt-6">
							<a href={CALENDLY_URL} className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700">Obtenir mon devis gratuit</a>
						</div>
						<ul className="mt-8 grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
							<li>• Design system moderne (shadcn/ui)</li>
							<li>• Optimisation vitesse (Core Web Vitals)</li>
							<li>• SEO local + Google Business Profile</li>
							<li>• Intégration rdv / formulaires / tracking</li>
						</ul>
					</div>

					{/* Upsells */}
					<div className="rounded-3xl border bg-gradient-to-b from-emerald-50 to-white p-8">
						<p className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-xs font-semibold">Upsells (abonnements)</p>
						<h3 className="mt-3 text-2xl font-extrabold text-gray-900">Choisissez vos accélérateurs</h3>
						<div className="mt-5 space-y-4">
							<div className="rounded-2xl border bg-white p-4">
								<p className="font-semibold text-gray-900">Automatisations du cabinet</p>
								<p className="text-sm text-gray-600">Workflows rappels/relances, validation humaine optionnelle.</p>
								<p className="mt-2 text-emerald-700 font-semibold">à partir de 199€/mois</p>
							</div>
							<div className="rounded-2xl border bg-white p-4">
								<p className="font-semibold text-gray-900">Acquisition continue</p>
								<p className="text-sm text-gray-600">SEO, campagnes locales, création contenus mensuels.</p>
								<p className="mt-2 text-emerald-700 font-semibold">à partir de 490€/mois</p>
							</div>
							<div className="rounded-2xl border bg-white p-4">
								<p className="font-semibold text-gray-900">IA Réceptionniste (appels)</p>
								<p className="text-sm text-gray-600">Agent vocal 24/7 connecté à votre agenda.</p>
								<p className="mt-2 text-emerald-700 font-semibold">à partir de 149€/mois</p>
							</div>
						</div>
						<div className="mt-6">
							<a href={CALENDLY_URL} className="inline-flex items-center rounded-full border px-6 py-3 font-semibold hover:bg-gray-50">Parler à un expert</a>
						</div>
					</div>
				</div>
			</section>

			{/* Upsell tiers like cards */}
			<section className="mx-auto max-w-7xl px-4 pb-8">
				<h2 className="text-3xl font-extrabold text-gray-900 text-center">Upsells en abonnement</h2>
				<p className="text-gray-600 text-center mt-2">Choisissez un plan selon vos objectifs. Annulez à tout moment.</p>

				<div className="mt-8 grid gap-6 lg:grid-cols-4">
					{/* Starter */}
					<div className="rounded-3xl border bg-white p-6 shadow-sm flex flex-col">
						<p className="text-center font-semibold">Starter</p>
						<p className="mt-2 text-center text-3xl font-extrabold">79€/mo</p>
						<div className="mt-4 space-y-2 text-sm text-gray-700 flex-1">
							<p>✓ Avis automatisés</p>
							<p>✓ Dashboard basique</p>
							<p>✓ Support e‑mail</p>
						</div>
						<a href={CALENDLY_URL} className="mt-6 inline-flex items-center justify-center rounded-full border px-5 py-3 font-semibold hover:bg-gray-50">Demander une démo</a>
					</div>

					{/* Elevate */}
					<div className="rounded-3xl border bg-white p-6 shadow-sm flex flex-col">
						<p className="text-center font-semibold">Elevate</p>
						<p className="mt-2 text-center text-3xl font-extrabold">149€/mo</p>
						<div className="mt-4 space-y-2 text-sm text-gray-700 flex-1">
							<p>✓ Automatisations rappels/confirmations</p>
							<p>✓ Suivi ROI appels & formulaires</p>
							<p>✓ Création 1 contenu/mois</p>
						</div>
						<a href={CALENDLY_URL} className="mt-6 inline-flex items-center justify-center rounded-full border px-5 py-3 font-semibold hover:bg-gray-50">Demander une démo</a>
					</div>

					{/* Populaire */}
					<div className="relative rounded-3xl border bg-gradient-to-b from-emerald-600 to-emerald-700 p-6 text-white shadow-lg flex flex-col">
						<span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white text-emerald-700 text-xs font-bold px-3 py-1 shadow">Populaire</span>
						<p className="text-center font-semibold">Captivate</p>
						<p className="mt-2 text-center text-3xl font-extrabold">249€/mo</p>
						<div className="mt-4 space-y-2 text-sm text-white/90 flex-1">
							<p>✓ Automatisations avancées (relances, devis, post‑op)</p>
							<p>✓ Reporting ROI & objectifs</p>
							<p>✓ 2 contenus/mois + optimisation SEO</p>
						</div>
						<a href={CALENDLY_URL} className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-5 py-3 font-semibold text-emerald-700 hover:bg-emerald-50">Demander une démo</a>
					</div>

					{/* Influence */}
					<div className="rounded-3xl border bg-white p-6 shadow-sm flex flex-col">
						<p className="text-center font-semibold">Influence</p>
						<p className="mt-2 text-center text-3xl font-extrabold">390€/mo</p>
						<div className="mt-4 space-y-2 text-sm text-gray-700 flex-1">
							<p>✓ IA Réceptionniste 24/7</p>
							<p>✓ Gestion avis & e‑réputation</p>
							<p>✓ Priorité support & succès client</p>
						</div>
						<a href={CALENDLY_URL} className="mt-6 inline-flex items-center justify-center rounded-full border px-5 py-3 font-semibold hover:bg-gray-50">Demander une démo</a>
					</div>
				</div>

				{/* Included section */}
				<div className="mt-16 rounded-3xl border bg-white p-8">
					<p className="font-semibold text-gray-900">Inclus avec tous les plans</p>
					<div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-700">
						<p>• Accès au tableau de bord</p>
						<p>• Intégration Google Analytics & Ads</p>
						<p>• RGPD & hébergement européen</p>
						<p>• Support e‑mail/chat</p>
					</div>
				</div>
			</section>

			{/* Pricing FAQ */}
			<section className="mx-auto max-w-7xl px-4 pb-20">
				<h3 className="text-2xl font-extrabold text-gray-900">FAQ Tarifs</h3>
				<div className="mt-6 divide-y rounded-2xl border bg-white">
					<details className="px-6 py-5">
						<summary className="cursor-pointer font-medium text-gray-900">Puis‑je changer de plan d’abonnement ?</summary>
						<p className="mt-3 text-sm text-gray-600">Oui, vous pouvez monter/descendre de plan ou annuler à tout moment. La facturation s’ajuste au prorata.</p>
					</details>
					<details className="px-6 py-5">
						<summary className="cursor-pointer font-medium text-gray-900">Le paiement unique couvre quoi ?</summary>
						<p className="mt-3 text-sm text-gray-600">Conception du site, mise en place des fondations marketing et du tracking, livrables et formation.</p>
					</details>
				</div>
			</section>
		</div>
	);
}


