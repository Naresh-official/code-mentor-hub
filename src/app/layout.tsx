import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthSessionProvider } from "@/contexts/authSessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "CodeMentorHub",
	description:
		"Empower your development journey with AI-driven insights and community support",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="dark">
			<AuthSessionProvider>
				<body
					className={`${inter.className} bg-gradient-to-br from-background to-muted text-foreground`}
				>
					{children}
				</body>
			</AuthSessionProvider>
		</html>
	);
}
