/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['localhost', 'shilajit-travel.vercel.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      },
      {
        protocol: 'https',
        hostname: '**.github.io',
      }
    ],
  },
  // Ensure basePath is only set for GitHub Pages
  ...(process.env.GITHUB_PAGES === 'true' ? {
    basePath: '/shilajit-travel',
    assetPrefix: '/shilajit-travel',
  } : {}),
};

module.exports = nextConfig; 