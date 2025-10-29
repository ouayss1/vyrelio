import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl animate-pulse" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-emerald-300/40 blur-3xl animate-pulse [animation-duration:4s]" />
      <section className="relative z-10 mx-auto max-w-3xl px-4 py-20 text-center">
        <div className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1 text-emerald-700 text-xs font-semibold">Perdu dans Vyrelio</div>
        <h1 className="mt-4 text-7xl sm:text-8xl md:text-9xl font-extrabold tracking-tight bg-gradient-to-br from-gray-900 via-emerald-700 to-emerald-400 bg-clip-text text-transparent leading-none">404</h1>
        <p className="mt-4 text-xl md:text-2xl font-semibold text-gray-900">Oups, cette page a pris un autre rendez‑vous.</p>
        <p className="mt-2 text-gray-600">La page que vous cherchez n’existe pas ou a été déplacée. On vous remet sur la bonne voie ?</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-white text-sm font-semibold hover:bg-emerald-700">Retour à l’accueil</Link>
          <Link href="/#contact" className="inline-flex items-center rounded-full border px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">Parler à un expert</Link>
          <Link href="/#services" className="inline-flex items-center rounded-full border px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50">Voir nos offres</Link>
        </div>
        <div className="mt-12 flex items-center justify-center gap-2 text-emerald-700/80">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-bounce"><path d="M12 5v14M5 12h14"/></svg>
          <span className="text-xs">Astuce: utilisez le menu pour retrouver votre chemin</span>
        </div>
      </section>
    </main>
  );
}
