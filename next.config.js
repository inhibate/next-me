/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    remotePatterns: [
    {
      protocol: 'https',
      hostname: 'user-images.githubusercontent.com',
      port: '',
      pathname: '/7237762/**'
    },
    {
      protocol: 'https',
      hostname: 'camo.githubusercontent.com',
      port: ''
    }]
  },
  reactStrictMode: false,
  transpilePackages: ['masonrylayout-tsx-react']
}