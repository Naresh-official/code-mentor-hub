import { NextRequest, NextResponse } from "next/server";

const publicRoutes = ["/login", "/signup", "/"];

export default async function middleware(req: NextRequest) {
	const token = req.cookies.get("next-auth.session-token")?.value;
	const currentPath = req.nextUrl.pathname;

	if (currentPath.startsWith("/api/auth")) {
		return NextResponse.next();
	}

	if (!token) {
		if (!publicRoutes.includes(currentPath)) {
			return NextResponse.redirect(new URL("/login", req.url));
		}
	} else {
		if (publicRoutes.includes(currentPath)) {
			return NextResponse.redirect(new URL("/dashboard", req.url));
		}
	}
	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!_next).*)"],
};
