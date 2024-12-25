import mongoose, { Model, ObjectId, Schema } from "mongoose";

export interface IRoadmap {
	_id: string;
	userId: ObjectId;
	title: string;
	description: string;
	steps: Array<{
		title: string;
		description: string;
		status: "pending" | "in-progress" | "completed";
	}>;
	sharedWith: string[];
	createdAt: Date;
	updatedAt: Date;
}

const roadmapSchema = new Schema<IRoadmap>(
	{
		userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
		title: { type: String, required: true },
		description: { type: String, required: true },
		steps: [
			{
				title: { type: String, required: true },
				description: { type: String, required: true },
				status: {
					type: String,
					enum: ["pending", "in-progress", "completed"],
					default: "pending",
				},
			},
		],
		sharedWith: [{ type: String }],
	},
	{ timestamps: true }
);

const RoadmapModel: Model<IRoadmap> =
	mongoose.models.RoadmapModel ||
	mongoose.model<IRoadmap>("RoadmapModel", roadmapSchema);

export default RoadmapModel;
