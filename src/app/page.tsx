import Link from "next/link";
import { Github, Code, BookOpen, Users, Briefcase } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="px-4 lg:px-6 h-14 flex items-center">
				<Link className="flex items-center justify-center" href="#">
					<Code className="h-6 w-6 mr-2" />
					<span className="font-bold">CodeMentorHub</span>
				</Link>
				<nav className="ml-auto flex gap-4 sm:gap-6">
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#"
					>
						Features
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#"
					>
						Pricing
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#"
					>
						About
					</Link>
					<Link
						className="text-sm font-medium hover:underline underline-offset-4"
						href="#"
					>
						Contact
					</Link>
				</nav>
			</header>
			<main className="flex-1">
				<section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
									Welcome to CodeMentorHub
								</h1>
								<p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
									Empower your development journey with
									AI-driven insights and community support
								</p>
							</div>
							<div className="space-x-4">
								<Button>Get Started</Button>
								<Button variant="outline">Learn More</Button>
							</div>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-900/50">
					<div className="container px-4 md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
							Key Features
						</h2>
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
							<Card>
								<CardHeader>
									<Github className="h-6 w-6 mb-2" />
									<CardTitle>GitHub Integration</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription>
										Connect your GitHub account for seamless
										code analysis and portfolio building.
									</CardDescription>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<Code className="h-6 w-6 mb-2" />
									<CardTitle>AI Code Review</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription>
										Get intelligent feedback on your code
										with our AI-powered review system.
									</CardDescription>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<BookOpen className="h-6 w-6 mb-2" />
									<CardTitle>Learning Roadmap</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription>
										Personalized learning paths to enhance
										your skills and close knowledge gaps.
									</CardDescription>
								</CardContent>
							</Card>
							<Card>
								<CardHeader>
									<Users className="h-6 w-6 mb-2" />
									<CardTitle>
										Community & Mentorship
									</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription>
										Connect with peers and mentors to
										accelerate your growth as a developer.
									</CardDescription>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
				<section className="w-full py-12 md:py-24 lg:py-32">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
									Boost Your Career
								</h2>
								<p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
									Take advantage of our career tools,
									including AI-powered job matching and resume
									building.
								</p>
							</div>
							<div className="w-full max-w-sm space-y-2">
								<Button className="w-full" size="lg">
									<Briefcase className="mr-2 h-4 w-4" />
									Explore Career Tools
								</Button>
							</div>
						</div>
					</div>
				</section>
			</main>
			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-gray-400">
					© 2024 CodeMentorHub. All rights reserved.
				</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6">
					<Link
						className="text-xs hover:underline underline-offset-4"
						href="#"
					>
						Terms of Service
					</Link>
					<Link
						className="text-xs hover:underline underline-offset-4"
						href="#"
					>
						Privacy
					</Link>
				</nav>
			</footer>
		</div>
	);
}
