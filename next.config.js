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
    },
    {
      protocol: 'https',
      hostname: 'github.githubassets.com'
    }]
  },
  reactStrictMode: false,
  transpilePackages: ['masonrylayout-tsx-react']
}