"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
	ChevronRight,
	Search,
	Filter,
	MessageSquare,
	HelpCircle,
	Megaphone,
	Trophy,
	User,
	Star,
	ThumbsUp,
	AlertTriangle,
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

// Mock data
const categories = [
	{
		id: "ai",
		name: "AI Development",
		icon: <MessageSquare className="h-4 w-4" />,
	},
	{
		id: "web",
		name: "Web Development",
		icon: <MessageSquare className="h-4 w-4" />,
	},
	{
		id: "career",
		name: "Career Advice",
		icon: <MessageSquare className="h-4 w-4" />,
	},
	{
		id: "reviews",
		name: "Code Reviews",
		icon: <MessageSquare className="h-4 w-4" />,
	},
	{
		id: "general",
		name: "General Discussion",
		icon: <MessageSquare className="h-4 w-4" />,
	},
];

const discussions = [
	{
		id: 1,
		title: "Best practices for implementing AI in web applications",
		author: "Alice Johnson",
		authorRole: "mentor",
		category: "AI Development",
		replies: 15,
		upvotes: 32,
		tags: ["AI", "Web Dev", "Best Practices"],
		summary:
			"This thread discusses various approaches to integrating AI features in web applications, focusing on performance optimization and user experience.",
	},
	{
		id: 2,
		title: "Career transition: From backend to full-stack development",
		author: "Bob Smith",
		authorRole: "mentee",
		category: "Career Advice",
		replies: 8,
		upvotes: 24,
		tags: ["Career", "Full-stack", "Learning"],
		summary:
			"Users share experiences and advice on transitioning from backend to full-stack development, including recommended learning resources and potential challenges.",
	},
	// Add more mock discussions as needed
];

const announcements = [
	{
		id: 1,
		title: "New AI-powered code review feature launched!",
		content:
			"We're excited to announce our new AI-powered code review feature. Get instant feedback on your code quality and suggestions for improvement.",
		date: "2023-06-25",
	},
	{
		id: 2,
		title: "Upcoming webinar: Mastering React Hooks",
		content:
			"Join us for a live webinar on mastering React Hooks, hosted by senior React developer Sarah Lee. Date: July 15, 2023",
		date: "2023-06-28",
	},
];

const challenges = [
	{
		id: 1,
		title: "30-Day Coding Challenge: Build a Full-Stack App",
		description:
			"Create a full-stack application using your preferred technologies. Prizes for the most innovative solutions!",
		participants: 156,
		daysLeft: 22,
	},
	{
		id: 2,
		title: "AI Chatbot Hackathon",
		description:
			"Develop an AI-powered chatbot that can assist junior developers with coding questions.",
		participants: 89,
		daysLeft: 5,
	},
];

const CommunityHeader = () => (
	<div className="mb-8">
		<div className="flex items-center mb-4 text-sm text-muted-foreground">
			<Link href="/dashboard" className="hover:text-primary">
				Dashboard
			</Link>
			<ChevronRight className="h-4 w-4 mx-2" />
			<span className="font-medium text-foreground">Community</span>
		</div>
		<h1 className="text-3xl font-bold mb-2">Community Hub</h1>
		<p className="text-muted-foreground">
			Connect, learn, and grow with fellow developers
		</p>
	</div>
);

