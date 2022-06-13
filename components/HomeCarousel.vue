<template>
<div>
     <section id="hero">
        <v-row no-gutters>
          <v-img
            :min-height="'calc(90vh - ' + $vuetify.application.top + 'px)'"
            src="https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          >
            <v-theme-provider dark>
              <v-container fill-height>
                <v-row
                  align="center"
                  class="white--text mx-auto"
                  justify="center"
                >
                  <v-col
                    class="white--text text-center"
                    cols="12"
                    tag="h1"
                  >
                    <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                      class="font-weight-light"
                    >
                      WELCOME TO
                    </span>

                    <br>

                    <span
                      :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                      class="font-weight-black"
                    >
                      Gallery
                    </span>

                  </v-col>

                  <v-btn
                    class="align-self-end"
                    fab
                    outlined
                    @click="$vuetify.goTo('#about-me')"
                  >
                    <v-icon>mdi-chevron-double-down</v-icon>
                  </v-btn>
                </v-row>
              </v-container>
            </v-theme-provider>
          </v-img>
        </v-row>
      </section>

      <section id="about-me">
  <v-carousel height="100vh" hide-delimiter-background>
      <template #prev="{attrs, on}">
          <v-btn fab color="transparent" depressed v-bind="attrs" v-on="on">
              <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
      </template>
      <template #next="{attrs, on}">
          <v-btn fab color="transparent" depressed v-bind="attrs" v-on="on">
              <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
      </template>
          <v-carousel-item v-for="carousel in carouselInfo" :key="carousel.id">
            <v-img height="100vh" :src="carousel.image">
                <v-container class="fill-height">
                    <v-row dense align="center">
                        <v-col md="7">
                            <div style="background-color: rgba(255, 255, 255, 0.8)"
                                 class="pa-md-10 pa-5 rounded-lg black--text text-center text-md-left"    
                            >
                                <h2 class="text-md-h3 text-h5">
                                    {{carousel.name}}
                                </h2>
                                <p class="text-md-body-2 md-7 mt-5">
                                    {{carousel.description}}
                                </p>
                                <v-btn nuxt :to="carousel.path" depressed color="black" class="white--text" min-height="40">
                                   Перейти
                                </v-btn>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-img>
          </v-carousel-item>
  </v-carousel>
  </section>
  </div>
</template>

<script>
export default {
    // props: {
    //     sale_items: Array
    // }
    data: () => ({
      carouselInfo: [
    {
      "id": 1,
      "name": "Античное искусство",
      "onSale": true,
      "tags": ["Perfume", "Women"],
      "image": "https://images.unsplash.com/photo-1563674881-8abcee2b556a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi",
      "price": 3500,
      "salePrice": 3000,
      "ratings": 4.5,
      "path": "/antiques"
    },
    {
      "id": 2,
      "name": "Работы Бэнкси",
      "onSale": true,
      "tags": ["Nike", "Men"],
      "image": "https://images.unsplash.com/photo-1624892902685-595bb07dd421?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      "description": "«Бэ́нкси» ( Banksy) — псевдоним анонимного английского андерграундного художника стрит-арта, политического активиста и режиссёра, работающего с 1990-х годов. Настоящее имя и происхождение Бэнкси неизвестны, вокруг его биографии в обществе ведётся много споров.",
      "price": 10500,
      "salePrice": 9000,
      "ratings": 4.5,
      "path": "/banksy"
    },
    {
      "id": 3,
      "name": "Работы Русских Художников",
      "onSale": true,
      "tags": ["Watch", "Men"],
      "image": "https://images.unsplash.com/photo-1554907984-15263bfd63bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, possimus temporibus reprehenderit molestiae, doloribus eos obcaecati expedita, voluptatibus commodi  suscipit aliquid fuga modi alias fugiat nostrum. Accusantium incidunt quae modi",
      "price": 50500,
      "salePrice": 40000,
      "ratings": 3.5,
      "path": "/products"
    },
  ]
    })
    // https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80
}
</script>

<style>

</style>