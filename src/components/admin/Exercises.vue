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
        <b-table striped hover :items="items"></b-table>
      </b-col>
    </b-row>

  </div>
</template>

<script>
// import firebase from 'firebase/app';
// import db from '@/db';

export default {
  name: 'Exercises',
  data() {
    return {
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' },
      ],
    };
  },
};
</script>
