/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{hostname: "*.unsplash.com"}],
  },
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://starter-kit-brown-two.vercel.app/blog",
      },
      {
        source: "/blog/:path*",
        destination: "https://starter-kit-brown-two.vercel.app/blog/:path*",
      },
    ];
  },
};

export default nextConfig;
