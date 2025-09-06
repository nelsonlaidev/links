import { defineConfig } from '@nelsonlaidev/eslint-config'

export default defineConfig({
  tailwindEntryPoint: './src/styles/globals.css',
  overrides: {
    sonarjs: {
      'sonarjs/pseudo-random': 'off'
    }
  }
})
