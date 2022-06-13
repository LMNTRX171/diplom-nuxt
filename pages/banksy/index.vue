<template>
  <div>
      <v-container>
          <v-row dense>
            <v-col md="3">
              <div style="position: sticky; top: 92px">
                <v-text-field
                  prepend-inner-icon="mdi-magnify"
                  outlined
                  v-model="search"
                  clearable
                  placeholder="Search"
                ></v-text-field>
              </div>
            </v-col>
              <v-col md="9">
                  <v-row>
                      <template >
                          <v-col cols="12" md="6" v-for="banksy in banksies" :key="banksy.i">
                                <v-card nuxt :to="`/banksy/${banksy.id}`" color="surface" class="el ma-2 mr-5 mb-5 pa-0" elevation="0">
                                  <v-img :src="banksy.image[0].name" height="300">
                                      <template #placeholder>
                                        <v-row
                                          class="fill-height"
                                          justify="center"
                                          align="center"
                                        >
                                          <v-progress-circular
                                            width="2"
                                            size="100"
                                            color="primary"
                                            indeterminate
                                          ></v-progress-circular>
                                        </v-row>
                                      </template>
                                    </v-img>
                                    <v-card-title class="text-md-body-1 font-weight-bold">
                                        {{banksy.title}}
                                    </v-card-title>
                                    <!-- <v-card-subtitle class="pd-3">
                                        {{banksyPic.authorName}}
                                    </v-card-subtitle> -->
                                    <v-card-text class="font-weight-bold">
                                    {{banksy.description}}
                                    </v-card-text>
                                </v-card>
                          </v-col>
                        </template>
                  </v-row>
              </v-col>
          </v-row>
      </v-container>
    <Footer />
    <ScrollTop />  
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import ScrollTop from '~/components/ScrollTop.vue'
import axios from 'axios'

export default {
    components: {
        Footer,
        ScrollTop,
    },
    data: () => ({
        search: null,
        banksies: []
    }),
  // async fetch({store}) {
  //   if(store.getters['banksy/banksyPictures'].length === 0) {
  //     await store.dispatch('banksy/fetch')
  //   }
  // },
  
  async mounted () {
    try {
      const response = await axios.get('http://localhost:1337/banksies')
      this.banksies = response.data
      console.log(this.banksies);
    } catch (error) {
      this.error = error;
    }
  },
  computed: {
    // banksy() {
    //   return this.$store.getters['banksy/banksyPictures']
    // }
    filteredProducts() {
      if (!this.banksies || !this.search) return this.banksies;
      return this.banksies.filter(p => {
        const s = this.search.toLowerCase();
        const n = p.title.toLowerCase();
        const authorName = p.authorName.toLowerCase();
        // const sprice = p.salePrice?.toString() || "";
        // const r = p.ratings.toString();
        return (
          n.includes(s) ||
          authorName.includes(s)
          // sprice.includes(s) ||
          // r.includes(s)
        );
      });
    },
  },
}
</script>

<style>

</style>