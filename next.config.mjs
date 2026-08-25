const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages && repository ? `/${repository}` : "",
  assetPrefix: isGitHubPages && repository ? `/${repository}/` : "",
  images: { unoptimized: true }
};

export default nextConfig;
