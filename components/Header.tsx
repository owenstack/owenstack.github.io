"use client";

import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";
import { Logo } from "./Logo";

export default function Header() {
	return (
		<header className="sticky flex h-16 w-full items-center justify-between bg-muted md:px-6">
			<Button
				variant="link"
				size={"lg"}
				className="flex items-center justify-center"
			>
				<Logo />
			</Button>
			<nav className="ml-auto flex gap-4 sm:gap-6">
				<LanguageToggle />
				<ThemeToggle />
			</nav>
		</header>
	);
}
