import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { BlogCard } from "@/components/blog-card";
import { CALENDLY_URL } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog | Vyrelio",
  description:
    "Guides concrets pour cabinets dentaires: SEO local, Google Maps, avis, pages services, conversions et automations.",
  openGraph: {
    title: "Blog | Vyrelio",
    description:
      "Guides concrets pour cabinets dentaires: SEO local, Google Maps, avis, pages services, conversions et automations.",
    type: "website",
    url: "/blog",
  },
};

export default function BlogIndex() {
  const list = getAllPosts();

  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">Blog</h1>
        <p className="mt-3 text-gray-600">
          Apprenez à mettre en place nos méthodes: SEO local, avis Google, pages ville-service et plus.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <BlogCard
            key={p.slug}
            slug={p.slug}
            title={p.title}
            description={p.description}
            date={p.date}
            tags={p.tags}
          />
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href={CALENDLY_URL}
          className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-white text-sm font-semibold hover:bg-emerald-700"
        >
          Demander un plan d’action gratuit
        </Link>
      </div>
    </section>
  );
}
