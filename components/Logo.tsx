import localFont from "next/font/local";
import Link from "next/link";

const logo = localFont({ src: "../assets/fonts/logo.ttf" });

export function Logo({ className }: { className?: string }) {
	return (
		<Link className={className} href="/">
			<h1 className={`${logo.className} text-3xl font-semibold`}>Owenstack</h1>
		</Link>
	);
}
