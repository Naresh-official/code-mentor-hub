"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
	CardFooter,
} from "@/components/ui/card";

export default function LoginPage() {
	const [isLoading, setIsLoading] = useState(false);
	const [credentials, setCredentials] = useState({
		usernameOrEmail: "",
		password: "",
	});

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		// Simulate login process
		await new Promise((resolve) => setTimeout(resolve, 2000));
		setIsLoading(false);
		// Handle login logic here
	};

	return (
		<div className="min-h-screen flex items-center justify-center p-4">
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
								Welcome to CodeMentorHub
							</motion.span>
						</CardTitle>
						<CardDescription className="text-center">
							Login to access your personalized coding journey
						</CardDescription>
					</CardHeader>
					<CardContent>
						<form onSubmit={handleLogin} className="space-y-4">
							<div className="space-y-2">
								<Label htmlFor="usernameOrEmail">
									Username or Email
								</Label>
								<Input
									id="usernameOrEmail"
									placeholder="johndoe or john@example.com"
									value={credentials.usernameOrEmail}
									onChange={(e) =>
										setCredentials({
											...credentials,
											usernameOrEmail: e.target.value,
										})
									}
									className="transition-all duration-300 focus:ring-2 focus:ring-primary"
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="password">Password</Label>
								<Input
									id="password"
									type="password"
									value={credentials.password}
									onChange={(e) =>
										setCredentials({
											...credentials,
											password: e.target.value,
										})
									}
									className="transition-all duration-300 focus:ring-2 focus:ring-primary"
								/>
							</div>
							<Button
								type="submit"
								className="w-full neon-button"
								disabled={isLoading}
							>
								{isLoading ? (
									<>
										<Loader2 className="mr-2 h-4 w-4 animate-spin" />
										Logging in...
									</>
								) : (
									<>
										Login
										<ArrowRight className="ml-2 h-4 w-4" />
									</>
								)}
							</Button>
						</form>
						<div className="mt-6">
							<div className="relative">
								<div className="absolute inset-0 flex items-center">
									<span className="w-full border-t border-muted-foreground" />
								</div>
								<div className="relative flex justify-center text-xs uppercase">
									<span className="bg-background px-2 text-muted-foreground">
										Or continue with
									</span>
								</div>
							</div>
							<div className="mt-6 grid grid-cols-2 gap-4">
								<Button
									variant="outline"
									className="hover-lift"
								>
									<Github className="mr-2 h-4 w-4" />
									GitHub
								</Button>
								<Button
									variant="outline"
									className="hover-lift"
								>
									<Mail className="mr-2 h-4 w-4" />
									Google
								</Button>
							</div>
						</div>
					</CardContent>
					<CardFooter className="flex flex-col space-y-2">
						<div className="text-sm text-center">
							Don't have an account?{" "}
							<Link
								href="/signup"
								className="animated-underline text-primary font-medium"
							>
								Sign up
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
