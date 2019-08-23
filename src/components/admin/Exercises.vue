<template>
  <div>
    <h3>Create</h3>
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
            id="input-group-3"
            label-for="video"
          >
            <b-form-input
              id="video"
              v-model="form.video"
              type="text"
              placeholder="Video"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="input-group-4"
            label-for="image"
            class="mt-2"
          >
            <b-form-checkbox
              id="image"
              v-model="form.image"
              name="image"
              switch>
                Image
            </b-form-checkbox>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-form-group
            id="input-group-2"
            label-for="textarea"
          >
             <b-form-textarea
              id="textarea"
              name="description"
              v-model="form.description"
              placeholder="Description"
              rows="3"
              max-rows="6"
              required
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>

      <b-button type="submit" variant="primary">Create Exercise</b-button>
    </b-form>

    <h3 class="mt-4">List</h3>
    <b-row>
      <b-col>
        <Loader v-show="exercises.length === 0" />
        <b-table
          v-if="exercises.length > 0"
          striped
          hover
          :items="exercises"
          :fields="fields">
          <template slot="areas" slot-scope="data">
            <AreasBadges :areas="data.item.areas" />
          </template>
          <template slot="video" slot-scope="data">
            <a v-if="data.item.video"
              :href="data.item.video"
              target="_blank">
                <font-awesome-icon size="lg" :icon="['fas', 'video']" />
            </a>
          </template>
          <template slot="image" slot-scope="data">
            <a v-if="data.item.image"
              :href="`${publicPath}img/exercises/${data.item.id}.jpg`"
              target="_blank">
                <font-awesome-icon size="lg" :icon="['far', 'image']" />
            </a>
          </template>
          <template slot="edit" slot-scope="data">
            <font-awesome-icon size="lg" :icon="['far', 'edit']"/>
          </template>
          <template slot="delete" slot-scope="data">
            <font-awesome-icon size="lg" :icon="['far', 'trash-alt']" />
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
import AreasBadges from '@/components/AreasBadges.vue';

export default {
  name: 'Exercises',
  components: {
    Loader,
    AreasBadges,
  },
  data() {
    return {
      form: {
        name: 'test',
        description: 'delete this',
      },
      publicPath: process.env.BASE_URL,
      exercises: [],
      fields: {
        id: {
          label: 'Id',
        },
        name: {
          label: 'Name',
        },
        areas: {
          label: 'Areas',
        },
        description: {
          label: 'Description',
          thClass: 'description',
        },
        video: {
          label: 'Video',
          tdClass: 'text-center',
        },
        image: {
          label: 'Image',
          tdClass: 'text-center',
        },
        edit: {
          label: '',
        },
        delete: {
          label: '',
        },
      },
    };
  },
  firebase: {
    exercises: db.ref('exercises'),
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      // Create a shallow copy, without the bindings
      const updates = Vue.util.extend([], this.exercises);

      // Create the incremental id based on the last id
      this.form.id = parseInt(this.exercises[0].id, 10) + 1;
      updates.unshift(this.form);

      // Update firebase with the copy
      // It will automatically push it to our this.exercises
      db.ref('exercises').set(updates);

      // Clean the form
      this.form = {};
      this.$refs.form.reset();
    },
  },
};
</script>

<style lang="scss">
.description {
  width: 400px;
}
</style>
