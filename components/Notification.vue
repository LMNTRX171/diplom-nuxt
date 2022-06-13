<template>
  <div class="ma-10 d-flex justify-center mb-6">
    <v-card
    class="d-flex justify-center mb-6"
     elevation="8"
     color="#F44336"
     >
        <v-card-title class="pa-8">
            {{message}}
        </v-card-title>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: {
    message: {
      type: String,
      default: "",
    },
  },
};
</script>