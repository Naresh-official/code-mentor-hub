import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export const MentorCard = ({
	name,
	title,
	availability,
	rating,
}: {
	name: string;
	title: string;
	availability: string;
	rating: number;
}) => (
	<Card>
		<CardContent className="p-6">
			<div className="flex items-center mb-4">
				<Avatar className="h-12 w-12 mr-4">
					<AvatarImage src="/placeholder-avatar.jpg" alt={name} />
					<AvatarFallback>{name[0]}</AvatarFallback>
				</Avatar>
				<div>
					<CardTitle className="text-lg">{name}</CardTitle>
					<CardDescription>{title}</CardDescription>
				</div>
			</div>
			<div className="mb-4">
				<span className="text-sm font-medium">{availability}</span>
			</div>
			<div className="flex items-center justify-between">
				<div className="flex items-center">
					{[...Array(5)].map((_, i) => (
						<Star
							key={i}
							className={`h-4 w-4 ${
								i < rating ? "text-yellow-400" : "text-gray-300"
							}`}
						/>
					))}
					<span className="ml-2 text-sm text-muted-foreground">
						{rating.toFixed(1)}
					</span>
				</div>
				<Button size="sm">Connect</Button>
			</div>
		</CardContent>
	</Card>
);
