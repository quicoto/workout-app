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
            <b-tab title="Areas">
              <exerciseAreas />
            </b-tab>
            <b-tab title="Workouts">

            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Exercises from '@/components/admin/Exercises.vue';
import ExerciseAreas from '@/components/admin/ExerciseAreas.vue';

export default {
  components: {
    Exercises,
    ExerciseAreas,
  },
  data() {
    return {
    };
  },
  mounted() {

  },
};
</script>
