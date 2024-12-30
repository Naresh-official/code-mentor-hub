"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
	Save,
	X,
	ChevronRight,
	Plus,
	Trash2,
	GripVertical,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { randomUUID } from "crypto";

// Mock initial roadmap data
const initialRoadmapSteps = [
	{
		id: "1",
		title: "Learn HTML & CSS Basics",
		description: "Master the fundamentals of web structure and styling",
		estimatedTime: "2 weeks",
	},
	{
		id: "2",
		title: "JavaScript Fundamentals",
		description: "Understand core concepts of JavaScript programming",
		estimatedTime: "4 weeks",
	},
	{
		id: "3",
		title: "React Basics",
		description: "Learn the fundamentals of React library",
		estimatedTime: "3 weeks",
	},
];

const Header = ({
	onSave,
	onCancel,
}: {
	onSave: () => void;
	onCancel: () => void;
}) => (
	<div className="mb-8">
		<div className="flex items-center mb-4 text-sm text-muted-foreground">
			<Link href="/dashboard" className="hover:text-primary">
				Dashboard
			</Link>
			<ChevronRight className="h-4 w-4 mx-2" />
			<Link href="/dashboard/roadmap" className="hover:text-primary">
				Roadmap
			</Link>
			<ChevronRight className="h-4 w-4 mx-2" />
			<span className="font-medium text-foreground">Edit</span>
		</div>
		<div className="flex justify-between items-center">
			<h1 className="text-3xl font-bold">Edit Your Roadmap</h1>
			<div className="space-x-2">
				<Button variant="outline" onClick={onCancel}>
					Cancel
				</Button>
				<Button onClick={onSave}>Save Changes</Button>
			</div>
		</div>
	</div>
);

const RoadmapStepCard = ({
	step,
	index,
	updateStep,
	deleteStep,
}: {
	step: (typeof initialRoadmapSteps)[0];
	index: number;
	updateStep: (id: string, field: string, value: any) => void;
	deleteStep: (id: string) => void;
}) => {
	return (
		<Draggable draggableId={step.id} index={index}>
			{(provided) => (
				<Card
					className="mb-4"
					ref={provided.innerRef}
					{...provided.draggableProps}
				>
					<CardContent className="p-4">
						<div className="flex items-center mb-2">
							<div {...provided.dragHandleProps}>
								<GripVertical className="h-5 w-5 mr-2 text-muted-foreground cursor-move" />
							</div>
							<Input
								value={step.title}
								onChange={(e) =>
									updateStep(step.id, "title", e.target.value)
								}
								className="text-lg font-semibold bg-transparent border-none"
							/>
							<Button
								variant="ghost"
								size="icon"
								onClick={() => deleteStep(step.id)}
								className="ml-auto"
							>
								<Trash2 className="h-4 w-4" />
							</Button>
						</div>
						<Textarea
							value={step.description}
							onChange={(e) =>
								updateStep(
									step.id,
									"description",
									e.target.value
								)
							}
							className="mt-2 resize-none"
							rows={2}
						/>
						<Select
							value={step.estimatedTime}
							onValueChange={(value) =>
								updateStep(step.id, "estimatedTime", value)
							}
						>
							<SelectTrigger className="w-[180px] mt-2">
								<SelectValue placeholder="Estimated Time" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="1 week">1 week</SelectItem>
								<SelectItem value="2 weeks">2 weeks</SelectItem>
								<SelectItem value="3 weeks">3 weeks</SelectItem>
								<SelectItem value="4 weeks">4 weeks</SelectItem>
								<SelectItem value="5 weeks">5 weeks</SelectItem>
							</SelectContent>
						</Select>
					</CardContent>
				</Card>
			)}
		</Draggable>
	);
};

