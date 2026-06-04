/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Match canonical URLs (/symbols/foo/) so static hosts serve index.html on refresh.
  trailingSlash: true
};

export default nextConfig;
