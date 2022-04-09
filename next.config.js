/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['videos.ctfassets.net']
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
