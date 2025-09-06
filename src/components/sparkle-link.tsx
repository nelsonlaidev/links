import { cn } from '@/utils/cn'

type SparkleLinkProps = React.ComponentProps<'a'>

const SparkleLink = (props: SparkleLinkProps) => {
  const { className, children, ...rest } = props

  return (
    <div className='relative inline-block [--spark:1.8s] [--transition:0.25s]'>
      <a
        className={cn(
          [
            'peer relative flex scale-[calc(1+var(--active)*0.1)] items-center gap-[0.25em] rounded-[100px] bg-sparkle bg-sparkle-radial px-6 py-4 font-medium whitespace-nowrap shadow-sparkle transition-[shadow_var(--transition),scale_var(--transition),background_var(--transition))] [--active:0] [--cut:0.1em]',
            'hover:[--active:1] hover:[--play-state:running]',
            'before:absolute before:inset-[-0.25em] before:-z-10 before:rounded-[100px] before:border-[0.25em] before:border-solid before:border-[hsl(0_0%_20.08%/0.5)] before:opacity-(--active,0) before:transition-[opacity_var(--transition)]',
            'active:scale-100'
          ],
          className
        )}
        {...rest}
      >
        <SparkleLinkSpark />
        <SparkleLinkBackdrop />
        <SparkleLinkText>{children}</SparkleLinkText>
      </a>
      <SparkleLinkParticleGroup />
    </div>
  )
}

const SparkleLinkBackdrop = () => (
  <span className='absolute inset-(--cut) rounded-[100px] bg-sparkle bg-sparkle-radial transition-[background_var(--transition)]' />
)

type SparkleLinkParticleProps = React.SVGProps<SVGSVGElement>

const SparkleLinkParticle = (props: SparkleLinkParticleProps) => {
  return (
    <svg
      className='absolute top-[calc(var(--y)*1%)] left-[calc(var(--x)*1%)] -z-10 w-[calc(var(--size,0.25)*1rem)] origin-[var(--origin-x,1000%)_var(--origin-y,1000%)] animate-float-out fill-white opacity-(--alpha,1) [animation-play-state:var(--play-state,_paused)] even:[animation-direction:reverse]'
      aria-label='A particle'
      viewBox='0 0 15 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        className='fill-[hsl(0_0%_90%)] stroke-none'
        d='M6.937 3.846L7.75 1L8.563 3.846C8.77313 4.58114 9.1671 5.25062 9.70774 5.79126C10.2484 6.3319 10.9179 6.72587 11.653 6.936L14.5 7.75L11.654 8.563C10.9189 8.77313 10.2494 9.1671 9.70874 9.70774C9.1681 10.2484 8.77413 10.9179 8.564 11.653L7.75 14.5L6.937 11.654C6.72687 10.9189 6.3329 10.2494 5.79226 9.70874C5.25162 9.1681 4.58214 8.77413 3.847 8.564L1 7.75L3.846 6.937C4.58114 6.72687 5.25062 6.3329 5.79126 5.79226C6.3319 5.25162 6.72587 4.58214 6.936 3.847L6.937 3.846Z'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

const SparkleLinkParticleGroup = () => {
  return (
    <span
      aria-hidden='true'
      className='absolute top-1/2 left-1/2 -z-10 aspect-square w-[200%] -translate-1/2 opacity-(--active,0) [-webkit-mask:radial-gradient(white,transparent_65%)] [transition:opacity_var(--transition)] peer-hover:[--active:1] peer-hover:[--play-state:running]'
    >
      {[...Array.from({ length: 20 }).keys()].map((i) => {
        const RANDOM = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

        return (
          <SparkleLinkParticle
            key={i}
            style={
              {
                '--x': `${RANDOM(20, 80)}`,
                '--y': `${RANDOM(20, 80)}`,
                '--duration': `${RANDOM(6, 20)}`,
                '--delay': `${RANDOM(1, 10)}`,
                '--alpha': `${RANDOM(40, 90) / 100}`,
                '--origin-x': `${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%`,
                '--origin-y': `${Math.random() > 0.5 ? RANDOM(300, 800) * -1 : RANDOM(300, 800)}%`,
                '--size': `${RANDOM(40, 90) / 100}`
              } as React.CSSProperties
            }
          />
        )
      })}
    </span>
  )
}

const SparkleLinkSpark = () => (
  <span
    className={cn([
      'absolute inset-0 [rotate:0deg] animate-flip overflow-hidden rounded-[100px] [mask:linear-gradient(white,transparent_50%)]',
      'before:absolute before:top-0 before:left-1/2 before:aspect-square before:w-[200%] before:[translate:-50%_-15%] before:[transform:rotate(-90deg)] before:animate-rotate before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:opacity-[calc(var(--active)+0.4)] before:[transition:opacity_var(--transition)]',
      'after:absolute after:inset-(--cut) after:rounded-[100px]'
    ])}
  />
)

type SparkleLinkTextProps = {
  children: React.ReactNode
}

const SparkleLinkText = (props: SparkleLinkTextProps) => {
  const { children } = props

  return (
    <span className='translate-x-[2%] translate-y-[-6%] bg-sparkle-text tracking-[0.01ch] text-transparent transition-[background_var(--transition)] [-webkit-background-clip:text]'>
      {children}
    </span>
  )
}

export default SparkleLink
