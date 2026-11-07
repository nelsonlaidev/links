import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { varlockVitePlugin } from '@varlock/vite-integration'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [varlockVitePlugin(), nitro(), tailwindcss(), tanstackStart(), viteReact({ compiler: true })],
})

export default config
