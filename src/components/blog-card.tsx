import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

export function BlogCard({ slug, title, description, date, tags }: Props) {
  const fmt = new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block rounded-3xl border bg-white/80 backdrop-blur p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center gap-2 text-xs">
        {tags.slice(0, 2).map((t) => (
          <span key={t} className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 font-medium">
            {t}
          </span>
        ))}
      </div>
      <h3 className="mt-3 text-lg md:text-xl font-semibold text-gray-900 group-hover:text-emerald-700">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-600 line-clamp-3">{description}</p>
      <div className="mt-4 text-xs text-gray-500">{fmt}</div>
    </Link>
  );
}
