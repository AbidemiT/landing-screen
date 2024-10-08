// https://nuxt.com/docs/api/configuration/nuxt-config
import './env/client.ts';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      unsplashAccessKey: process.env.NUXT_PUBLIC_UNSPLASH_ACCESS_KEY,
    }
  },
  tailwindcss: {
    config: {
      theme: {
        container: {
          center: true,
          padding: '2rem',
          screens: {
            '2xl': '1400px',
          },
        },
        extend: {
          borderRadius: {
            lg: '12px',
            md: '8px',
            sm: '4px',
            full: '50%',
          },
          spacing: {
            '2': '2px',
            '4': '4px',
            '8': '8px',
            '12': '12px',
            '16': '16px',
            '20': '20px',
            '24': '24px',
            '28': '28px',
            '32': '32px',
            '36': '36px',
            '40': '40px',
            '44': '44px',
            '48': '48px',
            '52': '52px',
            '56': '56px',
            '60': '60px',
            '64': '64px',
            '72': '72px',
            '80': '80px',
            '96': '96px',
            '100': '100px',
            '104': '104px',
            '108': '108px',
            '112': '112px',
            '116': '116px',
            '120': '120px',
            '124': '124px',
          }
        },
      },
    }
  }
})