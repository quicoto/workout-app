<template>
  <div>
    <b-row>
      <b-col cols="4">
        <h3 class="text-capitalize">{{ action }}</h3>
        <b-alert show variant="warning">
          <font-awesome-icon :icon="['fas', 'exclamation-triangle']" class="mr-1" />
          Tags can not be deleted as their ID could be assigned to an exercise.
          Instead of delete, rename it if needed.
        </b-alert>
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
          </b-row>

          <b-button
            type="submit"
            :variant="action !== 'create' && form.id ? 'warning' : 'primary'"
            :disabled="!form.name"
            >
              <span v-show="action === 'create'">Create Tag</span>
              <span v-if="action !== 'create' && form.id">Update Tag</span>
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
      </b-col>
      <b-col v-if="tags">
        <h3 class="mt-4">List</h3>
        <Loader v-show="tags.length === 0" />
        <b-table
          v-if="tags.length > 0"
          striped
          hover
          :items="tags"
          :fields="fields">
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
import Vue from 'vue';
import db from '@/db';
import Loader from '@/components/Loader.vue';
import ENDPOINTS from '@/endpoints';

export default {
  name: 'ExerciseTags',
  components: {
    Loader,
  },
  data() {
    return {
      tags: [],
      action: 'create',
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
      ],
      form: {
        name: '',
      },
    };
  },
  firebase: {
    tags: db.ref(ENDPOINTS.exerciseTags),
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
      const updates = Vue.util.extend([], this.tags);

      // Check if it's Create action
      if (this.action === 'create' && !this.form.id) {
        // Create the incremental id based on the last id
        this.form.id = parseInt(this.tags[0].id, 10) + 1;
        updates.unshift(this.form);
      }

      // Update firebase with the copy
      // It will automatically push it to our this.tags
      db.ref(ENDPOINTS.exerciseTags).set(updates);

      // Clean the form
      this.resetForm();
    },
  },
};
</script>
