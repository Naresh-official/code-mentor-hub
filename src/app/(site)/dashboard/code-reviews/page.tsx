"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
	ChevronRight,
	Play,
	X,
	Clock,
	Star,
	ThumbsUp,
	ThumbsDown,
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
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for code reviews
const activeReviews = [
	{ id: 1, repository: "MyAwesomeRepo", status: "In Progress", progress: 65 },
	{ id: 2, repository: "AnotherProject", status: "Queued", progress: 0 },
];

const completedReviews = [
	{
		id: 3,
		repository: "CompletedRepo",
		date: "2023-06-18",
		summary: "Identified 5 areas with code duplication.",
		score: 85,
	},
	{
		id: 4,
		repository: "FixedProject",
		date: "2023-06-15",
		summary: "Improved code quality by 15%.",
		score: 92,
	},
	{
		id: 5,
		repository: "LegacyCode",
		date: "2023-06-10",
		summary: "Suggested modernization for 3 modules.",
		score: 40,
	},
];

const Header = () => (
	<div className="mb-8">
		<div className="flex items-center mb-4 text-sm text-muted-foreground">
			<Link href="/dashboard" className="hover:text-primary">
				Dashboard
			</Link>
			<ChevronRight className="h-4 w-4 mx-2" />
			<span className="font-medium text-foreground">Code Reviews</span>
		</div>
		<h1 className="text-3xl font-bold mb-2">Code Reviews</h1>
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
			<Card>
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-sm font-medium">
						Total Reviews
					</CardTitle>
					<CheckCircle className="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold">15</div>
				</CardContent>
			</Card>
			<Card>
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-sm font-medium">
						Pending Reviews
					</CardTitle>
					<Clock className="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold">2</div>
				</CardContent>
			</Card>
			<Card>
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
					<CardTitle className="text-sm font-medium">
						Avg. Review Time
					</CardTitle>
					<AlertCircle className="h-4 w-4 text-muted-foreground" />
				</CardHeader>
				<CardContent>
					<div className="text-2xl font-bold">2 days</div>
				</CardContent>
			</Card>
		</div>
	</div>
);

const ActiveReviews = ({ reviews }: { reviews: typeof activeReviews }) => (
	<Card className="mb-8">
		<CardHeader>
			<CardTitle className="text-xl">Active Code Reviews</CardTitle>
			<CardDescription>
				Reviews currently in progress or queued
			</CardDescription>
		</CardHeader>
		<CardContent>
			{reviews.map((review) => (
				<div key={review.id} className="mb-4 last:mb-0">
					<div className="flex justify-between items-center mb-2">
						<div>
							<h3 className="font-semibold">
								{review.repository}
							</h3>
							<p className="text-sm text-muted-foreground">
								Status: {review.status}
							</p>
						</div>
						<Button variant="destructive" size="sm">
							<X className="h-4 w-4 mr-2" />
							Cancel Review
						</Button>
					</div>
					<Progress value={review.progress} className="w-full" />
				</div>
			))}
		</CardContent>
	</Card>
);

