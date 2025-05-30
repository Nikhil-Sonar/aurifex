import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensuring export settings
  output:"export",
  trailingSlash: true, 
  images:{unoptimized:true} // Optional, adds trailing slash to all URLs
};

export default nextConfig;