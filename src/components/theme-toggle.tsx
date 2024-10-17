import { Sun, Moon, Monitor } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export function ThemeToggle() {
	const [theme, setTheme] = useState<"light" | "dark" | "system">(() => {
		if (typeof window !== "undefined" && window.localStorage) {
			const storedTheme = window.localStorage.getItem("theme") as
				| "light"
				| "dark"
				| "system"
				| null;
			if (storedTheme) {
				return storedTheme;
			}
		}
		return "system";
	});

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const handleChange = () => {
			if (theme === "system") {
				updateTheme(theme);
			}
		};

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, [theme]);

	useEffect(() => {
		updateTheme(theme);
	}, [theme]);

	const updateTheme = (newTheme: "light" | "dark" | "system") => {
		const isDark =
			newTheme === "dark" ||
			(newTheme === "system" &&
				window.matchMedia("(prefers-color-scheme: dark)").matches);

		document.documentElement.classList.toggle("dark", isDark);
		if (typeof window !== "undefined" && window.localStorage) {
			window.localStorage.setItem("theme", newTheme);
		}
	};

	return (
		<div className="flex items-center justify-center w-1/2">
			<div className="flex gap-2 bg-foreground/10 place-content-around p-1 items-center rounded-md">
				<span className="sr-only">Toggle theme</span>
				<Button
					variant={theme === "light" ? "secondary" : "ghost"}
					size="icon"
					onClick={() => setTheme("light")}
				>
					<Sun className="h-[1.2rem] w-[1.2rem]" />
				</Button>
				<Button
					variant={theme === "dark" ? "secondary" : "ghost"}
					size="icon"
					onClick={() => setTheme("dark")}
				>
					<Moon className="h-[1.2rem] w-[1.2rem]" />
				</Button>
				<Button
					variant={theme === "system" ? "secondary" : "ghost"}
					size="icon"
					onClick={() => setTheme("system")}
				>
					<Monitor className="h-[1.2rem] w-[1.2rem]" />
				</Button>
			</div>
		</div>
	);
}
