import { Schema, model, Document, ObjectId, models, Model } from "mongoose";

export interface IAnalytics extends Document {
	_id: ObjectId;
	metricType: string;
	value: number;
	timestamp: Date;
}

const analyticsSchema = new Schema<IAnalytics>({
	metricType: { type: String, required: true },
	value: { type: Number, required: true },
	timestamp: { type: Date, default: Date.now },
});

const Analytics: Model<IAnalytics> =
	models.Analytics || model<IAnalytics>("Analytics", analyticsSchema);

export default Analytics;
