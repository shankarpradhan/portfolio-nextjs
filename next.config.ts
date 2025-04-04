/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static export
  reactStrictMode: true,
  images: {
    unoptimized: true, // ✅ Required for next export
  },
};

export default nextConfig;