const SearchAndFilter = () => (
	<div className="flex flex-col md:flex-row gap-4 mb-6">
		<div className="flex-grow">
			<Input
				placeholder="Search discussions, questions, or users..."
				className="w-full"
			/>
		</div>
		<Select>
			<SelectTrigger className="w-full md:w-[180px]">
				<SelectValue placeholder="Filter by category" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="all">All Categories</SelectItem>
				{categories.map((category) => (
					<SelectItem key={category.id} value={category.id}>
						{category.name}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
		<Button variant="outline">
			<Filter className="h-4 w-4 mr-2" />
			More Filters
		</Button>
	</div>
);

const CategoryList = () => (
	<Card className="mb-6">
		<CardHeader>
			<CardTitle>Categories</CardTitle>
		</CardHeader>
		<CardContent>
			<ul className="space-y-2">
				{categories.map((category) => (
					<li key={category.id}>
						<Button
							variant="ghost"
							className="w-full justify-start"
						>
							{category.icon}
							<span className="ml-2">{category.name}</span>
						</Button>
					</li>
				))}
			</ul>
		</CardContent>
	</Card>
);

const DiscussionCard = ({
	discussion,
}: {
	discussion: (typeof discussions)[0];
}) => (
	<Card className="mb-4">
		<CardHeader>
			<div className="flex justify-between items-start">
				<div>
					<CardTitle className="text-lg">
						{discussion.title}
					</CardTitle>
					<CardDescription>
						by {discussion.author}
						<Badge
							variant={
								discussion.authorRole === "mentor"
									? "default"
									: "secondary"
							}
							className="ml-2"
						>
							{discussion.authorRole}
						</Badge>
					</CardDescription>
				</div>
				<Badge>{discussion.category}</Badge>
			</div>
		</CardHeader>
		<CardContent>
			<p className="text-sm text-muted-foreground mb-2">
				{discussion.summary}
			</p>
			<div className="flex flex-wrap gap-2">
				{discussion.tags.map((tag, index) => (
					<Badge key={index} variant="outline">
						{tag}
					</Badge>
				))}
			</div>
		</CardContent>
		<CardFooter className="flex justify-between">
			<div className="flex items-center space-x-4">
				<span className="text-sm text-muted-foreground">
					{discussion.replies} replies
				</span>
				<span className="text-sm text-muted-foreground">
					{discussion.upvotes} upvotes
				</span>
			</div>
			<Button variant="ghost">View Discussion</Button>
		</CardFooter>
	</Card>
);

const AnnouncementCard = ({
	announcement,
}: {
	announcement: (typeof announcements)[0];
}) => (
	<Card className="mb-4">
		<CardHeader>
			<CardTitle className="text-lg flex items-center">
				<Megaphone className="h-5 w-5 mr-2 text-primary" />
				{announcement.title}
			</CardTitle>
			<CardDescription>
				{new Date(announcement.date).toLocaleDateString()}
			</CardDescription>
		</CardHeader>
		<CardContent>
			<p className="text-sm">{announcement.content}</p>
		</CardContent>
	</Card>
);

const ChallengeCard = ({
	challenge,
}: {
	challenge: (typeof challenges)[0];
}) => (
	<Card className="mb-4">
		<CardHeader>
			<CardTitle className="text-lg flex items-center">
				<Trophy className="h-5 w-5 mr-2 text-primary" />
				{challenge.title}
			</CardTitle>
		</CardHeader>
		<CardContent>
			<p className="text-sm mb-2">{challenge.description}</p>
			<div className="flex justify-between items-center">
				<span className="text-sm text-muted-foreground">
					{challenge.participants} participants
				</span>
				<Badge variant="outline">{challenge.daysLeft} days left</Badge>
			</div>
		</CardContent>
		<CardFooter>
			<Button className="w-full">Join Challenge</Button>
		</CardFooter>
	</Card>
);

const MentorSpotlight = () => (
	<Card className="mb-6">
		<CardHeader>
			<CardTitle className="flex items-center">
				<Star className="h-5 w-5 mr-2 text-yellow-500" />
				Mentor Spotlight
			</CardTitle>
		</CardHeader>
		<CardContent className="flex items-center space-x-4">
			<Avatar className="h-16 w-16">
				<AvatarImage src="/avatars/mentor-jane.jpg" alt="Jane Doe" />
				<AvatarFallback>JD</AvatarFallback>
			</Avatar>
			<div>
				<h3 className="font-semibold">Jane Doe</h3>
				<p className="text-sm text-muted-foreground">
					Senior Full-Stack Developer
				</p>
				<p className="text-sm mt-1">Helped 50+ mentees this month</p>
			</div>
		</CardContent>
	</Card>
);

const CommunityStats = () => (
	<Card className="mb-6">
		<CardHeader>
			<CardTitle>Community Stats</CardTitle>
		</CardHeader>
		<CardContent>
			<div className="grid grid-cols-2 gap-4">
				<div className="text-center">
					<p className="text-2xl font-bold">5,234</p>
					<p className="text-sm text-muted-foreground">
						Active Members
					</p>
				</div>
				<div className="text-center">
					<p className="text-2xl font-bold">1,876</p>
					<p className="text-sm text-muted-foreground">Discussions</p>
				</div>
				<div className="text-center">
					<p className="text-2xl font-bold">342</p>
					<p className="text-sm text-muted-foreground">Mentors</p>
				</div>
				<div className="text-center">
					<p className="text-2xl font-bold">15,689</p>
					<p className="text-sm text-muted-foreground">
						Questions Answered
					</p>
				</div>
			</div>
		</CardContent>
	</Card>
);

export default function CommunityPage() {
	return (
		<div className="container w-full min-h-[calc(100vh-72px)] overflow-y-auto px-4 py-8">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<CommunityHeader />
				<SearchAndFilter />

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="md:col-span-1">
						<CategoryList />
						<MentorSpotlight />
						<CommunityStats />
					</div>

					<div className="md:col-span-2">
						<Tabs defaultValue="discussions" className="mb-6">
							<TabsList className="grid w-full grid-cols-4">
								<TabsTrigger value="discussions">
									Discussions
								</TabsTrigger>
								<TabsTrigger value="qa">Q&A</TabsTrigger>
								<TabsTrigger value="announcements">
									Announcements
								</TabsTrigger>
								<TabsTrigger value="challenges">
									Challenges
								</TabsTrigger>
							</TabsList>
							<TabsContent value="discussions">
								{discussions.map((discussion) => (
									<DiscussionCard
										key={discussion.id}
										discussion={discussion}
									/>
								))}
							</TabsContent>
							<TabsContent value="qa">
								<Card>
									<CardHeader>
										<CardTitle>Q&A Section</CardTitle>
										<CardDescription>
											Ask and answer coding questions
										</CardDescription>
									</CardHeader>
									<CardContent>
										<Button className="w-full">
											<HelpCircle className="h-4 w-4 mr-2" />
											Ask a Question
										</Button>
									</CardContent>
								</Card>
							</TabsContent>
							<TabsContent value="announcements">
								{announcements.map((announcement) => (
									<AnnouncementCard
										key={announcement.id}
										announcement={announcement}
									/>
								))}
							</TabsContent>
							<TabsContent value="challenges">
								{challenges.map((challenge) => (
									<ChallengeCard
										key={challenge.id}
										challenge={challenge}
									/>
								))}
							</TabsContent>
						</Tabs>
					</div>
				</div>

				<footer className="mt-12 border-t border-border pt-6">
					<div className="flex flex-wrap justify-between items-center">
						<div className="space-x-4">
							<Link
								href="/community-guidelines"
								className="text-primary hover:underline"
							>
								Community Guidelines
							</Link>
							<Link
								href="/faq"
								className="text-primary hover:underline"
							>
								FAQ
							</Link>
						</div>
						<div className="mt-4 md:mt-0">
							<Button variant="outline">
								<AlertTriangle className="h-4 w-4 mr-2" />
								Report an Issue
							</Button>
						</div>
					</div>
				</footer>
			</motion.div>
		</div>
	);
}
