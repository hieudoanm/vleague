/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'vi',
    localeDetection: false,
  },

  images: {
    domains: ['raw.githubusercontent.com'],
  },
};

module.exports = nextConfig;
