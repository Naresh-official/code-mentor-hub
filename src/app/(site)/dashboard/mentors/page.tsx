"use client";

import { motion } from "framer-motion";
import { Search, Filter, Star, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

type Mentor = {
	id: number;
	name: string;
	title: string;
	avatar: string;
	skills: string[];
	availability: string;
	rating: number;
};

const mentors: Mentor[] = [
	{
		id: 1,
		name: "Alice Johnson",
		title: "Senior Frontend Developer at Google",
		avatar: "/avatars/alice.jpg",
		skills: ["React", "TypeScript", "GraphQL"],
		availability: "Available Now",
		rating: 4.9,
	},
	{
		id: 2,
		name: "Bob Smith",
		title: "Machine Learning Engineer at Amazon",
		avatar: "/avatars/bob.jpg",
		skills: ["Python", "TensorFlow", "AWS"],
		availability: "Next Available: 2 days",
		rating: 4.7,
	},
	{
		id: 3,
		name: "Carol Williams",
		title: "Full Stack Developer at Microsoft",
		avatar: "/avatars/carol.jpg",
		skills: ["Node.js", "React", "Azure"],
		availability: "Available Now",
		rating: 4.8,
	},
	{
		id: 4,
		name: "David Brown",
		title: "iOS Developer at Apple",
		avatar: "/avatars/david.jpg",
		skills: ["Swift", "SwiftUI", "Core Data"],
		availability: "Next Available: 1 day",
		rating: 4.9,
	},
	{
		id: 5,
		name: "Eva Garcia",
		title: "DevOps Engineer at Netflix",
		avatar: "/avatars/eva.jpg",
		skills: ["Kubernetes", "Docker", "CI/CD"],
		availability: "Available Now",
		rating: 4.6,
	},
	{
		id: 6,
		name: "Frank Lee",
		title: "Blockchain Developer at Ethereum Foundation",
		avatar: "/avatars/frank.jpg",
		skills: ["Solidity", "Web3.js", "Smart Contracts"],
		availability: "Next Available: 3 days",
		rating: 4.8,
	},
];

const SearchBar = () => (
	<div className="relative w-full max-w-xl mx-auto mb-8">
		<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
		<Input
			className="pl-10 pr-16"
			placeholder="Search mentors by name, skills, or company"
		/>
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					className="absolute right-1 top-1/2 transform -translate-y-1/2"
				>
					<Filter className="mr-2 h-4 w-4" />
					Filters
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Filter By</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Skills</DropdownMenuItem>
				<DropdownMenuItem>Availability</DropdownMenuItem>
				<DropdownMenuItem>Languages</DropdownMenuItem>
				<DropdownMenuItem>Ratings</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	</div>
);

const QuickTags = () => (
	<div className="flex flex-wrap justify-center gap-2 mb-8">
		{["JavaScript", "React", "Python", "AI", "DevOps"].map((tag) => (
			<Badge
				key={tag}
				variant="secondary"
				className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
			>
				#{tag}
			</Badge>
		))}
	</div>
);

const MentorCard = ({ mentor }: { mentor: Mentor }) => (
	<motion.div
		initial={{ opacity: 0, y: 20, scale: 0.8 }}
		animate={{ opacity: 1, y: 0, scale: 1 }}
		transition={{ duration: 0.3 }}
	>
		<Card className="h-full">
			<CardHeader>
				<div className="flex items-center space-x-4">
					<Avatar className="w-12 h-12">
						<AvatarImage src={mentor.avatar} alt={mentor.name} />
						<AvatarFallback>
							{mentor.name
								.split(" ")
								.map((n) => n[0])
								.join("")}
						</AvatarFallback>
					</Avatar>
					<div>
						<CardTitle>{mentor.name}</CardTitle>
						<CardDescription>{mentor.title}</CardDescription>
					</div>
				</div>
			</CardHeader>
			<CardContent>
				<div className="flex flex-wrap gap-2 mb-4">
					{mentor.skills.map((skill) => (
						<Badge key={skill} variant="outline">
							{skill}
						</Badge>
					))}
				</div>
				<p
					className={`text-sm font-medium ${
						mentor.availability.startsWith("Available")
							? "text-green-500"
							: "text-yellow-500"
					}`}
				>
					{mentor.availability}
				</p>
				<div className="flex items-center mt-2">
					{[...Array(5)].map((_, i) => (
						<Star
							key={i}
							className={`h-4 w-4 ${
								i < Math.floor(mentor.rating)
									? "text-yellow-400"
									: "text-gray-300"
							}`}
							fill={
								i < Math.floor(mentor.rating)
									? "currentColor"
									: "none"
							}
						/>
					))}
					<span className="ml-2 text-sm text-muted-foreground">
						{mentor.rating.toFixed(1)}
					</span>
				</div>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="outline">View Profile</Button>
				<Button>Request Mentorship</Button>
			</CardFooter>
		</Card>
	</motion.div>
);

const Pagination = () => (
	<div className="flex justify-center mt-8 space-x-2">
		<Button className="border-2 border-primary" disabled>
			Previous
		</Button>
		<Button variant="outline" className="border-2 border-primary">
			1
		</Button>
		<Button variant="outline" className="border-2 border-primary">
			2
		</Button>
		<Button variant="outline" className="border-2 border-primary">
			3
		</Button>
		<Button className="border-2 border-primary">Next</Button>
	</div>
);

export default function MentorsPage() {
	return (
		<div className="p-6 w-full min-h-[calc(100vh-72px)] overflow-y-auto mx-auto">
			<div className="flex items-center mb-4 text-sm text-muted-foreground">
				<Link href="/dashboard" className="hover:text-primary">
					Dashboard
				</Link>
				<ChevronRight className="h-4 w-4 mx-2" />
				<span className="font-medium text-foreground">Mentors</span>
			</div>
			<h1 className="text-3xl font-bold mb-8 text-center">
				Find Your Mentor
			</h1>
			<SearchBar />
			<QuickTags />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{mentors.map((mentor) => (
					<MentorCard key={mentor.id} mentor={mentor} />
				))}
			</div>
			<Pagination />
		</div>
	);
}
