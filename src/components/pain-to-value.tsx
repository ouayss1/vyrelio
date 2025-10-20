import { StatInsight } from "@/components/stat-insight";

export function PainToValue() {
	return (
		<section className="mx-auto max-w-7xl px-4 py-16">
			<div className="grid gap-6 md:grid-cols-3">
				<div className="rounded-2xl border bg-white p-6">
					<p className="text-sm text-gray-500">Agenda inégal</p>
					<p className="mt-2 text-lg font-semibold text-gray-900">Remplissage prévisible</p>
					<p className="mt-2 text-sm text-gray-600">Flux constant de patients via SEO local + pages actes + suivi conversions.</p>
				</div>
				<div className="rounded-2xl border bg-white p-6">
					<p className="text-sm text-gray-500">Appels qui saturent le secrétariat</p>
					<p className="mt-2 text-lg font-semibold text-gray-900">Prise de RDV en ligne + rappels SMS</p>
					<p className="mt-2 text-sm text-gray-600">Formulaires, créneaux, confirmation, rappels et replanification automatisés.</p>
				</div>
				<div className="rounded-2xl border bg-white p-6">
					<p className="text-sm text-gray-500">Site lent et invisible</p>
					<p className="mt-2 text-lg font-semibold text-gray-900">Core Web Vitals &gt; 90 + Top 3 GMB</p>
					<p className="mt-2 text-sm text-gray-600">Next.js, Tailwind, optimisation mobile et fiche Google Business soignée.</p>
				</div>
			</div>

			<div className="mt-6 max-w-3xl">
				<StatInsight
					title="Chiffres de pertes"
					text="Un rendez‑vous manqué par jour coûte jusqu’à 70 000 $/an à un cabinet."
					source="Source : Dental Economics"
					sourceHref="https://www.dentaleconomics.com/"
					variant="dark"
				/>
			</div>
			<div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
				<span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 font-medium">–30 % no‑show</span>
				<span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 font-medium">+40 % appels qualifiés</span>
				<span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 font-medium">+20 % patients Google Maps</span>
			</div>
		</section>
	);
}
