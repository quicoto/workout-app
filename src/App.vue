<template>
  <main id="app">
    <b-navbar
      toggleable="md"
      type="dark"
      variant="dark"
      sticky
      v-if="currentUser && currentUser.uid">
      <b-container>
        <b-navbar-brand
          to="/"
          @click="hideNavigation()">
          <siteName variant="short" :image="true" />
        </b-navbar-brand>

        <b-navbar-nav
          class="d-block d-md-none ml-auto mr-3">
          <b-nav-item
            :to="`/profile/${currentDBUser.id}`"
            :title="`${currentDBUser.name} ${currentDBUser.lastname} Profile`"
            @click="hideNavigation()">
            <b-img
              thumbnail
              fluid
              rounded="circle"
              :src="`https://www.gravatar.com/avatar/${currentDBUser.gravatar}?s=200`"
              :alt="`${currentDBUser.name} ${currentDBUser.lastname} Profile`"
              class="nav-avatar"></b-img>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-toggle target="mobile-navigation"></b-navbar-toggle>

        <b-collapse
          id="mobile-navigation"
          ref="mobileNavigation"
          is-nav>
          <b-navbar-nav>
            <b-nav-item
              class="d-none d-lg-block"
              to="/">Home</b-nav-item>
            <b-nav-item to="/workouts">Workouts</b-nav-item>
            <b-nav-item to="/exercises">Exercises</b-nav-item>
            <b-nav-item
              class="d-none d-md-block"
              to="/admin">Admin</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="mt-2 mt-md-0 ml-auto">
            <b-nav-form
              inline
              class="mr-4"
              @submit.prevent="onSubmit">
              <b-form-input
                size="sm"
                class="mr-sm-2"
                v-model="query"
                placeholder="Search"
                required></b-form-input>
              <b-button
                size="sm"
                class="d-none d-md-block my-2 my-sm-0"
                type="submit"
                variant="primary">
                  <font-awesome-icon :icon="['fas', 'search']" />
                </b-button>
            </b-nav-form>

            <b-nav-item
            :to="`/profile/${currentDBUser.id}`"
            class="d-none d-md-block"
            :title="`${currentDBUser.name} ${currentDBUser.lastname} Profile`">
              <b-img
                thumbnail
                fluid
                rounded="circle"
                :src="`https://www.gravatar.com/avatar/${currentDBUser.gravatar}?s=200`"
                :alt="`${currentDBUser.name} ${currentDBUser.lastname} Profile`"
                class="nav-avatar"></b-img>
            </b-nav-item>

            <b-nav-item
              @click="logout">
              <span class="d-none d-md-block">
                <font-awesome-icon
                  :icon="['fas', 'sign-out-alt']"
                  size="lg"
                  title="Logout"
                  class="mt-2" />
              </span>
              <span class="d-md-none">Logout</span>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <section
      class="pt-4">
      <router-view :key="$route.fullPath"/>
    </section>

    <footer class="container-fluid p-5 mt-5">
      <b-row>
        <b-col class="text-center">
          <a href="https://github.com/quicoto/workout-app" title="Thorkout on Github"><small>v1.1.0</small></a>
        </b-col>
      </b-row>
    </footer>
  </main>
</template>

<script>
import firebase from 'firebase/app';
import siteName from '@/components/siteName.vue';
import ENDPOINTS from '@/endpoints';

export default {
  components: {
    siteName,
  },
  data() {
    return {
      currentUser: firebase.auth().currentUser,
      currentDBUser: {},
      query: '',
    };
  },
  mounted() {
    // When user has just logged in, populate the current user.
    // Event listener
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.currentUser = user;
        this.updateCurrentDBUser();
      }
    });

    this.updateCurrentDBUser();
  },
  methods: {
    hideNavigation() {
      this.$refs.mobileNavigation.show = false;
    },
    updateCurrentDBUser() {
      // Search our Firebase users data and set it.
      firebase.database().ref(ENDPOINTS.users).once('value').then((snapshot) => {
        this.currentDBUser = snapshot.val().find(o => o.email === this.currentUser.email);
      });
    },
    onSubmit() {
      if (this.$router.history.current.path === 'search') {
        // Somehow perform a search again in the search component?
      } else {
        // Go to the search with the query
        this.$router.push({ name: 'search', query: { query: this.query } });
      }
    },
    logout() {
      firebase.auth().signOut().then(() => {
        this.currentUser = {};
        this.$router.replace({ path: '/login' });
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
    },
  },
};
</script>

<style lang="scss">
@import '@/styles/_variables.scss';
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import '@/styles/_common.scss';
</style>
