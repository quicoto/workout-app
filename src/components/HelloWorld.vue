<template>
  <div class="hello">
    <p>Current database users:</p>
    <ul>
      <li v-for="user in users" :key="user.id">
        <router-link :to="`/profile/${user.id}`">
          {{ user.name }}
        </router-link>
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
