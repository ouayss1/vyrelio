import Image from "next/image";

export function Reputation() {
	return (
		<section className="mx-auto max-w-7xl px-4 py-20">
			<div className="grid md:grid-cols-2 gap-10 items-center">
				<div>
					<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
						Boostez votre e‑réputation (★★★★★ sur Google)
					</h2>
					<p className="mt-4 text-gray-600">
						Demande d’avis automatique après rendez‑vous, suivi des réponses et
						relances intelligentes. Filtrage des retours négatifs vers l’équipe pour
						traitement rapide.
					</p>
					<p className="mt-2 text-sm text-gray-700">Les cabinets les mieux notés obtiennent 35 % de patients supplémentaires (Dental Economics 2024).</p>
					<ul className="mt-6 text-gray-700 space-y-2">
						<li>• Liens directs SMS/WhatsApp/e‑mail</li>
						<li>• Widget d’avis sur votre site</li>
						<li>• Dashboard des notes et mots‑clés</li>
					</ul>
				</div>
				<div className="rounded-3xl border p-6 bg-white">
					<div className="flex items-center gap-2">
						<Image src="/google.svg" alt="Google" width={28} height={28} />
						<p className="text-2xl font-extrabold text-emerald-700">4.9 / 5</p>
					</div>
					<div className="mt-3 flex gap-1 text-amber-400 text-2xl">★★★★★</div>
					<p className="mt-2 text-sm text-gray-600">Basé sur 320 avis vérifiés</p>
				</div>
			</div>
		</section>
	);
}


