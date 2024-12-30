"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
	ChevronRight,
	Star,
	GitFork,
	Clock,
	FileText,
	GitCommit,
	Zap,
	Edit,
	Github,
	AlertCircle,
	CheckCircle,
	XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for the repository
const repositoryData = {
	id: "1",
	name: "MyAwesomeRepo",
	description: "A full-stack application built with React and Node.js.",
	stars: 120,
	forks: 25,
	language: "JavaScript",
	lastCommit: "2023-06-20T10:30:00Z",
	openIssues: 5,
	openPRs: 2,
	aiInsights: {
		codeDuplication: 3,
		complexityIssues: ["High complexity in utils.js"],
		testCoverage: 50,
		documentationGaps: ["Missing API documentation in server.js"],
	},
	recentCommits: [
		{
			id: "c1",
			message: "Fix login bug",
			author: "johndoe",
			timestamp: "2023-06-20T10:30:00Z",
		},
		{
			id: "c2",
			message: "Add new feature",
			author: "janedoe",
			timestamp: "2023-06-19T15:45:00Z",
		},
		{
			id: "c3",
			message: "Update dependencies",
			author: "johndoe",
			timestamp: "2023-06-18T09:20:00Z",
		},
		{
			id: "c4",
			message: "Refactor utils",
			author: "janedoe",
			timestamp: "2023-06-17T14:10:00Z",
		},
		{
			id: "c5",
			message: "Initial commit",
			author: "johndoe",
			timestamp: "2023-06-16T11:00:00Z",
		},
	],
	fileStructure: [
		{
			name: "src",
			type: "folder",
			children: [
				{ name: "components", type: "folder" },
				{ name: "utils", type: "folder" },
				{ name: "App.js", type: "file" },
				{ name: "index.js", type: "file" },
			],
		},
		{ name: "tests", type: "folder" },
		{ name: "docs", type: "folder" },
		{ name: "package.json", type: "file" },
		{ name: "README.md", type: "file" },
	],
};

