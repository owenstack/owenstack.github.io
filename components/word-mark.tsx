import localFont from "next/font/local";
const wordmark = localFont({
	src: "../assets/fonts/wordmark.ttf",
});

export function WordMark({ className }: { className?: string }) {
	return (
		<div className={`flex flex-col items-center w-full ${className}`}>
			<h1 className={`text-6xl lg:text-9xl font-bold ${wordmark.className}`}>
				Owenstack
			</h1>
		</div>
	);
}
