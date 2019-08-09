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
      {{ exercise.description }}
    </b-card-text>

    <b-button href="#" variant="primary">Go to exercise</b-button>
  </b-card>
</template>

<script>
export default {
  name: 'ExerciseCard',
  props: {
    exercise: Object,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>
