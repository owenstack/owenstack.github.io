import { getDocumentBySlug } from "outstatic/server";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { Calendar, LoaderCircle } from "lucide-react";
import { Suspense } from "react";
import remarkGFM from "remark-gfm";
import remarkEmoji from "remark-emoji";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";

export default async function Page({ params }: { params: { slug: string } }) {
	const post = await getData(params);

	return (
		<Suspense
			fallback={
				<div className="flex flex-col gap-4 p-6 h-screen">
					<LoaderCircle className="w-10 h-10 mx-auto animate-spin" />
				</div>
			}
		>
			{post && (
				<div className="max-w-3xl mx-auto px-4 py-8">
					{post.coverImage && (
						<Image
							src={post.coverImage}
							alt={post.title}
							width={1200}
							height={630}
							className="rounded-lg shadow-md mb-8"
						/>
					)}
					<h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
						{post.title}
					</h1>
					<div className="flex items-center space-x-4 mb-8">
						<div className="flex items-center">
							{post.author?.picture && (
								<Image
									src={post.author.picture}
									alt={post.author?.name || ""}
									width={50}
									height={50}
									className="mr-2 rounded-full"
								/>
							)}
							<span className="text-gray-800 dark:text-gray-200">
								{post.author?.name}
							</span>
						</div>
						<div className="flex items-center">
							<Calendar
								size={18}
								className="mr-2 text-gray-600 dark:text-gray-400"
							/>
							<span className="text-gray-600 dark:text-gray-400">
								{new Date(post.publishedAt).toLocaleString()}
							</span>
						</div>
					</div>
					<div className="prose prose-lg max-w-none dark:prose-invert">
						<ReactMarkdown
							remarkPlugins={[remarkGFM, remarkEmoji]}
							components={{
								p: ({ node, ...props }) => (
									<p
										className="mb-4 text-gray-800 dark:text-gray-200"
										{...props}
									/>
								),
								h1: ({ node, ...props }) => (
									<h1
										className="text-3xl font-bold mt-8 mb-4 text-gray-900 dark:text-gray-100"
										{...props}
									/>
								),
								h2: ({ node, ...props }) => (
									<h2
										className="text-2xl font-bold mt-6 mb-3 text-gray-900 dark:text-gray-100"
										{...props}
									/>
								),
								h3: ({ node, ...props }) => (
									<h3
										className="text-xl font-bold mt-4 mb-2 text-gray-900 dark:text-gray-100"
										{...props}
									/>
								),
								ul: ({ node, ...props }) => (
									<ul
										className="list-disc list-inside mb-4 text-gray-800 dark:text-gray-200"
										{...props}
									/>
								),
								ol: ({ node, ...props }) => (
									<ol
										className="list-decimal list-inside mb-4 text-gray-800 dark:text-gray-200"
										{...props}
									/>
								),
								li: ({ node, ...props }) => (
									<li
										className="mb-1 text-gray-800 dark:text-gray-200"
										{...props}
									/>
								),
								blockquote: ({ node, ...props }) => (
									<blockquote
										className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic my-4 text-gray-800 dark:text-gray-200"
										{...props}
									/>
								),
								code: ({ node, className, children, ...props }) => {
									const match = /language-(\w+)/.exec(className || "");
									return match ? (
										<SyntaxHighlighter
											// biome-ignore lint/suspicious/noExplicitAny: <explanation>
											style={tomorrow as any}
											language={match[1]}
											PreTag="div"
										>
											{String(children).replace(/\n$/, "")}
										</SyntaxHighlighter>
									) : (
										<code className={`${className}`} {...props}>
											{children}
										</code>
									);
								},
							}}
						>
							{post.content}
						</ReactMarkdown>
					</div>
				</div>
			)}
		</Suspense>
	);
}

async function getData(params: { slug: string }) {
	const post = getDocumentBySlug("posts", params.slug, [
		"title",
		"publishedAt",
		"slug",
		"author",
		"content",
		"coverImage",
	]);

	return post;
}
