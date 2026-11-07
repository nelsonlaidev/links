import { createFileRoute } from '@tanstack/react-router'
import { FiBook } from 'react-icons/fi'
import {
  SiDevdotto,
  SiDiscord,
  SiFacebook,
  SiGithub,
  SiInstagram,
  SiStackoverflow,
  SiSteam,
  SiX,
  SiYoutube,
} from 'react-icons/si'

import PrimaryLinks from '@/components/primary-links'
import Spotlight from '@/components/spotlight'
import { SITE } from '@/lib/site'

const links = [
  {
    icon: <FiBook className='text-zinc-300' />,
    title: 'Blog',
    url: SITE.portfolio,
  },
  {
    icon: <SiYoutube className='text-zinc-300' />,
    title: 'YouTube',
    url: SITE.socials.youtube,
  },
  {
    icon: <SiFacebook className='text-zinc-300' />,
    title: 'Facebook',
    url: SITE.socials.facebook,
  },
  {
    icon: <SiSteam className='text-zinc-300' />,
    title: 'Steam',
    url: SITE.socials.steam,
  },
  {
    icon: <SiInstagram className='text-zinc-300' />,
    title: 'Instagram',
    url: SITE.socials.instagram,
  },
  {
    icon: <SiGithub className='text-zinc-300' />,
    title: 'GitHub',
    url: SITE.socials.github,
  },
  {
    icon: <SiDiscord className='text-zinc-300' />,
    title: 'Discord',
    url: SITE.socials.discord,
  },
  {
    icon: <SiX className='text-zinc-300' />,
    title: 'X',
    url: SITE.socials.twitter,
  },
  {
    icon: <SiStackoverflow className='text-zinc-300' />,
    title: 'Stack overflow',
    url: SITE.socials.stackoverflow,
  },
  {
    icon: <SiDevdotto className='text-zinc-300' />,
    title: 'Dev.to',
    url: SITE.socials.devto,
  },
]

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div className='relative mx-auto flex flex-col items-center justify-center gap-4 pt-24 pb-10'>
        <Spotlight className='-top-4 left-56' />
        <img src={SITE.avatar} width={90} height={90} alt='Logo' className='rounded-full' fetchPriority='high' />
        <h1 className='text-xl font-semibold'>{SITE.name}</h1>
        <p className='text-[#a1a1a1]'>{SITE.tagline}</p>
      </div>
      <PrimaryLinks />
      <div className='flex flex-col gap-4 py-3'>
        {links.map((link) => {
          const { icon, title, url } = link

          return (
            <a
              key={url}
              href={url}
              className='relative flex h-14 w-full items-center justify-center rounded-xl border border-zinc-700 bg-[#151414] px-8 py-4 transition-colors duration-300 hover:border-zinc-500'
              target='_blank'
              rel='noopener, noreferrer'
            >
              <div className='absolute left-8'>{icon}</div>
              <div className='text-zinc-100'>{title}</div>
            </a>
          )
        })}
      </div>
    </>
  )
}
