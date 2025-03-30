/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
      return [
          {
              source: "/",
              destination: "/Exhibition",
              permanent: true,
          },
          {
              source: "/de",
              destination: "/de/Exhibition",
              permanent: true,
          },
      ];
  },
  output: "export", // Ensures a static export
  basePath: "/diverse-brain-site", // Set this to your GitHub repository name
  images: {
    unoptimized: true, // Ensures Next.js images work on GitHub Pages
  },
  assetPrefix: "/diverse-brain-site/", // Set this to your GitHub repository name
  trailingSlash: true, // Ensures URLs end with a slash to prevent broken paths
};

export default nextConfig;