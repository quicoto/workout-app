<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <h2 class="view-header">Admin</h2>

          <b-tabs content-class="mt-3">
            <b-tab title="Exercises" active>
              <Exercises />
            </b-tab>
            <b-tab title="Tags">
              <ExerciseTags />
            </b-tab>
            <b-tab title="Levels">
              <WorkoutLevels />
            </b-tab>
            <b-tab title="Goals">
              <WorkoutGoals />
            </b-tab>
            <b-tab title="Workout Types">
              <WorkoutTypes />
            </b-tab>
            <b-tab title="Workouts">
              <Workouts />
            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Exercises from '@/components/admin/Exercises.vue';
import ExerciseTags from '@/components/admin/ExerciseTags.vue';
import WorkoutLevels from '@/components/admin/WorkoutLevels.vue';
import WorkoutTypes from '@/components/admin/WorkoutTypes.vue';
import Workouts from '@/components/admin/Workouts.vue';
import WorkoutGoals from '@/components/admin/WorkoutGoals.vue';

export default {
  components: {
    Exercises,
    ExerciseTags,
    WorkoutLevels,
    WorkoutTypes,
    Workouts,
    WorkoutGoals,
  },
  data() {
    return {
    };
  },
  mounted() {

  },
};
</script>
