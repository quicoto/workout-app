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
          <b-form-group
            id="input-group-1"
            label-for="createdBy"
          >
            <b-form-input
              id="createdBy"
              v-model="form.createdBy"
              type="text"
              required
              placeholder="Created by"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col
          sm="6">
          <h4>Exercises</h4>
          <ul class="list-unstyled mt-3 ml-4">
            <li
              v-for="(round, roundIndex) in form.rounds"
              class="mb-4">
              <div class="d-flex mb-3">
                <h5 class="mr-4">Round {{ +roundIndex + 1 }}</h5>
                <div class="d-flex">
                  <b-form-input
                    prepend="Reps:"
                    style="max-width: 50px;"
                    number
                    type="number"
                    size="sm"
                    v-model="form.rounds[roundIndex].repeats"
                    placeholder="Repeats">
                  </b-form-input>
                  <span class="mr-2">
                    <b-button
                      title="Remove Round"
                      class="ml-2"
                      size="sm"
                      type="button"
                      variant="danger"
                      @click="removeRound(roundIndex)"
                      >
                      <font-awesome-icon
                        :icon="['fas', 'minus']" />
                    </b-button>
                  </span>
                </div>
              </div>

              <ul
                v-if="form.rounds[roundIndex].exercises.length > 0"
                class="list-unstyled ml-4">
                <li
                  v-for="(exercise, exerciseIndex) in form.rounds[roundIndex].exercises"
                  class="mb-3">
                  <b-form inline>
                    <b-form-select
                      v-if="exercises.length > 0"
                      name="exerciseList"
                      value-field="id"
                      text-field="name"
                      v-model="form.rounds[roundIndex].exercises[exerciseIndex]"
                      :options="exercises"></b-form-select>

                      <b-button
                        title="Remove Exercise"
                        class="ml-2"
                        size="sm"
                        type="button"
                        variant="danger"
                        @click="removeExercise(roundIndex, exerciseIndex)"
                        >
                        <font-awesome-icon
                          :icon="['fas', 'minus']" />
                      </b-button>
                    </b-form>
                </li>
              </ul>

              <ul class="list-unstyled ml-4">
                <li>
                  <b-button
                    title="Add Exercise"
                    size="sm"
                    type="button"
                    variant="success"
                    :disabled="Object.keys(form.rounds).length === 0"
                    @click="addExercise(roundIndex)"
                    >
                    <font-awesome-icon
                      title="Add"
                      :icon="['fas', 'plus']" /> Exercise
                  </b-button>
                </li>
              </ul>

            </li>
          </ul>
        </b-col>
      </b-row>

      <b-row v-if="exercises.length > 0">
        <b-col>
          <b-button
            name="addRound"
            title="Add Round"
            type="button"
            variant="success"
            @click="addRound()"
            >
            <font-awesome-icon
              title="Add"
              :icon="['fas', 'plus']" /> Round
          </b-button>
        </b-col>
      </b-row>

      <b-row class="mt-3">
        <b-col>
          <b-button
            type="submit"
            :variant="action !== 'create' && form.id ? 'warning' : 'primary'"
            :disabled="!form.name || !form.createdBy"
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
        <b-table
          v-if="workouts.length > 0"
          striped
          hover
          :items="workouts"
          :fields="fields">
          <template v-slot:cell(rounds)="data">
            {{ data.item.rounds.length }}
          </template>
          <template v-slot:cell(exercises)="data">
            {{ numberOfExercises(data.item) }}
          </template>
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
import Loader from '@/components/Loader.vue';
import ConfirmDelete from '@/components/admin/ConfirmDelete.vue';

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
          key: 'rounds',
          label: 'Rounds',
          tdClass: 'text-center',
          thClass: 'text-center',
        },
        {
          key: 'exercises',
          label: 'Exercises',
          tdClass: 'text-center',
          thClass: 'text-center',
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
        rounds: [],
      },
      selectedExercise: null,
      data: this.$storage.get('data'),
    };
  },
  mounted() {
    if (this.data?.workouts) {
      this.workouts = this.data.workouts;
      this.exercises = this.data.exercises.sort((a, b) => ((a.name > b.name) ? 1 : -1));
    }
  },
  methods: {
    getNewId() {
      const workouts = Vue.util.extend([], this.workouts);

      workouts.sort((a, b) => +(a.id) - +(b.id));

      return workouts[workouts.length - 1].id + 1;
    },
    numberOfExercises(workout) {
      let count = 0;

      for (let index = 0, len = Object.keys(workout.rounds).length; index < len; index++) {
        count += workout.rounds[index].exercises.length;
      }

      return count;
    },
    exerciseName(exerciseId) {
      const index = this.exercises.findIndex((i) => i.id === exerciseId);

      return this.exercises[index].name;
    },
    removeExercise(roundIndex, exerciseIndex) {
      Vue.delete(this.form.rounds[roundIndex].exercises, exerciseIndex);
    },
    removeRound(index) {
      Vue.delete(this.form.rounds, index);
    },
    addRound() {
      this.form.rounds.push({
        repeats: 1,
        exercises: [null],
      });
    },
    addExercise(round) {
      this.form.rounds[round].exercises.push(this.selectedExercise);
      this.selectedExercise = null;
    },
    resetForm() {
      this.action = 'create';
      this.form = {};
      Vue.set(this.form, 'rounds', {});
      this.$refs.form.reset();
    },
    onSubmit(event) {
      event.preventDefault();
      // eslint-disable-next-line no-console
      console.log(this.form);

      // Check if only 1 round and set a proper array
      if (!Array.isArray(this.form.rounds)) {
        // eslint-disable-next-line
        debugger

        this.form.rounds = [this.form.rounds[0]];
      }

      // Check if it's Create action
      if (this.action === 'create' && !this.form.id) {
        this.form.id = this.getNewId();
        this.workouts.push(this.form);
      }

      this.$storage.set('data', this.data);

      this.$emit('update-output', true);

      // Clean the form
      this.resetForm();
    },
    onConfirmDelete(workoutId) {
      // Create a shallow copy, without the bindings
      const updates = Vue.util.extend([], this.workouts);

      // Find by the id propierty and remove it from the array
      updates.splice(updates.findIndex((i) => i.id === workoutId), 1);

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
