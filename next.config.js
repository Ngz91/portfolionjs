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
      '/projects': {page: '/projects'},
      '/projects/1/klickwell-ml': {page: '/projects/[id]/[slug]'},
      '/projects/2/klickwell-live': {page: '/projects/[id]/[slug]'},
      '/projects/3/klickwell': {page: '/projects/[id]/[slug]'},
      '/projects/4/inspyro': {page: '/projects/[id]/[slug]'},
      '/projects/5/baseshop': {page: '/projects/[id]/[slug]'},
      '/projects/6/portfolionjs': {page: '/projects/[id]/[slug]'},
      '/projects/7/portfolio-api': {page: '/projects/[id]/[slug]'},
      '/projects/8/cryptopal': {page: '/projects/[id]/[slug]'},
      '/projects/9/baseshopnjs': {page: '/projects/[id]/[slug]'},
    }
  }
};

module.exports = nextConfig
