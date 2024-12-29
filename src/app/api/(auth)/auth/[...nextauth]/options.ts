import UserModel, { IUser } from "@/models/user.model";
import dbConnect from "@/utils/dbConnect";
import { NextAuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

interface ICredentials {
	emailOrUsername: string;
	password: string;
}

export const authOptions: NextAuthOptions = {
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
			httpOptions: {
				timeout: 30000,
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID as string,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
			httpOptions: {
				timeout: 30000,
			},
		}),
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				emailOrUsername: {
					label: "Email or Username",
					type: "text",
				},
				password: {
					label: "Password",
					type: "password",
				},
			},
			async authorize(credentials): Promise<User | null> {
				try {
					if (!credentials) {
						throw new Error("Credentials are missing");
					}
					const { emailOrUsername, password } =
						credentials as ICredentials;
					await dbConnect();
					const user: IUser | null = await UserModel.findOne({
						$or: [
							{ email: emailOrUsername },
							{ username: emailOrUsername },
						],
					}).select("+password");
					if (!user) {
						throw new Error("User not found");
					}

					if (
						user.authProvider === "CREDENTIAL" &&
						user?.comparePassword(password)
					) {
						return {
							id: user._id.toString(),
							name: user.name,
							email: user.email,
							username: user?.username || undefined,
						} as User;
					} else {
						throw new Error("Invalid credentials");
					}
				} catch (error: unknown) {
					if (error instanceof Error) {
						throw new Error(error.message);
					}
					throw new Error(
						"Something went wrong in credentials provider"
					);
				}
			},
		}),
	],
	callbacks: {
		async signIn({ user, account }) {
			if (account?.provider == "github") {
				try {
					await dbConnect();
					const exitsingUser = await UserModel.findOne({
						email: user?.email as string,
					});
					if (!exitsingUser) {
						await UserModel.create({
							name: user?.name as string,
							email: user?.email as string,
							password: null,
							isSocialLogin: true,
							avatarUrl: user?.image as string,
							authProvider: "GITHUB",
						});
						return true;
					} else {
						if (exitsingUser?.authProvider == "GITHUB") {
							return true;
						} else {
							return false;
						}
					}
				} catch (error: unknown) {
					console.log("error in signIn callback github : ", error);
					return false;
				}
			}

			if (account?.provider == "google") {
				try {
					await dbConnect();
					const exitsingUser = await UserModel.findOne({
						email: user?.email as string,
					});
					if (!exitsingUser) {
						await UserModel.create({
							name: user?.name as string,
							email: user?.email as string,
							password: null,
							isSocialLogin: true,
							avatarUrl: user?.image as string,
							authProvider: "GOOGLE",
						});
						return true;
					} else {
						if (exitsingUser?.authProvider == "GOOGLE") {
							return true;
						} else {
							return false;
						}
					}
				} catch (error: unknown) {
					console.log("error in signIn callback google : ", error);
					return false;
				}
			}
			if (account?.provider == "credentials") {
				return true;
			}
			return false;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
	session: {
		strategy: "jwt",
		maxAge: 2 * 24 * 60 * 60, // 2 days
	},
	pages: {
		signIn: "/login",
	},
};
