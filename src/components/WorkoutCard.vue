<template>
  <b-card
    v-if="workout"
    header-tag="header"
    tag="article"
    bg-variant="dark"
    class="mb-3"
  >
    <template v-slot:header>
      <div class="d-flex justify-content-between">
        <h3 class="mr-2">{{ workout.name }}</h3>
        <b-button
          class="align-self-center"
          :to="`/start/${workout.id}`"
          variant="primary">
          Start
        </b-button>
      </div>
      <p>
        <small class="d-block">Created by {{ workout.createdBy }}</small>
      </p>
      <ul class="list-inline levelTimes mb-0">
          <li v-for="level in levels" :key="level.id">
            {{ level.name }}: {{ workoutTotalTime(level.id) }}'
          </li>
        </ul>
    </template>
    <b-card-text>
      <ul
        class="list-unstyled mt-3"
        v-if="exercises.length > 0">
        <li
          v-for="(round, roundIndex) in workout.rounds"
          :key="roundIndex"
          class="mb-4">
          <h5 class="mr-4">Round {{ +roundIndex + 1 }} (x{{round.repeats}})</h5>

          <ul v-if="round.exercises.length > 0">
            <li v-for="(exercise, index) in round.exercises" :key="index">
                {{ exerciseName(exercise) }}
            </li>
          </ul>
        </li>
      </ul>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'WorkoutCard',
  props: {
    types: Array,
    workout: Object,
  },
  data() {
    return {
      exercises: [],
      levels: [],
      data: this.$storage.get('data'),
    };
  },
  mounted() {
    if (this.data?.exercises) {
      this.exercises = this.data.exercises;
      this.levels = this.data['workout-levels'];
    }
  },
  methods: {
    exerciseName(id) {
      const index = this.exercises.findIndex((i) => i.id === id);

      return this.exercises[index].name;
    },
    workoutTotalTime(levelId) {
      let totalTime = 0;
      const level = this.levels.find((i) => i.id === levelId);

      if (level) {
        this.workout.rounds.forEach((round) => {
          const roundExercies = round.exercises.length + 1;
          const roundActiveTime = roundExercies * level.activeTime;
          const roundRestTime = (roundExercies - 1) * level.restTime;

          totalTime += (roundActiveTime + roundRestTime) * round.repeats;
        });
      }

      return Math.floor(totalTime / 1000 / 60);
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables';

@media (min-width: 768px) {
  .levelTimes {
    li { display: inline-block; padding-right: 15px; }
  }
}
</style>
