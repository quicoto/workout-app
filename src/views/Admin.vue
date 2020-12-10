<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <h2 class="view-header">Admin</h2>

          <b-tabs content-class="mt-3">
            <b-tab title="Exercises" active>
              <Exercises v-on:update-output="updateOutput" />
            </b-tab>
            <b-tab title="Tags">
              <ExerciseTags v-on:update-output="updateOutput" />
            </b-tab>
            <b-tab title="Levels">
              <WorkoutLevels v-on:update-output="updateOutput" />
            </b-tab>
            <b-tab title="Goals">
              <WorkoutGoals v-on:update-output="updateOutput" />
            </b-tab>
            <b-tab title="Workout Types">
              <WorkoutTypes v-on:update-output="updateOutput" />
            </b-tab>
            <b-tab title="Workouts">
              <Workouts v-on:update-output="updateOutput" />
            </b-tab>
            <b-tab title="Output">
              <h3>Output</h3>
              <b-form-textarea
                id="output"
                name="output"
                :value="JSON.stringify(data)"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
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
      data: {},
    };
  },
  mounted() {
    this.updateOutput();
  },
  methods: {
    updateOutput() {
      this.data = this.$storage.get('data');
    },
  },
};
</script>
