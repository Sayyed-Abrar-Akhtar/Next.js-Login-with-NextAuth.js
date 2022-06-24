/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/webo',
        destination: 'https://webo.digital',
        permanent: true,
      },
    ];
  },
  eslint: {
    dirs: ['pages', 'components', 'controllers'],
  },
};

module.exports = nextConfig;
