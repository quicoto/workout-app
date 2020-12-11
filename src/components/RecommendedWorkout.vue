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
            :to="{ name: 'workouts' }"
            block
            variant="primary">
              <font-awesome-icon
                :icon="['far', 'thumbs-down']"
                title="Delete?" />
              I don't like it, show me more workouts
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
    };
  },
  created() {
    const data = this.$storage.get('data');
    const recommendedWorkout = [];

    if (data?.workouts) {
      const workouts = shuffleArray(data.workouts);

      this.recommendedWorkout = workouts[0];
    } else {
      this.recommendedWorkout = recommendedWorkout;
    }
  },
};
</script>
