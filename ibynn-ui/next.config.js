/**
 * @type {import('next').NextConfig}
 */
const { i18n } = require('./next-i18next.config');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
module.exports = withPWA({
  images: {
    domains: [
      'encrypted-tbn0.gstatic.com',
      'serpapi.com',
      'target.scene7.com',
      'freepnglogos.com',
      'www.freepnglogos.com',
      'images.unsplash.com',
      'https://unsplash.com/',
      'www.images.unsplash.com',
    ],
  },
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
  },
  i18n,
  ...(process.env.NODE_ENV === 'production' && {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  }),
});
