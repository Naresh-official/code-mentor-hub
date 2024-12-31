"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
	Search,
	Plus,
	Edit,
	ChevronDown,
	ChevronRight,
	CheckCircle,
	Clock,
	DotIcon as DragHandleDots2Icon,
	MessageSquare,
	Download,
	HelpCircle,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

// Mock data for roadmap steps
const roadmapSteps = [
	{
		id: 1,
		title: "Learn HTML & CSS Basics",
		description: "Master the fundamentals of web structure and styling",
		estimatedTime: "2 weeks",
		progress: 100,
		completed: true,
		resources: [
			{
				id: 1,
				title: "MDN Web Docs - HTML",
				url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
			},
			{ id: 2, title: "CSS Tricks", url: "https://css-tricks.com/" },
		],
		mentorComment:
			"Great job on completing the basics! Make sure to practice with some small projects.",
	},
	{
		id: 2,
		title: "JavaScript Fundamentals",
		description: "Understand core concepts of JavaScript programming",
		estimatedTime: "4 weeks",
		progress: 75,
		completed: false,
		resources: [
			{
				id: 3,
				title: "JavaScript.info",
				url: "https://javascript.info/",
			},
			{
				id: 4,
				title: "Eloquent JavaScript",
				url: "https://eloquentjavascript.net/",
			},
		],
		mentorComment:
			"You're making good progress. Focus on understanding closures and promises next.",
	},
	{
		id: 3,
		title: "React Basics",
		description: "Learn the fundamentals of React library",
		estimatedTime: "3 weeks",
		progress: 30,
		completed: false,
		resources: [
			{
				id: 5,
				title: "React Official Docs",
				url: "https://reactjs.org/docs/getting-started.html",
			},
			{
				id: 6,
				title: "React Tutorial",
				url: "https://react-tutorial.app/",
			},
		],
		mentorComment: null,
	},
	{
		id: 4,
		title: "Backend Development with Node.js",
		description: "Explore server-side programming with Node.js",
		estimatedTime: "5 weeks",
		progress: 0,
		completed: false,
		resources: [
			{
				id: 7,
				title: "Node.js Official Docs",
				url: "https://nodejs.org/en/docs/",
			},
			{
				id: 8,
				title: "Express.js Guide",
				url: "https://expressjs.com/en/guide/routing.html",
			},
		],
		mentorComment: null,
	},
];

const Header = () => (
	<div className="mb-8">
		<div className="flex items-center mb-4 text-sm text-muted-foreground">
			<Link href="/dashboard" className="hover:text-primary">
				Dashboard
			</Link>
			<ChevronRight className="h-4 w-4 mx-2" />
			<span className="font-medium text-foreground">Roadmap</span>
		</div>
		<h1 className="text-3xl font-bold mb-4">Your Learning Roadmap</h1>
		<div className="flex flex-wrap gap-4 items-center">
			<Button className="bg-primary text-primary-foreground hover:bg-primary/90">
				<Plus className="mr-2 h-4 w-4" /> Create New Roadmap
			</Button>
			<Button variant="outline">
				<Edit className="mr-2 h-4 w-4" /> Customize Roadmap
			</Button>
			<div className="flex-grow">
				<Input
					placeholder="Search roadmap..."
					className="w-full max-w-sm"
				/>
			</div>
		</div>
	</div>
);

