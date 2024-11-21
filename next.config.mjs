/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_PUBLIC_BUILD_DIR || '.next',
};

export default nextConfig;
