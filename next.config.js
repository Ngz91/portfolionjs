/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['localhost', 'ngzportfolioapi.herokuapp.com'],
  },

  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {fs: false};
    return config;
  },

  exportPathMap: function () {
    return {
      '/': {page: '/'},
      '/projects/1/klickwell/': {page: '/projects/[id]/[slug]'}
    }
  }
};

module.exports = nextConfig
