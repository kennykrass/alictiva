import type { NextConfig } from "next";

// Detect basePath automatically on GitHub Actions or use NEXT_PUBLIC_BASE_PATH when building locally.
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoFromActions = process.env.GITHUB_REPOSITORY?.split("/")[1];
const baseFromEnv = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/^\//, "");

const base = isGithubActions && repoFromActions ? repoFromActions : baseFromEnv;

const nextConfig: NextConfig = {
  turbopack: { root: __dirname },
  output: "export",
  images: { unoptimized: true },
  ...(base ? { basePath: `/${base}`, assetPrefix: `/${base}/` } : {}),
};

export default nextConfig;
