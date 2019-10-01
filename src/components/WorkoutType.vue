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
import db from '@/db';
import ENDPOINTS from '@/endpoints';

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
  firebase: {
    types: db.ref(ENDPOINTS.workoutTypes),
  },
  methods: {
    getName(id) {
      const type = this.types.find(obj => obj.id === id);

      if (type) {
        return type.name;
      }

      return 'Error';
    },
  },
};
</script>
