const withPWA = require("next-pwa")({
  disable: process.env.NODE_ENV === "development",
  dest: "public",
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  images: {
    formats: [
      "image/avif",
      "image/webp",
      // "image/png",
      // "image/jpeg",
      // "image/gif",
    ],
    domains: ["utfs.io"],
    loader: "default",
    // path: "/_next/image",
    minimumCacheTTL: 60,
    deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  i18n: {
    defaultLocale: "en",
    localeDetection: false,
    locales: ["en", "sw", "fr", "de"],
    domains: [
      {
        domain: "afyamed.org",
        defaultLocale: "en",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
});

module.exports = nextConfig;
