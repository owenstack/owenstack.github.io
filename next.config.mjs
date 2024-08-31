/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{ hostname: "*.unsplash.com" },
			{ hostname: "avatars.githubusercontent.com" },
		],
	},
};

export default nextConfig;
