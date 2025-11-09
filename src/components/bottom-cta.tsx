

export function BottomCta() {
    return (
        <section className="mx-auto max-w-7xl px-4 py-16">
            <div className="rounded-3xl border bg-emerald-50/60 p-8 text-center transition-all duration-200 hover:shadow-md">
                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">Vous avez un besoin spécifique ?</h3>
                <p className="mt-3 text-gray-700">Si vous souhaitez autre chose que ce qui est présenté, parlons‑en: nous réalisons des projets sur‑mesure pour les cabinets dentaires.</p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                    <a href="/#contact" className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-white font-semibold hover:bg-emerald-700">Réserver un appel</a>
                    <a href="/#contact" className="inline-flex items-center justify-center rounded-full border px-6 py-3 font-semibold hover:bg-white">Obtenir un devis gratuit</a>
                </div>
            </div>
        </section>
    );
}
