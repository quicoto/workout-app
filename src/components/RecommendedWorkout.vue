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
import Vue from 'vue';
import firebase from 'firebase/app';
// import db from '@/db';
import ENDPOINTS from '@/endpoints';
import Loader from '@/components/Loader.vue';
import WorkoutCard from '@/components/WorkoutCard.vue';

export default {
  name: 'RecommendedWorkout',
  components: {
    Loader,
    WorkoutCard,
  },
  data() {
    return {
      currentUser: firebase.auth().currentUser,
      currentDBUser: {},
      workouts: [],
      recommendedWorkout: {},
    };
  },
  methods: {
    randomNumber(min, max) {
      const roundedMin = Math.ceil(min);
      const roundedMax = Math.floor(max);
      return Math.floor(Math.random() * (roundedMax - roundedMin + 1)) + roundedMin;
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // eslint-disable-next-line no-param-reassign
        [array[i], array[j]] = [array[j], array[i]];
      }

      return array;
    },
  },
  mounted() {
    let recommendedWorkout;

    firebase.database().ref(ENDPOINTS.users).once('value').then((users) => {
      this.currentDBUser = users.val().find(o => o.email === this.currentUser.email);

      firebase.database().ref(ENDPOINTS.workouts).once('value').then((snapshot) => {
        // Create a cheap copy and shuffle so it's not always the same order
        // If we don't use a cheap copy it gets crazy when trying to access an array element
        const workouts = this.shuffleArray(Vue.util.extend([], snapshot.val()));

        if (!this.currentDBUser.recentWorkouts) {
          // New user, no recent workouts. Get a random one from all the available
          this.recommendedWorkout = workouts[this.randomNumber(0, workouts.length - 1)];
        } else if (this.currentDBUser.recentWorkouts.length > 0) {
          // User has some workouts
          // Loop through the available to see if the user has done it recently.
          for (let i = 0, len = workouts.length; i < len; i++) {
            const id = workouts[i].id;

            // Check if the user has done the current workout
            if (!this.currentDBUser.recentWorkouts.includes(id)) {
              // Not done in the last 3 sessions (that is set in Start.vue)
              // Let's recommend the current workout
              recommendedWorkout = workouts[i];
            }
          }

          if (!recommendedWorkout) {
            // It seems we could recommend anything. Let's randomize one workout
            recommendedWorkout = workouts[this.randomNumber(0, workouts.length)];
          }

          this.recommendedWorkout = recommendedWorkout;
        }
      });
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  color: red;
}
</style>
