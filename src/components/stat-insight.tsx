type Props = {
  title?: string;
  text: string;
  source?: string;
  sourceHref?: string;
  sourceLinks?: { label: string; href: string }[];
  variant?: "dark" | "light";
};

export function StatInsight({ title = "Étude", text, source, sourceHref, sourceLinks, variant = "dark" }: Props) {
  const isDark = variant === "dark";
  return (
    <div
      className={
        `${
          isDark
            ? "bg-emerald-50/70 text-gray-900 border-emerald-100"
            : "bg-white text-gray-900 border-emerald-100"
        } rounded-2xl border px-4 py-3 sm:px-5 sm:py-4 shadow-sm`
      }
    >
      <div className="flex items-start gap-3">
        <div className={`${isDark ? "bg-emerald-600/10" : "bg-emerald-600/10"} h-7 w-7 rounded-full flex items-center justify-center shrink-0`}>
          <span className={`text-emerald-700`}>💡</span>
        </div>
        <div className="min-w-0">
          <p className={`text-sm font-semibold ${isDark ? "text-gray-900" : "text-gray-900"}`}>{title}</p>
          <p className={`mt-1 text-sm leading-relaxed ${isDark ? "text-gray-800" : "text-gray-700"}`}>{text}</p>
          {(sourceLinks && sourceLinks.length > 0) ? (
            <p className={`mt-1 text-xs ${isDark ? "text-gray-600" : "text-gray-500"}`}>
              {sourceLinks.map((s, i) => (
                <>
                  <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-emerald-700 hover:text-emerald-800">{s.label}</a>
                  {i < sourceLinks.length - 1 ? <span key={s.href+"-sep"} className="mx-1">•</span> : null}
                </>
              ))}
            </p>
          ) : source ? (
            <p className={`mt-1 text-xs ${isDark ? "text-gray-600" : "text-gray-500"}`}>
              {sourceHref ? (
                <a href={sourceHref} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 text-emerald-700 hover:text-emerald-800">
                  {source}
                </a>
              ) : (
                source
              )}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
