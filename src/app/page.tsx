"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
	Github,
	BookOpen,
	Users,
	Briefcase,
	ChevronRight,
	Terminal,
	Zap,
	Shield,
	Globe,
} from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FloatingIcons from "@/components/FloatingIcons";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const CodeSnippet = ({
	language,
	code,
}: {
	language: string;
	code: string;
}) => (
	<pre className="bg-muted p-4 rounded-lg overflow-x-auto">
		<code className="text-sm font-mono">{code}</code>
	</pre>
);

const TypingEffect = ({ text }: { text: string }) => {
	const [displayText, setDisplayText] = useState("");

	useEffect(() => {
		let i = 0;
		const typingInterval = setInterval(() => {
			if (i < text.length) {
				setDisplayText((prev) => prev + text.charAt(i));
				i++;
			} else {
				clearInterval(typingInterval);
			}
		}, 50);

		return () => clearInterval(typingInterval);
	}, [text]);

	return <span className="font-mono text-primary">{displayText}</span>;
};

export default function Home() {
	const { scrollYProgress } = useScroll();
	const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
	const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

	return (
		<div className="flex flex-col min-h-screen">
			<Navbar />
			<main className="flex-1">
				<section className="w-full h-[90vh] flex justify-center items-center py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden bg-background">
					<FloatingIcons />
					<div className="container px-4 md:px-6 relative z-10">
						<motion.div
							style={{ opacity, scale }}
							className="flex flex-col items-center space-y-4 text-center"
						>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								className="space-y-2"
							>
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none glow-text">
									Welcome to{" "}
									<span className="text-primary">
										CodeMentorHub
									</span>
								</h1>
								<p className="mx-auto max-w-[700px] h-14 text-muted-foreground md:text-xl">
									<TypingEffect text="Empowering developers with AI-driven insights and community support" />
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="space-x-4"
							>
								<Button className="neon-button">
									Get Started
									<ChevronRight className="ml-2 h-4 w-4" />
								</Button>
								<Button variant="outline">View Demo</Button>
							</motion.div>
						</motion.div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
					<div className="container px-4 md:px-6">
						<motion.h2
							className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							Revolutionize Your Coding Journey
						</motion.h2>
						<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
							<FeatureCard
								icon={Github}
								title="GitHub Integration"
								description="Seamlessly connect your GitHub repositories for comprehensive code analysis and portfolio building."
							/>
							<FeatureCard
								icon={Terminal}
								title="AI Code Review"
								description="Get intelligent, context-aware feedback on your code with our advanced AI-powered review system."
							/>
							<FeatureCard
								icon={BookOpen}
								title="Learning Roadmap"
								description="Personalized learning paths to enhance your skills, tailored to your GitHub activity and career goals."
							/>
							<FeatureCard
								icon={Users}
								title="Community & Mentorship"
								description="Connect with peers and mentors in our thriving developer community to accelerate your growth."
							/>
							<FeatureCard
								icon={Zap}
								title="Performance Tracking"
								description="Monitor your coding progress and skill improvements with detailed analytics and insights."
							/>
							<FeatureCard
								icon={Shield}
								title="Security Analysis"
								description="Identify and fix potential security vulnerabilities in your code before they become issues."
							/>
							<FeatureCard
								icon={Globe}
								title="Global Challenges"
								description="Participate in worldwide coding challenges and hackathons to test your skills against the best."
							/>
							<FeatureCard
								icon={Briefcase}
								title="Career Opportunities"
								description="Access exclusive job listings and get matched with companies looking for your specific skill set."
							/>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 matrix-bg">
					<div className="container px-4 md:px-6">
						<motion.h2
							className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
						>
							Experience the Power
						</motion.h2>
						<Tabs
							defaultValue="github"
							className="w-full max-w-3xl mx-auto"
						>
							<TabsList className="grid w-full grid-cols-3">
								<TabsTrigger value="github">
									GitHub Integration
								</TabsTrigger>
								<TabsTrigger value="ai-review">
									AI Code Review
								</TabsTrigger>
								<TabsTrigger value="roadmap">
									Learning Roadmap
								</TabsTrigger>
							</TabsList>
							<TabsContent value="github">
								<Card>
									<CardContent className="p-6">
										<h3 className="text-2xl font-bold mb-4">
											Seamless GitHub Integration
										</h3>
										<p className="mb-4">
											Connect your GitHub account with a
											single click and unlock powerful
											insights.
										</p>
										<CodeSnippet
											language="typescript"
											code={`
import { Octokit } from "@octokit/rest";

const octokit = new Octokit({ auth: 'YOUR-TOKEN' });

async function fetchRepositories() {
  const { data } = await octokit.repos.listForAuthenticatedUser();
  return data.map(repo => repo.name);
}
                      `}
										/>
									</CardContent>
								</Card>
							</TabsContent>
							<TabsContent value="ai-review">
								<Card>
									<CardContent className="p-6">
										<h3 className="text-2xl font-bold mb-4">
											AI-Powered Code Review
										</h3>
										<p className="mb-4">
											Get instant, intelligent feedback on
											your code to improve quality and
											catch issues early.
										</p>
										<CodeSnippet
											language="typescript"
											code={`
async function analyzeCode(code: string) {
  const analysis = await AI.analyze(code);
  return {
    suggestions: analysis.suggestions,
    performance: analysis.performanceScore,
    security: analysis.securityIssues,
  };
}
                      `}
										/>
									</CardContent>
								</Card>
							</TabsContent>
							<TabsContent value="roadmap">
								<Card>
									<CardContent className="p-6">
										<h3 className="text-2xl font-bold mb-4">
											Personalized Learning Roadmap
										</h3>
										<p className="mb-4">
											Tailored learning paths based on
											your skills and goals to accelerate
											your growth.
										</p>
										<CodeSnippet
											language="typescript"
											code={`
type Skill = 'React' | 'Node.js' | 'GraphQL' | 'TypeScript';

async function generateRoadmap(skills: Skill[], goals: string[]) {
  const roadmap = await AI.generateLearningPath(skills, goals);
  return roadmap.map(step => ({
    topic: step.topic,
    resources: step.recommendedResources,
    projects: step.practiceProjects,
  }));
}
                      `}
										/>
									</CardContent>
								</Card>
							</TabsContent>
						</Tabs>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								className="space-y-2"
							>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
									Boost Your Career
								</h2>
								<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
									Take advantage of our AI-powered career
									tools, including job matching and automated
									resume building.
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.2 }}
								className="w-full max-w-sm space-y-2"
							>
								<Button
									className="w-full neon-button"
									size="lg"
								>
									<Briefcase className="mr-2 h-4 w-4" />
									Explore Career Tools
								</Button>
							</motion.div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
