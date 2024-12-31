"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
	ChevronRight,
	User,
	Lock,
	Bell,
	Map,
	Shield,
	Paintbrush,
	Github,
	Globe,
	Zap,
	Upload,
	Download,
	Moon,
	Sun,
	Check,
	Eye,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";

const SettingsHeader = () => (
	<div className="mb-8">
		<div className="flex items-center mb-4 text-sm text-muted-foreground">
			<Link href="/dashboard" className="hover:text-primary">
				Dashboard
			</Link>
			<ChevronRight className="h-4 w-4 mx-2" />
			<span className="font-medium text-foreground">Settings</span>
		</div>
		<h1 className="text-3xl font-bold mb-2">Account Settings</h1>
		<p className="text-muted-foreground">
			Manage your account preferences and settings
		</p>
	</div>
);

const ProfileSettings = () => {
	const [name, setName] = useState("John Doe");
	const [email, setEmail] = useState("john@example.com");
	const [bio, setBio] = useState(
		"Passionate developer always learning new technologies."
	);
	const [lookingForMentorship, setLookingForMentorship] = useState(true);
	const [skills, setSkills] = useState(["React", "Node.js"]);
	const [learningGoal, setLearningGoal] = useState(
		"Learn GraphQL by December"
	);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Profile Settings</CardTitle>
				<CardDescription>
					Manage your personal information and preferences
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="flex items-center space-x-4">
					<Avatar className="h-20 w-20">
						<AvatarImage
							src="/avatars/john-doe.jpg"
							alt="John Doe"
						/>
						<AvatarFallback>JD</AvatarFallback>
					</Avatar>
					<Button variant="outline">Change Picture</Button>
				</div>
				<div className="space-y-2">
					<Label htmlFor="name">Name</Label>
					<Input
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="space-y-2">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="space-y-2">
					<Label htmlFor="bio">Bio</Label>
					<Textarea
						id="bio"
						value={bio}
						onChange={(e) => setBio(e.target.value)}
					/>
				</div>
				<div className="flex items-center space-x-2">
					<Switch
						id="looking-for-mentorship"
						checked={lookingForMentorship}
						onCheckedChange={setLookingForMentorship}
					/>
					<Label htmlFor="looking-for-mentorship">
						Looking for mentorship
					</Label>
				</div>
				<div className="space-y-2">
					<Label>Skills & Interests</Label>
					<div className="flex flex-wrap gap-2">
						{skills.map((skill) => (
							<Badge key={skill} variant="secondary">
								{skill}
							</Badge>
						))}
						<Button variant="outline" size="sm">
							+ Add Skill
						</Button>
					</div>
				</div>
				<div className="space-y-2">
					<Label htmlFor="learning-goal">Learning Goal</Label>
					<Input
						id="learning-goal"
						value={learningGoal}
						onChange={(e) => setLearningGoal(e.target.value)}
					/>
				</div>
			</CardContent>
			<CardFooter>
				<Button>Save Changes</Button>
			</CardFooter>
		</Card>
	);
};

