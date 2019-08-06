<template>
  <b-container fluid id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <footer class="container-fluid">
      <b-row>
        <b-col>v1.0.0</b-col>
      </b-row>
    </footer>
  </b-container>
</template>

<style lang="scss"></style>
