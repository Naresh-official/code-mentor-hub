"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";
import { signupSchema } from "@/schemas/signupSchema";
import axios from "axios";
import { handleError } from "@/utils/errorhandler";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

interface SignupForm {
	name: string;
	username: string;
	password: string;
	email: string;
	avatarUrl: string;
	bio: string;
}

export default function SignupPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [formData, setFormData] = useState<SignupForm>({
		name: "",
		username: "",
		password: "",
		email: "",
		avatarUrl: "",
		bio: "",
	});
	const router = useRouter();
	const { data: sessionData } = useSession();
	useEffect(() => {
		if (sessionData && sessionData.user) {
			router.push("/dashboard");
		}
	}, [sessionData, router]);

	const handleSignup = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			console.log(formData);
			signupSchema.parse(formData);
			const { data } = await axios.post("api/signup", formData);
			setError(null);
			if (data._id) {
				router.push("/login");
			}
		} catch (error: unknown) {
			setError(handleError(error));
		} finally {
			setIsLoading(false);
		}
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSocialSignIn = async (provider: string) => {
		setIsLoading(true);
		try {
			if (sessionData && sessionData.user) {
				throw new Error("You are already signed in. Please sign out.");
			}
			await signIn(provider, {
				callbackUrl: "/dashboard",
			});
		} catch (error: unknown) {
			setError(handleError(error));
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Card className="w-full max-w-md backdrop-blur-lg bg-background/80 border-primary/20">
					<CardHeader>
						<CardTitle className="text-2xl font-bold text-center">
							<motion.span
								className="inline-block"
								initial={{ opacity: 0, scale: 0.5 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.2 }}
							>
								Join CodeMentorHub
							</motion.span>
						</CardTitle>
						<CardDescription className="text-center">
							Create your account and start your coding journey
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleSignup} className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="name">Name</Label>
								<Input
									id="name"
									name="name"
									placeholder="John Doe"
									value={formData.name}
									onChange={handleInputChange}
									disabled={isLoading}
									className="transition-all duration-300 focus:ring-2 focus:ring-primary"
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="username">
									Username (optional)
								</Label>
								<Input
									id="username"
									name="username"
									placeholder="johndoe"
									value={formData.username}
									onChange={handleInputChange}
									disabled={isLoading}
									className="transition-all duration-300 focus:ring-2 focus:ring-primary"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									name="email"
									type="email"
									placeholder="john@example.com"
									value={formData.email}
									onChange={handleInputChange}
									disabled={isLoading}
									className="transition-all duration-300 focus:ring-2 focus:ring-primary"
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="password">Password</Label>
								<Input
									id="password"
									name="password"
									type="password"
									value={formData.password}
									onChange={handleInputChange}
									disabled={isLoading}
									className="transition-all duration-300 focus:ring-2 focus:ring-primary"
									required
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="bio">Bio (optional)</Label>
								<Textarea
									id="bio"
									name="bio"
									placeholder="Tell us about yourself..."
									value={formData.bio}
									onChange={handleInputChange}
									disabled={isLoading}
									className="transition-all duration-300 focus:ring-2 focus:ring-primary resize-none"
									rows={3}
								/>
							</div>
							<Button
								type="submit"
								className="w-full text-black"
								disabled={isLoading}
							>
								{isLoading ? (
									<>
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />
										Signing up...
									</>
								) : (
									<>
										Sign Up
										<ArrowRight className="ml-2 h-4 w-4" />
									</>
								)}
							</Button>
						</form>
						{error && (
							<Alert className="mt-6 w-full text-red-500 border-2 border-red-600">
								<AlertTitle>Error while signing up</AlertTitle>
								<AlertDescription>{error}</AlertDescription>
							</Alert>
						)}
						<div className="mt-6">
							<div className="relative">
								<div className="absolute inset-0 flex items-center">
									<span className="w-full border-t border-muted-foreground" />
								</div>
								<div className="relative flex justify-center text-xs uppercase">
									<span className="bg-background px-2 text-muted-foreground">
										Or sign up with
									</span>
								</div>
							</div>
							<div className="mt-6 grid grid-cols-2 gap-4">
								<Button
									onClick={() => handleSocialSignIn("github")}
									variant="outline"
									className="hover-lift"
								>
									<LuGithub className="mr-2 h-4 w-4" />
									Github
								</Button>
								<Button
									onClick={() => handleSocialSignIn("google")}
									variant="outline"
									className="hover-lift"
								>
									<FaGoogle className="mr-2 h-4 w-4" />
									Google
								</Button>
							</div>
						</div>
					</CardContent>
					<CardFooter className="flex flex-col space-y-2">
						<div className="text-sm text-center">
							Already have an account?{" "}
							<Link
								href="/login"
								className="animated-underline text-primary font-medium"
							>
								Log in
							</Link>
						</div>
						<motion.div
							className="w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
							initial={{ scaleX: 0 }}
							animate={{ scaleX: 1 }}
							transition={{ duration: 1, delay: 0.5 }}
						/>
					</CardFooter>
				</Card>
			</motion.div>
		</div>
	);
}
