import type { Metadata } from "next";
import { HomeHero } from "@/components/home-hero";
import { OfferBricks } from "@/components/offer-bricks";
import { Proofs } from "@/components/proofs";
import { ProcessFour } from "@/components/process-four";
import { Guarantee } from "@/components/guarantee";
import { ThreeSteps } from "@/components/three-steps";
import { DiscoveryCall } from "@/components/discovery-call";
import { Faq } from "@/components/faq";
import { AIVoice } from "@/components/ai-voice";
import { Reputation } from "@/components/reputation";
import { Automation } from "@/components/automation";
import { CaseGallery } from "@/components/case-gallery";
import { Differentiation } from "@/components/differentiation";

export const metadata: Metadata = {
  title: "Agence marketing dentaire | Acquisition patients cabinet dentaire",
  description:
    "Agence Vyrelio: acquisition de patients pour dentistes (SEO local, site, prise de RDV, automatisations).",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Agence marketing dentaire | Acquisition patients cabinet dentaire",
    description:
      "Agence Vyrelio: acquisition de patients pour dentistes (SEO local, site, prise de RDV, automatisations).",
    type: "website",
    url: "https://vyrelio.fr/",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HomeHero />
        <Proofs />
        <OfferBricks />
        <CaseGallery />
        <Automation />
        <AIVoice />
        <Reputation />
        <ProcessFour />
        <ThreeSteps />
        <Guarantee />
        <DiscoveryCall />
        <Differentiation />

        <Faq />
      </main>
    </div>
  );
}
