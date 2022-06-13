<template>
    <v-card tile flat class="pa-md-10 pa-5 text-center" color="surface">
        <h2 class="text-md-h6 font-weight-bold">Virtual Gallery</h2>
        <div class="text-center">
                <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>
            <v-btn v-for="(b, i) in sm"  :key="`socialMedia-${i}`" color="surface" class="mr-2" fab depressed>
                <v-icon>{{b.icon}}</v-icon>
            </v-btn>
        </div>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        sm: [
            {
                icon: "mdi-facebook",
                link: "#"
            },
            {
                icon: "mdi-instagram",
                link: "#"
            },
            {
                icon: "mdi-youtube",
                link: "#"
            },
            {
                icon: "mdi-twitter",
                link: "#"
            }
        ]
    })
}
</script>

<style lang="scss" scoped>

</style>