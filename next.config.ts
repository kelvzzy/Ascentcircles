import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for VPS hosting
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Add trailing slashes for better compatibility
  trailingSlash: true,
  
  // React compiler
  reactCompiler: true,
};

export default nextConfig;