const RoadmapStep = ({ step }: { step: (typeof roadmapSteps)[0] }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Collapsible open={isOpen} onOpenChange={setIsOpen}>
			<Card className="mb-4">
				<CardHeader className="flex flex-row items-center">
					<div className="flex-1">
						<CardTitle className="text-xl flex items-center">
							<DragHandleDots2Icon className="h-5 w-5 mr-2 cursor-move" />
							{step.title}
						</CardTitle>
						<CardDescription>{step.description}</CardDescription>
					</div>
					<CollapsibleTrigger asChild>
						<Button variant="ghost" size="sm">
							{isOpen ? (
								<ChevronDown className="h-4 w-4" />
							) : (
								<ChevronRight className="h-4 w-4" />
							)}
						</Button>
					</CollapsibleTrigger>
				</CardHeader>
				<CardContent>
					<div className="flex items-center justify-between mb-2">
						<div className="flex items-center">
							<Clock className="h-4 w-4 mr-2 text-muted-foreground" />
							<span className="text-sm text-muted-foreground">
								{step.estimatedTime}
							</span>
						</div>
						<div className="flex items-center">
							<span className="text-sm font-medium mr-2">
								{step.progress}%
							</span>
							<Progress value={step.progress} className="w-24" />
						</div>
					</div>
					<CollapsibleContent>
						<div className="mt-4">
							<h4 className="font-semibold mb-2">Resources:</h4>
							<ul className="list-disc list-inside">
								{step.resources.map((resource) => (
									<li key={resource.id}>
										<Link
											href={resource.url}
											className="text-primary hover:underline"
											target="_blank"
											rel="noopener noreferrer"
										>
											{resource.title}
										</Link>
									</li>
								))}
							</ul>
						</div>
						{step.mentorComment && (
							<div className="mt-4 bg-secondary/20 p-3 rounded-md">
								<h4 className="font-semibold mb-2 flex items-center">
									<MessageSquare className="h-4 w-4 mr-2" />
									Mentor Comment:
								</h4>
								<p className="text-sm">{step.mentorComment}</p>
							</div>
						)}
					</CollapsibleContent>
				</CardContent>
				<CardFooter>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger asChild>
								<Button
									variant={
										step.completed ? "default" : "outline"
									}
									size="sm"
									className="ml-auto"
								>
									<CheckCircle className="h-4 w-4 mr-2" />
									{step.completed
										? "Completed"
										: "Mark as Complete"}
								</Button>
							</TooltipTrigger>
							<TooltipContent>
								<p>
									{step.completed
										? "Step completed!"
										: "Click to mark this step as complete"}
								</p>
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</CardFooter>
			</Card>
		</Collapsible>
	);
};

const RoadmapTimeline = ({ steps }: { steps: typeof roadmapSteps }) => {
	const totalSteps = steps.length;
	const completedSteps = steps.filter((step) => step.completed).length;
	const overallProgress = (completedSteps / totalSteps) * 100;

	return (
		<div>
			<div className="mb-6">
				<h3 className="text-lg font-semibold mb-2">Overall Progress</h3>
				<div className="flex items-center">
					<Progress
						value={overallProgress}
						className="flex-grow mr-4"
					/>
					<span className="text-sm font-medium">
						{overallProgress.toFixed(0)}%
					</span>
				</div>
			</div>
			{steps.map((step) => (
				<RoadmapStep key={step.id} step={step} />
			))}
		</div>
	);
};

const AIInsights = () => (
	<Card className="mb-8">
		<CardHeader>
			<CardTitle className="text-xl">AI-Powered Insights</CardTitle>
		</CardHeader>
		<CardContent>
			<p className="mb-4">
				Based on your progress and GitHub activity, we recommend:
			</p>
			<ul className="list-disc list-inside space-y-2">
				<li>Dive deeper into JavaScript Promises and Async/Await</li>
				<li>
					Explore React Hooks for more efficient component management
				</li>
				<li>
					Consider starting a small full-stack project to apply your
					skills
				</li>
			</ul>
		</CardContent>
	</Card>
);

const Footer = () => (
	<footer className="mt-12 border-t border-border pt-6">
		<div className="flex w-full h-full   flex-wrap justify-between items-center">
			<div className="w-full md:w-1/2 mb-4 md:mb-0">
				<h4 className="font-semibold mb-2">Feedback</h4>
				<Textarea
					placeholder="Share your thoughts or suggestions..."
					rows={5}
					className="w-full resize-none"
				/>
				<Button className="mt-2">Submit Feedback</Button>
			</div>
			<div className="w-full md:w-1/2 md:text-right">
				<Button variant="outline" className="mr-2">
					<Download className="h-4 w-4 mr-2" />
					Export Roadmap
				</Button>
				<Button variant="ghost">
					<HelpCircle className="h-4 w-4 mr-2" />
					Help & Support
				</Button>
			</div>
		</div>
	</footer>
);

export default function RoadmapPage() {
	return (
		<div className="container w-full min-h-[calc(100vh-72px)] overflow-y-auto px-4 py-8">
			<motion.div
				layout
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Header />
				<RoadmapTimeline steps={roadmapSteps} />
				<AIInsights />
				<Footer />
			</motion.div>
		</div>
	);
}
