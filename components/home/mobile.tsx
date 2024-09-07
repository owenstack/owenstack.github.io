import SocialList from "../social-list";
import { LinkPreview } from "../ui/link-preview";

export default function MobilePage() {
	return (
		<section className="relative flex flex-col items-center p-4 md:h-[calc(100vh-150px)]">
			<h2 className="font-header text-3xl lg:text-4xl">About Me</h2>
			<article className="prose dark:prose-invert">
				<p>
					I love the concept of{"  "}
					<LinkPreview url="https://minimal.gallery">minimalism</LinkPreview>,
					as demonstrated by this project.
				</p>
				<p>A multilinguist, I speak English, French, Yoruba, and Igbo.</p>
				<p>
					When I&apos;m not designing, prototyping, or building something new,
					I&apos;m playing{" "}
					<LinkPreview url="https://chess.com/members/chessMenace22">
						chess
					</LinkPreview>{" "}
					or indulging in{" "}
					<LinkPreview url="https://unsplash.com/s/photos/nature">
						nature
					</LinkPreview>{" "}
					and{" "}
					<LinkPreview url="https://unsplash.com/s/photos/monochrome">
						monochrome
					</LinkPreview>{" "}
					photography.
				</p>
				<p>
					I also occasionally attempt to take my{" "}
					<LinkPreview url="https://owenstack.github.io/posts">
						blog
					</LinkPreview>{" "}
					seriously.
				</p>
			</article>
			<SocialList className="pt-8 relative z-10 hidden md:block" />
		</section>
	);
}
