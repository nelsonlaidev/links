import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  ignoreDependencies: ['postcss'],
  compilers: {
    css: (text: string) => [...text.matchAll(/(?<=@)(?:import|plugin)[^;]+/g)].join('\n').replace('plugin', 'import')
  }
}

export default config
