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
        <h3 class="mb-0">{{ workout.name }}</h3>
        <b-button
          :to="`/start/${workout.id}`"
          variant="primary">
          Start
        </b-button>
      </div>
    </template>
    <b-card-text>
      <div class="pb-3">
        <WorkoutType :type="workout.type" />
      </div>

      <ul
        class="list-unstyled mt-3"
        v-if="exercises.length > 0">
        <li
          v-for="(round, roundIndex) in workout.rounds"
          class="mb-4">
          <h5 class="mr-4">Round {{ +roundIndex + 1 }} (x{{round.repeats}})</h5>

          <ul v-if="round.exercises.length > 0">
            <li v-for="exercise in round.exercises">
                {{ exerciseName(exercise) }}
            </li>
          </ul>
        </li>
      </ul>
    </b-card-text>
  </b-card>
</template>

<script>
import db from '@/db';
import ENDPOINTS from '@/endpoints';
import WorkoutType from '@/components/WorkoutType.vue';

export default {
  name: 'WorkoutCard',
  components: {
    WorkoutType,
  },
  props: {
    types: Array,
    workout: Object,
  },
  firebase: {
    exercises: db.ref(ENDPOINTS.exercises),
  },
  data() {
    return {
      exercises: [],
    };
  },
  methods: {
    exerciseName(id) {
      const index = this.exercises.findIndex(i => i.id === id);

      return this.exercises[index].name;
    },
  },
};
</script>
