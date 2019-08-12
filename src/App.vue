<template>
  <main id="app">
    <b-navbar
      toggleable="md"
      type="dark"
      variant="dark"
      sticky>
      <b-container>
        <b-navbar-brand to="/">
          Workout
          <img
            alt="Workout like Thor logo"
            src="./assets/logo.svg"
            class="d-inline-block align-top logo">
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/">Home</b-nav-item>
            <b-nav-item to="/exercises">Exercises</b-nav-item>
            <b-nav-item to="/styleguide">Styleguide</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template slot="button-content"><em>User</em></template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
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

<style lang="scss">
// Fonts
$enable-responsive-font-sizes: true;

// Main colors
$primary: #2c7be5;
$secondary: #6e84a3;
$success: #27ae60;
$danger: #c0392b;
$light: white;
$dark: #152e4d;
$dark_secondary: #1e3a5c;

// Body
$body-color: #ffffff;
$body-bg: #12263f; // Also set in index.html

// Links
$link-color: $primary;
$link-hover-color: darken($link-color, 15%);

// Lists
$list-group-bg: $dark;
$list-group-action-color: $body-color;
$list-group-action-hover-color: $link-hover-color;
$list-group-hover-bg: $dark;

// Inputs
$input-bg: $dark_secondary;
$input-disabled-bg: $input-bg;

$input-color: #ffffff;
$input-border-color: $body-bg;
$input-box-shadow: none;
$input-focus-box-shadow: none;

// $input-focus-bg:                        $input-bg !default;
$input-focus-border-color: $primary;
$input-placeholder-color: #95aac9;
$input-plaintext-color: $input-color;

// Pagination
$pagination-bg: $dark;
$pagination-border-width: 0;
$pagination-hover-color: #ffffff;
$pagination-hover-bg: $primary;
$pagination-disabled-color: $dark;
$pagination-disabled-bg: $secondary;

// Cards
$card-border-color: $dark_secondary;

// HR
$hr-border-color: $light;

@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

.navbar .logo {
  width: 25px;
}

// Buttns
.btn-outline-dark {
  color: #ffffff;
}

// Headers
.view-header {
  margin-bottom: 15px;
}
</style>
