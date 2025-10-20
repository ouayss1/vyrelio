export function ThreeSteps() {
	return (
		<section id="how" className="mx-auto max-w-7xl px-4 py-20">
			<div className="text-center max-w-3xl mx-auto">
				<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
					Développez votre cabinet sans effort avec la méthode Vyrelio
				</h2>
				<p className="mt-3 text-emerald-600 text-2xl font-semibold">Processus en 3 étapes</p>
				<p className="mt-4 text-gray-600">
					Vous êtes dentiste, pas marketeur. Notre approche est conçue pour attirer des
					patients à forte valeur, remplir votre agenda et augmenter le chiffre d’affaires.
				</p>
			</div>

			<div className="mt-10 grid gap-6 md:grid-cols-3">
				{/* Step 1 */}
				<div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
					<div className="bg-emerald-50 px-6 py-4 text-2xl font-bold text-emerald-700">1</div>
					<div className="px-6 py-6">
						<h3 className="font-semibold text-gray-900">Clarifier votre patient idéal</h3>
						<p className="mt-2 text-sm text-gray-600">
							Définition précise des actes prioritaires et des profils recherchés afin
							de concentrer le budget sur les patients qui acceptent, reviennent et
							recommandent.
						</p>
					</div>
				</div>

				{/* Step 2 */}
				<div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
					<div className="bg-emerald-50 px-6 py-4 text-2xl font-bold text-emerald-700">2</div>
					<div className="px-6 py-6">
						<h3 className="font-semibold text-gray-900">Lancer l’acquisition</h3>
						<p className="mt-2 text-sm text-gray-600">
							SEO local, campagnes Google & Meta, site ultra‑rapide et suivi
							conversion pour maximiser l’impact de chaque euro dépensé.
						</p>
					</div>
				</div>

				{/* Step 3 */}
				<div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
					<div className="bg-emerald-50 px-6 py-4 text-2xl font-bold text-emerald-700">3</div>
					<div className="px-6 py-6">
						<h3 className="font-semibold text-gray-900">Observer la production croître</h3>
						<p className="mt-2 text-sm text-gray-600">
							Plus d’acceptation des plans de traitement, agenda plein et revenus en
							progression, avec des automatisations adaptées à votre équipe.
						</p>
					</div>
				</div>
			</div>

			<div className="mt-10 flex justify-center">
				<a href="#how" className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-white text-sm font-semibold hover:bg-emerald-700">
					Découvrir notre approche
				</a>
			</div>
		</section>
	);
}


