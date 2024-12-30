"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
	ChevronRight,
	Search,
	RefreshCcw,
	Plus,
	Star,
	GitFork,
	Clock,
	ArrowUpRight,
	Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Mock data for repositories
const repositories = [
	{
		id: 1,
		name: "awesome-project",
		description: "A collection of awesome things.",
		language: "JavaScript",
		stars: 120,
		forks: 35,
		lastUpdated: "2023-06-15T10:30:00Z",
		codebaseSize: 15000,
		complexity: "Medium",
		recentActivity: {
			lastCommit: "2023-06-14T18:45:00Z",
			author: "johndoe",
		},
		aiRecommendations: [
			"Consider adding more unit tests",
			"Update documentation for new features",
		],
	},
	{
		id: 2,
		name: "data-viz-library",
		description: "A powerful data visualization library.",
		language: "TypeScript",
		stars: 89,
		forks: 12,
		lastUpdated: "2023-06-10T14:20:00Z",
		codebaseSize: 8000,
		complexity: "High",
		recentActivity: {
			lastCommit: "2023-06-09T22:15:00Z",
			author: "janesmith",
		},
		aiRecommendations: [
			"Optimize rendering performance",
			"Add examples for complex use cases",
		],
	},
	// Add more mock repositories as needed
];

const Header = () => (
	<div className="mb-8">
		<div className="flex items-center mb-4 text-sm text-muted-foreground">
			<Link href="/dashboard" className="hover:text-primary">
				Dashboard
			</Link>
			<ChevronRight className="h-4 w-4 mx-2" />
			<span className="font-medium text-foreground">Repositories</span>
		</div>
		<h1 className="text-3xl font-bold">My Repositories</h1>
	</div>
);

const SearchAndFilters = () => (
	<div className="flex flex-col md:flex-row gap-4 mb-6">
		<div className="flex-grow">
			<Input placeholder="Search repositories..." />
		</div>
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Filter by language" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="all">All Languages</SelectItem>
				<SelectItem value="javascript">JavaScript</SelectItem>
				<SelectItem value="typescript">TypeScript</SelectItem>
				<SelectItem value="python">Python</SelectItem>
			</SelectContent>
		</Select>
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Filter by status" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="all">All Status</SelectItem>
				<SelectItem value="active">Active</SelectItem>
				<SelectItem value="archived">Archived</SelectItem>
			</SelectContent>
		</Select>
	</div>
);

const RepositoryCard = ({ repo }: { repo: (typeof repositories)[0] }) => (
	<Card className="mb-6">
		<CardHeader>
			<CardTitle className="text-xl flex items-center justify-between">
				<Link
					href={`/dashboard/repositories/${repo.id}`}
					className="hover:underline"
				>
					{repo.name}
				</Link>
				<Badge>{repo.language}</Badge>
			</CardTitle>
			<CardDescription>{repo.description}</CardDescription>
		</CardHeader>
		<CardContent>
			<div className="flex justify-between items-center mb-4">
				<div className="flex items-center space-x-4">
					<span className="flex items-center">
						<Star className="h-4 w-4 mr-1" />
						{repo.stars}
					</span>
					<span className="flex items-center">
						<GitFork className="h-4 w-4 mr-1" />
						{repo.forks}
					</span>
				</div>
				<span className="flex items-center text-sm text-muted-foreground">
					<Clock className="h-4 w-4 mr-1" />
					Last updated:{" "}
					{new Date(repo.lastUpdated).toLocaleDateString()}
				</span>
			</div>
			<div className="space-y-2">
				<div className="flex justify-between text-sm">
					<span>
						Codebase Size: {repo.codebaseSize.toLocaleString()}{" "}
						lines
					</span>
					<span>Complexity: {repo.complexity}</span>
				</div>
				<div className="text-sm">
					<span className="font-medium">Recent Activity: </span>
					Last commit by {repo.recentActivity.author} on{" "}
					{new Date(
						repo.recentActivity.lastCommit
					).toLocaleDateString()}
				</div>
				<div className="text-sm">
					<span className="font-medium">AI Recommendations:</span>
					<ul className="list-disc list-inside mt-1">
						{repo.aiRecommendations.map((rec, index) => (
							<li key={index}>{rec}</li>
						))}
					</ul>
				</div>
			</div>
		</CardContent>
		<CardFooter className="flex justify-between">
			<Button variant="outline" asChild>
				<Link href={`/dashboard/repositories/${repo.id}`}>
					View Details <ArrowUpRight className="h-4 w-4 ml-2" />
				</Link>
			</Button>
			<Button>
				<Zap className="h-4 w-4 mr-2" />
				Trigger AI Review
			</Button>
		</CardFooter>
	</Card>
);

const ActionButtons = () => (
	<div className="flex justify-between mb-6">
		<Button>
			<RefreshCcw className="h-4 w-4 mr-2" />
			Refresh Repositories
		</Button>
		<Button variant="outline">
			<Plus className="h-4 w-4 mr-2" />
			Connect More Repositories
		</Button>
	</div>
);

const Footer = () => (
	<footer className="mt-12 border-t border-border pt-6">
		<div className="flex flex-wrap justify-between items-center">
			<div className="space-x-4">
				<Link
					href="/dashboard/ai-reviews"
					className="text-primary hover:underline"
				>
					AI Code Reviews
				</Link>
				<Link
					href="/dashboard/roadmap"
					className="text-primary hover:underline"
				>
					Roadmap
				</Link>
				<Link
					href="/dashboard/profile"
					className="text-primary hover:underline"
				>
					Profile
				</Link>
			</div>
			<div className="mt-4 md:mt-0">
				<span className="text-muted-foreground">
					Need help with a repository?
				</span>
				<Link
					href="/dashboard/community"
					className="ml-2 text-primary hover:underline"
				>
					Join the Community
				</Link>
			</div>
		</div>
	</footer>
);

export default function RepositoriesPage() {
	return (
		<div className="container w-full min-h-[calc(100vh-72px)] overflow-y-auto px-4 py-8">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Header />
				<SearchAndFilters />
				<ActionButtons />
				{repositories.map((repo) => (
					<RepositoryCard key={repo.id} repo={repo} />
				))}
				<Footer />
			</motion.div>
		</div>
	);
}
