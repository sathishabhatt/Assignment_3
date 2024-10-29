/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/Assignment_3",
  output: process.env.NODE_ENV === "development" ? "standalone" : "export",
  images: { unoptimized: true }
};

module.exports = nextConfig;
