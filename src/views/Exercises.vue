<template>
  <div>
    <Loader v-show="!exercises" />
    <b-container v-if="exercises">
      <h2 class="view-header">Exercises</h2>
      <b-row>
        <b-col cols="12" md="6" v-for="exercise in exercises" :key="exercise.id">
          <ExerciseCard :exercise="exercise" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue';
import ExerciseCard from '@/components/ExerciseCard.vue';

export default {
  components: {
    Loader,
    ExerciseCard,
  },
  data() {
    return {
      exercises: [],
    };
  },
  mounted() {
    const data = this.$storage.get('data');

    if (data?.exercises) {
      this.exercises = data.exercises.sort((a, b) => ((a.name > b.name) ? 1 : -1));
    }
  },
};
</script>
