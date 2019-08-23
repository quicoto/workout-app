<template>
  <div>
    <Loader v-show="!exercises" />
    <b-container v-if="exercises">
      <h2 class="view-header">Exercises</h2>
      <b-row>
        <b-col cols="12" md="6" v-for="exercice in exercises" :key="exercice.id">
          <ExerciseCard :exercise="exercice" :areas="areas" />
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
      areas: [],
      exercises: [],
    };
  },
  mounted() {
    firebase.database().ref('exercises').once('value').then((snapshot) => {
      this.exercises = snapshot.val();
    });

    firebase.database().ref('exercise-areas').once('value').then((snapshot) => {
      this.areas = snapshot.val();
    });
  },
};
</script>
