<template>
  <div v-if="types.length > 0">
    <b-badge
      class="mr-1"
      pill
      variant="info">
      {{ getName(type) }}
    </b-badge>
  </div>
</template>

<script>
export default {
  name: 'WorkoutType',
  props: {
    type: Number,
  },
  data() {
    return {
      types: [],
    };
  },
  mounted() {
    const data = this.$storage.get('data');

    if (data?.['workout-types']) {
      this.types = data.['workout-types'];
    }
  },
  methods: {
    getName(id) {
      const type = this.types.find((obj) => obj.id === id);

      if (type) {
        return type.name;
      }

      return 'Error';
    },
  },
};
</script>
