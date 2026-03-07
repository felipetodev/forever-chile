/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    qualities: [100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'videos.ctfassets.net',
      }
    ]
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
