"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
	Star,
	GitlabIcon as GitHub,
	Linkedin,
	Twitter,
	Calendar,
	MessageSquare,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

// Mock data for a mentor
const mentorData = {
	id: 1,
	name: "Alice Johnson",
	title: "Senior Frontend Developer",
	company: "Google",
	avatar: "/avatars/alice.jpg",
	overview:
		"With over 10 years of experience in frontend development, I specialize in React and TypeScript. I'm passionate about mentoring and helping developers grow in their careers.",
	skills: ["React", "TypeScript", "GraphQL", "Next.js", "TailwindCSS"],
	availability: "Available 3 days a week",
	rating: 4.9,
	reviews: [
		{
			id: 1,
			author: "John Doe",
			content:
				"Alice is an amazing mentor! Her insights on React best practices were invaluable.",
			rating: 5,
		},
		{
			id: 2,
			author: "Jane Smith",
			content:
				"Great experience working with Alice. She helped me improve my TypeScript skills significantly.",
			rating: 5,
		},
		{
			id: 3,
			author: "Bob Brown",
			content:
				"Alice's guidance on state management in React applications was extremely helpful.",
			rating: 4,
		},
	],
	github: "https://github.com/alicejohnson",
	linkedin: "https://linkedin.com/in/alicejohnson",
	twitter: "https://twitter.com/alicejohnson",
	recentProjects: [
		{
			id: 1,
			name: "React Performance Optimization",
			description:
				"A guide on optimizing React applications for better performance.",
			url: "https://github.com/alicejohnson/react-performance",
		},
		{
			id: 2,
			name: "TypeScript Design Patterns",
			description:
				"Implementation of common design patterns in TypeScript.",
			url: "https://github.com/alicejohnson/ts-design-patterns",
		},
	],
};

