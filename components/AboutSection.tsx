"use client";

import { useLanguage } from "@/lib/providers";
import { aboutSection, carouselItems } from "@/lib/data";
import {
	Carousel,
	CarouselItem,
	CarouselContent,
	CarouselNext,
	CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";
import { header } from "@/lib/constants";

export default function AboutSection() {
	const { language } = useLanguage();

	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2
							className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ${header.className}`}
						>
							{language === "EN"
								? aboutSection.title.en
								: aboutSection.title.fr}
						</h2>
						<p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
							{language === "EN"
								? aboutSection.description.en
								: aboutSection.description.fr}
						</p>
					</div>
					<Carousel className="w-full max-w-2xl">
						<CarouselContent>
							{language === "EN"
								? carouselItems.items.map((item, index) => (
										<CarouselItem key={index}>
											<div className="flex flex-col item-center justify-center space-y-4">
												<Image
													alt="about me"
													className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
													height={400}
													width={400}
													src={item.image}
												/>
												<div className="space-y-2">
													<h3
														className={`text-2xl font-bold ${header.className}`}
													>
														{item.title.en}
													</h3>
													<p className="text-gray-500 dark:text-gray-400">
														{item.description.en}
													</p>
												</div>
											</div>
										</CarouselItem>
									))
								: carouselItems.items.map((item, index) => (
										<CarouselItem key={index}>
											<div className="flex flex-col item-center justify-center space-y-4">
												<Image
													alt="about me"
													className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
													height={400}
													width={400}
													src={item.image}
												/>
												<div className="space-y-2">
													<h3
														className={`text-2xl font-bold ${header.className}`}
													>
														{item.title.fr}
													</h3>
													<p className="text-gray-500 dark:text-gray-400">
														{item.description.fr}
													</p>
												</div>
											</div>
										</CarouselItem>
									))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				</div>
			</div>
		</section>
	);
}
