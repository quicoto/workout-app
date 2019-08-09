<template>
  <div class="home">
    <h1 class="text-center">Workout like Thor</h1>
    <HelloWorld />

    <b-container v-if="exercises">
      <h2>Exercises</h2>

      <b-row>
        <b-col cols="12" md="6" v-for="exercice in exercises" :key="exercice.id">
          <ExerciseCard :exercise="exercice" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';
import ExerciseCard from '@/components/ExerciseCard.vue';

export default {
  components: {
    HelloWorld,
    ExerciseCard,
  },
  data() {
    return {
      exercises: [],
    };
  },
  mounted() {
    fetch('mocks/exercises.json')
      .then(stream => stream.json())
      .then((data) => {
        this.exercises = data.exercises;
      })
      .catch(error => console.error(error));
  },
};

</script>
