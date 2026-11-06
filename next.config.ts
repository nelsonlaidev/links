import './src/env'

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nelsonlai.dev',
      },
    ],
  },
}

export default nextConfig
