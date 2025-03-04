/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  sassOptions: {
    silenceDeprecations: ['import', 'global-builtin'],
  },
};

export default nextConfig;
