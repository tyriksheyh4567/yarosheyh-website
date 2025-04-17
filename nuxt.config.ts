// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    ['@nuxtjs/tailwindcss', {
      config: {
        content: [
          './components/**/*.{js,vue,ts}',
          './layouts/**/*.vue',
          './pages/**/*.vue',
          './plugins/**/*.{js,ts}',
          './app.vue',
          './error.vue'
        ],
        theme: {
          extend: {
            colors: {
              border: 'hsl(var(--border))',
              input: 'hsl(var(--input))',
              ring: 'hsl(var(--ring))',
              background: 'hsl(var(--background))',
              foreground: 'hsl(var(--foreground))',
              primary: {
                DEFAULT: 'hsl(var(--primary))',
                foreground: 'hsl(var(--primary-foreground))'
              },
              secondary: {
                DEFAULT: 'hsl(var(--secondary))',
                foreground: 'hsl(var(--secondary-foreground))'
              },
              destructive: {
                DEFAULT: 'hsl(var(--destructive))',
                foreground: 'hsl(var(--destructive-foreground))'
              },
              muted: {
                DEFAULT: 'hsl(var(--muted))',
                foreground: 'hsl(var(--muted-foreground))'
              },
              accent: {
                DEFAULT: 'hsl(var(--accent))',
                foreground: 'hsl(var(--accent-foreground))'
              },
              popover: {
                DEFAULT: 'hsl(var(--popover))',
                foreground: 'hsl(var(--popover-foreground))'
              },
              card: {
                DEFAULT: 'hsl(var(--card))',
                foreground: 'hsl(var(--card-foreground))'
              }
            },
            borderRadius: {
              lg: 'var(--radius)',
              md: 'calc(var(--radius) - 2px)',
              sm: 'calc(var(--radius) - 4px)'
            }
          }
        }
      }
    }],
    ['@nuxtjs/color-mode', {
      preference: 'system',
      fallback: 'light',
      classSuffix: ''
    }],
    ['@nuxtjs/i18n', {
      locales: [
        {
          code: 'ru',
          iso: 'ru-RU',
          name: 'Русский',
          file: 'ru.json'
        }
      ],
      defaultLocale: 'ru',
      langDir: 'locales/',
      strategy: 'prefix_except_default',
      vueI18n: {
        fallbackLocale: 'ru'
      },
      bundle: {
        optimizeTranslationDirective: false
      }
    }]
  ],
  plugins: [
    { src: '~/plugins/inspira-ui.js', mode: 'client' }
  ]
})
