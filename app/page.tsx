import {Metadata} from "next";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import StackSection from "@/components/StackSection";

export default function Page() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <BlogSection />
      <StackSection />
      <ContactSection />
    </main>
  );
}
