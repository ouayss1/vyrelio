"use client";

import { useState } from "react";

type Item = { q: string; a: string };

const items: Item[] = [
	{
		q: "Pourquoi Vyrelio est la meilleure solution marketing dentaire ?",
		a: "Nous combinons site ultra‑rapide, SEO local, campagnes payantes et automatisations adaptées aux cabinets français pour générer des patients rentables.",
	},
	{
		q: "Quel budget marketing prévoir pour un cabinet ?",
		a: "Selon l’objectif et la zone, nous recommandons un budget modulable. Nous optimisons chaque euro avec un suivi clair des réservations et appels.",
	},
	{
		q: "Comment obtenir plus de patients via Google ?",
		a: "Optimisation Google Business Profile, contenu localisé, avis, pages actes et campagnes Search géolocalisées.",
	},
	{
		q: "Faut‑il des photos/vidéos personnalisées ?",
		a: "C’est un plus pour la conversion. Nous pouvons travailler avec vos assets ou recommander des partenaires.",
	},
	{
		q: "Comment vérifier le ROI de l’agence ?",
		a: "Tableau de bord transparent: sources de leads, coût par réservation, valeur estimée des traitements acceptés.",
	},
];

export function Faq() {
	const [open, setOpen] = useState<number | null>(0);

	return (
		<section id="faq" className="mx-auto max-w-5xl px-4 py-20">
			<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
				FAQ marketing dentaire
			</h2>
			<div className="mt-8 divide-y rounded-2xl border bg-white">
				{items.map((it, idx) => {
					const isOpen = open === idx;
					return (
						<button
							key={it.q}
							onClick={() => setOpen(isOpen ? null : idx)}
							className="w-full text-left px-6 py-5 focus:outline-none"
						>
							<div className="flex items-center justify-between">
								<p className="font-medium text-gray-900">{it.q}</p>
								<span className="text-2xl leading-none text-emerald-600">{isOpen ? "−" : "+"}</span>
							</div>
							{isOpen && (
								<p className="mt-3 text-sm text-gray-600">{it.a}</p>
							)}
						</button>
					);
				})}
			</div>
		</section>
	);
}


