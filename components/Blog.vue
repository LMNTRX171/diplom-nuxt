<template>
  <div>
      <section id="blog">
        <div class="py-12"></div>

        <v-container>
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">Blog</h2>

          <v-responsive
            class="mx-auto mb-12"
            width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
          </v-responsive>

          <v-row>
            <v-col
              v-for="({ src, text, title }, i) in articles"
              :key="i"
              cols="12"
              md="4"
            >
              <v-img
                :src="src"
                class="mb-4"
                height="200"
                max-width="100%"
              ></v-img>

              <h3
                class="font-weight-black mb-4 text-uppercase"
                v-text="title"
              ></h3>

              <div
                class="title font-weight-light mb-5"
                v-text="text"
              ></div>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </section>
  </div>
</template>

<script>
export default {
    data: () => ({
        articles: [
          {
            src: 'https://images.unsplash.com/photo-1423784346385-c1d4dac9893a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            title: 'Mobile first & Responsive',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, consequatur eum quaerat ex ad laboriosam doloremque voluptatem quibusdam qui. Explicabo porro ipsam et perferendis sunt vitae eveniet commodi, vero quae?',
          },
          {
            src: 'https://images.unsplash.com/photo-1475938476802-32a7e851dad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
            title: 'Think outside the box',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, consequatur eum quaerat ex ad laboriosam doloremque voluptatem quibusdam qui. Explicabo porro ipsam et perferendis sunt vitae eveniet commodi, vero quae?',
          },
          {
            src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
            title: 'Small changes, big difference',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, consequatur eum quaerat ex ad laboriosam doloremque voluptatem quibusdam qui. Explicabo porro ipsam et perferendis sunt vitae eveniet commodi, vero quae?',
          },
          {
            src: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1892&q=80',
            title: 'Small changes, big difference',
            text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, consequatur eum quaerat ex ad laboriosam doloremque voluptatem quibusdam qui. Explicabo porro ipsam et perferendis sunt vitae eveniet commodi, vero quae?',
          },
        ],
    })
}
</script>

<style>

</style>