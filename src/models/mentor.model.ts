import mongoose, { Schema, Model, ObjectId, Document } from "mongoose";

export interface IMentor extends Document {
	_id: ObjectId;
	userId: ObjectId;
	skills: string[];
	availability: boolean;
	rating: number;
	reviews?: ObjectId[];
	createdAt: Date;
	updatedAt: Date;
}

const mentorSchema: Schema = new Schema(
	{
		userId: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		skills: {
			type: [String],
			required: true,
		},
		availability: {
			type: Boolean,
			required: true,
		},
		rating: {
			type: Number,
			required: true,
		},
		reviews: {
			type: [Schema.Types.ObjectId],
			ref: "Review",
		},
	},
	{ timestamps: true }
);

const MentorModel: Model<IMentor> =
	mongoose.models.MentorModel || mongoose.model<IMentor>("MentorModel", mentorSchema);

export default MentorModel;
