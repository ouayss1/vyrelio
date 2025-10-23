import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nous rejoindre | Agence marketing dentaire",
  description:
    "Freelance, partenaires et parrainage Vyrelio. Contribuez à l’acquisition de patients pour cabinets dentaires.",
  alternates: { canonical: "/nous-rejoindre" },
  openGraph: {
    title: "Nous rejoindre | Agence marketing dentaire",
    description:
      "Freelance, partenaires et parrainage Vyrelio. Contribuez à l’acquisition de patients pour cabinets dentaires.",
    type: "website",
    url: "https://www.vyrelio.fr/nous-rejoindre",
  },
};

export default function NousRejoindreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
