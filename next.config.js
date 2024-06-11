/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '1.gravatar.com'
      },
      {
        protocol: 'https',
        hostname: 'wykop.pl'
      }
    ]
  }
};

module.exports = nextConfig;
