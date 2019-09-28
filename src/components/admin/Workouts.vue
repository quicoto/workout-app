<template>
  <div>
    <h3 class="text-capitalize">{{ action }}</h3>
    <b-form @submit="onSubmit" ref="form">
      <b-row>
        <b-col>
          <b-form-group
            id="input-group-1"
            label-for="name"
          >
            <b-form-input
              id="name"
              v-model="form.name"
              type="text"
              required
              placeholder="Name"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-select
            v-if="workoutTypes.length > 0"
            v-model="form.type"
            value-field="id"
            text-field="name"
            :options="workoutTypes"></b-form-select>
        </b-col>
      </b-row>

      <h4>Add Exercise</h4>
      <ul v-if="this.form.exercises.length > 0">
        <li v-for="exercise in this.form.exercises" v-bind:key="exercise">
          {{ exerciseName(exercise) }}
        </li>
      </ul>

      <b-row v-if="exercises.length > 0">
        <b-col>
          <b-form-select
            v-if="exercises.length > 0"
            value-field="id"
            text-field="name"
            v-model="selectedExercise"
            :options="exercises"
            @change="showExercise(selectedExercise)"></b-form-select>

            <b-alert
              :show="selectedExerciseDescription !== ''"
              v-html="selectedExerciseDescription"
              class="mt-3">
              </b-alert>
        </b-col>
        <b-col>
          <b-button
            type="button"
            variant="success"
            :disabled="!selectedExercise"
            @click="addExercise()"
            >
            Add to workout
          </b-button>
        </b-col>
      </b-row>

      <b-row class="mt-3">
        <b-col>
          {{ form }}
          <b-button
            type="submit"
            :variant="action !== 'create' && form.id ? 'warning' : 'primary'"
            :disabled="!form.name || !form.type || form.exercises.length === 0"
            >
              <span v-show="action === 'create'">Create Workout</span>
              <span v-if="action !== 'create' && form.id">Update Workout</span>
            </b-button>


          <b-button
            type="reset"
            variant="secondary"
            v-if="action !== 'create' && form.id"
            @click="resetForm()"
            class="ml-2">
              Cancel
          </b-button>
        </b-col>
      </b-row>


    </b-form>

    <h3 class="mt-4">List</h3>
    <b-row>
      <b-col>
        <Loader v-show="workouts.length === 0" />

          <pre>
          {{ workouts }}
          </pre>

        <b-table
          v-if="workouts.length > 0"
          striped
          hover
          :items="workouts"
          :fields="fields">
          <template v-slot:cell(edit)="data">
            <font-awesome-icon
              @click="action = 'edit'; form = data.item"
              size="lg"
              :icon="['far', 'edit']"
              class="cursor--pointer"
              title="Edit"/>
          </template>
          <template v-slot:cell(delete)="data">
            <ConfirmDelete
              :item="data.item"
              v-on:confirm-delete="onConfirmDelete" />
          </template>
        </b-table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Vue from 'vue';
import db from '@/db';
import Loader from '@/components/Loader.vue';
import ConfirmDelete from '@/components/admin/ConfirmDelete.vue';
import ENDPOINTS from '@/endpoints';

export default {
  name: 'Workouts',
  components: {
    Loader,
    ConfirmDelete,
  },
  data() {
    return {
      exercises: [],
      exercisesDropdown: [],
      action: 'create',
      workoutTypes: [],
      workouts: [],
      fields: [
        {
          key: 'id',
          label: 'Id',
        },
        {
          key: 'name',
          label: 'Name',
        },
        {
          key: 'edit',
          label: 'Edit',
          tdClass: 'text-center',
          thClass: 'text-center',
        },
        {
          key: 'delete',
          label: 'Delete',
          tdClass: 'text-center',
          thClass: 'delete text-center',
        },
      ],
      form: {
        exercises: [],
        type: null,
      },
      selectedExercise: null,
      selectedExerciseDescription: '',
    };
  },
  firebase: {
    workouts: db.ref(ENDPOINTS.workouts),
  },
  mounted() {
    db.ref(ENDPOINTS.workoutTypes).on('value', (snapshot) => {
      this.workoutTypes = snapshot.val();
      this.workoutTypes.unshift({ id: null, name: 'Please select workout type', disabled: true });
    });

    db.ref(ENDPOINTS.exercises).on('value', (snapshot) => {
      this.exercises = snapshot.val().sort((a, b) => ((a.name > b.name) ? 1 : -1));
      this.exercises.unshift({ id: null, name: 'Please select an exercise', disabled: true });
    });
  },
  methods: {
    exerciseName(exerciseId) {
      const index = this.exercises.findIndex(i => i.id === exerciseId);

      return this.exercises[index].name;
    },
    addExercise() {
      this.form.exercises.push(this.selectedExercise);
      this.selectedExercise = null;
      this.selectedExerciseDescription = '';
    },
    showExercise(exerciseId) {
      const index = this.exercises.findIndex(i => i.id === exerciseId);
      this.selectedExerciseDescription = this.exercises[index].description.replace(/\n/g, '<br />');
    },
    resetForm() {
      this.action = 'create';
      this.form = {};
      this.$refs.form.reset();
    },
    onSubmit(event) {
      event.preventDefault();

      // Create a shallow copy, without the bindings
      const updates = Vue.util.extend([], this.workouts);

      // Check if it's Create action
      if (this.action === 'create' && !this.form.id) {
        this.form.id = 0;

        // Create the incremental id based on the last id
        if (this.workouts[0]) {
          this.form.id = parseInt(this.workouts[0].id, 10) + 1;
          updates.unshift(this.form);
        }
      }

      // Update firebase with the copy
      // It will automatically push it to our this.workouts
      db.ref(ENDPOINTS.workouts).set(updates);

      // Clean the form
      this.resetForm();
    },
    onConfirmDelete(workoutId) {
      // Create a shallow copy, without the bindings
      const updates = Vue.util.extend([], this.workouts);

      // Find by the id propierty and remove it from the array
      updates.splice(updates.findIndex(i => i.id === workoutId), 1);

      // Update firebase with the copy
      // It will automatically push it to our this.workouts
      db.ref(ENDPOINTS.workouts).set(updates);

      // Clean the form
      this.resetForm();
    },
  },
};
</script>

<style lang="scss">
.delete {
  width: 200px;
}
</style>
