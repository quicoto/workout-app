<template>
  <div>
    <b-row>
      <b-col v-if="levels">
        <h3 class="mt-4">Levels List</h3>
        <Loader v-show="levels.length === 0" />
        <b-table
          v-if="levels.length > 0"
          striped
          hover
          :items="levels">
          <template v-slot:cell(edit)="data">
            <font-awesome-icon
              @click="action = 'edit'; form = data.item"
              size="lg"
              :icon="['far', 'edit']"
              class="cursor--pointer"
              title="Edit"/>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import db from '@/db';
import Loader from '@/components/Loader.vue';

export default {
  name: 'WorkoutLevels',
  components: {
    Loader,
  },
  data() {
    return {
      levels: [],
    };
  },
  firebase: {
    levels: db.ref('workout-levels'),
  },
  methods: {},
};
</script>
