"use client";

import { motion } from "framer-motion";
import { Code, Users, BookOpen, Zap } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
	return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">\
      <Navbar />
			<main className="pt-16 px-4 md:px-6 max-w-5xl mx-auto">
				<section className="py-12 md:py-24">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-center">
							About{" "}
							<span className="text-primary">CodeMentorHub</span>
						</h1>
						<p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
							Empowering developers with AI-driven insights,
							personalized learning paths, and a supportive
							community.
						</p>
					</motion.div>

					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
						{[
							{
								icon: Code,
								title: "AI-Powered Code Reviews",
								description:
									"Get instant, intelligent feedback on your code to improve your skills and catch potential issues early.",
							},
							{
								icon: Users,
								title: "Vibrant Community",
								description:
									"Connect with fellow developers, share knowledge, and collaborate on exciting projects.",
							},
							{
								icon: BookOpen,
								title: "Personalized Learning",
								description:
									"Tailored learning paths based on your skills, goals, and coding activity to accelerate your growth.",
							},
							{
								icon: Zap,
								title: "Career Acceleration",
								description:
									"Boost your career with job matching, automated resume building, and industry insights.",
							},
						].map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
							>
								<Card className="h-full">
									<CardHeader>
										<feature.icon className="h-10 w-10 mb-2 text-primary" />
										<CardTitle>{feature.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<CardDescription>
											{feature.description}
										</CardDescription>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</section>

				<section className="py-12 md:py-24">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6 text-center">
							Our Mission
						</h2>
						<p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
							At CodeMentorHub, we're on a mission to
							revolutionize the way developers learn, grow, and
							succeed in their careers. By combining cutting-edge
							AI technology with the power of community, we're
							creating an ecosystem where every developer can
							thrive.
						</p>
					</motion.div>

					<div className="flex justify-center">
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<Button size="lg" className="neon-button">
								Join Our Community
							</Button>
						</motion.div>
					</div>
				</section>
      </main>
      <Footer />
		</div>
	);
}
