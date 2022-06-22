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
      '/project/1/klickwell-ml': {page: '/project/[id]/[slug]'},
      '/project/2/klickwell-live': {page: '/project/[id]/[slug]'},
      '/project/3/klickwell': {page: '/project/[id]/[slug]'},
      '/project/4/inspyro': {page: '/project/[id]/[slug]'},
      '/project/5/baseshop': {page: '/project/[id]/[slug]'},
      '/project/6/portfolionjs': {page: '/project/[id]/[slug]'},
      '/project/7/portfolio-api': {page: '/project/[id]/[slug]'},
      '/project/8/cryptopal': {page: '/project/[id]/[slug]'},
      '/project/9/baseshopnjs': {page: '/project/[id]/[slug]'},
    }
  }
};

module.exports = nextConfig