const AccountSettings = () => {
	const [isMentor, setIsMentor] = useState(false);
	const [publicProfile, setPublicProfile] = useState(true);
	const [showLearningGoals, setShowLearningGoals] = useState(true);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Account Settings</CardTitle>
				<CardDescription>
					Manage your account preferences and security settings
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="space-y-2">
					<Label>Authentication & Security</Label>
					<div className=" flex items-center space-x-2">
						<Button variant="outline">Change Password</Button>
						<Button variant="outline">
							Manage GitHub Integration
						</Button>
					</div>
				</div>
				<div className="space-y-2">
					<Label>Account Management</Label>
					<div className="flex items-center space-x-2">
						<Switch
							id="mentor-mode"
							checked={isMentor}
							onCheckedChange={setIsMentor}
						/>
						<Label htmlFor="mentor-mode">Mentor Mode</Label>
					</div>
					{!isMentor && (
						<Button variant="outline">
							Explore Becoming a Mentor
						</Button>
					)}
				</div>
				<div className="space-y-2">
					<Label>Data Privacy</Label>
					<div className="flex items-center space-x-2">
						<Switch
							id="public-profile"
							checked={publicProfile}
							onCheckedChange={setPublicProfile}
						/>
						<Label htmlFor="public-profile">Public Profile</Label>
					</div>
					<div className="flex items-center space-x-2">
						<Switch
							id="show-learning-goals"
							checked={showLearningGoals}
							onCheckedChange={setShowLearningGoals}
						/>
						<Label htmlFor="show-learning-goals">
							Show Learning Goals to Mentors
						</Label>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

const NotificationSettings = () => {
	const [emailNotifications, setEmailNotifications] = useState({
		mentorshipInvitations: true,
		sessionReminders: true,
		communityActivity: false,
	});
	const [pushNotifications, setPushNotifications] = useState({
		roadmapSuggestions: true,
		repositoryUpdates: false,
	});

	const handleEmailToggle = (key: keyof typeof emailNotifications) => {
		setEmailNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
	};

	const handlePushToggle = (key: keyof typeof pushNotifications) => {
		setPushNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Notification Settings</CardTitle>
				<CardDescription>
					Manage your email and push notification preferences
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="space-y-2">
					<Label>Email Notifications</Label>
					{Object.entries(emailNotifications).map(([key, value]) => (
						<div key={key} className="flex items-center space-x-2">
							<Switch
								id={`email-${key}`}
								checked={value}
								onCheckedChange={() =>
									handleEmailToggle(
										key as keyof typeof emailNotifications
									)
								}
							/>
							<Label htmlFor={`email-${key}`}>
								{key
									.replace(/([A-Z])/g, " $1")
									.replace(/^./, (str) => str.toUpperCase())}
							</Label>
						</div>
					))}
				</div>
				<div className="space-y-2">
					<Label>Push Notifications</Label>
					{Object.entries(pushNotifications).map(([key, value]) => (
						<div key={key} className="flex items-center space-x-2">
							<Switch
								id={`push-${key}`}
								checked={value}
								onCheckedChange={() =>
									handlePushToggle(
										key as keyof typeof pushNotifications
									)
								}
							/>
							<Label htmlFor={`push-${key}`}>
								{key
									.replace(/([A-Z])/g, " $1")
									.replace(/^./, (str) => str.toUpperCase())}
							</Label>
						</div>
					))}
				</div>
				<div className="space-y-2">
					<Label htmlFor="quiet-hours">Quiet Hours</Label>
					<Select>
						<SelectTrigger id="quiet-hours">
							<SelectValue placeholder="Select quiet hours" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="none">No quiet hours</SelectItem>
							<SelectItem value="night">10 PM - 7 AM</SelectItem>
							<SelectItem value="custom">Custom</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</CardContent>
			<CardFooter>
				<Button>Save Notification Settings</Button>
			</CardFooter>
		</Card>
	);
};

const RoadmapPreferences = () => {
	const [focus, setFocus] = useState("Full Stack Development");
	const [intensity, setIntensity] = useState(50);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Roadmap Preferences</CardTitle>
				<CardDescription>
					Customize your learning journey and roadmap settings
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="space-y-2">
					<Label htmlFor="focus-area">Focus Area</Label>
					<Select value={focus} onValueChange={setFocus}>
						<SelectTrigger id="focus-area">
							<SelectValue placeholder="Select focus area" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="Full Stack Development">
								Full Stack Development
							</SelectItem>
							<SelectItem value="Frontend Development">
								Frontend Development
							</SelectItem>
							<SelectItem value="Backend Development">
								Backend Development
							</SelectItem>
							<SelectItem value="Machine Learning">
								Machine Learning
							</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="space-y-2">
					<Label htmlFor="intensity">Roadmap Intensity</Label>
					<Slider
						id="intensity"
						min={0}
						max={100}
						step={10}
						value={[intensity]}
						onValueChange={([value]) => setIntensity(value)}
					/>
					<div className="flex justify-between text-xs text-muted-foreground">
						<span>Beginner</span>
						<span>Intermediate</span>
						<span>Advanced</span>
					</div>
				</div>
				<div className="space-y-2">
					<Label>Team Collaboration</Label>
					<Button variant="outline">Manage Shared Roadmaps</Button>
				</div>
			</CardContent>
			<CardFooter>
				<Button>Update Roadmap Preferences</Button>
			</CardFooter>
		</Card>
	);
};

