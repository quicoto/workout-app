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
import firebase from 'firebase/app';

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
  mounted() {
    firebase.database().ref('exercise-areas').once('value').then((snapshot) => {
      this.areasDB = snapshot.val();
    });
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
