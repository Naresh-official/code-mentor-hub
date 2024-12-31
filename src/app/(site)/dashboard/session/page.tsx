"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
	ChevronRight,
	Calendar,
	Clock,
	Video,
	MessageCircle,
	Download,
	Star,
	Plus,
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";

// Mock data for sessions
const upcomingSessions = [
	{
		id: 1,
		date: "2023-07-01T10:00:00Z",
		mentor: { name: "Alice Johnson", avatar: "/avatars/alice.jpg" },
		status: "Confirmed",
		topic: "React Performance Optimization",
	},
	{
		id: 2,
		date: "2023-07-03T15:30:00Z",
		mentor: { name: "Bob Smith", avatar: "/avatars/bob.jpg" },
		status: "Pending",
		topic: "Advanced TypeScript Techniques",
	},
];

const pastSessions = [
	{
		id: 3,
		date: "2023-06-28T14:00:00Z",
		mentor: { name: "Carol Williams", avatar: "/avatars/carol.jpg" },
		status: "Completed",
		topic: "Introduction to GraphQL",
		feedbackGiven: true,
	},
	{
		id: 4,
		date: "2023-06-25T11:00:00Z",
		mentor: { name: "David Brown", avatar: "/avatars/david.jpg" },
		status: "Completed",
		topic: "CI/CD Best Practices",
		feedbackGiven: false,
	},
];

const SessionsHeader = () => (
	<div className="mb-8">
		<div className="flex items-center mb-4 text-sm text-muted-foreground">
			<Link href="/dashboard" className="hover:text-primary">
				Dashboard
			</Link>
			<ChevronRight className="h-4 w-4 mx-2" />
			<span className="font-medium text-foreground">Sessions</span>
		</div>
		<h1 className="text-3xl font-bold mb-2">Mentorship Sessions</h1>
		<p className="text-muted-foreground">
			Manage your upcoming and past mentorship sessions
		</p>
	</div>
);

const UpcomingSessionCard = ({
	session,
}: {
	session: (typeof upcomingSessions)[0];
}) => (
	<Card className="mb-4">
		<CardHeader>
			<CardTitle className="flex items-center justify-between">
				<span>{session.topic}</span>
				<Badge
					variant={
						session.status === "Confirmed" ? "default" : "secondary"
					}
				>
					{session.status}
				</Badge>
			</CardTitle>
			<CardDescription>
				<div className="flex items-center">
					<Calendar className="h-4 w-4 mr-2" />
					{new Date(session.date).toLocaleDateString()}
					<Clock className="h-4 w-4 ml-4 mr-2" />
					{new Date(session.date).toLocaleTimeString()}
				</div>
			</CardDescription>
		</CardHeader>
		<CardContent>
			<div className="flex items-center">
				<Avatar className="h-10 w-10 mr-4">
					<AvatarImage
						src={session.mentor.avatar}
						alt={session.mentor.name}
					/>
					<AvatarFallback>{session.mentor.name[0]}</AvatarFallback>
				</Avatar>
				<div>
					<p className="font-medium">{session.mentor.name}</p>
					<p className="text-sm text-muted-foreground">Mentor</p>
				</div>
			</div>
		</CardContent>
		<CardFooter className="flex justify-between">
			<Button variant="outline">
				<MessageCircle className="h-4 w-4 mr-2" />
				Message
			</Button>
			<Button>
				<Video className="h-4 w-4 mr-2" />
				Join Session
			</Button>
		</CardFooter>
	</Card>
);

const PastSessionCard = ({
	session,
}: {
	session: (typeof pastSessions)[0];
}) => (
	<Card className="mb-4">
		<CardHeader>
			<CardTitle>{session.topic}</CardTitle>
			<CardDescription>
				<div className="flex items-center">
					<Calendar className="h-4 w-4 mr-2" />
					{new Date(session.date).toLocaleDateString()}
					<Clock className="h-4 w-4 ml-4 mr-2" />
					{new Date(session.date).toLocaleTimeString()}
				</div>
			</CardDescription>
		</CardHeader>
		<CardContent>
			<div className="flex items-center mb-4">
				<Avatar className="h-10 w-10 mr-4">
					<AvatarImage
						src={session.mentor.avatar}
						alt={session.mentor.name}
					/>
					<AvatarFallback>{session.mentor.name[0]}</AvatarFallback>
				</Avatar>
				<div>
					<p className="font-medium">{session.mentor.name}</p>
					<p className="text-sm text-muted-foreground">Mentor</p>
				</div>
			</div>
			<div className="flex justify-between items-center">
				<Button variant="outline">
					<Download className="h-4 w-4 mr-2" />
					Download Notes
				</Button>
				{session.feedbackGiven ? (
					<Badge variant="secondary">Feedback Submitted</Badge>
				) : (
					<Button>
						<Star className="h-4 w-4 mr-2" />
						Give Feedback
					</Button>
				)}
			</div>
		</CardContent>
	</Card>
);