const SecuritySettings = () => {
	const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
	const { toast } = useToast();

	const handleExportData = () => {
		// Simulating data export
		toast({
			title: "Data Export Initiated",
			description:
				"Your data export has been initiated. You will receive an email with the download link shortly.",
		});
	};

	const handleDeleteAccount = () => {
		// Simulating account deletion process
		toast({
			title: "Account Deletion Requested",
			description:
				"Your account deletion request has been received. Please check your email for further instructions.",
			variant: "destructive",
		});
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Security Settings</CardTitle>
				<CardDescription>
					Manage your account security and data
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="space-y-2">
					<Label htmlFor="2fa">Two-Factor Authentication (2FA)</Label>
					<div className="flex items-center space-x-2">
						<Switch
							id="2fa"
							checked={twoFactorEnabled}
							onCheckedChange={setTwoFactorEnabled}
						/>
						<Label htmlFor="2fa">
							{twoFactorEnabled ? "Enabled" : "Disabled"}
						</Label>
					</div>
				</div>
				<div className="space-y-2">
					<Label>Data Management</Label>
					<div className="flex space-x-2">
						<Button variant="outline" onClick={handleExportData}>
							<Download className="h-4 w-4 mr-2" />
							Export Data
						</Button>
						<Button
							variant="destructive"
							onClick={handleDeleteAccount}
						>
							Request Account Deletion
						</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

const AppearanceSettings = () => {
	const [theme, setTheme] = useState("dark");
	const [fontSize, setFontSize] = useState(16);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Appearance Settings</CardTitle>
				<CardDescription>
					Customize the look and feel of your CodeMentorHub experience
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="space-y-2">
					<Label>Theme</Label>
					<div className="flex space-x-2">
						<Button
							variant={theme === "light" ? "default" : "outline"}
							onClick={() => setTheme("light")}
						>
							<Sun className="h-4 w-4 mr-2" />
							Light
						</Button>
						<Button
							variant={theme === "dark" ? "default" : "outline"}
							onClick={() => setTheme("dark")}
						>
							<Moon className="h-4 w-4 mr-2" />
							Dark
						</Button>
					</div>
				</div>
				<div className="space-y-2">
					<Label htmlFor="font-size">Font Size</Label>
					<div className="flex items-center space-x-4">
						<Slider
							id="font-size"
							min={12}
							max={24}
							step={1}
							value={[fontSize]}
							onValueChange={([value]) => setFontSize(value)}
						/>
						<span>{fontSize}px</span>
					</div>
				</div>
				<div className="space-y-2">
					<Label htmlFor="layout">Layout</Label>
					<Select>
						<SelectTrigger id="layout">
							<SelectValue placeholder="Select layout" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="compact">Compact</SelectItem>
							<SelectItem value="comfortable">
								Comfortable
							</SelectItem>
							<SelectItem value="spacious">Spacious</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</CardContent>
			<CardFooter>
				<Button>Save Appearance Settings</Button>
			</CardFooter>
		</Card>
	);
};

const IntegrationSettings = () => {
	const [githubConnected, setGithubConnected] = useState(true);
	const [visibleRepos, setVisibleRepos] = useState([
		"awesome-project",
		"learning-react",
	]);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Integration Settings</CardTitle>
				<CardDescription>
					Manage your connected accounts and integrations
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="space-y-2">
					<Label>GitHub Integration</Label>
					<div className="flex items-center space-x-2">
						<Switch
							id="github-connection"
							checked={githubConnected}
							onCheckedChange={setGithubConnected}
						/>
						<Label htmlFor="github-connection">
							{githubConnected ? "Connected" : "Disconnected"}
						</Label>
					</div>
					{githubConnected && (
						<div className="mt-2">
							<Label>Visible Repositories</Label>
							<div className="space-y-2 mt-2">
								{visibleRepos.map((repo) => (
									<div
										key={repo}
										className="flex items-center justify-between"
									>
										<span>{repo}</span>
										<Button variant="ghost" size="sm">
											<Eye className="h-4 w-4 mr-2" />
											Toggle Visibility
										</Button>
									</div>
								))}
							</div>
						</div>
					)}
				</div>
				<div className="space-y-2">
					<Label>Future Integrations</Label>
					<p className="text-sm text-muted-foreground">
						More integrations coming soon!
					</p>
				</div>
			</CardContent>
			<CardFooter>
				<Button>Save Integration Settings</Button>
			</CardFooter>
		</Card>
	);
};

