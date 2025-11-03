import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
    phone?: string; // tel URI, e.g., "+33123456789"
    phoneLabel?: string; // display label, e.g., "+33 1 23 45 67 89"
};

export function AIVoice({ phone = "+33123456789", phoneLabel = "+33 1 23 45 67 89" }: Props) {
    return (
        <section className="bg-emerald-50/60" data-phone={phone}>
            <div className="mx-auto max-w-7xl px-4 py-20 grid gap-10 md:grid-cols-2 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 text-xs font-semibold">
                        <span className="h-2 w-2 rounded-full bg-emerald-600" /> Automatisation phare
                    </div>
                    <h2 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
                        IA Réceptionniste pour votre cabinet
                    </h2>
                    <p className="mt-4 text-gray-700">
                        Notre agent vocal répond aux appels 24/7, qualifie les demandes, prend des rendez‑vous
                        et répond aux questions fréquentes. Intégration avec votre agenda et CRM.
                    </p>
                    <p className="mt-1 text-xs text-gray-500">Basé sur tests internes Vyrelio (2025).</p>
                    <p className="mt-1 text-gray-700">Réduisez le temps d’attente moyen de vos patients et augmentez leur satisfaction.</p>
                    <ul className="mt-6 space-y-2 text-gray-700">
                        <li>• Transfert vers l’équipe quand nécessaire</li>
                        <li>• Scripts personnalisés par acte (implant, Invisalign, urgences…)</li>
                        <li>• Journal des appels et enregistrements</li>
                    </ul>
                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <Button className="rounded-full px-6 py-6 text-base" asChild>
                            <Link href="/#contact">Appeler pour tester</Link>
                        </Button>
                        <p className="text-sm text-gray-600">Disponible 24/7 au {phoneLabel}</p>
                    </div>
                    <p className="mt-4 text-sm text-gray-600">+22 % de RDV mensuels, et –30 s de temps d’attente moyen pour les appels.</p>
        <div className="mt-6 grid grid-cols-3 gap-4">
                        <div className="rounded-xl bg-emerald-100 p-4 text-center">
                            <p className="text-2xl font-extrabold text-emerald-700">96%</p>
                            <p className="text-xs text-gray-700">appels décrochés</p>
                        </div>
                        <div className="rounded-xl bg-emerald-100 p-4 text-center">
                            <p className="text-2xl font-extrabold text-emerald-700">30s</p>
                            <p className="text-xs text-gray-700">temps de réponse</p>
                        </div>
                        <div className="rounded-xl bg-emerald-100 p-4 text-center">
                            <p className="text-2xl font-extrabold text-emerald-700">+22%</p>
                            <p className="text-xs text-gray-700">RDV mensuels</p>
                        </div>
                    </div>
                </div>
                <div className="relative flex items-center justify-center">
                    {/* Phone mockup */}
                    <div className="relative h-[560px] w-[280px] rounded-[40px] border border-black/10 bg-gradient-to-b from-gray-900 to-black text-white shadow-[0_20px_60px_-12px_rgba(16,185,129,0.35)]">
                        {/* Notch */}
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 mt-3 h-6 w-32 rounded-full bg-white/10" />
                        {/* Screen content */}
                        <div className="flex h-full flex-col items-center justify-between px-5 py-8">
                            <div className="mt-8 flex flex-col items-center">
                                <div className="h-16 w-16 rounded-full bg-emerald-600/20 flex items-center justify-center">
                                    <span className="text-emerald-400 font-bold">AI</span>
                                </div>
                                <p className="mt-4 text-lg font-semibold">IA Réceptionniste</p>
                                <p className="mt-1 text-sm text-white/70">{phoneLabel}</p>
                                <p className="mt-3 text-xs text-white/60">Répond, qualifie, planifie vos RDV</p>
                            </div>
                            {/* Waveform mock */}
                            <div className="w-full">
                                <div className="mx-auto flex items-end justify-center gap-1 h-16">
                                    {[6,10,14,18,22,18,14,10,6].map((h,i)=> (
                                        <div key={i} className="w-2 bg-emerald-400/80 rounded" style={{ height: `${h}px` }} />
                                    ))}
                                </div>
                                <div className="mt-4 grid grid-cols-3 gap-4">
                                    <Link href="/#contact" className="col-span-3 inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-black font-semibold hover:bg-emerald-400">
                                        Appeler maintenant
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
