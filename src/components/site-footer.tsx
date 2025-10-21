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
            <li><Link href="#">Avis</Link></li>
            <li><Link href="#how">Méthode</Link></li>
            <li><Link href="#">Tarifs</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Marketing dentaire</p>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><Link href="#">Conception de site</Link></li>
            <li><Link href="#">SEO Local</Link></li>
            <li><Link href="#">Campagnes Google</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Nous rejoindre</p>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><Link href="/#contact">Parrainer un cabinet</Link></li>
            <li><Link href="#">Carrières</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-4 py-6 flex items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Vyrelio</p>
          <div className="flex gap-4">
            <Link href="#">Politique de confidentialité</Link>
            <Link href="#">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
