import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  fontFamily: {
  inter: ['Inter', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
},
  plugins: [react(), tailwindcss()],
})


