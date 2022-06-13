<template>
  <v-app dark :style="{backgroundColor: $vuetify.theme.dark ? '#000000': 'white'}">
    <Nav />
    <v-main>
        <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import Nav from '../components/Nav'

export default {
  name: 'DefaultLayout',
  data () {
    return {
      components: {Nav},
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
