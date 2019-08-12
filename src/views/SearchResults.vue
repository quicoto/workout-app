<template>
  <div>
    <Loader v-show="!query && !exercises" />
    <b-container v-if="query">
      <h2 class="view-header">
        Search results for: <em>{{ query }}</em>
      </h2>

      <b-alert variant="danger" show>
        I think we can use the Firebase filter capability to do these queries.
      </b-alert>

      <b-row>
        <b-col cols="12" md="6" v-for="exercice in exercises" :key="exercice.id">
          <ExerciseCard :exercise="exercice" :areas="areas" />
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
      areas: [],
      exercises: [],
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
  },
  mounted() {
    this.query = this.getQueryParam();

    fetch('mocks/exercises.json')
      .then(stream => stream.json())
      .then((data) => {
        this.exercises = data.exercises;
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });

    fetch('mocks/exercise-areas.json')
      .then(stream => stream.json())
      .then((data) => {
        this.areas = data['exercise-areas'];
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  },
};
</script>
