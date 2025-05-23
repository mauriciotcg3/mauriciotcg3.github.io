import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: '/mauriciotcg3/',
  resolve: {
    alias: {
      '@': '/src', // Se você estiver usando alias de path
    },
  },
})