const Header = ({ mentor }: { mentor: typeof mentorData }) => (
	<div>
		<div className="flex items-center mb-4 text-sm text-muted-foreground">
			<Link href="/dashboard" className="hover:text-primary">
				Dashboard
			</Link>
			<ChevronRight className="h-4 w-4 mx-2" />
			<Link href="/dashboard/mentors" className="hover:text-primary">
				Mentors
			</Link>
			<ChevronRight className="h-4 w-4 mx-2" />
			<span className="font-medium text-foreground">{mentor.name}</span>
		</div>
		<div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6 mb-8">
			<Avatar className="w-24 h-24 md:w-32 md:h-32">
				<AvatarImage src={mentor.avatar} alt={mentor.name} />
				<AvatarFallback>
					{mentor.name
						.split(" ")
						.map((n) => n[0])
						.join("")}
				</AvatarFallback>
			</Avatar>
			<div className="text-center md:text-left">
				<h1 className="text-3xl font-bold">{mentor.name}</h1>
				<p className="text-xl text-muted-foreground">
					{mentor.title} at {mentor.company}
				</p>
				<div className="flex items-center justify-center md:justify-start mt-2">
					{[...Array(5)].map((_, i) => (
						<Star
							key={i}
							className={`h-5 w-5 ${
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
			</div>
		</div>
	</div>
);

const OverviewTab = ({ mentor }: { mentor: typeof mentorData }) => (
	<div className="space-y-6">
		<Card>
			<CardHeader>
				<CardTitle>About Me</CardTitle>
			</CardHeader>
			<CardContent>
				<p>{mentor.overview}</p>
			</CardContent>
		</Card>
		<Card>
			<CardHeader>
				<CardTitle>Skills & Expertise</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex flex-wrap gap-2">
					{mentor.skills.map((skill) => (
						<Badge key={skill} variant="secondary">
							{skill}
						</Badge>
					))}
				</div>
			</CardContent>
		</Card>
		<Card>
			<CardHeader>
				<CardTitle>Recent Projects</CardTitle>
			</CardHeader>
			<CardContent>
				{mentor.recentProjects.map((project) => (
					<div key={project.id} className="mb-4">
						<h3 className="text-lg font-semibold">
							{project.name}
						</h3>
						<p className="text-sm text-muted-foreground mb-2">
							{project.description}
						</p>
						<Link
							href={project.url}
							className="text-primary hover:underline"
							target="_blank"
							rel="noopener noreferrer"
						>
							View Project
						</Link>
					</div>
				))}
			</CardContent>
		</Card>
	</div>
);

const AvailabilityTab = ({ mentor }: { mentor: typeof mentorData }) => (
	<Card>
		<CardHeader>
			<CardTitle>Availability</CardTitle>
			<CardDescription>{mentor.availability}</CardDescription>
		</CardHeader>
		<CardContent>
			<div className="grid grid-cols-7 gap-2">
				{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
					(day) => (
						<div key={day} className="text-center">
							<div className="font-medium mb-2">{day}</div>
							<div className="h-24 bg-muted rounded-md flex items-center justify-center">
								{Math.random() > 0.5 ? (
									<span className="text-green-500">
										Available
									</span>
								) : (
									<span className="text-red-500">Busy</span>
								)}
							</div>
						</div>
					)
				)}
			</div>
		</CardContent>
		<CardFooter>
			<Button className="w-full">
				<Calendar className="mr-2 h-4 w-4" /> Schedule a Session
			</Button>
		</CardFooter>
	</Card>
);

const ReviewsTab = ({ mentor }: { mentor: typeof mentorData }) => (
	<div className="space-y-6">
		{mentor.reviews.map((review) => (
			<Card key={review.id}>
				<CardHeader>
					<div className="flex items-center justify-between">
						<CardTitle>{review.author}</CardTitle>
						<div className="flex">
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									className={`h-4 w-4 ${
										i < review.rating
											? "text-yellow-400"
											: "text-gray-300"
									}`}
									fill={
										i < review.rating
											? "currentColor"
											: "none"
									}
								/>
							))}
						</div>
					</div>
				</CardHeader>
				<CardContent>
					<p>{review.content}</p>
				</CardContent>
			</Card>
		))}
	</div>
);

const ContactTab = ({ mentor }: { mentor: typeof mentorData }) => (
	<Card>
		<CardHeader>
			<CardTitle>Contact {mentor.name}</CardTitle>
			<CardDescription>
				Send a message to request mentorship or ask a question
			</CardDescription>
		</CardHeader>
		<CardContent>
			<form className="space-y-4">
				<div>
					<label
						htmlFor="subject"
						className="block text-sm font-medium mb-1"
					>
						Subject
					</label>
					<input
						id="subject"
						type="text"
						className="w-full p-2 border rounded-md"
						placeholder="Enter subject"
					/>
				</div>
				<div>
					<label
						htmlFor="message"
						className="block text-sm font-medium mb-1"
					>
						Message
					</label>
					<textarea
						id="message"
						className="w-full p-2 border rounded-md"
						rows={4}
						placeholder="Enter your message"
					></textarea>
				</div>
			</form>
		</CardContent>
		<CardFooter>
			<Button className="w-full">
				<MessageSquare className="mr-2 h-4 w-4" /> Send Message
			</Button>
		</CardFooter>
	</Card>
);

const SocialLinks = ({ mentor }: { mentor: typeof mentorData }) => (
	<div className="flex justify-center space-x-4 mt-6">
		<Link
			href={mentor.github}
			className="text-muted-foreground hover:text-primary"
			target="_blank"
			rel="noopener noreferrer"
		>
			<GitHub className="h-6 w-6" />
		</Link>
		<Link
			href={mentor.linkedin}
			className="text-muted-foreground hover:text-primary"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Linkedin className="h-6 w-6" />
		</Link>
		<Link
			href={mentor.twitter}
			className="text-muted-foreground hover:text-primary"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Twitter className="h-6 w-6" />
		</Link>
	</div>
);

const MentorPagination = () => (
	<div className="flex justify-between items-center mt-8">
		<Button variant="outline">
			<ChevronLeft className="mr-2 h-4 w-4" /> Previous Mentor
		</Button>
		<Button variant="outline">
			Next Mentor <ChevronRight className="ml-2 h-4 w-4" />
		</Button>
	</div>
);

export default function MentorProfilePage() {
	const [activeTab, setActiveTab] = useState("overview");

	return (
		<div className="w-full min-h-[calc(100vh-72px)] overflow-y-auto mx-auto px-4 py-8">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Header mentor={mentorData} />

				<Tabs
					value={activeTab}
					onValueChange={setActiveTab}
					className="mb-8"
				>
					<TabsList className="grid w-full grid-cols-4">
						<TabsTrigger value="overview">Overview</TabsTrigger>
						<TabsTrigger value="availability">
							Availability
						</TabsTrigger>
						<TabsTrigger value="reviews">Reviews</TabsTrigger>
						<TabsTrigger value="contact">Contact</TabsTrigger>
					</TabsList>
					<TabsContent value="overview">
						<OverviewTab mentor={mentorData} />
					</TabsContent>
					<TabsContent value="availability">
						<AvailabilityTab mentor={mentorData} />
					</TabsContent>
					<TabsContent value="reviews">
						<ReviewsTab mentor={mentorData} />
					</TabsContent>
					<TabsContent value="contact">
						<ContactTab mentor={mentorData} />
					</TabsContent>
				</Tabs>

				<div className="flex justify-center space-x-4">
					<Button className="w-48">
						<Calendar className="mr-2 h-4 w-4" /> View Calendar
					</Button>
					<Button className="w-48">
						<MessageSquare className="mr-2 h-4 w-4" /> Request
						Mentorship
					</Button>
				</div>

				<SocialLinks mentor={mentorData} />

				<MentorPagination />
			</motion.div>
		</div>
	);
}
