import mongoose, { Document, ObjectId, Model, Schema } from "mongoose";
export interface IRepository extends Document {
	_id: ObjectId;
	userId: ObjectId;
	repoName: string;
	repoUrl: string;
	description: string;
	analysis: {
		codeQualityScore: number;
		suggestions: string[];
	};
	createdAt: Date;
	updatedAt: Date;
}

const repositorySchema = new Schema<IRepository>(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		repoName: {
			type: String,
			required: true,
		},
		repoUrl: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		analysis: {
			codeQualityScore: {
				type: Number,
				required: true,
			},
			suggestions: {
				type: [String],
				required: true,
			},
		},
	},
	{ timestamps: true }
);

const Repository: Model<IRepository> =
	mongoose.models.Repository ||
	mongoose.model<IRepository>("Repository", repositorySchema);

export default Repository;
