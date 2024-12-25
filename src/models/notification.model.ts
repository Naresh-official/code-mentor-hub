import mongoose, { Schema, model, Document, ObjectId, Model } from "mongoose";

export interface INotification extends Document {
	_id: ObjectId;
	userId: ObjectId;
	message: string;
	type: "system" | "mentor request" | "roadmap update";
	isRead: boolean;
	createdAt: Date;
}

const notificationSchema = new Schema<INotification>({
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
	type: {
		type: String,
		enum: ["system", "mentor request", "roadmap update"],
		required: true,
	},
	isRead: {
		type: Boolean,
		default: false,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const NotificationModel: Model<INotification> =
	mongoose.models.NotificationModel ||
	model<INotification>("NotificationModel", notificationSchema);

export default NotificationModel;
