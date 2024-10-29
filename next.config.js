/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Assignment_3",
  output: "export",
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
