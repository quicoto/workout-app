<template>
  <b-card
    v-if="exercise"
    :header="exercise.name"
    header-tag="h2"
    :img-src="exercise.image ? `${publicPath}img/exercises/${exercise.id}.jpg` : ''"
    :img-alt="exercise.name"
    img-top
    tag="article"
    bg-variant="dark"
    class="mb-3"
  >
    <b-card-text>
      <div class="pb-3">
        <b-badge
          v-for="areaId in exercise.areas"
          :key="areaId"
          class="mr-1"
          pill
          variant="info"
          :to="`search?query=${encodeURI(getAreaName(areaId))}`">
          {{ getAreaName(areaId) }}
        </b-badge>
      </div>

      <span v-html="exerciseDescription"></span>
    </b-card-text>

    <b-button
      v-if="exercise.video"
      target="_blank"
      rel="noopener"
      :href="exercise.video"
      variant="primary">
      Watch video
    </b-button>
  </b-card>
</template>

<script>
export default {
  name: 'ExerciseCard',
  props: {
    areas: Array,
    exercise: Object,
  },
  computed: {
    exerciseDescription() {
      return this.exercise.description.replace(/\n/g, '<br />');
    },
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
  methods: {
    getAreaName(areaId) {
      const area = this.areas.find(obj => obj.id === areaId);

      if (area) {
        return area.name;
      }

      return 'Error';
    },
  },
};
</script>
