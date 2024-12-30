"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Camera, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";

// Mock initial user data
const initialUserData = {
	fullName: "John Doe",
	email: "john@example.com",
	username: "johndoe",
	bio: "Passionate developer always learning new technologies.",
	avatar: "/avatars/john-doe.jpg",
	github: "https://github.com/johndoe",
	linkedin: "https://linkedin.com/in/johndoe",
};

type FormData = typeof initialUserData & {
	currentPassword?: string;
	newPassword?: string;
	confirmPassword?: string;
};

export default function EditProfilePage() {
	const [isLoading, setIsLoading] = useState(false);
	const { toast } = useToast();
	const {
		register,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<FormData>({
		defaultValues: initialUserData,
	});

	const onSubmit = async (data: FormData) => {
		setIsLoading(true);
		// Simulate API call
		await new Promise((resolve) => setTimeout(resolve, 2000));
		console.log("Form data submitted:", data);
		setIsLoading(false);
		toast({
			title: "Profile Updated",
			description: "Your profile has been successfully updated.",
		});
	};

	const handleCancel = () => {
		// In a real application, you might want to reset the form or redirect
		console.log("Cancelled edit");
		toast({
			title: "Edit Cancelled",
			description: "Your changes have been discarded.",
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
						<Link
							href="/dashboard/profile"
							className="hover:text-primary"
						>
							Profile
						</Link>
						<ChevronRight className="h-4 w-4 mx-2" />
						<span className="font-medium text-foreground">
							Edit
						</span>
					</div>
					<h1 className="text-3xl font-bold">Edit Profile</h1>
				</div>

				<Card>
					<CardHeader>
						<CardTitle>Personal Information</CardTitle>
						<CardDescription>
							Update your profile details and public information
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form
							onSubmit={handleSubmit(onSubmit)}
							className="space-y-6"
						>
							<div className="flex items-center space-x-4">
								<Avatar className="h-20 w-20">
									<AvatarImage
										src={initialUserData.avatar}
										alt={initialUserData.fullName}
									/>
									<AvatarFallback>
										{initialUserData.fullName[0]}
									</AvatarFallback>
								</Avatar>
								<Button type="button" variant="outline">
									<Camera className="h-4 w-4 mr-2" />
									Change Avatar
								</Button>
							</div>

							<div className="space-y-2">
								<Label htmlFor="fullName">Full Name</Label>
								<Input
									id="fullName"
									{...register("fullName", {
										required: "Full name is required",
									})}
								/>
								{errors.fullName && (
									<p className="text-sm text-destructive">
										{errors.fullName.message}
									</p>
								)}
							</div>

							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /\S+@\S+\.\S+/,
											message: "Invalid email address",
										},
									})}
								/>
								{errors.email && (
									<p className="text-sm text-destructive">
										{errors.email.message}
									</p>
								)}
							</div>

							<div className="space-y-2">
								<Label htmlFor="username">Username</Label>
								<Input
									id="username"
									{...register("username", {
										required: "Username is required",
									})}
								/>
								{errors.username && (
									<p className="text-sm text-destructive">
										{errors.username.message}
									</p>
								)}
							</div>

							<div className="space-y-2">
								<Label htmlFor="bio">Bio</Label>
								<Textarea
									id="bio"
									{...register("bio")}
									rows={4}
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="github">GitHub Profile</Label>
								<Input
									id="github"
									{...register("github")}
									placeholder="https://github.com/yourusername"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="linkedin">
									LinkedIn Profile
								</Label>
								<Input
									id="linkedin"
									{...register("linkedin")}
									placeholder="https://linkedin.com/in/yourusername"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="currentPassword">
									Current Password
								</Label>
								<Input
									id="currentPassword"
									type="password"
									{...register("currentPassword")}
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="newPassword">
									New Password
								</Label>
								<Input
									id="newPassword"
									type="password"
									{...register("newPassword", {
										minLength: {
											value: 8,
											message:
												"Password must be at least 8 characters long",
										},
									})}
								/>
								{errors.newPassword && (
									<p className="text-sm text-destructive">
										{errors.newPassword.message}
									</p>
								)}
							</div>

							<div className="space-y-2">
								<Label htmlFor="confirmPassword">
									Confirm New Password
								</Label>
								<Input
									id="confirmPassword"
									type="password"
									{...register("confirmPassword", {
										validate: (value) =>
											value === watch("newPassword") ||
											"Passwords do not match",
									})}
								/>
								{errors.confirmPassword && (
									<p className="text-sm text-destructive">
										{errors.confirmPassword.message}
									</p>
								)}
							</div>

							<div className="flex justify-end space-x-2">
								<Button
									type="button"
									variant="outline"
									onClick={handleCancel}
								>
									Cancel
								</Button>
								<Button type="submit" disabled={isLoading}>
									{isLoading ? (
										<>
											<Loader2 className="mr-2 h-4 w-4 animate-spin" />
											Saving...
										</>
									) : (
										"Save Changes"
									)}
								</Button>
							</div>
						</form>
					</CardContent>
				</Card>

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
