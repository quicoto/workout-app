<template>
  <main id="app">
    <b-navbar
      toggleable="md"
      type="dark"
      variant="dark"
      sticky>
      <b-container>
        <b-navbar-brand
          to="/"
          @click="hideNavigation()">
          <siteName variant="short" :image="true" />
        </b-navbar-brand>

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
          <a href="https://github.com/quicoto/workout-app" title="Workout App on Github"><small>v{{ version }}</small></a>
        </b-col>
      </b-row>
    </footer>
  </main>
</template>

<script>
import siteName from '@/components/siteName.vue';
import { version } from '@/version';

export default {
  components: {
    siteName,
  },
  data() {
    return {
      query: '',
      version,
    };
  },
  methods: {
    hideNavigation() {
      this.$refs.mobileNavigation.show = false;
    },
    onSubmit() {
      if (this.$router.history.current.path === 'search') {
        // Somehow perform a search again in the search component?
      } else {
        // Go to the search with the query
        this.$router.push({ name: 'search', query: { query: this.query } });
      }
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
