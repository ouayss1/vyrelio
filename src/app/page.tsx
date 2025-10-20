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
        
        
        
        
        
        
        
        {/* Storytelling Section */}
        <section id="apropos" className="bg-emerald-50/60">
          <div className="mx-auto max-w-5xl px-4 py-16">
            <div className="mx-auto max-w-3xl">
              <p className="text-xl md:text-2xl font-semibold text-gray-900 leading-relaxed text-center">
                Vyrelio est né d’un constat simple : 70 % des cabinets ont un site mais 0 stratégie patients.
                <br className="hidden sm:block" />
                <span className="mt-3 block text-gray-700 font-normal">
                  Nous avons appliqué les méthodes des plus grandes agences US adaptées au marché français.
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Section Différenciation */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Pourquoi choisir Vyrelio plutôt qu’une agence classique ?
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                La différence qui fait toute la différence pour votre croissance
              </p>
              <p className="mt-2 text-sm text-gray-500">En moyenne, les cabinets accompagnés par Vyrelio enregistrent +28 % de croissance de patients sur 3 mois.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* Carte 1 */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Résultats concrets garantis</h3>
                <p className="text-gray-600">
                  Contrairement aux agences classiques qui se contentent de créer un site vitrine, nous garantissons des résultats concrets en terme de nouveaux patients grâce à notre approche data-driven.
                </p>
              </div>

              {/* Carte 2 */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Expertise médicale exclusive</h3>
                <p className="text-gray-600">
                  Notre équipe est spécialisée dans le secteur médical. Nous comprenons vos enjeux spécifiques et les contraintes réglementaires de votre profession.
                </p>
              </div>

              {/* Carte 3 */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Technologie IA de pointe</h3>
                <p className="text-gray-600">
                  Nous intégrons l’intelligence artificielle dans nos solutions pour automatiser la génération de contenu, l’analyse des données patients et l’optimisation des campagnes.
                </p>
              </div>

              {/* Carte 4 */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Gain de temps immédiat</h3>
                <p className="text-gray-600">
                  Notre approche clé en main vous libère du temps précieux que vous pouvez consacrer à votre cœur de métier : soigner vos patients.
                </p>
              </div>

              {/* Carte 5 */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Contenu optimisé pour le référencement</h3>
                <p className="text-gray-600">
                  Nous créons un contenu médical optimisé qui répond aux critères des moteurs de recherche tout en restant accessible à vos patients.
                </p>
              </div>

              {/* Carte 6 */}
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Approche centrée patient</h3>
                <p className="text-gray-600">
                  Nous concevons chaque élément en pensant d’abord à l’expérience patient, ce qui se traduit par des taux de conversion plus élevés et une meilleure fidélisation.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Faq />
      </main>
    </div>
  );
}
