<template>
  <div class="home">
    <img alt="Workout like Thor logo" src="../assets/logo.svg">
    <HelloWorld msg="Workout like Thor"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
img {
  max-width: 150px;
}
</style>
