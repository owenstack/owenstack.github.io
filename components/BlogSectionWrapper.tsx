import { FetchTopPosts } from "./FetchTopPosts";
import BlogSection from "./BlogSection";

export default async function BlogSectionWrapper() {
	const posts = await FetchTopPosts();
	return <BlogSection posts={posts} />;
}
