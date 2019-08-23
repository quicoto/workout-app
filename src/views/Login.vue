<template>
  <div>
    <b-container>
      <b-row>
        <b-col
          cols="12"
          sm="6"
          offset-sm="3"
          md="4"
          offset-md="4">
          <h1 class="text-center mb-4">
            <siteName variant="long" :image="false" />
          </h1>
          <b-form @submit="onSubmit">
            <b-form-group
              id="input-group-1"
              label="Email"
              label-for="email"
            >
              <b-form-input
                id="email"
                v-model="login.email"
                type="email"
                required
                placeholder="Enter email"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Password" label-for="password">
              <b-form-input
                id="password"
                v-model="login.password"
                type="password"
                required
                placeholder="Enter password"
              ></b-form-input>
            </b-form-group>

            <b-alert variant="danger" show v-if="login.error.message">
              <font-awesome-icon :icon="['far', 'frown']" /> {{ login.error.message }}
            </b-alert>

            <b-button ref="submitButton" type="submit" variant="primary" block>Login</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import siteName from '@/components/siteName.vue';

export default {
  components: {
    siteName,
  },
  data() {
    return {
      login: {
        email: '',
        error: {},
        password: '',
      },
    };
  },
  mounted() {
    this.$refs.submitButton.removeAttribute('disabled');
  },
  methods: {
    onSubmit() {
      this.$refs.submitButton.setAttribute('disabled', true);
      this.login.error = false;

      firebase.auth()
        .signInWithEmailAndPassword(
          this.login.email,
          this.login.password,
        )
        .then((user) => {
          if (user) { this.$router.replace({ path: '/' }); }
        })
        .catch((error) => {
          this.$refs.submitButton.removeAttribute('disabled');
          this.login.error = error;
        });
    },
  },
};
</script>
