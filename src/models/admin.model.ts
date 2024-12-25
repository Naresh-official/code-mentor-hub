import mongoose, { Schema, model, Document, ObjectId, Model } from "mongoose";

export interface IAdmin extends Document {
	_id: ObjectId;
	name: string;
	email: string;
	permissions: string[];
}

const adminSchema = new Schema<IAdmin>({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	permissions: [{ type: String, required: true }],
});

const AdminModel: Model<IAdmin> =
	mongoose.models.AdminModel || model<IAdmin>("AdminModel", adminSchema);

export default AdminModel;