const BookNewSession = () => (
	<Card>
		<CardHeader>
			<CardTitle>Book a New Session</CardTitle>
			<CardDescription>
				Find a mentor and schedule your next learning session
			</CardDescription>
		</CardHeader>
		<CardContent>
			<p className="mb-4">
				Choose from our wide range of expert mentors specializing in
				various technologies and domains.
			</p>
			<div className="space-y-2">
				<div className="flex items-center">
					<CheckCircle className="h-4 w-4 mr-2 text-green-500" />
					<span>Flexible scheduling</span>
				</div>
				<div className="flex items-center">
					<CheckCircle className="h-4 w-4 mr-2 text-green-500" />
					<span>Personalized learning experience</span>
				</div>
				<div className="flex items-center">
					<CheckCircle className="h-4 w-4 mr-2 text-green-500" />
					<span>Expert guidance on your projects</span>
				</div>
			</div>
		</CardContent>
		<CardFooter>
			<Button className="w-full">
				<Plus className="h-4 w-4 mr-2" />
				Book New Session
			</Button>
		</CardFooter>
	</Card>
);

const MentorView = () => (
	<Card className="mb-6">
		<CardHeader>
			<CardTitle>Mentor Dashboard</CardTitle>
			<CardDescription>
				Manage your mentorship sessions and requests
			</CardDescription>
		</CardHeader>
		<CardContent>
			<div className="space-y-4">
				<div>
					<h3 className="font-semibold mb-2">Upcoming Sessions</h3>
					<p className="text-sm text-muted-foreground">
						You have 3 upcoming sessions this week
					</p>
				</div>
				<div>
					<h3 className="font-semibold mb-2">Session Requests</h3>
					<p className="text-sm text-muted-foreground">
						You have 2 new session requests
					</p>
				</div>
				<div>
					<h3 className="font-semibold mb-2">Earnings</h3>
					<p className="text-sm text-muted-foreground">
						Total earnings this month: $500
					</p>
				</div>
			</div>
		</CardContent>
		<CardFooter>
			<Button className="w-full">View Mentor Dashboard</Button>
		</CardFooter>
	</Card>
);

export default function SessionsPage() {
	const [isMentor, setIsMentor] = useState(false);

	return (
		<div className="w-full min-h-[calc(100vh-72px)] overflow-y-auto px-4 py-8">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<SessionsHeader />

				<div className="flex justify-between items-center mb-6">
					<h2 className="text-2xl font-bold">Session Management</h2>
					<div className="flex items-center space-x-2">
						<Label htmlFor="mentor-mode">Mentor Mode</Label>
						<Switch
							id="mentor-mode"
							checked={isMentor}
							onCheckedChange={setIsMentor}
						/>
					</div>
				</div>

				{isMentor ? (
					<MentorView />
				) : (
					<Tabs defaultValue="upcoming" className="space-y-4">
						<TabsList>
							<TabsTrigger value="upcoming">Upcoming</TabsTrigger>
							<TabsTrigger value="past">
								Past Sessions
							</TabsTrigger>
							<TabsTrigger value="book">
								Book New Session
							</TabsTrigger>
						</TabsList>
						<TabsContent value="upcoming">
							<div className="space-y-4">
								{upcomingSessions.map((session) => (
									<UpcomingSessionCard
										key={session.id}
										session={session}
									/>
								))}
							</div>
						</TabsContent>
						<TabsContent value="past">
							<div className="space-y-4">
								{pastSessions.map((session) => (
									<PastSessionCard
										key={session.id}
										session={session}
									/>
								))}
							</div>
						</TabsContent>
						<TabsContent value="book">
							<BookNewSession />
						</TabsContent>
					</Tabs>
				)}

				<footer className="mt-12 border-t border-border pt-6">
					<div className="flex flex-wrap justify-between items-center">
						<div className="space-x-4">
							<Link
								href="/faq"
								className="text-primary hover:underline"
							>
								FAQ
							</Link>
							<Link
								href="/support"
								className="text-primary hover:underline"
							>
								Support
							</Link>
						</div>
						<div className="mt-4 md:mt-0">
							<Button variant="outline">Provide Feedback</Button>
						</div>
					</div>
				</footer>
			</motion.div>
		</div>
	);
}
