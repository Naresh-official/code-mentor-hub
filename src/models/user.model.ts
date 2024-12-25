import mongoose, { Schema, Document, Model, ObjectId } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
	_id: ObjectId;
	name: string;
	username?: string;
	password?: string | null;
	email: string;
	avatarUrl: string;
	bio?: string;
	authProvider: "GOOGLE" | "GITHUB" | "CREDENTIAL";
	createdAt: Date;
	updatedAt: Date;
	comparePassword: (password: string) => boolean;
}

const userSchema: Schema<IUser> = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		username: { type: String },
		password: {
			type: String,
			default: null,
			select: false,
		},
		avatarUrl: {
			type: String,
			default:
				"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541",
		},
		bio: { type: String },
		authProvider: {
			type: String,
			enum: ["GOOGLE", "GITHUB", "CREDENTIAL"],
			default: "CREDENTIAL",
		},
	},
	{ timestamps: true }
);

userSchema.pre("save", function (next) {
	if (this.password && this.isModified("password")) {
		this.password = bcrypt.hashSync(this.password, 10);
	}
	next();
});

userSchema.methods.comparePassword = function (password: string) {
	return bcrypt.compareSync(password, this.password);
};

const User: Model<IUser> =
	mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export default User;
