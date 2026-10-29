import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';
import {defineConfig} from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          thankyou: path.resolve(__dirname, 'thank-you.html'),
          serviceMetaAds: path.resolve(__dirname, 'services/meta-ads.html'),
          serviceGoogleAds: path.resolve(__dirname, 'services/google-ads.html'),
          serviceLeadGen: path.resolve(__dirname, 'services/lead-generation.html'),
          serviceSocialMedia: path.resolve(__dirname, 'services/social-media.html'),
          servicePerfMarketing: path.resolve(__dirname, 'services/performance-marketing.html'),
          serviceLocalSeo: path.resolve(__dirname, 'services/local-seo-gmb.html'),
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true as const,
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
