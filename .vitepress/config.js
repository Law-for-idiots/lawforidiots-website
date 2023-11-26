import { defineConfig } from 'vitepress'
import { version } from '../package.json'

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
      {
        text: 'Legal Resources',
        items: [
          { text: 'Law Library', link: 'https://lawlibrary.org.za/' },
          { text: 'Laws.Africa', link: 'https://laws.africa/' },
          { text: 'Constitution Compass', link: 'https://constitutioncompass.org.za/' },
          { text: 'Parliamentary Monitoring Group', link: 'https://pmg.org.za/' },
        ]
      }
    ],

    editLink: {
      pattern: 'https://github.com/Law-for-idiots/lawforidiots/edit/main/:path'
    },

    sidebar: [
      {
        text: 'Introduction',
        link: '/introduction/',

      },
      {
        text: 'How-to Guides',
        items: [
          {
            text: 'Labour Law',
            items: [
              { text: 'Salary deductions without my consent', link: '/how-to-guides/labour-law/salary-deductions-without-my-consent' },
              { text: 'Employment contract states that my salary is to be private', link: '/how-to-guides/labour-law/employment-contract-states-that-my-salary-is-to-be-private' },
              { text: 'Employer claims that they own all copyrights of my work', link: '/how-to-guides/labour-law/employer-claims-that-they-own-all-copyrights-of-my-work' },
            ],
          }
        ],
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Law-for-idiots/lawforidiots' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: '<a href="https://github.com/Law-for-idiots/lawforidiots-website/blob/main/LICENSE" target="_blank">GNU Affero General Public License v3.0</a>',
      copyright: `Copyright © 2023-present <a href="https://www.linkedin.com/in/shailen-naidoo/" target="_blank">Shailen Naidoo</a> - <a href="https://github.com/Law-for-idiots/lawforidiots-website/releases/tag/v${version}" target="_blank">V${version}</a>`
    }
  },
  lastUpdated: true,
  srcExclude: ['README.md']
})
