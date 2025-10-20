import { StatInsight } from "@/components/stat-insight";
import { Button } from "@/components/ui/button";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";

export function DiscoveryCall() {
	return (
		<section id="contact" className="mx-auto max-w-7xl px-4 py-20">
			<div className="grid items-center gap-8 md:grid-cols-2">
				<div>
					<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
						Programmez un appel d’exploration de 15 minutes
					</h2>
					<p className="mt-4 text-gray-600 max-w-[58ch]">
						En 15 minutes, nous clarifions vos besoins, partageons des pistes
						actionnables et déterminons si une démo complète Vyrelio est pertinente.
					</p>
					<div className="mt-4 max-w-xl">
						<StatInsight
							title="Sources"
							text="77 % veulent réserver en ligne; un rendez‑vous manqué/jour coûte jusqu’à 70 000 $/an; les rappels réduisent les absences de 78 %."
							sourceLinks={[
								{ label: "ADA", href: "https://www.ada.org/resources/research/health-policy-institute" },
								{ label: "Dental Economics", href: "https://www.dentaleconomics.com/" },
								{ label: "Jarvis Analytics", href: "https://www.jarvisanalytics.com/" }
							]}
							variant="dark"
						/>
					</div>
					<div className="mt-6">
						<Button asChild className="rounded-full px-6 py-6 text-base">
							<Link href="/#contact">Réserver mon appel</Link>
						</Button>
					</div>
				</div>
				<div className="relative">
					<div className="rounded-[32px] overflow-hidden shadow-[0_10px_40px_-10px_rgba(16,185,129,0.25)] border bg-white">
						<div
							className="calendly-inline-widget"
							data-url="https://calendly.com/zdf6300/30min?hide_event_type_details=1&hide_gdpr_banner=1&text_color=000000&primary_color=00bc7c"
							style={{ minWidth: 320, width: "100%", height: 680 }}
						/>
						<Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
					</div>
				</div>
			</div>

			<div className="mt-16 rounded-3xl border bg-white/70 backdrop-blur px-6 py-8 shadow-sm">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6">
					<p className="text-lg text-gray-800">
						Intégrez votre <span className="font-semibold text-emerald-700">base patients</span>
					</p>
					<div className="flex items-center gap-8 opacity-80">
						<Image src="/logo-dentrix.svg" alt="Dentrix" width={120} height={32} />
						<Image src="/logo-eaglesoft.svg" alt="Eaglesoft" width={120} height={32} />
						<Image src="/logo-opendental.svg" alt="OpenDental" width={140} height={32} />
					</div>
				</div>
			</div>
		</section>
	);
}


