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
              <span
                v-b-tooltip.hover title="File must be committed to public/img/exercises as
                a JPG with the exercise ID as filename.">
                Image
              </span>

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
        <b-col>
           <b-form-group label="Tags">
            <b-form-checkbox-group
              id="checkbox-group-1"
              v-model="form.tags"
              :options="tags"
              value-field="id"
              text-field="name"
              name="tags"
            ></b-form-checkbox-group>
          </b-form-group>
        </b-col>
      </b-row>

      <b-button
        type="submit"
        :variant="action !== 'create' && form.id ? 'warning' : 'primary'"
        :disabled="form.tags.length === 0 || !form.name || !form.description"
        >
          <span v-show="action === 'create'">Create Exercise</span>
          <span v-if="action !== 'create' && form.id">Update Exercise</span>
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
        <Loader v-show="exercises.length === 0" />
        <b-table
          v-if="exercises.length > 0"
          striped
          hover
          :items="exercises"
          :fields="fields">
          <template v-slot:cell(description)="data">
            <span v-html="exerciseDescription(data.item.description)"></span>
          </template>
          <template v-slot:cell(tags)="data">
            <TagsBadges :tags="data.item.tags" />
          </template>
          <template v-slot:cell(video)="data">
            <a v-if="data.item.video"
              :href="data.item.video"
              target="_blank"
              title="View video">
                <font-awesome-icon size="lg" :icon="['fas', 'video']" />
            </a>
          </template>
          <template v-slot:cell(image)="data">
            <a v-if="data.item.image"
              :href="`${publicPath}img/exercises/${data.item.id}.jpg`"
              target="_blank"
              title="View image">
                <font-awesome-icon size="lg" :icon="['far', 'image']" />
            </a>
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
import db from '@/db';
import Loader from '@/components/Loader.vue';
import TagsBadges from '@/components/TagsBadges.vue';
import ConfirmDelete from '@/components/admin/ConfirmDelete.vue';
import ENDPOINTS from '@/endpoints';

export default {
  name: 'Exercises',
  components: {
    Loader,
    TagsBadges,
    ConfirmDelete,
  },
  data() {
    return {
      action: 'create',
      tags: [],
      exercises: [],
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
          key: 'tags',
          label: 'Tags',
        },
        {
          key: 'description',
          label: 'Description',
          thClass: 'description',
        },
        {
          key: 'video',
          label: 'Video',
          tdClass: 'text-center',
        },
        {
          key: 'image',
          label: 'Image',
          tdClass: 'text-center',
        },
        {
          key: 'edit',
          label: 'Edit',
          tdClass: 'text-center',
        },
        {
          key: 'delete',
          label: 'Delete',
          tdClass: 'text-center',
          thClass: 'delete text-center',
        },
      ],
      form: {
        tags: [],
        image: false,
      },
      publicPath: process.env.BASE_URL,
    };
  },
  firebase: {
    exercises: db.ref(ENDPOINTS.exercises),
    tags: db.ref(ENDPOINTS.exerciseTags),
  },
  methods: {
    exerciseDescription(description) {
      return description.replace(/\n/g, '<br />');
    },
    resetForm() {
      this.action = 'create';
      this.form = {};
      Vue.set(this.form, 'tags', []);
      Vue.set(this.form, 'image', false);
      this.$refs.form.reset();
    },
    onSubmit(event) {
      event.preventDefault();

      // Create a shallow copy, without the bindings
      const updates = Vue.util.extend([], this.exercises);

      // Check if it's Create action
      if (this.action === 'create' && !this.form.id) {
        // Create the incremental id based on the last id
        this.form.id = parseInt(this.exercises[0].id, 10) + 1;
        updates.unshift(this.form);
      }

      // Update firebase with the copy
      // It will automatically push it to our this.exercises
      db.ref(ENDPOINTS.exercises).set(updates);

      // Clean the form
      this.resetForm();
    },
    onConfirmDelete(exerciseId) {
      // Create a shallow copy, without the bindings
      const updates = Vue.util.extend([], this.exercises);

      // Find by the id propierty and remove it from the array
      updates.splice(updates.findIndex(i => i.id === exerciseId), 1);

      // Update firebase with the copy
      // It will automatically push it to our this.exercises
      db.ref(ENDPOINTS.exercises).set(updates);

      // Clean the form
      this.resetForm();
    },
  },
};
</script>

<style lang="scss">
.description {
  width: 400px;
}

.delete {
  width: 200px;
}
</style>
