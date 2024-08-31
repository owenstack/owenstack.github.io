import { getDocuments } from "outstatic/server";

export async function FetchTopPosts() {
	const posts = getDocuments("posts", ["title", "slug"])
		.sort(
			(a, b) =>
				new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
		)
		.slice(0, 4);
	return posts;
}
