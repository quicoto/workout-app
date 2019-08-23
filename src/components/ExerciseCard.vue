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
        <AreasBadges :areas="exercise.areas" />
      </div>

      {{ exercise.description }}
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
import AreasBadges from '@/components/AreasBadges.vue';

export default {
  name: 'ExerciseCard',
  components: {
    AreasBadges,
  },
  props: {
    areas: Array,
    exercise: Object,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>
