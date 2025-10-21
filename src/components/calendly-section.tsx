"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

type Props = { url?: string; height?: number };

export function CalendlySection({ url = "https://calendly.com/zdf6300/30min?hide_event_type_details=1&hide_gdpr_banner=1&text_color=000000&primary_color=2ECA97", height = 560 }: Props) {
  const [computedHeight, setComputedHeight] = useState<number>(height);

  // Compute a responsive height to avoid internal iframe scrollbars
  useEffect(() => {
    if (height) {
      setComputedHeight(height);
      return;
    }
    const calc = () => {
      const w = window.innerWidth;
      if (w < 640) return 920;      // mobile
      if (w < 768) return 820;      // sm
      if (w < 1024) return 720;     // md
      if (w < 1280) return 680;     // lg
      return 660;                   // xl+
    };
    const apply = () => setComputedHeight(calc());
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, [height]);

	return (
		<section className="relative mx-auto max-w-7xl px-4 py-20">
			<div className="grid items-center gap-10 md:grid-cols-2">
				<div>
					<h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
						Réserve un appel gratuitement !!
					</h3>
					<p className="mt-3 text-gray-600">15 minutes pour comprendre vos besoins et définir les prochaines étapes.</p>
					<svg
						className="mt-10 hidden md:block text-emerald-500"
						width="640"
						height="220"
						viewBox="0 0 640 220"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20 170 C 140 210, 240 210, 280 170 C 305 145, 250 140, 230 165 C 200 205, 320 220, 390 185 C 470 145, 520 130, 600 95"
							stroke="currentColor"
							strokeWidth="9"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path d="M600 95 L 572 88" stroke="currentColor" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M600 95 L 584 114" stroke="currentColor" strokeWidth="9" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</div>
				<div className="rounded-3xl overflow-hidden shadow-sm">
					<div
						className="calendly-inline-widget"
						data-url={url}
						style={{ minWidth: 320, width: "100%", height: computedHeight }}
					/>
					<Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
				</div>
			</div>
		</section>
	);
}


