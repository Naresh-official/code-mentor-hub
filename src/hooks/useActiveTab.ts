"use client";
import { usePathname } from "next/navigation";

export function useActiveTab() {
	const pathName = usePathname();
	const isActive = (path: string): boolean => pathName === path;
	return { isActive };
}
