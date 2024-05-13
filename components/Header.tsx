"use client";

import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import {Great_Vibes} from "next/font/google";
import Link from "next/link";
import {Button} from "./ui/button";

const logo = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  return (
    <header className="flex h-16 w-full items-center justify-between bg-white px-4 shadow-sm dark:bg-gray-950 md:px-6">
      <Button variant="link" className="flex items-center justify-center">
        <Link href="/">
          <h1 className={logo.className}>Owenstack</h1>
        </Link>
      </Button>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <LanguageToggle />
        <ThemeToggle />
      </nav>
    </header>
  );
}
