import { WordMark } from "../word-mark";

export function HeroSection() {
	return (
		<section className="relative flex flex-col items-center justify-center w-full p-4 md:h-[calc(100vh-150px)]">
			<div className="relative z-10 flex-1 w-full">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<WordMark />
					<div className="w-full" />
					<div className="w-full" />
					<div className="flex flex-col text-right justify-end pr-6">
						<p>My name is...</p>
						<h2 className="font-header lg:text-3xl text-2xl">
							Jideofor Owen Enukoha-Efobi
						</h2>
						<p>
							Full Stack Web Developer that builds beautiful and functional
							websites
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
