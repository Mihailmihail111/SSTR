module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'sssrt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  //ГЛОБАЛЬНИЙ css
  css: [
    {
      src: '~assets/css/reset.css',
      lang: "css"
    },
    {
      src: '~assets/css/style.scss',
      lang: "scss"
    }
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/recaptcha',
    '@nuxtjs/auth',
  ],
  recaptcha: {
    hideBadge: false, // Hide badge element (v3 & v2 via size=invisible)
    siteKey: '6Lc6HK8ZAAAAAL29f6gMqJx6R_ZVxJEq_vnF6InG', // Site key for requests
    version: 2, // Version
    size: 'compact' // Size: 'compact', 'normal', 'invisible' (v2)
  },
  axios: {
    proxy: true
  },
  proxy: {
    '/api.php': 'http://media.home/SSTR'
  },
  env: {
    backendUrl: 'http://media.home/SSTR/api.php'
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login:  { url: '/api.php?method=login', method: 'post', propertyName: 'token' },
          logout: { url: '/api.php?method=logout', method: 'post' },
          user:   { url: '/api.php?method=user', method: 'post', propertyName: 'user' }
        },
      }
    }
  },
}