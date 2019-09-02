<template>
  <div v-if="areasDB.length > 0">
    <b-badge
      v-for="areaId in areas"
      :key="areaId"
      class="mr-1"
      pill
      variant="info"
      :to="`search?query=${encodeURI(getAreaName(areaId))}`">
      {{ getAreaName(areaId) }}
    </b-badge>
  </div>
</template>

<script>
import db from '@/db';

export default {
  name: 'AreasBadges',
  props: {
    areas: Array,
  },
  data() {
    return {
      areasDB: [],
    };
  },
  firebase: {
    areasDB: db.ref('exercise-areas'),
  },
  methods: {
    getAreaName(areaId) {
      const area = this.areasDB.find(obj => obj.id === areaId);

      if (area) {
        return area.name;
      }

      return 'Error';
    },
  },
};
</script>
