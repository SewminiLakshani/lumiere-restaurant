import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// nothing fancy here, just the react plugin
export default defineConfig({
  plugins: [react()],
})
