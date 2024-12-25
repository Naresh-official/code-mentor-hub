"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Mail, Phone, MapPin, Send } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log("Form submitted:", formData);
		// Reset form after submission
		setFormData({ name: "", email: "", subject: "", message: "" });
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-background to-muted">
			<Navbar />
			<main className="pt-16 px-4 md:px-6 max-w-5xl mx-auto">
				<section className="py-12 md:py-24">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6 text-center">
							Contact <span className="text-primary">Us</span>
						</h1>
						<p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
							Have questions or feedback? We'd love to hear from
							you. Reach out to us using the form below or through
							our other contact channels.
						</p>
					</motion.div>

					<div className="grid gap-8 md:grid-cols-2">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
						>
							<Card>
								<CardHeader>
									<CardTitle>Contact Information</CardTitle>
									<CardDescription>
										Get in touch with us through various
										channels
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-4">
									<div className="flex items-center space-x-2">
										<Mail className="h-5 w-5 text-primary" />
										<span>naresh01.official@gmail.com</span>
									</div>
									<div className="flex items-center space-x-2">
										<Phone className="h-5 w-5 text-primary" />
										<span>+91 89517 00697</span>
									</div>
									<div className="flex items-center space-x-2">
										<MapPin className="h-5 w-5 text-primary" />
										<span>
											123 Tech Street, San Francisco, CA
											94105
										</span>
									</div>
								</CardContent>
							</Card>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5, delay: 0.4 }}
						>
							<Card>
								<CardHeader>
									<CardTitle>Send Us a Message</CardTitle>
									<CardDescription>
										Fill out the form below and we'll get
										back to you as soon as possible
									</CardDescription>
								</CardHeader>
								<CardContent>
									<form
										onSubmit={handleSubmit}
										className="space-y-4"
									>
										<div className="space-y-2">
											<Label htmlFor="name">Name</Label>
											<Input
												id="name"
												name="name"
												placeholder="Your Name"
												value={formData.name}
												onChange={handleInputChange}
												required
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="email">Email</Label>
											<Input
												id="email"
												name="email"
												type="email"
												placeholder="your@email.com"
												value={formData.email}
												onChange={handleInputChange}
												required
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="subject">
												Subject
											</Label>
											<Input
												id="subject"
												name="subject"
												placeholder="What's this about?"
												value={formData.subject}
												onChange={handleInputChange}
												required
											/>
										</div>
										<div className="space-y-2">
											<Label htmlFor="message">
												Message
											</Label>
											<Textarea
												id="message"
												name="message"
												placeholder="Your message here..."
												value={formData.message}
												onChange={handleInputChange}
												required
												rows={4}
											/>
										</div>
										<Button
											type="submit"
											className="w-full"
										>
											<Send className="mr-2 h-4 w-4" />
											Send Message
										</Button>
									</form>
								</CardContent>
							</Card>
						</motion.div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}
