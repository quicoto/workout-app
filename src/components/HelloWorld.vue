<template>
  <div class="hello">
    <h2 class="text-muted text-center">{{ msg }}</h2>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
// import firebase from 'firebase/app';
import db from '@/db';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Hello world component to test the DB connection',
      users: [],
    };
  },
  firebase: {
    users: db.ref('users'),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  color: red;
}
</style>
