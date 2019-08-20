<template>
  <main id="app">
    <b-navbar
      toggleable="md"
      type="dark"
      variant="dark"
      sticky>
      <b-container>
        <b-navbar-brand to="/">
          Thorkout
          <img
            alt="Workout like Thor logo"
            src="./assets/logo.svg"
            class="d-inline-block align-top logo">
        </b-navbar-brand>

        <b-navbar-nav
          class="d-block d-md-none ml-auto mr-3">
          <b-nav-item :to="`/profile/${user.id}`">
            <b-img
              thumbnail
              fluid
              rounded="circle"
              :src="`https://www.gravatar.com/avatar/${user.gravatar}?s=200`"
              alt="Profile"
              class="nav-avatar"></b-img>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/exercises">Exercises</b-nav-item>
            <b-nav-item to="/styleguide">Styleguide</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="mt-2 mt-md-0 ml-auto">
            <b-nav-form
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
                class="my-2 my-sm-0"
                type="submit"
                variant="primary">Search</b-button>
            </b-nav-form>

            <b-nav-item
            :to="`/profile/${user.id}`"
            class="d-none d-md-block">
              <b-img
                thumbnail
                fluid
                rounded="circle"
                :src="`https://www.gravatar.com/avatar/${user.gravatar}?s=200`"
                alt="Profile"
                class="nav-avatar"></b-img>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <section
      class="pt-4">
      <router-view/>
    </section>

    <footer class="container-fluid p-5 mt-5">
      <b-row>
        <b-col class="text-center"><a href="https://github.com/quicoto/workout-app" title="Workout App Github"><small>v1.0.0</small></a></b-col>
      </b-row>
    </footer>
  </main>
</template>

<script>
export default {
  data() {
    return {
      user: {
        id: 1,
        gravatar: '3b6f2d380f8fcf8cd6f61031d2ff8e8b',
      },
      query: '',
    };
  },
  methods: {
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
