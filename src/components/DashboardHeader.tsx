import { Bell, ChevronDown, Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const DashboardHeader = () => {
	return (
		<header className="bg-background border-b border-border p-4 flex justify-between items-center">
			<h1 className="text-2xl font-bold">Welcome back, John!</h1>
			<div className="flex items-center space-x-4">
				<div className="relative">
					<Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
					<Input className="pl-8" placeholder="Search..." />
				</div>
				<Button variant="ghost" size="icon">
					<Bell className="h-5 w-5" />
				</Button>
				<div className="flex items-center space-x-2">
					<Avatar>
						<AvatarImage
							src="/placeholder-avatar.jpg"
							alt="User Avatar"
						/>
						<AvatarFallback>JD</AvatarFallback>
					</Avatar>
					<ChevronDown className="h-4 w-4 text-muted-foreground" />
				</div>
			</div>
		</header>
	);
};
