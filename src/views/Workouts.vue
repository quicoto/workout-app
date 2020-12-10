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
import Loader from '@/components/Loader.vue';
import WorkoutCard from '@/components/WorkoutCard.vue';

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
    const data = this.$storage.get('data');

    if (data?.workouts) {
      this.workouts = data.workouts;
    }
  },
};
</script>
