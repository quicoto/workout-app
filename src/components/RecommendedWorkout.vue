<template>
  <div>
    <Loader v-show="!recommendedWorkout.id" />
    <div v-if="recommendedWorkout.id">
      <h2 class="mt-4 mb-4 text-center text-md-left">Today's workout</h2>
      <WorkoutCard :workout="recommendedWorkout" />
      <b-row>
        <b-col
          class="mt-2"
          cols="12"
          md="6"
          offset-md="3"
          lg="4"
          offset-lg="4">
          <b-button
            name="newWorkout"
            @click="newWorkout()"
            block
            variant="primary">
              Show me another workout
          </b-button>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader.vue';
import WorkoutCard from '@/components/WorkoutCard.vue';
import { shuffleArray } from '@/utils';

export default {
  name: 'RecommendedWorkout',
  components: {
    Loader,
    WorkoutCard,
  },
  data() {
    return {
      recommendedWorkout: {},
      data: this.$storage.get('data'),
    };
  },
  mounted() {
    this.newWorkout();
  },
  methods: {
    newWorkout() {
      const recommendedWorkout = [];

      if (this.data?.workouts) {
        const workouts = shuffleArray(this.data.workouts);

        this.recommendedWorkout = workouts[0];
      } else {
        this.recommendedWorkout = recommendedWorkout;
      }
    },
  },
};
</script>
