<template>
  <div>
    <v-container v-if="thisArt">
        <v-row justify="center">
          <v-col cols="12" md="7">
            <div class="text-center">
            </div>
            <br/>
            <br/>
            <v-img 
                width="100%"
                class="el rounded-lg"
                height="50hv"
                :src="thisArt.image[0].name"
            ></v-img>
              </v-col>
              <v-col
                  cols="12"
                  md="5"
                >
                <v-card             
                :style="{backgroundColor: $vuetify.theme.dark ? '#000000': 'white'}"
                elevation="0" 
                >
               <h2 class="text-center text-md-h4 font-weight-bold mt-4">
                  {{thisArt.title}}
                </h2>
              <!-- <v-rating
              @click.prevent="chouseRating"
              class="mt-2 text-center"
              v-model="ratingInfo.rating"
              background-color="grey"
              color="yellow accent-4"
              dense
              half-increments
              hover
              size="30"
            ></v-rating>
            <v-btn @click.prevent="chouseRating">
                afhafoau
            </v-btn> -->
                <v-card-text>
                   <span class="mr-1 text-subtitle-1"> Автор: </span> 
                   <span class="font-weight-bold text-h7">{{thisArt.authorName}} </span>
                </v-card-text>
                <v-card-text class="text-subtitle-1">
                    {{thisArt.description}}
                </v-card-text>
                <v-card-title class="text-h5">
                  Комментарии:
                </v-card-title>
              <v-divider></v-divider>
              <div 
                v-for="r in reviews" :key="r.text"
              >
                <div v-if="r.artId === thisArt.id">
                  <v-card
                    :style="{backgroundColor: $vuetify.theme.dark ? '#000000': 'white'}"
                    elevation="0"
                  >
                    <v-card-title>
                      {{r.userName}}
                    </v-card-title>
                    <v-card-subtitle>
                      {{r.review}}
                    </v-card-subtitle>
                    <v-row
                      align="center"
                      justify="end"
                    >
                      <v-card-subtitle>{{datelocal(r.created_at)}}</v-card-subtitle>
                    </v-row>
                    <v-divider></v-divider>
                  </v-card>
                </div>
              </div>
                <v-textarea
                outlined
                name="input-7-4"
                label="Комментировать"
                v-model="reviewInfo.review"
                class="mt-2"
                ></v-textarea>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                  @click.prevent="handleSubmit"
                  depressed
                  :style="{backgroundColor: $vuetify.theme.dark ? '#000000': 'white'}"
                  >
                  Send 
                  <v-icon class="mx-2">mdi-message-bulleted</v-icon>
                  </v-btn>
                </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
    </v-container>
    <br/><br/>
    <ScrollTop />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import ScrollTop from '~/components/ScrollTop'
import axios from 'axios'
import { mapGetters } from "vuex";

export default {
    components: {
        ScrollTop,
        Footer,
    },
    data: () => ({
        // product: null
        ratingInfo: {
          rating: 0,
          ratingId: null,
          userName: '',
          artId: null
        },
        reviewInfo: {
           review: '',
           userId: null,
           userName: '',
           artId: null
        }
    }),
    // async created() {
    //     let d = await this.$content("products")
    //     .where( {id: parseInt(this.$route.params.id)} )
    //     .limit(1)
    //     .fetch()

    //     this.product = d[0]
    // }
        async fetch({store}) {
          if(store.getters['review/reviews'].length === 0) {
            await store.dispatch('review/fetch')
          }
        }, 
        async asyncData({params}) {
        const response = await axios.get(`http://localhost:1337/arts/${params.id}`)
        const thisArt = response.data
        console.log(thisArt);
        return {thisArt}
    },
      methods: {
        async handleSubmit() {
      try {
        const response = await axios.post(`http://localhost:1337/reviews`, this.reviewInfo)
        this.reviewInfo.review = '',
        console.log(response);
      } catch(error) {
        this.error = error;
      }
    },
    datelocal(date) {
      let dateNum = new Date(date);
      let options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }
      return dateNum.toLocaleString('ru-RU', options)
    },
  },
   mounted(){
    this.reviewInfo.userId = this.loggedInUser.id
    this.reviewInfo.userName = this.loggedInUser.username
    this.reviewInfo.artId = this.thisArt.id

    this.ratingInfo.ratingId = this.loggedInUser.id
    this.ratingInfo.userName = this.loggedInUser.username
    this.ratingInfo.artId = this.thisArt.id
  },
    computed: {
    ...mapGetters(["loggedInUser",]),
    reviews() {
      return this.$store.getters['review/reviews']
    },
  },
}
</script>

<style>

</style>