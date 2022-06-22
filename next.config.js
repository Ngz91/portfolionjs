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
      '/project/1/klickwell-ml': {page: '/project', query: {id: '1', slug: 'klickwell-ml'}},
      '/project/2/klickwell-live': {page: '/project', query: {id: '2', slug: 'klickwell-live'}},
      '/project/3/klickwell': {page: '/project', query: {id: '3', slug: 'klickwell'}},
      '/project/4/inspyro': {page: '/project', query: {id: '4', slug: 'inspyro'}},
      '/project/5/baseshop': {page: '/project', query: {id: '5', slug: 'baseshop'}},
      '/project/6/portfolionjs': {page: '/project', query: {id: '6', slug: 'portfolionjs'}},
      '/project/7/portfolio-api': {page: '/project', query: {id: '7', slug: 'portfolioapi'}},
      '/project/8/cryptopal': {page: '/project', query: {id: '8', slug: 'cryptopal'}},
      '/project/9/baseshopnjs': {page: '/project', query: {id: '9', slug: 'baseshopnjs'}},
    }
  }
};

module.exports = nextConfig
