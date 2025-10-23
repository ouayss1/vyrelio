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
          <div className="rounded-[32px] overflow-hidden shadow-[0_10px_40px_-10px_var(--brand-shadow)] border bg-white">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/zdf6300/30min?hide_event_type_details=1&hide_gdpr_banner=1&text_color=000000&primary_color=2ECA97"
              style={{ minWidth: 320, width: "100%", height: 680 }}
            />
            <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
          </div>
        </div>
      </div>

    </section>
  );
}
