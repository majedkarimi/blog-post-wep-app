/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.banimode.com",
      },
    ],
  },
};

export default nextConfig;
