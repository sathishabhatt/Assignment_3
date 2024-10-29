/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Assignment_3",
  output: process.env.NODE_ENV === "development" ? "standalone" : "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

module.exports = nextConfig;
