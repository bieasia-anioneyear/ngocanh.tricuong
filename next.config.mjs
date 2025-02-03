/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/public',
  images: {
    unoptimized: true,
  },
  experimental: {
    turbo: {},
  },
}

export default nextConfig
