/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  generateMetadata: true,
};

module.exports = nextConfig; 