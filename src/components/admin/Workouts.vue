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
            :options="workoutTypes"></b-form-select>
        </b-col>
      </b-row>

      <b-button
        type="submit"
        :variant="action !== 'create' && form.id ? 'warning' : 'primary'"
        :disabled="!form.name || !form.type"
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
        type: null,
      },
    };
  },
  firebase: {
    workouts: db.ref(ENDPOINTS.workouts),
  },
  mounted() {
    db.ref(ENDPOINTS.workoutTypes).on('value', (snapshot) => {
      /**
       * We need to map this to the Vue Bootstrap Select data structure
       */
      this.workoutTypes = snapshot.val().map(item => ({
        value: item.id,
        text: item.name,
      }));
      this.workoutTypes.unshift({ value: null, text: 'Please select workout type' });
    });
  },
  methods: {
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
        // Create the incremental id based on the last id
        this.form.id = parseInt(this.workouts[0].id, 10) + 1;
        updates.unshift(this.form);
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
