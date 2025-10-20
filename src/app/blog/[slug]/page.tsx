import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { CALENDLY_URL } from "@/lib/utils";

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const url = `/blog/${post.slug}`;
  return {
    title: `${post.title} | Vyrelio`,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      images: post.heroImage ? [{ url: post.heroImage }] : undefined,
    },
    alternates: {
      canonical: url,
    },
  };
}

export async function generateStaticParams() {
  const all = getAllPosts();
  return all.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const published = new Date(post.date).toISOString();
  const modified = post.updatedAt ? new Date(post.updatedAt).toISOString() : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: published,
    dateModified: modified || published,
    author: [{ "@type": "Organization", name: "Vyrelio" }],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `/blog/${post.slug}`,
    },
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <Script id="post-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header>
        <div className="flex items-center gap-2 text-xs">
          {post.tags.slice(0, 3).map((t) => (
            <span key={t} className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 font-medium">
              {t}
            </span>
          ))}
        </div>
        <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">{post.title}</h1>
        <p className="mt-2 text-gray-600">{post.description}</p>
        <div className="mt-3 text-xs text-gray-500">
          Publié le {new Date(post.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })}
        </div>
      </header>

      <div className="mt-8 space-y-8">
        {post.sections.map((sec) => (
          <section key={sec.heading}>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-900">{sec.heading}</h2>
            {sec.body?.map((p, i) => (
              <p key={i} className="mt-3 text-gray-700 leading-relaxed">{p}</p>
            ))}
            {sec.bullets && (
              <ul className="mt-3 space-y-2 text-gray-700">
                {sec.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>

      <footer className="mt-12 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5 text-center">
        <p className="text-gray-800">
          Besoin d'un plan d'action sur-mesure ?
        </p>
        <div className="mt-4 flex justify-center">
          <Link href={CALENDLY_URL} className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-white text-sm font-semibold hover:bg-emerald-700">
            Demander une démo gratuite
          </Link>
        </div>
      </footer>
    </article>
  );
}
