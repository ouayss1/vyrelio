import { StatInsight } from "@/components/stat-insight";
import Link from "next/link";
export function Automation() {
	return (
		<section className="relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white" />
			<div className="relative mx-auto max-w-7xl px-4 py-24">
				<div className="text-center max-w-3xl mx-auto">
					<span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-xs font-semibold">Upsell clé Vyrelio</span>
					<h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
						Automatisations intelligentes pour votre cabinet
					</h2>
					<p className="mt-4 text-lg text-gray-700">
						Réduisez les tâches chronophages et augmentez vos RDV: rappels, relances,
						messages post‑op, rapports et plus — avec ou sans validation humaine.
					</p>
				</div>

				{/* Benefit stats insight */}
				<div className="mt-8 max-w-3xl mx-auto">
					<StatInsight
						title="Chiffres de bénéfice"
						text="Les rappels automatiques réduisent les absences de 78 % et libèrent 10 h/semaine."
						source="Source : Jarvis Analytics 2024"
						sourceHref="https://www.jarvisanalytics.com/"
						variant="dark"
					/>
				</div>

				{/* Synthesis badge above the 3 cards */}
				<div className="mt-6 flex justify-center">
					<span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-xs font-semibold">
						Les rappels automatiques réduisent les absences de 78 % et libèrent 10 h/semaine (Jarvis Analytics 2024)
					</span>
				</div>

				<div className="mt-12 grid lg:grid-cols-3 gap-6">
          {/* Feature card */}
          <div className="rounded-3xl border bg-white/80 backdrop-blur p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <div className="h-10 w-10 rounded-full bg-emerald-600/10 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h18M3 18h10" stroke="#059669" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <p className="mt-4 font-semibold text-gray-900">Rappels & confirmations</p>
            <p className="mt-2 text-sm text-gray-600">SMS/e‑mail/WhatsApp avec liens de replanification; no‑show ↓.</p>
          </div>

          <div className="rounded-3xl border bg-white/80 backdrop-blur p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <div className="h-10 w-10 rounded-full bg-emerald-600/10 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M20 12a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z" stroke="#059669" strokeWidth="2"/><path d="M12 6v6l3 3" stroke="#059669" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <p className="mt-4 font-semibold text-gray-900">Relances & devis</p>
            <p className="mt-2 text-sm text-gray-600">Suivi devis non acceptés, impayés, rappels d’hygiène avec scripts.</p>
          </div>

          <div className="rounded-3xl border bg-white/80 backdrop-blur p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
            <div className="h-10 w-10 rounded-full bg-emerald-600/10 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5v14" stroke="#059669" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <p className="mt-4 font-semibold text-gray-900">Validation humaine (optionnel)</p>
            <p className="mt-2 text-sm text-gray-600">Activez un “OK pour envoyer” avant diffusion ou laissez l’IA gérer seule.</p>
          </div>
        </div>

				{/* Comparison band */}
				<div className="mt-12 grid md:grid-cols-2 gap-6">
					<div className="rounded-3xl border p-6 bg-white">
						<p className="text-sm font-semibold text-gray-900">Avant</p>
						<ul className="mt-3 text-sm text-gray-600 list-disc pl-5">
							<li>Saisie manuelle des rappels et relances</li>
							<li>Suivi des devis dispersé, peu de relances</li>
							<li>Temps perdu et erreurs humaines</li>
						</ul>
					</div>
					<div className="rounded-3xl border p-6 bg-emerald-600 text-white">
						<p className="text-sm font-semibold">Après Vyrelio Automations</p>
						<ul className="mt-3 text-sm text-white/90 list-disc pl-5">
							<li>Workflows prêts à l’emploi et personnalisables</li>
							<li>+RDV, +acceptation, no‑show ↓, impayés ↓</li>
							<li>Tableau de bord et logs détaillés</li>
						</ul>
					</div>
				</div>

				<div className="mt-10 flex justify-center">
					<Link href="/#contact" className="inline-flex items-center rounded-full bg-emerald-600 px-8 py-4 text-white text-base font-semibold hover:bg-emerald-700">
						Activer les automatisations
					</Link>
				</div>
			</div>
		</section>
	);
}


