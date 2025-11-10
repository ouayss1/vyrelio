"use client";

import { useEffect, useState } from "react";
import { StatInsight } from "@/components/stat-insight";
import { Button } from "@/components/ui/button";
import Script from "next/script";
import Link from "next/link";
import { hasMarketingConsent, onConsentChange, writeConsent } from "@/lib/consent";

export function DiscoveryCall() {
  const [allowed, setAllowed] = useState<boolean>(false);

  useEffect(() => {
    setAllowed(hasMarketingConsent());
    const off = onConsentChange((c) => setAllowed(!!c.marketing));
    return off;
  }, []);
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
              text="En moyenne un cabinet gagne entre 8 à 12 patient par mois avec une bonne présence en ligne"
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
            {allowed ? (
              <>
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/zdf6300/30min?hide_event_type_details=1&hide_gdpr_banner=1&text_color=000000&primary_color=2ECA97"
                  style={{ minWidth: 320, width: "100%", height: 680 }}
                />
                <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
              </>
            ) : (
              <div style={{ minWidth: 320, width: "100%", height: 680 }} className="flex items-center justify-center p-6">
                <div className="text-center max-w-sm">
                  <p className="font-semibold text-gray-900">Calendrier indisponible sans cookies marketing</p>
                  <p className="mt-2 text-sm text-gray-600">Pour afficher le widget Calendly intégré, merci d&#39;accepter les cookies marketing ou ouvrez Calendly dans un nouvel onglet.</p>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <Button onClick={() => writeConsent(true)}>Accepter et afficher</Button>
                    <a className="text-sm text-emerald-700 underline" href="https://calendly.com/zdf6300/30min?hide_event_type_details=1&hide_gdpr_banner=1&text_color=000000&primary_color=2ECA97" target="_blank" rel="noreferrer">Ouvrir Calendly</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </section>
  );
}
