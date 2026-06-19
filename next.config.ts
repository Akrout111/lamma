import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    // Never ignore TS errors during build — fix them instead.
    ignoreBuildErrors: false,
  },
  reactStrictMode: true,
  images: {
    // AI-generated images live in /public/images and are served locally.
    remotePatterns: [],
  },
};

export default withNextIntl(nextConfig);
