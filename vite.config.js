import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/klaudia-portfolio2/",
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})