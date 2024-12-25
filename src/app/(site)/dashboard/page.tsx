"use client";

import { MentorCard } from "@/components/MentorCard";
import { QuickStatsWidget } from "@/components/QuickStatsWidget";
import { RecommendedAction } from "@/components/RecommendedAction";
import { RoadmapItem } from "@/components/RoadmapItem";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
	Target,
	MessageSquare,
	Code,
	GroupIcon as Community,
	Github,
	Users,
} from "lucide-react";

export default function dashboardPage() {
	const activeTab = "home";
	return (
		<main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
			<div className="max-w-7xl mx-auto">
				{activeTab === "home" && (
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<section className="mb-8">
							<h2 className="text-3xl font-bold mb-6">
								Dashboard Overview
							</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
								<QuickStatsWidget
									icon={Target}
									label="Roadmap Progress"
									value="68%"
								/>
								<QuickStatsWidget
									icon={MessageSquare}
									label="Mentor Interactions"
									value="12"
								/>
								<QuickStatsWidget
									icon={Code}
									label="Repositories Reviewed"
									value="7"
								/>
								<QuickStatsWidget
									icon={Community}
									label="Community Posts"
									value="23"
								/>
							</div>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold mb-4">
								Recommended Actions
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<RecommendedAction
									icon={Github}
									title="Review Your Latest Commit"
									description="Your recent push to 'awesome-project' has some suggestions for improvement."
								/>
								<RecommendedAction
									icon={Users}
									title="Connect with a New Mentor"
									description="Based on your goals, we think Sarah would be a great mentor for you."
								/>
							</div>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-bold mb-4">
								Your Mentors
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								<MentorCard
									name="Alex Johnson"
									title="Senior Frontend Developer"
									availability="Available Now"
									rating={4.8}
								/>
								<MentorCard
									name="Emily Chen"
									title="Machine Learning Engineer"
									availability="Next Slot: Tomorrow at 3 PM"
									rating={4.9}
								/>
								<MentorCard
									name="Michael Brown"
									title="Full Stack Developer"
									availability="Available in 2 hours"
									rating={4.7}
								/>
							</div>
						</section>

						<section>
							<h2 className="text-2xl font-bold mb-4">
								Learning Roadmap
							</h2>
							<Card>
								<CardContent className="p-6">
									<RoadmapItem
										title="JavaScript Fundamentals"
										progress={90}
									/>
									<RoadmapItem
										title="React Basics"
										progress={75}
									/>
									<RoadmapItem
										title="Node.js and Express"
										progress={60}
									/>
									<RoadmapItem
										title="Database Design"
										progress={40}
									/>
									<Button className="mt-4">
										View Full Roadmap
									</Button>
								</CardContent>
							</Card>
						</section>
					</motion.div>
				)}
			</div>
		</main>
	);
}
