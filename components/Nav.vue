<template>
  <div>
      <v-app-bar 
        color="surface" 
        height="80" 
        class="el"
        :style="{
        padding: $vuetify.breakpoint.mdAndUp ? '0px 100px' : '',
        }"
        >
        <v-toolbar-title 
            @click="$router.push('/')"
            class="text-md-h5 font-weight-bold pointer"
        >
           Virtual  Gallery
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn nuxt to="/products" icon>
            <v-icon size="20">mdi-panorama-variant</v-icon>
        </v-btn>
            <div v-if="isAuthenticated">
            <v-btn 
              @click.prevent="logout"
              depressed
              small
              color="white"
              class="black--text mx-2"
            >
            <v-icon size="20">mdi-logout</v-icon>
            </v-btn>
            </div>
     <div v-if="!isAuthenticated">
        <div>
          <v-btn 
            depressed
            to="/register"
            color="black"
            class="white--text mr-1"
            small
            
          >
            Register
            <v-icon right size="20">mdi-account-plus</v-icon>
          </v-btn>
          <v-btn
            depressed
            to="/login"
            small
            color="white"
            class="black--text mr-1"
          >
            Login
            <v-icon right size="20">mdi-lock-open</v-icon>
          </v-btn>
        </div>
      </div>
        <v-divider vertical class="mx-md-5 mx-2"></v-divider>
        <v-btn @click="toggleTheme" icon>
            <v-icon size="20">mdi-brightness-7</v-icon>
        </v-btn>
      </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    methods: {
        async logout() {
          await this.$auth.logout()
        },
        toggleTheme() {
          this.$vuetify.theme.dark = !this.$vuetify.theme.dark
        },
    },
    computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
}
</script>

<style>

</style>