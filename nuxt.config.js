const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],  
    script: [
      { src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js' },   
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js' }
     
    ],
  
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro|Pacifico|Neucha' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css' },    
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.1.1/css/all.css' }
      
      
     
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
 css: [
  '~/css/main.css',
  'aos/dist/aos.css'

],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
        src:"~/plugins/aos", ssr:false        
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    ['nuxt-i18n', {
      locales: ['eu', 'es'],
      defaultLocale: 'es',
      locales: [
        {
          code: 'eu',
          file: 'eu.js',
          icon: '/pais-vasco.png',
          name: 'Euskara'
        },
        {
          code: 'es',
          file: 'es.js',
          icon: '/espana.png',
          name: 'Español'
        }       
      ],
      lazy: true,
      langDir: 'lang/'
      
    }]
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  // router: {
  //   base: '/nuxtamestsak/'
  // },



  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
