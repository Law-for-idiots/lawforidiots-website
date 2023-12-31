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
      { icon: 'github', link: 'https://github.com/Law-for-idiots/lawforidiots' },
      { icon: { svg: `
      <svg xmlns="http://www.w3.org/2000/svg" width="64" viewBox="0 0 73.323 64" height="64"><defs><linearGradient id="A" x1="31.52" y1="64.56" x2="31.52" y2="1.51" gradientUnits="userSpaceOnUse"><stop offset=".18" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient></defs><path d="M55.16 1.5H7.88a7.88 7.88 0 0 0-5.572 2.308A7.88 7.88 0 0 0 0 9.39v47.28a7.88 7.88 0 0 0 7.88 7.88h47.28A7.88 7.88 0 0 0 63 56.67V9.4a7.88 7.88 0 0 0-7.84-7.88zM27.42 49.26A3.78 3.78 0 0 1 23.64 53H12a3.78 3.78 0 0 1-3.8-3.74V13.5A3.78 3.78 0 0 1 12 9.71h11.64a3.78 3.78 0 0 1 3.78 3.78zM54.85 33.5a3.78 3.78 0 0 1-3.78 3.78H39.4a3.78 3.78 0 0 1-3.78-3.78v-20a3.78 3.78 0 0 1 3.78-3.79h11.67a3.78 3.78 0 0 1 3.78 3.78z" fill="url(#A)" fill-rule="evenodd" transform="matrix(1.163111 0 0 1.163111 .023263 -6.417545)"/></svg>` },
        link: 'https://trello.com/b/EOj57Wxs/law-for-idiots'
      },
      { icon: { svg: `<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
      viewBox="0 0 455.731 455.731" xml:space="preserve">
   <g>
     <rect x="0" y="0" style="fill:#F78422;" width="455.731" height="455.731"/>
     <g>
       <path style="fill:#FFFFFF;" d="M296.208,159.16C234.445,97.397,152.266,63.382,64.81,63.382v64.348
         c70.268,0,136.288,27.321,185.898,76.931c49.609,49.61,76.931,115.63,76.931,185.898h64.348
         C391.986,303.103,357.971,220.923,296.208,159.16z"/>
       <path style="fill:#FFFFFF;" d="M64.143,172.273v64.348c84.881,0,153.938,69.056,153.938,153.939h64.348
         C282.429,270.196,184.507,172.273,64.143,172.273z"/>
       <circle style="fill:#FFFFFF;" cx="109.833" cy="346.26" r="46.088"/>
     </g>
   </g>
   </svg>` }, link: 'https://github.com/Law-for-idiots/lawforidiots-website/releases.atom' },
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
