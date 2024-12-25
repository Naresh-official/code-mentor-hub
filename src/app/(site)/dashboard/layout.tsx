import { DashboardHeader } from "@/components/DashboardHeader";
import { Sidebar } from "@/components/Sidebar";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex h-screen bg-background text-foreground">
			<Sidebar />
			<div className="flex-1 flex flex-col overflow-hidden">
				<DashboardHeader />
				{children}
			</div>
		</div>
	);
}
