import { defineConfig, nextjs, react, tailwindcss } from '@nelsonlaidev/oxlint-config'

export default defineConfig({
  overrides: [react(), nextjs(), tailwindcss()],
  settings: {
    'better-tailwindcss': {
      entryPoint: './src/styles/globals.css',
    },
  },
})
