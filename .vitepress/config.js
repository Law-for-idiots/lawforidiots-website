import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Law for idiots",
  description: "Law for idiots is a non-profit organization that aims to make the law a lot less scary to those who are facing legal troubles but have zero experience and no clue where to start when it comes to dealing with legal matters. We do not waste your time with legal jargon and all that nonsense, the law should be accessible to everyone in South Africa and not just those with fat wallets",
  head: [
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-H4XD4C50EH' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-H4XD4C50EH');`
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    editLink: {
      pattern: 'https://github.com/teddydaniels/lawforidiots/edit/main/:path'
    },

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/teddydaniels/lawforidiots' }
    ],
  },
  lastUpdated: true,
  srcExclude: ['README.md']
})
