<template>
  <span>
    <span v-if="variant === 'short'">Thorkout</span>
    <span v-if="variant !== 'short'">Workout like Thor</span>
    <img
      v-if="image"
      alt="Workout like Thor logo"
      src="../assets/logo.svg"
      class="d-inline-block align-top logo">
  </span>
</template>

<script>
export default {
  name: 'siteName',
  props: {
    variant: {
      type: String,
      default: 'short',
    },
    image: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {

    };
  },
};
</script>
