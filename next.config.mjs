/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  allowedDevOrigins: ["10.7.1.181"],
  images: {
    unoptimized: true,
  },
}

export default nextConfig
