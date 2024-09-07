import { FloatingGlass } from "@/components/glass";
import { HeroSection } from "@/components/home/hero";
import MobilePage from "@/components/home/mobile";
import { Separator } from "@/components/ui/separator";

export default function Page() {
	return (
		<div className="flex flex-col">
			<FloatingGlass width={120} height={120} />
			<HeroSection />
			<div className="flex flex-col items-center justify-center">
				<Separator className="my-4 w-[80%]" />
				<MobilePage />
			</div>
		</div>
	);
}
