import { defineConfig } from 'vite';
import vercel from 'vite-plugin-vercel';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react(), vercel()],
  base: '/email-builder-js/',
  server: {
    port: process.env.PORT as unknown as number,
  },
});
