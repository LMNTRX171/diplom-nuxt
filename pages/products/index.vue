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
                      <v-col cols="12" md="6" v-for="art in filteredProducts" :key="art.i" class="pa-1">
                            <v-card nuxt :to="`/products/${art.id}`" color="surface" class="el ma-2 mr-5 mb-5" elevation="0">
                                <v-img :src="art.image[0].name" height="300">
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
                                    {{art.title}}
                                </v-card-title>
                                <v-card-subtitle class="pd-3">
                                    {{art.authorName}}
                                </v-card-subtitle>
                                <v-card-text class="font-weight-bold">
                                  {{art.description}}
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
        search: '',
        arts: []
    }),
  // async fetch({store}) {
  //   if(store.getters['art/arts'].length === 0) {
  //     await store.dispatch('art/fetch')
  //   }
  // }, 
  // computed: {
  //   arts() {
  //     return this.$store.getters['art/arts']
  //   }
  // }
    async mounted () {
    try {
      const response = await axios.get('http://localhost:1337/arts')
      this.arts = response.data
      console.log(this.arts);
    } catch (error) {
      this.error = error;
    }
  },
  computed: {
    filteredProducts() {
      if (!this.arts || !this.search) return this.arts;
      return this.arts.filter(p => {
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