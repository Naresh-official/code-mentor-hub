"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FloatingIcons = () => {
	const [viewportWidth, setViewportWidth] = useState(0);

	useEffect(() => {
		// Set viewport width once on the client side
		setViewportWidth(window.innerWidth);
	}, []);

	const floatingIcons = ["</", "{}", "/>", "[]", "()", '""', "''", ";;"];

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			{viewportWidth > 0 &&
				floatingIcons.map((icon, index) => (
					<motion.div
						key={index}
						className="absolute text-primary/20 text-4xl font-mono"
						initial={{
							opacity: 0,
							x: Math.random() * viewportWidth,
							y: -20,
						}}
						animate={{
							opacity: [0, 1, 0],
							x: Math.random() * viewportWidth,
							y: window.innerHeight + 20,
						}}
						transition={{
							duration: Math.random() * 10 + 10,
							repeat: Infinity,
							repeatType: "loop",
						}}
					>
						{icon}
					</motion.div>
				))}
		</div>
	);
};

export default FloatingIcons;
