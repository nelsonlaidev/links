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
    url: 'https://nelsonlai.me/blog'
  },
  {
    icon: <SiYoutube className='text-zinc-300' />,
    title: 'YouTube',
    url: 'https://www.youtube.com/@nelsonlaidev'
  },
  {
    icon: <SiFacebook className='text-zinc-300' />,
    title: 'Facebook',
    url: 'https://www.facebook.com/nelsonlaidev/'
  },
  {
    icon: <SiSteam className='text-zinc-300' />,
    title: 'Steam',
    url: 'https://steamcommunity.com/profiles/76561199157324617/'
  },
  {
    icon: <SiInstagram className='text-zinc-300' />,
    title: 'Instagram',
    url: 'https://instagram.com/nelsonlaidev/'
  },
  {
    icon: <SiGithub className='text-zinc-300' />,
    title: 'GitHub',
    url: 'https://github.com/nelsonlaidev'
  },
  {
    icon: <SiDiscord className='text-zinc-300' />,
    title: 'Discord',
    url: 'https://discordapp.com/users/886269624608522240'
  },
  {
    icon: <SiX className='text-zinc-300' />,
    title: 'X',
    url: 'https://x.com/nelsonlaidev'
  },
  {
    icon: <SiStackoverflow className='text-zinc-300' />,
    title: 'Stack overflow',
    url: 'https://stackoverflow.com/users/15166428'
  },
  {
    icon: <SiDevdotto className='text-zinc-300' />,
    title: 'Dev.to',
    url: 'https://dev.to/nelsonlaidev'
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
