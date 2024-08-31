import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import StackSection from "@/components/StackSection";
import BlogSectionWrapper from "@/components/BlogSectionWrapper";

export default function Page() {
	return (
		<main>
			<HeroSection />
			<AboutSection />
			<BlogSectionWrapper />
			<StackSection />
			<ContactSection />
		</main>
	);
}
