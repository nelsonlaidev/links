import type { NextConfig } from 'next'

import './src/env'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nelsonlai.me'
      }
    ]
  }
}

export default nextConfig
