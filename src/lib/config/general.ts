import type { ThemeConfig, HeadConfig, HeaderConfig, FooterConfig, DateConfig, FeedConfig } from '$lib/types/general'

export const theme: ThemeConfig = [
  {
    name: 'default',
    text: '❤️ default'
  },
  {
    name: 'light',
    text: '🌕 Light'
  },
  {
    name: 'dark',
    text: '🌑 Dark'
  },
  {
    name: 'bumblebee',
    text: '🐝 Bumblebee'
  },
  {
    name: 'halloween',
    text: '🎃 Halloween'
  },
  {
    name: 'aqua',
    text: '💦 Aqua'
  },
  {
    name: 'pastel',
    text: '🌈 Pastel'
  },
  {
    name: 'wirefream',
    text: '📱 Wireframe'
  },
  {
    name: 'luxury',
    text: '💰 Luxury'
  },
  {
    name: 'dracula',
    text: '🧛 Dracula'
  },
  {
    name: 'night',
    text: '🌃 Night'
  }
]

export const head: HeadConfig = {
  custom: ({ dev }) =>
    dev
      ? []
      : [
          // Preconnect
          '<link href="https://umami.kwchang0831.dev" rel="preconnect" crossorigin>',
          // Umami Analytics
          '<script async defer data-website-id="e29bb16a-1e2e-48e6-8812-5d7bb04204b7" src="https://umami.kwchang0831.dev/umami.js" data-cache="true" data-domains="kwchang0831.dev,www.kwchang0831.dev"></script>'
        ]
}

export const header: HeaderConfig = {
  search: {
    provider: 'duckduckgo'
  },
  nav: [
    {
      text: '關於我',
      link: '/about',
      datatip: 'about me'
    }
  ]
}

export const footer: FooterConfig = {
  // nav: [
  //   {
  //     text: 'Feed',
  //     link: '/atom.xml'
  //   },
  //   {
  //     text: 'Sitemap',
  //     link: '/sitemap.xml'
  //   }
  // ]
}

export const date: DateConfig = {
  toPublishedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: 'Asia/Taipei'
    }
  },
  toUpdatedString: {
    locales: 'en-US',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: 'Asia/Taipei'
    }
  }
}

export const feed: FeedConfig = {}
