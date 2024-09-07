import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allPages } from "contentlayer/generated";

import { Mdx } from "@/components/mdx-components";
import SocialList from "@/components/social-list";

interface PageProps {
	params: {
		slug: string[];
	};
}

async function getPageFromParams(params: PageProps["params"]) {
	const slug = params?.slug?.join("/");
	const page = allPages.find((page) => page.slugAsParams === slug);

	if (!page) {
		null;
	}

	return page;
}

export async function generateMetadata({
	params,
}: PageProps): Promise<Metadata> {
	const page = await getPageFromParams(params);

	if (!page) {
		return {};
	}

	return {
		title: page.title,
		description: page.description,
	};
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
	return allPages.map((page) => ({
		slug: page.slugAsParams.split("/"),
	}));
}

export default async function PagePage({ params }: PageProps) {
	const page = await getPageFromParams(params);

	if (!page) {
		notFound();
	}

	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
			<article className="py-8">
				<header className="mb-8">
					<h1 className="mb-2 font-header text-3xl sm:text-4xl lg:text-5xl">
						{page.title}
					</h1>
					{page.description && (
						<p className="text-lg sm:text-xl mt-2 text-slate-700 dark:text-slate-200">
							{page.description}
						</p>
					)}
				</header>
				<hr className="my-8" />
				<div className="prose dark:prose-invert max-w-none">
					<Mdx code={page.body.code} />
				</div>
			</article>
			<footer className="mt-12 pb-8">
				<div className="text-center">
					<SocialList />
				</div>
				<p className="text-center text-xs mt-4">
					&copy; {new Date().getFullYear()}
				</p>
			</footer>
		</div>
	);
}
