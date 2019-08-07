<template>
  <b-container fluid id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/styleguide">Style Guide</router-link>
    </div>
    <router-view/>
    <footer class="container-fluid p-5 mt-5">
      <b-row>
        <b-col class="text-center"><small>v1.0.0</small></b-col>
      </b-row>
    </footer>
  </b-container>
</template>

<style lang="scss">
// Overwrite the Bootstrap variables
$primary: #2c7be5;
$secondary: #6e84a3;
$success: #27ae60;
$danger: #c0392b;
$light: white;
$dark: #152e4d;

$body-color: #ffffff;
$body-bg: #12263f;

$link-color: $primary;
$link-hover-color: darken($link-color, 15%);

$list-group-bg: $dark;
$list-group-action-color: $body-color;
$list-group-action-hover-color: $link-hover-color;
$list-group-hover-bg: $dark;

@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
</style>
