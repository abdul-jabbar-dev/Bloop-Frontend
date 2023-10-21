/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
   ignoreBuildErrors:true
  },
  images:{
    domains: ["img.icons8.com","res.cloudinary.com"]
  }
}

module.exports = nextConfig
