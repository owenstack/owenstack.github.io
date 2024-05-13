"use client";

import Link from "next/link";
import Image from "next/image";
import {Button} from "./ui/button";
import {heroSection, buttonLabels} from "@/lib/data";
import {useLanguage} from "@/lib/providers";

export default function HeroSection() {
  const {language} = useLanguage();

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6 space-y-6 md:space-y-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <Image
              src="/avatar.png"
              alt="OwenStack"
              className="mx-auto aspect-sqaure overflow-hidden rounded-xl object-cover lg;mx-0"
              height={600}
              width={600}
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              {language === "EN" ? heroSection.title.en : heroSection.title.fr}
            </h1>
            <p className="mt-2 text-gray-500 md:text-xl dark:text-gray-400">
              {language === "EN"
                ? heroSection.description.en
                : heroSection.description.fr}
            </p>
          </div>
          <div className="space-x-4 lg:hidden">
            <Button>
              <Link href="mailto:jenukohaefobi@gmail.com">
                {language === "EN"
                  ? buttonLabels.hire.en
                  : buttonLabels.hire.fr}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
