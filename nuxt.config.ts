// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt'
  ],

  devtools: {
    enabled: true
  },

  // Global SEO defaults — overridden per-page with useSeoMeta()
  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'theme-color', content: '#09090b' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'author', content: 'NLFTs — Komunitas Developer Indonesia' },
        { name: 'keywords', content: 'NLFTs, komunitas developer Indonesia, komunitas IT Bandung, Nuxt komunitas, Vue developer Indonesia, open source Indonesia, komunitas programmer, belajar coding Indonesia, web developer Indonesia, komunitas teknologi' },
        { property: 'og:site_name', content: 'NLFTs' },
        { property: 'og:locale', content: 'id_ID' },
        { name: 'twitter:site', content: '@nlfts' },
        { name: 'twitter:creator', content: '@nlfts' },
      ],
      link: [
        { rel: 'canonical', href: 'https://nlfts.dev' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'alternate', type: 'application/rss+xml', title: 'NLFTs Blog RSS', href: 'https://nlfts.dev/rss.xml' },
      ]
    }
  },

  runtimeConfig: {
    turnstileSecretKey: process.env.SECRET_KEY || '',
    resendApiKey: process.env.RESEND_API_KEY || '',
    public: {
      turnstileSiteKey: process.env.SITE_KEY || ''
    }
  },

  css: ['~/assets/css/main.css'],

  image: {
    // Use @nuxt/image built-in optimizer (sharp is already installed)
    quality: 80,
    format: ['webp', 'avif'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    },
    // Allow optimization of external images (GitHub avatars, vectorlogo.zone)
    domains: ['avatars.githubusercontent.com', 'www.vectorlogo.zone', 'i.pravatar.cc'],
    // ipx provider for local static images
    provider: 'ipx'
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) => tag === 'app-root'
    }
  },

  routeRules: {
    // API routes: SSR only (cannot prerender)
    '/api/**': { prerender: false },
    // Contact page: SSR (has form + API + Turnstile)
    '/contact': { prerender: false },
    // Docs redirect: SSR
    '/docs': { redirect: '/docs/getting-started', prerender: false },
    // All other routes: SSG (prerendered)
    '/blog/**': { prerender: true },
    '/docs/**': { prerender: true },
    '/**': {
      prerender: true,
      headers: {
        'x-content-type-options': 'nosniff',
        'x-frame-options': 'SAMEORIGIN',
        'referrer-policy': 'strict-origin-when-cross-origin',
        'permissions-policy': 'camera=(), microphone=(), geolocation=()'
      }
    }
  },

  compatibilityDate: '2024-07-11',

  devServer: {
    host: '0.0.0.0',
    port: 3000
  },

  nitro: {
    prerender: {
      failOnError: false,
      routes: [
        '/',
        '/blog',
        '/changelog',
        '/signup',
        '/blocked',
        '/rss.xml',
        '/atom.xml',
        '/feed.xml',
        '/docs/getting-started'
      ],
      crawlLinks: true
    },
    // Beritahu Nitro bahwa better-sqlite3 adalah native module — jangan di-bundle.
    // Ini mencegah ERR_DLOPEN_FAILED di Vercel karena binary .node tidak boleh
    // di-inline ke dalam bundle JavaScript.
    externals: {
      external: ['better-sqlite3']
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
