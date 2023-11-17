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
    logo: '/homepage.svg',
    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Law Library', link: 'https://lawlibrary.org.za/' },
      { text: 'Laws.Africa', link: 'https://laws.africa/' },
      { text: 'Parliamentary Monitoring Group', link: 'https://pmg.org.za/' },
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

    search: {
      provider: 'local'
    },

    footer: {
      message: '<a href="https://github.com/Law-for-idiots/lawforidiots-website/blob/main/LICENSE" target="_blank">GNU Affero General Public License v3.0</a>',
      copyright: 'Copyright © 2023-present <a href="https://www.linkedin.com/in/shailen-naidoo/" target="_blank">Shailen Naidoo</a>'
    }
  },
  lastUpdated: true,
  srcExclude: ['README.md']
})
