/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // ensure trailing slashes on all routes
  output: "standalone",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    // disable Next.js Image Optimization API for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-rd.demo-link.tech',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/assets/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
