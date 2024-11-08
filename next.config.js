import { defineConfig } from '@archoleat/next-define-config';

export default defineConfig({
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        hostname: 'yokai.vercel.app',
        pathname: '/images/**',
        protocol: 'https',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*?)',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=1, stale-while-revalidate=59',
          },
        ],
      },
    ];
  },
});
