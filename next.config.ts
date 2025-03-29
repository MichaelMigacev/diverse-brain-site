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
};

export default nextConfig;