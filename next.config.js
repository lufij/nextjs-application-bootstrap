/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      rules: {
        // Disable server actions warning
        '*.ts': ['typescript'],
      },
    },
  },
  allowedDevOrigins: ['nzgh7h-8000.csb.app'],
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    return config;
  },
}

module.exports = nextConfig
