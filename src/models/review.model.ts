import mongoose, { Schema, Document, ObjectId, Model } from "mongoose";

export interface IReview extends Document {
	_id: ObjectId;
	mentorId: ObjectId;
	userId: ObjectId;
	rating: number;
	comment: string;
	createdAt: Date;
}

const reviewSchema = new Schema<IReview>({
	mentorId: {
		type: Schema.Types.ObjectId,
		ref: "Mentor",
		required: true,
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	rating: { type: Number, required: true },
	comment: { type: String, required: true },
	createdAt: { type: Date, default: Date.now },
});

const Review: Model<IReview> =
	mongoose.models.Review || mongoose.model<IReview>("Review", reviewSchema);

export default Review;
