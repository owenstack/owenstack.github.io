import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import type { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";
import SocialList from "@/components/social-list";

interface PostProps {
	params: {
		slug: string[];
	};
}

async function getPostFromParams(params: PostProps["params"]) {
	const slug = params?.slug?.join("/");
	const post = allPosts.find((post) => post.slugAsParams === slug);

	if (!post) {
		null;
	}

	return post;
}

export async function generateMetadata({
	params,
}: PostProps): Promise<Metadata> {
	const post = await getPostFromParams(params);

	if (!post) {
		return {};
	}

	return {
		title: post.title,
		description: post.description,
		openGraph: {
			type: "article",
			title: post.title,
			description: post.description,
		},
		twitter: {
			card: "summary_large_image",
			title: post.title,
			description: post.title,
			images: "/og_image.png",
		},
	};
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
	return allPosts.map((post) => ({
		slug: post.slugAsParams.split("/"),
	}));
}

export default async function PostPage({ params }: PostProps) {
	const post = await getPostFromParams(params);

	if (!post) {
		notFound();
	}

	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
			<article className="py-8">
				<header className="mb-8">
					<h1 className="mb-2 font-header text-3xl sm:text-4xl lg:text-5xl">
						{post.title}
					</h1>
					{post.description && (
						<p className="text-lg sm:text-xl mt-2 text-slate-700 dark:text-slate-200">
							{post.description}
						</p>
					)}
				</header>
				<hr className="my-8" />
				<div className="prose dark:prose-invert max-w-none">
					<Mdx code={post.body.code} />
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
