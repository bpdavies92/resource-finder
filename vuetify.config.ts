import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

export default defineVuetifyConfiguration({
  // your Vuetify options here
  theme: {
 defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
        dark: false,
        colors: {
          primaryBlack: '#303030',  
          brightBlue: '#26a8df'
        },
      },
    },
  }
})
