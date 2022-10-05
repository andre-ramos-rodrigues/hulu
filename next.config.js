/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { // set here the allowed domains for the images
    domains: ["links.papareact.com", "image.tmdb.org"]
  },
}

module.exports = nextConfig
