<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <h2 class="view-header">Admin</h2>

          <b-tabs content-class="mt-3">
            <b-tab title="Exercises" active>
              <exercises />
            </b-tab>
            <b-tab title="Tags">
              <exerciseTags />
            </b-tab>
            <b-tab title="Levels">
              <workoutLevels />
            </b-tab>
            <b-tab title="Workouts">
              <workouts />
            </b-tab>
            <b-tab title="Workout Types">
              <workoutTypes />
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

export default {
  components: {
    Exercises,
    ExerciseTags,
    WorkoutLevels,
    WorkoutTypes,
    Workouts,
  },
  data() {
    return {
    };
  },
  mounted() {

  },
};
</script>
