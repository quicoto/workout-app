<template>
  <div v-if="tagsDB.length > 0">
    <b-badge
      v-for="tagId in tags"
      :key="tagId"
      class="mr-1"
      pill
      variant="info"
      :to="`search?query=${encodeURI(getTagName(tagId))}`">
      {{ getTagName(tagId) }}
    </b-badge>
  </div>
</template>

<script>
import db from '@/db';
import ENDPOINTS from '@/endpoints';

export default {
  name: 'TagsBadges',
  props: {
    tags: Array,
  },
  data() {
    return {
      tagsDB: [],
    };
  },
  firebase: {
    tagsDB: db.ref(ENDPOINTS.exerciseTags),
  },
  methods: {
    getTagName(tagId) {
      const tag = this.tagsDB.find(obj => obj.id === tagId);

      if (tag) {
        return tag.name;
      }

      return 'Error';
    },
  },
};
</script>
