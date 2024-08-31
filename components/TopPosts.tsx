import { Card, CardHeader, CardTitle, CardFooter } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import type { OstDocument } from "outstatic";

export default function TopPosts({ posts }: { posts: OstDocument[] }) {
	return (
		<div className="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:gap-8">
			{posts.map((post) => (
				<Card key={post.slug}>
					<CardHeader>
						<CardTitle>{post.title}</CardTitle>
					</CardHeader>
					<CardFooter>
						<Link href={`/posts/${post.slug}`}>
							<Button variant="ghost">Read More</Button>
						</Link>
					</CardFooter>
				</Card>
			))}
		</div>
	);
}