const Header = ({ repo }: { repo: typeof repositoryData }) => (
	<div className="mb-8">
		<div className="flex items-center mb-4 text-sm text-muted-foreground">
			<Link href="/dashboard" className="hover:text-primary">
				Dashboard
			</Link>
			<ChevronRight className="h-4 w-4 mx-2" />
			<Link href="/dashboard/repositories" className="hover:text-primary">
				Repositories
			</Link>
			<ChevronRight className="h-4 w-4 mx-2" />
			<span className="font-medium text-foreground">{repo.name}</span>
		</div>
		<div className="flex justify-between items-start">
			<div>
				<h1 className="text-3xl font-bold mb-2">{repo.name}</h1>
				<p className="text-muted-foreground">{repo.description}</p>
			</div>
			<div className="flex space-x-2">
				<Button variant="outline" asChild>
					<Link
						href={`https://github.com/username/${repo.name}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Github className="h-4 w-4 mr-2" />
						View on GitHub
					</Link>
				</Button>
				<Button>
					<Edit className="h-4 w-4 mr-2" />
					Edit Repository
				</Button>
			</div>
		</div>
	</div>
);

const RepositoryStats = ({ repo }: { repo: typeof repositoryData }) => (
	<Card className="mb-8">
		<CardContent className="p-6">
			<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
				<div className="flex items-center">
					<Star className="h-5 w-5 mr-2 text-yellow-400" />
					<div>
						<div className="text-2xl font-bold">{repo.stars}</div>
						<div className="text-sm text-muted-foreground">
							Stars
						</div>
					</div>
				</div>
				<div className="flex items-center">
					<GitFork className="h-5 w-5 mr-2 text-blue-400" />
					<div>
						<div className="text-2xl font-bold">{repo.forks}</div>
						<div className="text-sm text-muted-foreground">
							Forks
						</div>
					</div>
				</div>
				<div className="flex items-center">
					<AlertCircle className="h-5 w-5 mr-2 text-red-400" />
					<div>
						<div className="text-2xl font-bold">
							{repo.openIssues}
						</div>
						<div className="text-sm text-muted-foreground">
							Open Issues
						</div>
					</div>
				</div>
				<div className="flex items-center">
					<GitCommit className="h-5 w-5 mr-2 text-green-400" />
					<div>
						<div className="text-2xl font-bold">{repo.openPRs}</div>
						<div className="text-sm text-muted-foreground">
							Open PRs
						</div>
					</div>
				</div>
			</div>
			<div className="mt-4 flex items-center justify-between">
				<Badge>{repo.language}</Badge>
				<div className="flex items-center text-sm text-muted-foreground">
					<Clock className="h-4 w-4 mr-1" />
					Last commit:{" "}
					{new Date(repo.lastCommit).toLocaleDateString()}
				</div>
			</div>
		</CardContent>
	</Card>
);

const AIInsights = ({
	insights,
}: {
	insights: typeof repositoryData.aiInsights;
}) => (
	<Card className="mb-8">
		<CardHeader>
			<CardTitle className="text-xl flex items-center">
				<Zap className="h-5 w-5 mr-2 text-yellow-400" />
				AI-Generated Insights
			</CardTitle>
		</CardHeader>
		<CardContent>
			<div className="space-y-4">
				<div>
					<div className="font-medium mb-1">Code Duplication</div>
					<div className="flex items-center">
						<Progress
							value={insights.codeDuplication * 10}
							className="mr-2"
						/>
						<span>{insights.codeDuplication} areas identified</span>
					</div>
				</div>
				<div>
					<div className="font-medium mb-1">Complexity Issues</div>
					<ul className="list-disc list-inside">
						{insights.complexityIssues.map((issue, index) => (
							<li key={index}>{issue}</li>
						))}
					</ul>
				</div>
				<div>
					<div className="font-medium mb-1">Test Coverage</div>
					<div className="flex items-center">
						<Progress
							value={insights.testCoverage}
							className="mr-2"
						/>
						<span>
							{insights.testCoverage}% coverage in core modules
						</span>
					</div>
				</div>
				<div>
					<div className="font-medium mb-1">Documentation Gaps</div>
					<ul className="list-disc list-inside">
						{insights.documentationGaps.map((gap, index) => (
							<li key={index}>{gap}</li>
						))}
					</ul>
				</div>
			</div>
		</CardContent>
		<CardFooter>
			<Button className="w-full">
				<Zap className="h-4 w-4 mr-2" />
				Trigger Full AI Code Review
			</Button>
		</CardFooter>
	</Card>
);

const RecentCommits = ({
	commits,
}: {
	commits: typeof repositoryData.recentCommits;
}) => (
	<Card className="mb-8">
		<CardHeader>
			<CardTitle className="text-xl">Recent Commits</CardTitle>
		</CardHeader>
		<CardContent>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Message</TableHead>
						<TableHead>Author</TableHead>
						<TableHead>Date</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{commits.map((commit) => (
						<TableRow key={commit.id}>
							<TableCell>{commit.message}</TableCell>
							<TableCell>{commit.author}</TableCell>
							<TableCell>
								{new Date(
									commit.timestamp
								).toLocaleDateString()}
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</CardContent>
	</Card>
);

const FileStructure = ({
	files,
}: {
	files: typeof repositoryData.fileStructure;
}) => {
	const renderFileTree = (items: typeof files) => (
		<ul className="pl-4">
			{items.map((item, index) => (
				<li key={index} className="py-1">
					{item.type === "folder" ? (
						<Accordion type="single" collapsible>
							<AccordionItem value={item.name}>
								<AccordionTrigger>{item.name}</AccordionTrigger>
								<AccordionContent>
									{item.children &&
										renderFileTree(item.children)}
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					) : (
						<div className="flex items-center">
							<FileText className="h-4 w-4 mr-2" />
							{item.name}
						</div>
					)}
				</li>
			))}
		</ul>
	);

	return (
		<Card className="mb-8">
			<CardHeader>
				<CardTitle className="text-xl">File Structure</CardTitle>
			</CardHeader>
			<CardContent>{renderFileTree(files)}</CardContent>
		</Card>
	);
};

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
					Want to contribute?
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

export default function RepositoryDetailsPage() {
	const [activeTab, setActiveTab] = useState("overview");

	return (
		<div className="container w-full min-h-[calc(100vh-72px)] overflow-y-auto px-4 py-8">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Header repo={repositoryData} />
				<RepositoryStats repo={repositoryData} />

				<Tabs
					value={activeTab}
					onValueChange={setActiveTab}
					className="mb-8"
				>
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="insights">AI Insights</TabsTrigger>
						<TabsTrigger value="files">Files</TabsTrigger>
					</TabsList>
					<TabsContent value="overview">
						<RecentCommits commits={repositoryData.recentCommits} />
					</TabsContent>
					<TabsContent value="insights">
						<AIInsights insights={repositoryData.aiInsights} />
					</TabsContent>
					<TabsContent value="files">
						<FileStructure files={repositoryData.fileStructure} />
					</TabsContent>
				</Tabs>

				<Footer />
			</motion.div>
		</div>
	);
}
