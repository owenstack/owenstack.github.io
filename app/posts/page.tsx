import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

function formatDate(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
}

export default function Home() {
	return (
		<div className="flex my-0 mx-auto max-w-[1200px] w-full py-0 px-6">
			<div className="flex flex-col flex-auto">
				<ul className="flex-[1_0_auto]">
					{allPosts.map((post) => (
						<li key={post._id} className="mb-6">
							<Link href={post.slug}>
								<h2 className="font-header text-xl font-semibold tracking-wider underline">
									{post.title}
								</h2>
							</Link>
							{post.description && <p>{post.description}</p>}
							<time className="m-0 font-medium text-sm">
								{formatDate(post.date)}
							</time>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
