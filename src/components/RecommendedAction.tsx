import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";

export const RecommendedAction = ({
	icon: Icon,
	title,
	description,
}: {
	icon: any;
	title: string;
	description: string;
}) => (
	<Card className="mb-4">
		<CardContent className="flex items-start p-6">
			<Icon className="h-8 w-8 text-primary mr-4 mt-1" />
			<div>
				<CardTitle className="text-lg mb-1">{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</div>
		</CardContent>
	</Card>
);
