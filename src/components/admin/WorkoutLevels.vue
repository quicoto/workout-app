<template>
  <div>
    <Loader v-show="levels.length === 0" />
    <div v-if="levels.length > 0">
      <b-row class="mt-3 mb-3" align-v="center">
        <b-col align-self="center">
          <h3>Levels List</h3>
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
        v-if="levels.length > 0"
        striped
        hover
        :items="levels"
        :fields="fields">
        <template v-slot:cell(name)="data">
          <b-form-input
            :disabled="!canEdit"
            v-model="data.item.name">
          </b-form-input>
        </template>
        <template v-slot:cell(activeTime)="data">
          <b-form-input
            number
            :disabled="!canEdit"
            v-model="data.item.activeTime">
          </b-form-input>
        </template>
        <template v-slot:cell(restTime)="data">
          <b-form-input
            number
            :disabled="!canEdit"
            v-model="data.item.restTime">
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
  name: 'WorkoutLevels',
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
          key: 'activeTime',
          label: 'Active Time',
        },
        {
          key: 'restTime',
          label: 'Rest Time',
        },
      ],
      levels: [],
    };
  },
  mounted() {
    const data = this.$storage.get('data');

    if (data?.['workout-levels']) {
      this.levels = data['workout-levels'];
    }
  },
  methods: {
    onUpdateEditClick() {
      if (this.canEdit) {
        this.$emit('update-output', true);
        this.canEdit = false;
      } else {
        this.canEdit = true;
      }
    },
  },
};
</script>
