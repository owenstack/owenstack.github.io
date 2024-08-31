"use client";

import { useLanguage } from "@/lib/providers";
import { blogSection } from "@/lib/data";
import { header } from "@/lib/constants";
import TopPosts from "./TopPosts";
import type { OstDocument } from "outstatic";

export default function BlogSection({ posts }: { posts: OstDocument[] }) {
	const { language } = useLanguage();

	return (
		<section className="w-full py-12 md:py-24 lg:py-32">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
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
					<TopPosts posts={posts} />
				</div>
			</div>
		</section>
	);
}
