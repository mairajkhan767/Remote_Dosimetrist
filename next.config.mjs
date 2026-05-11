/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // ensure trailing slashes on all routes
  output: "standalone",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-rd.demo-link.tech',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['swiper'],
  },
  async headers() {
    return [
      {
        source: '/assets/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
