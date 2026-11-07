import { SITE } from '@/lib/site'

import SparkleLink from './sparkle-link'

const PrimaryLinks = () => {
  return (
    <div className='mb-6 flex items-center justify-center gap-6'>
      <SparkleLink href={SITE.portfolio} target='_blank' rel='noopener, noreferrer'>
        Portfolio
      </SparkleLink>
      <SparkleLink href={`mailto:${SITE.email}`}>{SITE.email}</SparkleLink>
    </div>
  )
}

export default PrimaryLinks
