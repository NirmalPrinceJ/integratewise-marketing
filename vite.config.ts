import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

/** IntegrateWise Landing — marketing site only (no workspace). */
export default defineConfig({
  envPrefix: ['VITE_'],
  plugins: [tailwindcss(), react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
  server: {
    port: 3001,
    open: true,
  },
});
