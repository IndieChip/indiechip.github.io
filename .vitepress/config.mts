import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    fr: {
      label: 'French',
      lang: 'fr', // optional, will be added  as `lang` attribute on `html` tag
      // other locale specific properties...
    }
  },



  title: 'Crunched Cookies',
  description: 'My personal website showing my projects and activity',
  themeConfig: {
    i18nRouting: true,
    logo: '/website-main-assets/image/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
  
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/examples/md-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/examples/md-examples' },
          { text: 'Runtime API Examples', link: '/examples/api-examples' },
          { text: 'Cool Examples', link: '/examples/cool-examples'}
        ]
      },
      {
        text: 'Development Projects',
        collapsed: true,
        items: [
          {text: 'Minecraft Sample GUI', link: '/development-projects/minecraft-gui'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CrunchedCookies' }
    ]
  },
})
