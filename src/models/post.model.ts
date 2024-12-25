import mongoose, { Schema, model, Document, ObjectId, Model } from "mongoose";

export interface IPost extends Document {
	_id: ObjectId;
	userId: ObjectId;
	title: string;
	content: string;
	tags: string[];
	comments: {
		userId: ObjectId;
		content: string;
		createdAt: Date;
	}[];
	createdAt: Date;
	updatedAt: Date;
}

const postSchema = new Schema<IPost>(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		tags: [{ type: String }],
		comments: [
			{
				userId: {
					type: Schema.Types.ObjectId,
					ref: "User",
					required: true,
				},
				content: {
					type: String,
					required: true,
				},
				createdAt: {
					type: Date,
					default: Date.now,
				},
			},
		],
	},
	{ timestamps: true }
);

const PostModel: Model<IPost> =
	mongoose.models.PostModel || model<IPost>("PostModel", postSchema);

export default PostModel;