const PreferencesSettings = () => {
	const [language, setLanguage] = useState("en");
	const [timezone, setTimezone] = useState("UTC");

	return (
		<Card>
			<CardHeader>
				<CardTitle>Preferences</CardTitle>
				<CardDescription>
					Set your language and time zone preferences
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="space-y-2">
					<Label htmlFor="language">Language</Label>
					<Select value={language} onValueChange={setLanguage}>
						<SelectTrigger id="language">
							<SelectValue placeholder="Select language" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="en">English</SelectItem>
							<SelectItem value="es">Español</SelectItem>
							<SelectItem value="fr">Français</SelectItem>
							<SelectItem value="de">Deutsch</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<div className="space-y-2">
					<Label htmlFor="timezone">Time Zone</Label>
					<Select value={timezone} onValueChange={setTimezone}>
						<SelectTrigger id="timezone">
							<SelectValue placeholder="Select time zone" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="UTC">UTC</SelectItem>
							<SelectItem value="EST">
								Eastern Standard Time (EST)
							</SelectItem>
							<SelectItem value="PST">
								Pacific Standard Time (PST)
							</SelectItem>
							<SelectItem value="CET">
								Central European Time (CET)
							</SelectItem>
						</SelectContent>
					</Select>
				</div>
			</CardContent>
			<CardFooter>
				<Button>Save Preferences</Button>
			</CardFooter>
		</Card>
	);
};

const MenteeFeatures = () => {
	const [goalProgress, setGoalProgress] = useState(65);
	const [seekingMentorship, setSeekingMentorship] = useState(true);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Mentee Features</CardTitle>
				<CardDescription>
					Track your progress and manage mentorship settings
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="space-y-2">
					<Label>Goal Progress</Label>
					<Progress value={goalProgress} className="w-full" />
					<p className="text-sm text-muted-foreground">
						You've completed {goalProgress}% of your current goal
					</p>
				</div>
				<div className="space-y-2">
					<Label htmlFor="seeking-mentorship">
						Actively Seeking Mentorship
					</Label>
					<div className="flex items-center space-x-2">
						<Switch
							id="seeking-mentorship"
							checked={seekingMentorship}
							onCheckedChange={setSeekingMentorship}
						/>
						<Label htmlFor="seeking-mentorship">
							{seekingMentorship
								? "Visible to mentors"
								: "Not visible to mentors"}
						</Label>
					</div>
				</div>
				<Button>
					<Zap className="h-4 w-4 mr-2" />
					Request Mentor Match
				</Button>
			</CardContent>
		</Card>
	);
};

export default function SettingsPage() {
	return (
		<div className="w-full min-h-[calc(100vh-72px)] overflow-y-auto px-4 py-8">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<SettingsHeader />

				<Tabs defaultValue="profile" className="space-y-4">
					<TabsList>
						<TabsTrigger value="profile">Profile</TabsTrigger>
						<TabsTrigger value="account">Account</TabsTrigger>
						<TabsTrigger value="notifications">
							Notifications
						</TabsTrigger>
						<TabsTrigger value="roadmap">Roadmap</TabsTrigger>
						<TabsTrigger value="security">Security</TabsTrigger>
						<TabsTrigger value="appearance">Appearance</TabsTrigger>
						<TabsTrigger value="integrations">
							Integrations
						</TabsTrigger>
						<TabsTrigger value="preferences">
							Preferences
						</TabsTrigger>
					</TabsList>
					<TabsContent value="profile">
						<ProfileSettings />
					</TabsContent>
					<TabsContent value="account">
						<AccountSettings />
					</TabsContent>
					<TabsContent value="notifications">
						<NotificationSettings />
					</TabsContent>
					<TabsContent value="roadmap">
						<RoadmapPreferences />
					</TabsContent>
					<TabsContent value="security">
						<SecuritySettings />
					</TabsContent>
					<TabsContent value="appearance">
						<AppearanceSettings />
					</TabsContent>
					<TabsContent value="integrations">
						<IntegrationSettings />
					</TabsContent>
					<TabsContent value="preferences">
						<PreferencesSettings />
					</TabsContent>
				</Tabs>

				<div className="mt-8">
					<MenteeFeatures />
				</div>

				<footer className="mt-12 border-t border-border pt-6">
					<div className="flex flex-wrap justify-between items-center">
						<div className="space-x-4">
							<Link
								href="/terms"
								className="text-primary hover:underline"
							>
								Terms of Service
							</Link>
							<Link
								href="/privacy"
								className="text-primary hover:underline"
							>
								Privacy Policy
							</Link>
						</div>
						<div className="mt-4 md:mt-0">
							<Button variant="outline">Contact Support</Button>
						</div>
					</div>
				</footer>
			</motion.div>
		</div>
	);
}
