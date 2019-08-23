<template>
  <div>
    <h3>Create</h3>
    <b-row>
      <b-col>

      </b-col>
    </b-row>

    <h3>List</h3>
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
        </b-table>
      </b-col>
    </b-row>

  </div>
</template>

<script>
// import firebase from 'firebase/app';
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
      exercises: [],
      fields: ['id', 'name', 'description', 'areas'],
    };
  },
  firebase: {
    exercises: db.ref('exercises'),
  },
};
</script>
