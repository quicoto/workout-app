<template>
  <div>
    <Loader v-show="!exercises" />
    <b-container v-if="exercises">
      <h2 class="view-header">Exercises</h2>
      <b-row>
        <b-col cols="12" md="6" v-for="exercice in exercises" :key="exercice.id">
          <ExerciseCard :exercise="exercice" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import firebase from 'firebase/app';
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
    firebase.database().ref('exercises').once('value').then((snapshot) => {
      this.exercises = snapshot.val().sort((a, b) => ((a.name > b.name) ? 1 : -1));
    });
  },
};
</script>
