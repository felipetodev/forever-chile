/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.ctfassets.net', 'videos.ctfassets.net']
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
