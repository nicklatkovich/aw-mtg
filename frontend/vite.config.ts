import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const isGithubPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  root: path.resolve(__dirname),
  base: isGithubPages ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''}/` : '/',
  plugins: [tsconfigPaths(), react()],
  build: { outDir: path.resolve(__dirname, '../dist/client'), emptyOutDir: true },
  server: { proxy: { '/data': 'http://localhost:3000' } },
  resolve: { alias: { '@frontend': path.resolve(__dirname, 'src') } },
});
