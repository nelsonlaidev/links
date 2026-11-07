import { useState } from 'react'

import { SITE } from '@/lib/site'

const Footer = () => {
  const [year] = useState(() => new Date().getUTCFullYear())

  return (
    <footer className='mt-16 mb-8 flex justify-center'>
      &copy; {year} {SITE.name}
    </footer>
  )
}

export default Footer
