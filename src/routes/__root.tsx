import '@fontsource-variable/geist/wght.css'

import type { AnyRouteMatch } from '@tanstack/react-router'

import geistUrl from '@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url'
import { createRootRoute, HeadContent, Scripts } from '@tanstack/react-router'

import grid from '@/assets/grid.svg'
import Footer from '@/components/footer'
import { ENV } from '@/env'
import { SITE } from '@/lib/site'
import appCss from '@/styles/globals.css?url'

const twitterHandle = `@${new URL(SITE.socials.twitter).pathname.slice(1)}`

export const Route = createRootRoute({
  head: () => {
    const scripts: AnyRouteMatch['scripts'] = []

    if (ENV.UMAMI_URL && ENV.UMAMI_WEBSITE_ID) {
      const umamiScript = {
        src: `${ENV.UMAMI_URL}/script.js`,
        defer: true,
        'data-website-id': ENV.UMAMI_WEBSITE_ID,
      }

      scripts.push(umamiScript)
    }

    return {
      meta: [
        { charSet: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { title: SITE.title },
        { name: 'description', content: SITE.description },
        { name: 'author', content: SITE.name },
        { name: 'creator', content: SITE.name },
        { name: 'theme-color', content: '#000000' },
        { name: 'robots', content: 'index, follow' },
        { name: 'googlebot', content: 'index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: SITE.title },
        { property: 'og:locale', content: 'en_US' },
        { property: 'og:title', content: SITE.title },
        { property: 'og:description', content: SITE.description },
        { property: 'og:url', content: ENV.SITE_URL },
        { property: 'og:image', content: SITE.ogImage.url },
        { property: 'og:image:type', content: SITE.ogImage.type },
        { property: 'og:image:width', content: String(SITE.ogImage.width) },
        { property: 'og:image:height', content: String(SITE.ogImage.height) },
        { name: 'twitter:image', content: SITE.ogImage.url },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: twitterHandle },
        { name: 'twitter:site:id', content: SITE.twitterUserId },
        { name: 'twitter:creator', content: twitterHandle },
        { name: 'twitter:creator:id', content: SITE.twitterUserId },
        { name: 'twitter:title', content: SITE.title },
        { name: 'twitter:description', content: SITE.description },
      ],
      links: [
        { rel: 'stylesheet', href: appCss },
        { rel: 'canonical', href: ENV.SITE_URL },
        { rel: 'author', href: SITE.portfolio },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg', sizes: 'any' },
        { rel: 'icon', type: 'image/png', href: '/favicon-16x16.png', sizes: '16x16' },
        { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png', sizes: '32x32' },
        { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'preload', href: geistUrl, as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      ],
      scripts,
    }
  },
  shellComponent: RootDocument,
})

type RootDocumentProps = {
  children: React.ReactNode
}

function RootDocument(props: RootDocumentProps) {
  const { children } = props

  return (
    <html lang='en-US'>
      <head>
        <HeadContent />
      </head>
      <body className='relative bg-[#020202] text-white'>
        <div className='absolute inset-0 -z-20 size-full' style={{ backgroundImage: `url("${grid}")` }} />
        <div
          className='absolute inset-0 -z-10 size-full'
          style={{
            backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0) 100%)',
          }}
        />
        <div className='relative min-h-screen overflow-x-hidden'>
          <main className='relative mx-auto max-w-lg px-4'>{children}</main>
        </div>
        <Footer />
        <Scripts />
      </body>
    </html>
  )
}
