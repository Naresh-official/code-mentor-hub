"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
	ChevronRight,
	FileText,
	Linkedin,
	Github,
	Briefcase,
	Code,
	BookOpen,
	MessageSquare,
	DollarSign,
	Compass,
	Users,
	Download,
	Play,
	ExternalLink,
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
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

const CareerToolsHeader = () => (
	<div className="mb-8">
		<div className="flex items-center mb-4 text-sm text-muted-foreground">
			<Link href="/dashboard" className="hover:text-primary">
				Dashboard
			</Link>
			<ChevronRight className="h-4 w-4 mx-2" />
			<span className="font-medium text-foreground">Career Tools</span>
		</div>
		<h1 className="text-3xl font-bold mb-2">Career Tools</h1>
		<p className="text-muted-foreground">
			Empower your tech career with AI-driven tools and resources
		</p>
	</div>
);

const ResumeBuilder = () => {
	const [resumeProgress, setResumeProgress] = useState(65);

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center">
					<FileText className="h-5 w-5 mr-2" />
					Resume Builder
				</CardTitle>
				<CardDescription>
					Create and optimize your professional resume
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="mb-4">
					<Label htmlFor="resume-template">Choose a Template</Label>
					<Select>
						<SelectTrigger id="resume-template">
							<SelectValue placeholder="Select a template" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="modern">Modern</SelectItem>
							<SelectItem value="classic">Classic</SelectItem>
							<SelectItem value="creative">Creative</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="space-y-2">
					<div className="flex justify-between text-sm">
						<span>Resume Completion</span>
						<span>{resumeProgress}%</span>
					</div>
					<Progress value={resumeProgress} className="w-full" />
				</div>
				<p className="text-sm text-muted-foreground mt-2">
					AI Suggestion: Add more details about your recent project
					achievements to stand out.
				</p>
			</CardContent>
			<CardFooter>
				<Button className="w-full">
					<Download className="h-4 w-4 mr-2" />
					Export Resume
				</Button>
			</CardFooter>
		</Card>
	);
};

const ProfileOptimization = () => {
	const [linkedInScore, setLinkedInScore] = useState(75);
	const [githubScore, setGithubScore] = useState(60);

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center">
					<Linkedin className="h-5 w-5 mr-2" />
					<Github className="h-5 w-5 mr-2" />
					Profile Optimization
				</CardTitle>
				<CardDescription>
					Enhance your LinkedIn and GitHub profiles
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<div>
						<Label>LinkedIn Profile Score</Label>
						<div className="flex items-center mt-2">
							<Progress
								value={linkedInScore}
								className="flex-grow mr-4"
							/>
							<span className="text-sm font-medium">
								{linkedInScore}%
							</span>
						</div>
					</div>
					<div>
						<Label>GitHub Profile Score</Label>
						<div className="flex items-center mt-2">
							<Progress
								value={githubScore}
								className="flex-grow mr-4"
							/>
							<span className="text-sm font-medium">
								{githubScore}%
							</span>
						</div>
					</div>
				</div>
				<p className="text-sm text-muted-foreground mt-4">
					AI Tip: Update your LinkedIn summary with keywords related
					to your target role.
				</p>
			</CardContent>
			<CardFooter>
				<Button className="w-full">Analyze and Improve Profiles</Button>
			</CardFooter>
		</Card>
	);
};

const JobSearchAssistant = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center">
					<Briefcase className="h-5 w-5 mr-2" />
					Job Search Assistant
				</CardTitle>
				<CardDescription>
					Find and apply to relevant job opportunities
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<div>
						<Label htmlFor="job-search">Search Jobs</Label>
						<div className="flex mt-1.5">
							<Input
								id="job-search"
								placeholder="e.g., Frontend Developer"
								className="flex-grow"
							/>
							<Button className="ml-2">Search</Button>
						</div>
					</div>
					<div>
						<Label>Filters</Label>
						<div className="flex flex-wrap gap-2 mt-1.5">
							<Badge variant="outline">Remote</Badge>
							<Badge variant="outline">Full-time</Badge>
							<Badge variant="outline">Entry Level</Badge>
							<Badge variant="outline">+ Add Filter</Badge>
						</div>
					</div>
				</div>
			</CardContent>
			<CardFooter className="flex justify-between">
				<Button variant="outline">Save Search</Button>
				<Button>
					<ExternalLink className="h-4 w-4 mr-2" />
					View All Jobs
				</Button>
			</CardFooter>
		</Card>
	);
};

const MockProjectRecommendations = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center">
					<Code className="h-5 w-5 mr-2" />
					Mock Project Recommendations
				</CardTitle>
				<CardDescription>
					Enhance your portfolio with recommended projects
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ul className="space-y-2">
					<li className="flex justify-between items-center">
						<span>Build a RESTful API</span>
						<Button variant="outline" size="sm">
							Start Project
						</Button>
					</li>
					<li className="flex justify-between items-center">
						<span>Create a React Dashboard</span>
						<Button variant="outline" size="sm">
							Start Project
						</Button>
					</li>
					<li className="flex justify-between items-center">
						<span>Implement a Machine Learning Model</span>
						<Button variant="outline" size="sm">
							Start Project
						</Button>
					</li>
				</ul>
			</CardContent>
			<CardFooter>
				<Button className="w-full">View More Projects</Button>
			</CardFooter>
		</Card>
	);
};

