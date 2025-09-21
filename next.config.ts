import type { NextConfig } from "next";

// Detect GitHub Pages build to set basePath/assetPrefix automatically
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.NEXT_PUBLIC_BASE_PATH || process.env.GITHUB_REPOSITORY?.split("/")[1] || "";

const nextConfig: NextConfig = {
  turbopack: { root: __dirname },
  // Static export so it can be hosted on GitHub Pages
  output: "export",
  images: { unoptimized: true },
  // When building on GitHub Actions, serve the app under /<repo>
  ...(isGithubActions && repoName
    ? { basePath: `/${repoName}`, assetPrefix: `/${repoName}/` }
    : {}),
};

export default nextConfig;
