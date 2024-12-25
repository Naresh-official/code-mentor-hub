import { Code } from "lucide-react";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="py-3 px-4 md:px-6 border-t-2 border-muted">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
				<div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
					<Link href="/" className="flex items-center">
						<Code className="h-6 w-6 mr-2 text-primary" />
						<span className="font-bold text-lg">CodeMentorHub</span>
					</Link>
					<p className="text-xs text-muted-foreground mt-2">
						© 2024 CodeMentorHub. All rights reserved.
					</p>
				</div>
				<nav className="flex flex-wrap justify-center gap-4 md:gap-6">
					<Link
						className="text-sm hover:text-primary transition-colors"
						href="#"
					>
						Terms of Service
					</Link>
					<Link
						className="text-sm hover:text-primary transition-colors"
						href="#"
					>
						Privacy Policy
					</Link>
					<Link
						className="text-sm hover:text-primary transition-colors"
						href="#"
					>
						Contact Us
					</Link>
				</nav>
			</div>
		</footer>
	);
}
