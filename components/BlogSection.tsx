"use client";

import { Button } from "./ui/button";
import { useLanguage } from "@/lib/providers";
import { blogSection } from "@/lib/data";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from "./ui/card";
import Link from "next/link";
import { header } from "@/lib/constants";

export default function BlogSection() {
	const { language } = useLanguage();

	return (
		<section className="w-full py-12 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<div
							className={
								"inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700"
							}
						>
							{language === "EN"
								? blogSection.subtitle.en
								: blogSection.subtitle.fr}
						</div>
						<h2
							className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ${header.className}`}
						>
							{language === "EN" ? blogSection.title.en : blogSection.title.fr}
						</h2>
						<p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							{language === "EN"
								? blogSection.description.en
								: blogSection.description.fr}
						</p>
					</div>
					<div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:gap-8">
						<Card>
							<CardHeader>
								<CardTitle>
									Javascript Fundamentals for Backend Developers
								</CardTitle>
								<CardDescription>
									A basic guide to Javascript on the server
								</CardDescription>
							</CardHeader>
							<CardFooter>
								<Link href="https://owenstack.vercel.app/blog/javascript-fundamentals-for-backend-developers">
									<Button variant="ghost">Read More</Button>
								</Link>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>
									Building a RESTful API with NodeJS: A Comprehensive Guide
								</CardTitle>
								<CardDescription>
									Detailed explanation and usage of the REST architectural style
								</CardDescription>
							</CardHeader>
							<CardFooter>
								<Link href="https://owenstack.vercel.app/blog/building-a-restful-api-with-nodejs-a-comprehensive-guide">
									<Button variant="ghost">Read More</Button>
								</Link>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader>
								<CardTitle>Mastering NodeJS: A beginner&apos;s guide</CardTitle>
								<CardDescription>
									NodeJS, core concepts and practical applications
								</CardDescription>
							</CardHeader>
							<CardFooter>
								<Link href="https://owenstack.vercel.app/blog/mastering-nodejs-a-beginners-guide">
									<Button variant="ghost">Read More</Button>
								</Link>
							</CardFooter>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
