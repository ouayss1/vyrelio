"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardAppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const nav = [
    { href: "/dashboard/overview", label: "Overview" },
    { href: "#", label: "Trafic", disabled: true },
    { href: "#", label: "Avis", disabled: true },
    { href: "#", label: "Automations", disabled: true },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-lg font-extrabold text-gray-900">Vyrelio</Link>
            <nav className="hidden md:flex items-center gap-2">
              {nav.map((item) => (
                <Link
                  key={item.label}
                  href={item.disabled ? pathname : item.href}
                  className={`px-3 py-2 rounded-full text-sm font-medium ${
                    pathname === item.href ? "bg-emerald-50 text-emerald-700" : "text-gray-700 hover:bg-gray-50"
                  } ${item.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
                  aria-disabled={item.disabled}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-3" />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
    </div>
  );
}
