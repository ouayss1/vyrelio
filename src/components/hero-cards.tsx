"use client";

import { motion } from "framer-motion";

type CardProps = {
	className?: string;
};

export function TrafficCard({ className }: CardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: 0.15 }}
			className={`rounded-xl border bg-white px-4 py-3 shadow-sm ${className ?? ""}`}
		>
			<p className="text-sm font-medium text-gray-800">Trafic Web</p>
			<div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-100">
				<div className="h-full w-[72%] bg-emerald-500" />
			</div>
			<div className="mt-3 grid grid-cols-3 gap-3 text-xs text-gray-600">
				<div>
					<p className="font-semibold text-gray-800">SEO</p>
					<p>13 k visiteurs</p>
				</div>
				<div>
					<p className="font-semibold text-gray-800">Google Ads</p>
					<p>1,4 k visiteurs</p>
				</div>
				<div>
					<p className="font-semibold text-gray-800">Meta Ads</p>
					<p>1,0 k visiteurs</p>
				</div>
			</div>
		</motion.div>
	);
}

export function PatientsCard({ className }: CardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, delay: 0.25 }}
			className={`rounded-xl border bg-white px-4 py-3 shadow-sm ${className ?? ""}`}
		>
			<p className="text-sm font-medium text-gray-800">Patients</p>
			<div className="mt-2 flex items-end gap-1 h-16">
				{[6, 10, 14, 12, 16].map((h, i) => (
					<div key={i} className="w-3 bg-emerald-500/80 rounded" style={{ height: `${h * 4}px` }} />
				))}
			</div>
			<p className="mt-2 text-xs text-gray-600">+28% MoM</p>
		</motion.div>
	);
}


