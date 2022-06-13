<template>
  <div>
    <HomeCarousel />
    <br/><br/>
    <v-container>
      <h1 class="text-md-h4 text-h6">Modern Art</h1>
      <br/>
      <ProductSlider :modernArts="modernArts"/>
      <br /><br /><br />
    </v-container>
      <Parallax />
      <br /><br /><br />
      <Blog />
    <Footer />
    <ScrollTop />  
    </div>
</template>

<script>
import Blog from '../components/Blog.vue'
import Footer from '../components/Footer.vue'
import HomeCarousel from '../components/HomeCarousel.vue'
import Parallax from '../components/Parallax.vue'
import ProductSlider from '../components/ProductSlider.vue'
import ScrollTop from '../components/ScrollTop.vue'
export default {
  components: {
    Footer,
    HomeCarousel,
    ProductSlider,
    ScrollTop,
    Parallax,
    Blog,
  },
  data: () => ({
    products: null,
    sale_items: null
  }),
  // async created() {
  //   this.sale_items = await this.$content('products').where({onSale: true}).fetch()
  //   this.products = await this.$content('products').fetch()
  // },
  async fetch({store}) {
      if(store.getters['modern/modernArts'].length === 0) {
       await store.dispatch('modern/fetch')
    }
  },
  computed: {
    modernArts() {
      return this.$store.getters['modern/modernArts']
    }
  }
}
</script>

<style>

</style>