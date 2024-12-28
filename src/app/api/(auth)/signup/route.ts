import UserModel from "@/models/user.model";
import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const { name, username, email, password, avatarUrl, bio } =
			await request.json();

		await dbConnect();

		const existingUserWithEmail = await UserModel.findOne({ email });
		if (existingUserWithEmail) {
			return new NextResponse("User with this email already exists", {
				status: 409,
			});
		}

		const existingUserWithUsername = await UserModel.findOne({ username });
		if (existingUserWithUsername) {
			return new NextResponse("User with this username already exists", {
				status: 409,
			});
		}

		const newUser = await UserModel.create({
			name,
			username,
			email,
			password,
			avatarUrl,
			bio,
			authProvider: "CREDENTIAL",
		});

		const displayUser = {
			_id: newUser._id,
			name: newUser.name,
			username: newUser.username,
			email: newUser.email,
			avatarUrl: newUser.avatarUrl,
			bio: newUser.bio,
		};
		return NextResponse.json(displayUser, { status: 201 });
	} catch (error: unknown) {
		console.log(error);
		if (error instanceof Error) {
			console.log(error.message);
			return new NextResponse(error.message, { status: 400 });
		}
		return new NextResponse("Something went wrong", { status: 500 });
	}
}
