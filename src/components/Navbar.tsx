import { Code } from "lucide-react";
import Link from "next/link";
export default function Navbar() {
	return (
		<header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 h-16 flex items-center backdrop-blur-md bg-background/40 border-b border-muted">
			<Link className="flex items-center justify-center" href="/">
				<Code className="h-6 w-6 mr-2 text-primary" />
				<span className="font-bold text-lg">CodeMentorHub</span>
			</Link>
			<nav className="ml-auto flex gap-4 sm:gap-6">
				<Link
					className="text-sm font-medium hover:text-primary transition-colors"
					href="/"
				>
					Home
				</Link>
				<Link
					className="text-sm font-medium hover:text-primary transition-colors"
					href="/about"
				>
					About
				</Link>
				<Link
					className="text-sm font-medium hover:text-primary transition-colors"
					href="/login"
				>
					Login
				</Link>
			</nav>
		</header>
	);
}
