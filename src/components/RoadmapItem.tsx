import { Progress } from "./ui/progress";

export const RoadmapItem = ({
	title,
	progress,
}: {
	title: string;
	progress: number;
}) => (
	<div className="mb-4">
		<div className="flex justify-between mb-2">
			<span className="font-medium">{title}</span>
			<span className="text-sm text-muted-foreground">{progress}%</span>
		</div>
		<Progress value={progress} className="h-2" />
	</div>
);
