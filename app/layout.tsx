import type { ReactNode } from "react";
import type { Metadata } from "next";
import config from "@/lib/config";
import Navigation from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import localFont from "next/font/local";

const body = localFont({ src: "../assets/fonts/body.ttf" });

export const metadata: Metadata = {
	title: {
		default: config.site_title,
		template: `%s | ${config.site_title}`,
	},
	description: config.site_description,
	openGraph: {
		type: "website",
		title: {
			default: config.site_title,
			template: `%s | ${config.site_title}`,
		},
		description: config.site_description,
		images: "/og_image.png",
		url: config.base_url,
	},
	metadataBase: new URL(config.base_url),
	keywords: config.site_keywords,
	authors: [{ name: config.github_account }],
	twitter: {
		card: "summary_large_image",
		site: config.twitter_account,
		title: {
			default: config.site_title,
			template: `%s | ${config.site_title}`,
		},
		description: config.site_description,
		images: "/og_image.png",
	},
};
export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`bg-background antialiased ${body.className}`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<div className="relative min-h-screen overflow-hidden">
						<div className="block px-0 py-16 box-border h-full md:flex md:flex-[1_0_auto]">
							<nav>
								<Navigation />
							</nav>
						</div>
						<main className="flex min-h-full md:flex-[1_0_auto]">
							{children}
						</main>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
