<template>
  <div class="hello">
    <p>Current database users:</p>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
// import firebase from 'firebase/app';
import db from '@/db';
import ENDPOINTS from '@/endpoints';

export default {
  name: 'HelloWorld',
  data() {
    return {
      users: [],
    };
  },
  firebase: {
    users: db.ref(ENDPOINTS.users),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  color: red;
}
</style>