const TechSkillsAssessment = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center">
					<BookOpen className="h-5 w-5 mr-2" />
					Tech Skills Assessment
				</CardTitle>
				<CardDescription>
					Test your knowledge and earn certificates
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ul className="space-y-2">
					<li className="flex justify-between items-center">
						<span>JavaScript Fundamentals</span>
						<Badge>Completed</Badge>
					</li>
					<li className="flex justify-between items-center">
						<span>React Advanced Concepts</span>
						<Button variant="outline" size="sm">
							Take Test
						</Button>
					</li>
					<li className="flex justify-between items-center">
						<span>Data Structures & Algorithms</span>
						<Button variant="outline" size="sm">
							Take Test
						</Button>
					</li>
				</ul>
			</CardContent>
			<CardFooter>
				<Button className="w-full">View All Assessments</Button>
			</CardFooter>
		</Card>
	);
};

const InterviewPreparation = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center">
					<MessageSquare className="h-5 w-5 mr-2" />
					Interview Preparation
				</CardTitle>
				<CardDescription>
					Practice and refine your interview skills
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<div>
						<Label>Mock Interview</Label>
						<Button className="w-full mt-1.5">
							<Play className="h-4 w-4 mr-2" />
							Start AI Interview
						</Button>
					</div>
					<div>
						<Label>Question Bank</Label>
						<Select>
							<SelectTrigger>
								<SelectValue placeholder="Select a category" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="technical">
									Technical Questions
								</SelectItem>
								<SelectItem value="behavioral">
									Behavioral Questions
								</SelectItem>
								<SelectItem value="system-design">
									System Design
								</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<Button className="w-full">Schedule with Mentor</Button>
			</CardFooter>
		</Card>
	);
};

const SalaryInsights = () => {
	const [salary, setSalary] = useState([75000]);

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center">
					<DollarSign className="h-5 w-5 mr-2" />
					Salary Insights
				</CardTitle>
				<CardDescription>
					Explore salary trends and negotiation tips
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<div>
						<Label>Salary Range for Software Engineer</Label>
						<div className="flex items-center mt-2">
							<span className="mr-2">$50k</span>
							<Slider
								value={salary}
								onValueChange={setSalary}
								max={200000}
								step={1000}
								className="flex-grow"
							/>
							<span className="ml-2">$200k</span>
						</div>
						<p className="text-center mt-2">
							Current: ${salary[0].toLocaleString()}
						</p>
					</div>
					<p className="text-sm text-muted-foreground">
						AI Insight: The average salary for your experience level
						in your area is $85,000 - $110,000.
					</p>
				</div>
			</CardContent>
			<CardFooter>
				<Button className="w-full">View Detailed Insights</Button>
			</CardFooter>
		</Card>
	);
};

const CareerRoadmaps = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center">
					<Compass className="h-5 w-5 mr-2" />
					Career Roadmaps
				</CardTitle>
				<CardDescription>Plan your career path in tech</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<div>
						<Label>Select a Career Path</Label>
						<Select>
							<SelectTrigger>
								<SelectValue placeholder="Choose a path" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="frontend">
									Frontend Developer
								</SelectItem>
								<SelectItem value="backend">
									Backend Developer
								</SelectItem>
								<SelectItem value="fullstack">
									Full Stack Developer
								</SelectItem>
								<SelectItem value="data-scientist">
									Data Scientist
								</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<div className="space-y-2">
						<div className="flex justify-between text-sm">
							<span>Path Progress</span>
							<span>35%</span>
						</div>
						<Progress value={35} className="w-full" />
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<Button className="w-full">View Detailed Roadmap</Button>
			</CardFooter>
		</Card>
	);
};

const NetworkingTools = () => {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center">
					<Users className="h-5 w-5 mr-2" />
					Networking Tools
				</CardTitle>
				<CardDescription>
					Connect with mentors and attend events
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="space-y-4">
					<div>
						<Label>Find a Mentor</Label>
						<div className="flex mt-1.5">
							<Input
								placeholder="e.g., Frontend, Machine Learning"
								className="flex-grow"
							/>
							<Button className="ml-2">Search</Button>
						</div>
					</div>
					<div>
						<Label>Upcoming Events</Label>
						<ul className="mt-1.5 space-y-2">
							<li className="flex justify-between items-center">
								<span>Web Development Workshop</span>
								<Badge>In 2 days</Badge>
							</li>
							<li className="flex justify-between items-center">
								<span>AI in Finance Webinar</span>
								<Badge>Next week</Badge>
							</li>
						</ul>
					</div>
				</div>
			</CardContent>
			<CardFooter>
				<Button className="w-full">
					View All Networking Opportunities
				</Button>
			</CardFooter>
		</Card>
	);
};

export default function CareerToolsPage() {
	return (
		<div className="w-full min-h-[calc(100vh-72px)] overflow-y-auto px-4 py-8">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<CareerToolsHeader />

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<ResumeBuilder />
					<ProfileOptimization />
					<JobSearchAssistant />
					<MockProjectRecommendations />
					<TechSkillsAssessment />
					<InterviewPreparation />
					<SalaryInsights />
					<CareerRoadmaps />
					<NetworkingTools />
				</div>

				<footer className="mt-12 border-t border-border pt-6">
					<div className="flex flex-wrap justify-between items-center">
						<div className="space-x-4">
							<Link
								href="/career-resources"
								className="text-primary hover:underline"
							>
								Career Resources
							</Link>
							<Link
								href="/faq"
								className="text-primary hover:underline"
							>
								FAQ
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
