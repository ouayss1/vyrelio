"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TrafficCard, PatientsCard } from "@/components/hero-cards";
import { StatInsight } from "@/components/stat-insight";
import Link from "next/link";
import heroIllustration from "../../public/hero-illustration.avif";

export function HomeHero() {
	return (
		<>
		<section className="relative overflow-hidden bg-brand-50/60">
			<div className="mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
				<div>
					<h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
						Agence marketing dentaire: +8 à 12 nouveaux patients/mois
					</h1>
					<p className="mt-2 text-sm text-gray-500">Données estimées sur les cabinets dentaires étudié (2024)</p>
					<p className="mt-5 text-lg text-gray-600 max-w-[52ch]">
						Acquisition de patients pour cabinets dentaires: site performant, SEO local, prise de RDV en ligne et automatisations.
					</p>
					<div className="mt-4 max-w-xl">
						<StatInsight
							title="Chiffre clé"
							text="77 % des patients veulent réserver en ligne, mais seuls 26 % des cabinets le permettent."
							source="Source : ADA"
							sourceHref="https://www.ada.org/resources/research/health-policy-institute"
							variant="dark"
						/>
					</div>
					<div className="mt-8 flex flex-wrap gap-3">
						<Link href="/#contact" className="inline-flex items-center rounded-full bg-brand px-6 py-3 text-white text-sm font-semibold hover:bg-brand-700">
							Obtenez votre estimation de croissance
						</Link>
						<a href="#cases" className="inline-flex items-center rounded-full border px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">
							Voir une étude de cas
						</a>
					</div>
					<div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
						<div className="flex items-center gap-2">
							<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-xs font-bold">✓</span>
							<span>Docteurs accompagnés</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 text-brand-700 text-xs font-bold">✓</span>
							<span>Garantie satisfait ou remboursé</span>
						</div>

					</div>
				</div>
				<div className="relative">
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} >
						<Image src={heroIllustration} alt="Illustration Vyrelio" width={800} height={600} className="rounded-xl object-cover w-full h-auto" priority placeholder="blur" sizes="(min-width: 768px) 50vw, 100vw" />
						<div className="absolute left-3 top-3">
							<TrafficCard />
						</div>
						<div className="absolute right-3 bottom-3">
							<PatientsCard />
						</div>
					</motion.div>
				</div>
			</div>
		</section>

		{/* Impact Statement Section */}
		<section>
			<div className="mx-auto max-w-7xl px-4 py-8">
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.6 }}
					transition={{ duration: 0.5 }}
					className="rounded-2xl border border-emerald-100 bg-emerald-50/70 px-4 py-4 sm:px-5 sm:py-5 text-center shadow-sm"
				>
					<p className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
						Chaque mois sans stratégie locale = en moyenne
						<span className="mx-2 inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-emerald-800 font-bold">
							8 à 12
						</span>
						nouveaux patients perdus.
					</p>
				</motion.div>
			</div>
		</section>

		</>
	);
}


