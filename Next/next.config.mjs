/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Replace "your-module" with the path or name of the module you want to exclude
      config.externals = [...(config.externals || []), "ckeditor5"];
    }
    return config;
  },
};

export default nextConfig;
