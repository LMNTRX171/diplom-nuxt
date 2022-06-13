<template>
  <v-slide-group>
      <v-slide-item v-for="modernArt in modernArts" :key="modernArt.id">
          <v-card  color="surface" width="300" class="el ma-2 mb-5 mr-5" elevation="0">
              <v-img height="300" :src="modernArt.image[0].name">
                  <template #placeholder>
                    <v-row class="fill-height" justify="center" align="center">
                    </v-row>
                  </template>
              </v-img>
          </v-card>
      </v-slide-item>
  </v-slide-group>
</template>

<script>
export default {
    props: ['modernArts']
}
</script>

<style>

</style>