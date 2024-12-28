import { z } from "zod";

export const loginSchema = z.object({
	name: z
		.string()
		.max(20, { message: "Name must be at most 20 characters" })
		.min(2, { message: "Name must be at least 2 characters" }),
	email: z
		.string()
		.email()
		.min(6, { message: "Email must be at least 6 characters" }),
	password: z.string(),
});
