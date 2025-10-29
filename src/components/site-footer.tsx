import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t bg-gray-50/60">
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-4">
        <div>
          <p className="font-semibold text-gray-900">Vyrelio</p>
          <p className="mt-2 text-sm text-gray-600">Digitalisation des cabinets dentaires en France.</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Entreprise</p>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><Link href="#Guarantee">Garanties</Link></li>
            <li><Link href="#how">Méthode</Link></li>
            <li><Link href="/pricing">Tarifs</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Web dentaire</p>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><Link href="/blog">Conception de site</Link></li>
            <li><Link href="/blog">SEO Local</Link></li>
            <li><Link href="/blog">Campagnes Google</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Nous rejoindre</p>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><Link href="/nous-rejoindre">Parrainer un cabinet</Link></li>
            <li><Link href="/nous-rejoindre">Carrières</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-6 flex items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Vyrelio</p>
          <div className="flex gap-4">
            <Link href="/politique-de-confidentialite">Politique de confidentialité</Link>
            <Link href="/mentions-legales">Mentions légales</Link>
            <Link href="/politique-de-cookies">Politique de cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
