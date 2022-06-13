<template>
  <div>
    <div class="mt-16">
      <Notification v-if="error" type="danger" :message="error" />
      <v-card
        outlined
        elevation="8"
        class="mx-auto"
        max-width="374"
      >
        <v-form
          class="pa-4"
        >
          <v-card-title class="justify-center display-2 font-weight-bold">
            Login
          </v-card-title>

          <v-text-field
            v-model="email"
            label="E-mail"
            clearable
            :error-messages="emailErrors"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          />
          
          <v-text-field
            v-model="password"
            label="Password"
            required
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            @click:append="showPassword = !showPassword"
            :type="showPassword ? 'text' : 'password'"
          />
            <v-btn
              block
              @click.native="login"
              class="black mb-5 mt-5 white--text"    
            >
              login
            </v-btn>
        </v-form>
      </v-card>
    </div>
  </div>
</template>

<script>
import Notification from "~/components/Notification"
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  components: {Notification},
  mixins: [validationMixin],
  validations: {
    email: { required, email },
  },
  data: () => ({
    email: '',
    password: '',
    success: null,
    error: null,
    dialog: false,
    showPassword: false,
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => (`The email and password you entered don't match`),
},
  }),
  methods: {
    async login() {
      this.error = null
      try {
        await this.$auth.loginWith("local", {
          data: {
            identifier: this.email,
            password: this.password
          }
        })
        this.$router.push("/");
        this.success = `A confirmation link has been sent to your email account. \
        Please click on the link to complete the registration process.`;
      } catch (e) {
          this.error = e.response.data.message[0].messages[0].message
      }
    },
  },
  computed: {
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
  }
}
</script>

<style lang="sass" scoped>

</style>