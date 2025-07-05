const isGH = process.env.GITHUB_PAGES === 'true'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isGH ? '/ngocanh.tricuong' : '',
  assetPrefix: isGH ? '/ngocanh.tricuong' : '',
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGH ? '/ngocanh.tricuong' : '',
  },
  eslint: { ignoreDuringBuilds: true },
}

export default nextConfig
