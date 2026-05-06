/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  // ensure trailing slashes on all routes
  output: "standalone",
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    // disable Next.js Image Optimization API for static export
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-rd.demo-link.tech',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
