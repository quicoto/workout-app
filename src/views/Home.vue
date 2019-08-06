<template>
  <div class="home">
    <img alt="Workout like Thor logo" src="../assets/logo.svg">
    <HelloWorld msg="Workout like Thor"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default {
  components: {
    HelloWorld,
  },
  data() {
    return {

    };
  },
};

</script>

<style scoped lang="scss">
img {
  max-width: 150px;
}
</style>
