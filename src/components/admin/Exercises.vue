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
            label-for="description"
          >
             <b-form-textarea
              id="description"
              name="description"
              v-model="form.description"
              placeholder="Description"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>

      <b-button
        type="submit"
        :variant="action !== 'create' && form.id ? 'warning' : 'primary'"
        :disabled="!form.name"
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
import Loader from '@/components/Loader.vue';
import ConfirmDelete from '@/components/admin/ConfirmDelete.vue';

export default {
  name: 'Exercises',
  components: {
    Loader,
    ConfirmDelete,
  },
  data() {
    return {
      action: 'create',
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
        image: false,
      },
      publicPath: process.env.BASE_URL,
      data: this.$storage.get('data'),
    };
  },
  mounted() {
    if (this.data?.exercises) {
      this.exercises = this.data.exercises;
    }
  },
  methods: {
    getNewId() {
      const exercises = Vue.util.extend([], this.exercises);

      exercises.sort((a, b) => +(a.id) - +(b.id));

      return exercises[exercises.length - 1].id + 1;
    },
    exerciseDescription(description) {
      return description.replace(/\n/g, '<br />');
    },
    resetForm() {
      this.action = 'create';
      this.form = {};
      Vue.set(this.form, 'image', false);
      this.$refs.form.reset();
    },
    onSubmit(event) {
      event.preventDefault();

      // Check if it's Create action
      if (this.action === 'create' && !this.form.id) {
        // Create the incremental id based on the last id
        this.form.id = this.getNewId();
        this.exercises.push(this.form);
      }

      this.$storage.set('data', this.data);

      this.$emit('update-output', true);

      // Clean the form
      this.resetForm();
    },
    onConfirmDelete() {
      this.$storage.set('data', this.data);

      this.$emit('update-output', true);

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