const CompletedReviews = ({
	reviews,
}: {
	reviews: typeof completedReviews;
}) => (
	<Card className="mb-8">
		<CardHeader>
			<CardTitle className="text-xl">Completed Code Reviews</CardTitle>
			<CardDescription>Past reviews and their results</CardDescription>
		</CardHeader>
		<CardContent>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Repository</TableHead>
						<TableHead>Date</TableHead>
						<TableHead>Summary</TableHead>
						<TableHead>Score</TableHead>
						<TableHead>Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{reviews.map((review) => (
						<TableRow key={review.id}>
							<TableCell className="font-medium">
								{review.repository}
							</TableCell>
							<TableCell>
								{new Date(review.date).toLocaleDateString()}
							</TableCell>
							<TableCell>{review.summary}</TableCell>
							<TableCell>
								<Badge
									variant={
										review.score >= 90
											? "success"
											: review.score >= 70
											? "warning"
											: "destructive"
									}
								>
									{review.score}%
								</Badge>
							</TableCell>
							<TableCell>
								<div className="flex space-x-2">
									<Button variant="outline" size="sm">
										View Report
									</Button>
									<Button variant="outline" size="sm">
										AI Suggestions
									</Button>
								</div>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</CardContent>
	</Card>
);

const NewReviewDialog = () => {
	const [repository, setRepository] = useState("");
	const [focusArea, setFocusArea] = useState("");

	const handleStartReview = () => {
		console.log(
			"Starting review for:",
			repository,
			"Focus area:",
			focusArea
		);
		// Here you would typically trigger the review process
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>
					<Play className="h-4 w-4 mr-2" />
					Start New Review
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Start New Code Review</DialogTitle>
					<DialogDescription>
						Choose a repository and set focus areas for the AI code
						review.
					</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="repository" className="text-right">
							Repository
						</Label>
						<Select
							value={repository}
							onValueChange={setRepository}
						>
							<SelectTrigger className="col-span-3">
								<SelectValue placeholder="Select repository" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="repo1">
									MyAwesomeRepo
								</SelectItem>
								<SelectItem value="repo2">
									AnotherProject
								</SelectItem>
								<SelectItem value="repo3">
									LegacyCode
								</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="focusArea" className="text-right">
							Focus Area
						</Label>
						<Select value={focusArea} onValueChange={setFocusArea}>
							<SelectTrigger className="col-span-3">
								<SelectValue placeholder="Select focus area" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="performance">
									Performance
								</SelectItem>
								<SelectItem value="security">
									Security
								</SelectItem>
								<SelectItem value="codeQuality">
									Code Quality
								</SelectItem>
								<SelectItem value="all">All Areas</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
				<DialogFooter>
					<Button onClick={handleStartReview}>Start Review</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

const Footer = () => (
	<footer className="mt-12 border-t border-border pt-6">
		<div className="flex flex-wrap justify-between items-center">
			<div className="space-x-4">
				<Link
					href="/dashboard/best-practices"
					className="text-primary hover:underline"
				>
					Code Best Practices
				</Link>
				<Link
					href="/dashboard/ai-review-faq"
					className="text-primary hover:underline"
				>
					AI Review FAQ
				</Link>
				<Link
					href="/dashboard/support"
					className="text-primary hover:underline"
				>
					Support
				</Link>
			</div>
			<div className="mt-4 md:mt-0">
				<span className="text-muted-foreground">
					Need help improving your code?
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

export default function CodeReviewsPage() {
	return (
		<div className="container w-full min-h-[calc(100vh-72px)] overflow-y-auto px-4 py-8">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Header />

				<div className="flex justify-between items-center mb-6">
					<h2 className="text-2xl font-bold">Manage Reviews</h2>
					<NewReviewDialog />
				</div>

				<Tabs defaultValue="active" className="mb-8">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="active">Active Reviews</TabsTrigger>
						<TabsTrigger value="completed">
							Completed Reviews
						</TabsTrigger>
					</TabsList>
					<TabsContent value="active">
						<ActiveReviews reviews={activeReviews} />
					</TabsContent>
					<TabsContent value="completed">
						<CompletedReviews reviews={completedReviews} />
					</TabsContent>
				</Tabs>

				<Card>
					<CardHeader>
						<CardTitle className="text-xl">AI Feedback</CardTitle>
						<CardDescription>
							Help us improve our AI code review process
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="flex items-center justify-between">
							<span>Was the last AI review helpful?</span>
							<div className="space-x-2">
								<Button variant="outline" size="sm">
									<ThumbsUp className="h-4 w-4 mr-2" />
									Yes
								</Button>
								<Button variant="outline" size="sm">
									<ThumbsDown className="h-4 w-4 mr-2" />
									No
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>

				<Footer />
			</motion.div>
		</div>
	);
}
