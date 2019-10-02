<template>
  <div>
    <Loader v-show="!workouts" />
    <b-container v-if="workouts">
      <h2 class="view-header">Workouts</h2>
      <b-row>
        <b-col cols="12" md="6" v-for="workout in workouts" :key="workout.id">
          <WorkoutCard :workout="workout" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import Loader from '@/components/Loader.vue';
import WorkoutCard from '@/components/WorkoutCard.vue';
import ENDPOINTS from '@/endpoints';

export default {
  components: {
    Loader,
    WorkoutCard,
  },
  data() {
    return {
      workouts: [],
    };
  },
  mounted() {
    firebase.database().ref(ENDPOINTS.workouts).once('value').then((snapshot) => {
      this.workouts = snapshot.val().sort((a, b) => ((a.name > b.name) ? 1 : -1));
    });
  },
};
</script>
