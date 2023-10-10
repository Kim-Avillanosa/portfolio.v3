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
});

const nextConfig = withPWA(
  {
    basePath: ".",
  },
  {
    publicRuntimeConfig: {
      // you can change this name
      projectName: "portfolio-app",
    },
  }
);
module.exports = nextConfig;
