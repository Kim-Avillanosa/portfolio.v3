/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");

const prod = process.env.NODE_ENV === "production";

const withPWA = require("next-pwa")({
  disable: prod ? false : true,
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
  sw: "/server.js",
  maximumFileSizeToCacheInBytes: 5000000,
});

const nextConfig = withPWA(
  {
    assetPrefix: process.env.NODE_ENV === "production" ? "" : "",
    // basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  },
  {
    publicRuntimeConfig: {
      // you can change this name
      projectName: "portfolio-app",
    },
  }
);
module.exports = nextConfig;
