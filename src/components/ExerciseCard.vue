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
        <TagsBadges :tags="exercise.tags" />
      </div>

      <span v-html="description"></span>
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
import TagsBadges from '@/components/TagsBadges.vue';

export default {
  name: 'ExerciseCard',
  components: {
    TagsBadges,
  },
  props: {
    tags: Array,
    exercise: Object,
  },
  computed: {
    description() {
      return this.exercise.description.replace(/\n/g, '<br />');
    },
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>
