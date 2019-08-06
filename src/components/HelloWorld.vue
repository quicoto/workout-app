<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(user, index) in users" :key="index">
        {{ user.name }}
      </li>
    </ul>
    <b-alert show>VUE Bootstrap imported correctly</b-alert>
  </div>
</template>

<script>
// import firebase from 'firebase/app';
import db from '@/db';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'test',
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
