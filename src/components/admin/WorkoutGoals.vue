<template>
  <div>
    <Loader v-show="goals.length === 0" />
    <div v-if="goals.length > 0">
      <b-row class="mt-4 mb-3" align-v="center">
        <b-col align-self="center">
          <h3>Goals List</h3>
        </b-col>
        <b-col class="text-right">
          <b-button
            @click="onUpdateEditClick()"
            type="button"
            :variant="canEdit ? 'warning' : 'primary'">
              <span v-show="canEdit">Update</span>
              <span v-show="!canEdit">Edit</span>
          </b-button>
          <b-button
            @click="canEdit = false"
            class="ml-2"
            type="button"
            v-show="canEdit"
            variant="danger">
              Cancel
          </b-button>
        </b-col>
      </b-row>
      <b-table
        v-if="goals.length > 0"
        striped
        hover
        :items="goals"
        :fields="fields">
        <template v-slot:cell(name)="data">
          <b-form-input
            :disabled="!canEdit"
            v-model="data.item.name">
          </b-form-input>
        </template>
        <template v-slot:cell(reps)="data">
          <b-form-input
            :disabled="!canEdit"
            v-model="data.item.reps">
          </b-form-input>
        </template>
        <template v-slot:cell(restBetweenGroups)="data">
          <b-form-input
            :disabled="!canEdit"
            v-model="data.item.restBetweenGroups">
          </b-form-input>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue';
import Loader from '@/components/Loader.vue';

export default {
  name: 'WorkoutGoals',
  components: {
    Loader,
  },
  data() {
    return {
      canEdit: false,
      fields: [
        {
          key: 'name',
          label: 'Name',
        },
        {
          key: 'reps',
          label: 'Repetitions',
        },
        {
          key: 'restBetweenGroups',
          label: 'Rest Between Groups',
        },
      ],
      goals: [],
    };
  },
  mounted() {
    const data = this.$storage.get('data');

    if (data?.['workout-goals']) {
      this.goals = data['workout-goals'];
    }
  },
  methods: {
    onUpdateEditClick() {
      if (this.canEdit) {
        // const updates = Vue.util.extend([], this.goals);
        this.$emit('update-output', true);
        this.canEdit = false;
      } else {
        this.canEdit = true;
      }
    },
  },
};
</script>
