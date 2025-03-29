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
};

export default nextConfig;