// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://mousedpianalyzer.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'fr', 'es', 'it', 'nl', 'pl', 'pt', 'ru', 'zh', 'sv', 'da', 'no', 'fi'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          de: 'de-DE',
          fr: 'fr-FR',
          es: 'es-ES',
          it: 'it-IT',
          nl: 'nl-NL',
          pl: 'pl-PL',
          pt: 'pt-PT',
          ru: 'ru-RU',
          zh: 'zh-CN',
          sv: 'sv-SE',
          da: 'da-DK',
          no: 'no-NO',
          fi: 'fi-FI',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
