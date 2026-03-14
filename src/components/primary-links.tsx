import SparkleLink from './sparkle-link'

const PrimaryLinks = () => {
  return (
    <div className='mb-6 flex items-center justify-center gap-6'>
      <SparkleLink href='https://nelsonlai.dev' target='_blank' rel='noopener, noreferrer'>
        Portfolio
      </SparkleLink>
      <SparkleLink href='mailto:me@nelsonlai.dev'>me@nelsonlai.dev</SparkleLink>
    </div>
  )
}

export default PrimaryLinks
