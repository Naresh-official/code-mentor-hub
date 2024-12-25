"use client";

import { motion } from "framer-motion";

export const FeatureCard = ({
	icon: Icon,
	title,
	description,
}: {
	icon: any;
	title: string;
	description: string;
}) => (
	<motion.div
		className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-background to-muted p-8 shadow-lg transition-shadow hover:shadow-xl"
		initial={{ opacity: 0, y: 50 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, amount: 0.2 }}
		transition={{ duration: 0.6, ease: "easeOut" }}
		whileHover={{ scale: 1.03 }}
	>
		<div className="relative z-10">
			<motion.div
				initial={{ scale: 1 }}
				whileHover={{ scale: 1.05 }}
				transition={{ duration: 0.3, ease: "easeInOut" }}
			>
				<Icon className="h-12 w-12 text-primary mb-4" />
			</motion.div>
			<h3 className="text-2xl font-bold mb-2">{title}</h3>
			<p className="text-muted-foreground">{description}</p>
		</div>
		<motion.div
			className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 transition-opacity group-hover:opacity-100"
			initial={{ opacity: 0 }}
			whileHover={{ opacity: 0.5 }}
			transition={{ duration: 0.4, ease: "easeInOut" }}
		/>
	</motion.div>
);
