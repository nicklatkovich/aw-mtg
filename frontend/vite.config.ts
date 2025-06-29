import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const DIST_PATH = path.resolve(process.cwd(), 'dist/client');

export default defineConfig({
  root: path.resolve(__dirname),
  base: process.env.GITHUB_ACTIONS === 'true' ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''}/` : undefined,
  plugins: [tsconfigPaths(), react()],
  build: { outDir: DIST_PATH, emptyOutDir: true },
  server: { proxy: { '/data': 'http://localhost:3000' } },
  resolve: { alias: { '@frontend': path.resolve(__dirname, 'src') } },
});
