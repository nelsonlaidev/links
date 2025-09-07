import type { Metadata, Viewport } from 'next'

import '@/styles/globals.css'

import { GeistSans } from 'geist/font/sans'

import Analytics from '@/components/analytics'
import Footer from '@/components/footer'
import { env } from '@/env'

import grid from './grid.svg'

type LayoutProps = {
  children: React.ReactNode
}

const MY_NAME = 'Nelson Lai'
const SITE_URL = env.NEXT_PUBLIC_SITE_URL
const SITE_TITLE = `Links | ${MY_NAME}`
const SITE_DESCRIPTION =
  'Connect with me on all my social media profiles through Links. Discover new content and stay updated with my latest posts!'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  authors: {
    name: MY_NAME,
    url: 'https://nelsonlai.me'
  },
  manifest: '/site.webmanifest',
  twitter: {
    card: 'summary_large_image',
    title: MY_NAME,
    description: SITE_DESCRIPTION,
    site: '@nelsonlaidev',
    siteId: '1152256803746377730',
    creator: '@nelsonlaidev',
    creatorId: '1152256803746377730',
    images: [
      {
        url: 'https://nelsonlai.me/images/og-image.png',
        width: 1200,
        height: 630,
        alt: SITE_DESCRIPTION
      }
    ]
  },
  alternates: {
    canonical: SITE_URL
  },
  keywords: [MY_NAME, 'nelsonlaidev social media', 'nelsonlaidev links', 'links'],
  creator: 'nelsonlaidev',
  openGraph: {
    url: SITE_URL,
    type: 'website',
    title: SITE_TITLE,
    siteName: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'en-US',
    images: [
      {
        url: 'https://nelsonlai.me/images/og-image.png',
        width: 1200,
        height: 630,
        alt: SITE_DESCRIPTION,
        type: 'image/png'
      }
    ]
  },
  icons: {
    icon: {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon.ico'
    },
    apple: [
      {
        type: 'image/png',
        url: '/apple-touch-icon.png',
        sizes: '180x180'
      }
    ],
    other: [
      {
        rel: 'icon',
        type: 'image/svg+xml',
        url: '/favicon.svg',
        sizes: 'any'
      },
      {
        rel: 'icon',
        type: 'image/png',
        url: '/favicon-16x16.png',
        sizes: '16x16'
      },
      {
        rel: 'icon',
        type: 'image/png',
        url: '/favicon-32x32.png',
        sizes: '32x32'
      }
    ]
  }
}

export const viewport: Viewport = {
  themeColor: {
    color: '#000000'
  }
}

const Layout = (props: LayoutProps) => {
  const { children } = props

  return (
    <html lang='en-US' className={GeistSans.className}>
      <body className='relative bg-[#020202] text-white'>
        <div
          className='absolute inset-0 -z-20 size-full'
          style={{
            backgroundImage: `url(${grid.src})`
          }}
        />
        <div
          className='absolute inset-0 -z-10 size-full'
          style={{
            backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0) 100%)'
          }}
        />
        <div className='relative min-h-screen overflow-x-hidden'>
          <main className='relative mx-auto max-w-lg px-4'>{children}</main>
        </div>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

export default Layout
