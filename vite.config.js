import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
        '/api': {
            target: 'https://secret-jsx-backend-b1fqmdp6e-istranges-projects.vercel.app/', // Ganti dengan URL backend
            changeOrigin: true,
            secure: false
        }
    }
}
});
