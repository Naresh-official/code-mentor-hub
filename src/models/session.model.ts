import mongoose, { Document, Model, ObjectId, Schema } from "mongoose";

export interface ISession extends Document {
	_id: ObjectId;
	mentorId: ObjectId;
	userId: ObjectId;
	scheduledAt: Date;
	duration: number; // in minutes
	status: "pending" | "completed" | "canceled";
	feedback?: string;
	createdAt: Date;
}

const sessionSchema = new Schema<ISession>({
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
	scheduledAt: { type: Date, required: true },
	duration: { type: Number, required: true },
	status: {
		type: String,
		enum: ["pending", "completed", "canceled"],
		default: "pending",
	},
	feedback: { type: String },
	createdAt: { type: Date, default: Date.now },
});

const SessionModel: Model<ISession> =
	mongoose.models.SessionModel ||
	mongoose.model<ISession>("SessionModel", sessionSchema);

export default SessionModel;
