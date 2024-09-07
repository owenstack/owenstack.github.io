const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [{ hostname: "api.microlink.io" }],
	},
};

module.exports = withContentlayer(nextConfig);
