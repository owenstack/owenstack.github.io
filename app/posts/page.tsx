import Link from "next/link";
import { CalendarIcon, UserIcon } from "lucide-react";
import { getDocuments } from "outstatic/server";

export default async function Page() {
	const posts = await getData();
	return (
		<div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
			<h1 className="text-4xl font-bold mb-12 text-center">Latest Articles</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{posts.map((article) => (
					<div key={article.slug}>
						<Link
							href={`/posts/${article.slug}`}
							className="block bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
						>
							<div className="relative">
								<img
									src={article.coverImage}
									alt={article.title}
									width={800}
									height={450}
									className="object-cover w-full h-48 sm:h-64"
								/>
								<div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300 opacity-0 hover:opacity-100 flex items-center justify-center">
									<span className="text-white text-lg font-semibold">
										Read More
									</span>
								</div>
							</div>
							<div className="p-6">
								<h2 className="text-xl font-bold mb-2 ">{article.title}</h2>
								<p className=" mb-4 line-clamp-2">{article.description}</p>
								<div className="flex items-center text-sm ">
									<div className="flex items-center mr-4">
										<UserIcon className="w-4 h-4 mr-1" />
										{article.author?.name}
									</div>
									<div className="flex items-center">
										<CalendarIcon className="w-4 h-4 mr-1" />
										{new Date(article.publishedAt).toLocaleDateString()}
									</div>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}

async function getData() {
	const posts = getDocuments("posts", [
		"title",
		"slug",
		"coverImage",
		"author",
		"publishedAt",
		"description",
	]);
	return posts;
}