const AddStepDialog = ({
	onAddStep,
}: {
	onAddStep: (step: (typeof initialRoadmapSteps)[0]) => void;
}) => {
	const [newStep, setNewStep] = useState({
		title: "",
		description: "",
		estimatedTime: "",
	});

	const handleAddStep = () => {
		onAddStep({
			id: randomUUID(),
			...newStep,
		});
		setNewStep({
			title: "",
			description: "",
			estimatedTime: "",
		});
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="w-full">
					<Plus className="h-4 w-4 mr-2" /> Add New Step
				</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add New Roadmap Step</DialogTitle>
					<DialogDescription>
						Create a new step for your learning roadmap.
					</DialogDescription>
				</DialogHeader>
				<div className="space-y-4">
					<div>
						<Label htmlFor="new-step-title">Title</Label>
						<Input
							id="new-step-title"
							value={newStep.title}
							onChange={(e) =>
								setNewStep({
									...newStep,
									title: e.target.value,
								})
							}
						/>
					</div>
					<div>
						<Label htmlFor="new-step-description">
							Description
						</Label>
						<Textarea
							id="new-step-description"
							value={newStep.description}
							onChange={(e) =>
								setNewStep({
									...newStep,
									description: e.target.value,
								})
							}
						/>
					</div>
					<div>
						<Label htmlFor="new-step-time">Estimated Time</Label>
						<Select
							value={newStep.estimatedTime}
							onValueChange={(value) =>
								setNewStep({ ...newStep, estimatedTime: value })
							}
						>
							<SelectTrigger id="new-step-time">
								<SelectValue placeholder="Select estimated time" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="1 week">1 week</SelectItem>
								<SelectItem value="2 weeks">2 weeks</SelectItem>
								<SelectItem value="3 weeks">3 weeks</SelectItem>
								<SelectItem value="4 weeks">4 weeks</SelectItem>
								<SelectItem value="5 weeks">5 weeks</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
				<DialogFooter>
					<Button onClick={handleAddStep}>Add Step</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default function RoadmapEditPage() {
	const [roadmapSteps, setRoadmapSteps] = useState(initialRoadmapSteps);

	const handleDragEnd = (result: any) => {
		if (!result.destination) return;

		const items = Array.from(roadmapSteps);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);
		setRoadmapSteps(items);
	};

	const updateStep = (id: string, field: string, value: any) => {
		setRoadmapSteps(
			roadmapSteps.map((step) =>
				step.id === id ? { ...step, [field]: value } : step
			)
		);
	};

	const deleteStep = (id: string) => {
		setRoadmapSteps(roadmapSteps.filter((step) => step.id !== id));
	};

	const addStep = (newStep: (typeof initialRoadmapSteps)[0]) => {
		setRoadmapSteps([...roadmapSteps, newStep]);
	};

	const handleSave = () => {
		// Simulating save operation
		console.log("Saving roadmap:", roadmapSteps);
		// Here you would typically send the data to your backend
	};

	const handleCancel = () => {
		// Simulating cancel operation
		console.log("Cancelling edits");
		// Here you would typically reset the state or navigate away
	};

	return (
		<div className="container w-full min-h-[calc(100vh-72px)] overflow-y-auto px-4 py-8">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<Header onSave={handleSave} onCancel={handleCancel} />

				<div>
					<DragDropContext onDragEnd={handleDragEnd}>
						<Droppable
							droppableId="roadmap-steps"
							isDropDisabled={false}
							isCombineEnabled={false}
							ignoreContainerClipping={false}
						>
							{(provided) => (
								<div
									{...provided.droppableProps}
									ref={provided.innerRef}
								>
									{roadmapSteps.map((step, index) => (
										<RoadmapStepCard
											key={step.id}
											step={step}
											index={index}
											updateStep={updateStep}
											deleteStep={deleteStep}
										/>
									))}
									{provided.placeholder}
								</div>
							)}
						</Droppable>
					</DragDropContext>
					<AddStepDialog onAddStep={addStep} />
				</div>

				<footer className="border-t border-border p-4">
					<div className="mx-auto flex justify-end space-x-2">
						<Button variant="outline" onClick={handleCancel}>
							Cancel
						</Button>
						<Button onClick={handleSave}>Save Changes</Button>
					</div>
				</footer>
			</motion.div>
		</div>
	);
}
