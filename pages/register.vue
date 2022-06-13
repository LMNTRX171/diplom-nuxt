<template> 
    <div class="mt-16">
        <Notification v-if="error" type="danger" :message="error" />
      <v-card
      :style="{backgroundColor: $vuetify.theme.dark ? '#000000': 'white'}"
        outlined
        elevation="8"
        class="mx-auto"
        max-width="374"
      >
        <v-card-title class="justify-center display-2 font-weight-bold">
          Register
        </v-card-title>

        <v-form class="pa-4">
          <v-text-field
            v-model="username"
            :error-messages="nameErrors"
            label="Name"
            clearable
            :counter="15"
            required
            @input="$v.username.$touch()"
            @blur="$v.username.$touch()"
          />

          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            clearable
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          />
          
          <v-text-field
            v-model="password"
            label="Password"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'"
          />
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn
              block
              @click.prevent="register"
              class="black mb-5 mt-5 white--text">
              register
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </div>
</template>

<script>
  import Notification from "~/components/Notification"
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
export default {
  components: {Notification},
  mixins: [validationMixin],
  validations: {
    username: { required, maxLength: maxLength(15) },
    email: { required, email },
    password: { required, },
  },
  data: () => ({
    username: '',
    email: '',
    password: '',
    success: '',
    error: null,
    showPassword: false,
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => (`The email and password you entered don't match`),
    },
  }),
  computed: {
    nameErrors () {
      const errors = []
      if (!this.$v.username.$dirty) return errors
      !this.$v.username.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.username.required && errors.push('Name is required.')
      return errors
      },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    // passwordErrors () {
    //   const errors = []
    //   if (!this.$v.password.$dirty) return errors
    //   // !this.$v.password.minLenght && errors.push('Password too short')
    //   !this.$v.password.required && errors.push('Password is required')
    //   return errors
    // },
  },
  methods: {
    async register() {
        try {
          this.$v.$touch()
          this.$axios.setToken(false);
          await this.$axios.post("auth/local/register", {
            username: this.username,
            email: this.email,
            password: this.password,
          })
          this.$router.push("/login");
        }catch (e) {
          this.error = e.response.data.message[0].messages[0].message;
        }
    },
  },
}
</script>

<style scoped>
</style>