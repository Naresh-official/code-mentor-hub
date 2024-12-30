"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
	ChevronRight,
	User,
	Mail,
	Lock,
	Bell,
	Trash2,
	Camera,
	Save,
	X,
} from "lucide-react";

// todo change the profile page

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
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

// Mock user data
const initialUserData = {
	username: "johndoe",
	fullName: "John Doe",
	email: "john@example.com",
	avatar: "/avatars/john-doe.jpg",
	bio: "Passionate developer always learning new technologies.",
	roadmapProgress: 65,
	notifications: {
		roadmapUpdates: true,
		mentorActivities: true,
		communityFeatures: false,
	},
};

export default function ProfilePage() {
	const [userData, setUserData] = useState(initialUserData);
	const [isEditing, setIsEditing] = useState(false);
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const { toast } = useToast();

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setUserData((prev) => ({ ...prev, [name]: value }));
		setIsEditing(true);
	};

	const handleNotificationToggle = (
		notificationType: keyof typeof userData.notifications
	) => {
		setUserData((prev) => ({
			...prev,
			notifications: {
				...prev.notifications,
				[notificationType]: !prev.notifications[notificationType],
			},
		}));
		setIsEditing(true);
	};

	const handleSaveChanges = () => {
		// Here you would typically send the updated data to your backend
		console.log("Saving changes:", userData);
		toast({
			title: "Profile Updated",
			description: "Your profile changes have been saved successfully.",
		});
		setIsEditing(false);
	};

	const handleCancelChanges = () => {
		setUserData(initialUserData);
		setIsEditing(false);
	};

	const handlePasswordChange = () => {
		if (newPassword !== confirmPassword) {
			toast({
				title: "Password Mismatch",
				description:
					"The new passwords do not match. Please try again.",
				variant: "destructive",
			});
			return;
		}
		// Here you would typically send the new password to your backend
		console.log("Changing password");
		toast({
			title: "Password Updated",
			description: "Your password has been changed successfully.",
		});
		setNewPassword("");
		setConfirmPassword("");
	};

	const handleDeleteAccount = () => {
		// Here you would typically send a request to delete the account
		console.log("Deleting account");
		toast({
			title: "Account Deleted",
			description: "Your account has been successfully deleted.",
			variant: "destructive",
		});
	};

	return (
		<div className="container w-full min-h-[calc(100vh-72px)] overflow-y-auto px-4 py-8">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<div className="mb-8">
					<div className="flex items-center mb-4 text-sm text-muted-foreground">
						<Link href="/dashboard" className="hover:text-primary">
							Dashboard
						</Link>
						<ChevronRight className="h-4 w-4 mx-2" />
						<span className="font-medium text-foreground">
							Profile
						</span>
					</div>
					<div className="flex justify-between items-center">
						<h1 className="text-3xl font-bold">Profile</h1>
						<div className="space-x-2">
							{isEditing && (
								<>
									<Button
										variant="outline"
										onClick={handleCancelChanges}
									>
										<X className="h-4 w-4 mr-2" />
										Cancel
									</Button>
									<Button onClick={handleSaveChanges}>
										<Save className="h-4 w-4 mr-2" />
										Save Changes
									</Button>
								</>
							)}
						</div>
					</div>
				</div>

				<Tabs defaultValue="info" className="space-y-4">
					<TabsList>
						<TabsTrigger value="info">
							Profile Information
						</TabsTrigger>
						<TabsTrigger value="preferences">
							Preferences
						</TabsTrigger>
						<TabsTrigger value="security">Security</TabsTrigger>
					</TabsList>

					<TabsContent value="info">
						<Card>
							<CardHeader>
								<CardTitle>Profile Information</CardTitle>
								<CardDescription>
									Update your personal details and public
									profile
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="flex items-center space-x-4">
									<Avatar className="h-20 w-20">
										<AvatarImage
											src={userData.avatar}
											alt={userData.fullName}
										/>
										<AvatarFallback>
											{userData.fullName[0]}
										</AvatarFallback>
									</Avatar>
									<Button variant="outline">
										<Camera className="h-4 w-4 mr-2" />
										Change Avatar
									</Button>
								</div>
								<div className="space-y-2">
									<Label htmlFor="username">Username</Label>
									<Input
										id="username"
										name="username"
										value={userData.username}
										onChange={handleInputChange}
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="fullName">Full Name</Label>
									<Input
										id="fullName"
										name="fullName"
										value={userData.fullName}
										onChange={handleInputChange}
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="email">Email</Label>
									<Input
										id="email"
										name="email"
										type="email"
										value={userData.email}
										onChange={handleInputChange}
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="bio">Bio</Label>
									<Textarea
										id="bio"
										name="bio"
										value={userData.bio}
										onChange={handleInputChange}
										rows={4}
									/>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="preferences">
						<Card>
							<CardHeader>
								<CardTitle>
									Learning Roadmap & Preferences
								</CardTitle>
								<CardDescription>
									Manage your learning journey and
									notification settings
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div>
									<h3 className="text-lg font-semibold mb-2">
										Roadmap Progress
									</h3>
									<Progress
										value={userData.roadmapProgress}
										className="w-full"
									/>
									<p className="text-sm text-muted-foreground mt-2">
										You've completed{" "}
										{userData.roadmapProgress}% of your
										learning roadmap
									</p>
								</div>
								<Button variant="outline" asChild>
									<Link href="/dashboard/roadmap/edit">
										Edit Roadmap
									</Link>
								</Button>
								<div className="space-y-4">
									<h3 className="text-lg font-semibold">
										Notification Preferences
									</h3>
									<div className="flex items-center justify-between">
										<Label htmlFor="roadmapUpdates">
											Roadmap Updates
										</Label>
										<Switch
											id="roadmapUpdates"
											checked={
												userData.notifications
													.roadmapUpdates
											}
											onCheckedChange={() =>
												handleNotificationToggle(
													"roadmapUpdates"
												)
											}
										/>
									</div>
									<div className="flex items-center justify-between">
										<Label htmlFor="mentorActivities">
											Mentor Activities
										</Label>
										<Switch
											id="mentorActivities"
											checked={
												userData.notifications
													.mentorActivities
											}
											onCheckedChange={() =>
												handleNotificationToggle(
													"mentorActivities"
												)
											}
										/>
									</div>
									<div className="flex items-center justify-between">
										<Label htmlFor="communityFeatures">
											Community Features
										</Label>
										<Switch
											id="communityFeatures"
											checked={
												userData.notifications
													.communityFeatures
											}
											onCheckedChange={() =>
												handleNotificationToggle(
													"communityFeatures"
												)
											}
										/>
									</div>
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="security">
						<Card>
							<CardHeader>
								<CardTitle>Security Settings</CardTitle>
								<CardDescription>
									Manage your account security and password
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="newPassword">
										New Password
									</Label>
									<Input
										id="newPassword"
										type="password"
										value={newPassword}
										onChange={(e) =>
											setNewPassword(e.target.value)
										}
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="confirmPassword">
										Confirm New Password
									</Label>
									<Input
										id="confirmPassword"
										type="password"
										value={confirmPassword}
										onChange={(e) =>
											setConfirmPassword(e.target.value)
										}
									/>
								</div>
								<Button onClick={handlePasswordChange}>
									Change Password
								</Button>
							</CardContent>
							<CardFooter>
								<Dialog>
									<DialogTrigger asChild>
										<Button variant="destructive">
											Delete Account
										</Button>
									</DialogTrigger>
									<DialogContent>
										<DialogHeader>
											<DialogTitle>
												Are you sure you want to delete
												your account?
											</DialogTitle>
											<DialogDescription>
												This action cannot be undone.
												This will permanently delete
												your account and remove your
												data from our servers.
											</DialogDescription>
										</DialogHeader>
										<DialogFooter>
											<Button
												variant="destructive"
												onClick={handleDeleteAccount}
											>
												Yes, Delete My Account
											</Button>
										</DialogFooter>
									</DialogContent>
								</Dialog>
							</CardFooter>
						</Card>
					</TabsContent>
				</Tabs>

				<footer className="mt-12 border-t border-border pt-6">
					<div className="flex flex-wrap justify-between items-center">
						<div className="space-x-4">
							<Link
								href="/dashboard/faq"
								className="text-primary hover:underline"
							>
								FAQ
							</Link>
							<Link
								href="/dashboard/support"
								className="text-primary hover:underline"
							>
								Support
							</Link>
						</div>
						<div className="mt-4 md:mt-0">
							<Link
								href="/terms"
								className="text-primary hover:underline mr-4"
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
					</div>
				</footer>
			</motion.div>
		</div>
	);
}
