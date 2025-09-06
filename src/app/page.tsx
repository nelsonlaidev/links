import Image from 'next/image'
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
  SiYoutube
} from 'react-icons/si'

import PrimaryLinks from '@/components/primary-links'
import Spotlight from '@/components/spotlight'

const links = [
  {
    icon: <FiBook className='text-zinc-300' />,
    title: 'Blog',
    url: 'https://nelsonlai.link/s/blog'
  },
  {
    icon: <SiYoutube className='text-zinc-300' />,
    title: 'YouTube',
    url: 'https://nelsonlai.link/s/youtube'
  },
  {
    icon: <SiFacebook className='text-zinc-300' />,
    title: 'Facebook',
    url: 'https://nelsonlai.link/s/facebook'
  },
  {
    icon: <SiSteam className='text-zinc-300' />,
    title: 'Steam',
    url: 'https://nelsonlai.link/s/steam'
  },
  {
    icon: <SiInstagram className='text-zinc-300' />,
    title: 'Instagram',
    url: 'https://nelsonlai.link/s/instagram'
  },
  {
    icon: <SiGithub className='text-zinc-300' />,
    title: 'GitHub',
    url: 'https://nelsonlai.link/s/github'
  },
  {
    icon: <SiDiscord className='text-zinc-300' />,
    title: 'Discord',
    url: 'https://nelsonlai.link/s/discord'
  },
  {
    icon: <SiX className='text-zinc-300' />,
    title: 'X',
    url: 'https://nelsonlai.link/s/twitter'
  },
  {
    icon: <SiStackoverflow className='text-zinc-300' />,
    title: 'Stack overflow',
    url: 'https://nelsonlai.link/s/stackoverflow'
  },
  {
    icon: <SiDevdotto className='text-zinc-300' />,
    title: 'Dev.to',
    url: 'https://nelsonlai.link/s/devto'
  }
]

const HomePage = () => {
  return (
    <>
      <div className='relative mx-auto flex flex-col items-center justify-center gap-4 pt-24 pb-10'>
        <Spotlight className='-top-4 left-56' />
        <Image
          src='https://nelsonlai.me/images/avatar.png'
          width={90}
          height={90}
          alt='Logo'
          className='rounded-full'
          priority
        />
        <h1 className='text-xl font-semibold'>Nelson Lai</h1>
        <p className='text-[#a1a1a1]'>full stack engineer</p>
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

export default HomePage
