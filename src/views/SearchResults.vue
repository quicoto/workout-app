<template>
  <div>
    <Loader v-show="!query && !exercises" />
    <b-container v-if="query">
      <h2 class="view-header">
        Search results for: <em>{{ query }}</em>
      </h2>

      <b-alert variant="danger" show v-if="!this.filterexercises.length">
        No exercises found...
      </b-alert>

      <b-row>
        <b-col cols="12" md="6" v-for="exercice in filterexercises" :key="exercice.id">
          <ExerciseCard :exercise="exercice" :tags="tags" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import Loader from '@/components/Loader.vue';
import ExerciseCard from '@/components/ExerciseCard.vue';
import ENDPOINTS from '@/endpoints';

export default {
  components: {
    Loader,
    ExerciseCard,
  },
  data() {
    return {
      tags: [],
      exercises: [],
      filterexercises: [],
      query: '',
    };
  },
  methods: {
    getQueryParam() {
      const routerQuery = this.$route.query;

      if (routerQuery && routerQuery.query) {
        return routerQuery.query.toString();
      }

      return '';
    },
    filterSearch() {
      return this.exercises.filter(exercise => !this.query
        || exercise.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1);
    },
  },
  mounted() {
    this.query = this.getQueryParam();

    firebase.database().ref(ENDPOINTS.exercises).once('value').then((snapshot) => {
      this.exercises = snapshot.val();
      this.filterexercises = this.filterSearch();
    });

    firebase.database().ref(ENDPOINTS.exerciseTags).once('value').then((snapshot) => {
      this.tags = snapshot.val();
    });
  },
};
</script>
