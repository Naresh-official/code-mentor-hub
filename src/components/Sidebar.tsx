"use client";
import {
	Home,
	Users,
	BookOpen,
	Github,
	GroupIcon as Community,
	Briefcase,
	Settings,
	LogOut,
	Code,
	Calendar,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useActiveTab } from "@/hooks/useActiveTab";

export const Sidebar = () => {
	const menuItems = [
		{ icon: Home, label: "Dashboard", href: "/dashboard" },
		{ icon: Users, label: "Mentors", href: "/dashboard/mentors" },
		{ icon: BookOpen, label: "Roadmap", href: "/dashboard/roadmap" },
		{
			icon: Github,
			label: "Repositories",
			href: "/dashboard/repositories",
		},
		{ icon: Community, label: "Community", href: "/dashboard/community" },
		{ icon: Briefcase, label: "Career Tools", href: "/dashboard/career" },
		{ icon: Calendar, label: "Sessions", href: "/dashboard/sessions" },
		{ icon: Settings, label: "Settings", href: "/dashboard/settings" },
	];

	const { isActive } = useActiveTab();
	return (
		<aside className="w-64 bg-background border-r border-border h-screen p-4">
			<div className="flex items-center mb-8">
				<Code className="h-8 w-8 text-primary mr-2" />
				<span className="font-bold text-lg">CodeMentorHub</span>
			</div>
			<nav>
				{menuItems.map((item, index) => (
					<Link
						key={index}
						href={item.href}
						className={`flex items-center p-2 mb-2 hover:bg-muted hover:text-secondary-foreground ${
							isActive(item.href)
								? "bg-muted font-semibold"
								: " text-muted-foreground"
						} rounded-md transition-colors`}
					>
						<item.icon className="h-5 w-5 mr-3" />
						<span>{item.label}</span>
					</Link>
				))}
			</nav>
			<div className="absolute bottom-4 w-56">
				<Button
					variant="ghost"
					className="w-full justify-start hover:text-red-500"
				>
					<LogOut className="h-5 w-5 mr-3" />
					Logout
				</Button>
			</div>
		</aside>
	);
};
