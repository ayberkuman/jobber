/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "pub-4cc9b2e29fd447c787b459807272811d.r2.dev",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
