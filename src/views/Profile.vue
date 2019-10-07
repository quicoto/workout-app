<template>
  <div>
    <Loader v-show="!currentDBUser.id" />
    <b-container v-if="currentDBUser && currentDBUser.id">
      <b-row>
        <b-col class="text-center mb-3">
          <b-img
            v-if="currentDBUser.gravatar"
            thumbnail
            fluid
            rounded="circle"
            :src="`https://www.gravatar.com/avatar/${currentDBUser.gravatar}?s=200`"
            alt="Profile"
            class="mb-4 avatar"></b-img>

            <h4>{{ currentDBUser.name }} {{ currentDBUser.lastname }}</h4>
            <small class="text-muted">Last workout: TODO</small>
        </b-col>
      </b-row>

      <b-row>
        <b-col
         v-if="workoutGoals.length > 0"
         class="mt-3 col-12 col-sm-6 col-lg-4">
          <b-card
            tag="article"
            bg-variant="dark"
            class="mb-3 text-center"
          >

            <b-card-text>
                <img
                  class="icon mt-2 mb-4"
                  :src="`${publicPath}img/icons/goals/${currentDBUser.goal}.svg`"
                  :alt="`Goal: ${goalName(currentDBUser.goal)}`"
                  :title="`Goal: ${goalName(currentDBUser.goal)}`">

              <h4 class="mb-4">Goals</h4>

              <b-form v-if="!viewOnlyProfile">
                <b-form-group
                  :label="`I will become ${goalName(currentDBUser.goal)}`"
                >
                  <b-form-input id="goal-range"
                    number
                    v-model="currentDBUser.goal"
                    type="range"
                    :min="workoutGoals[0].id"
                    :max="workoutGoals[workoutGoals.length - 1].id"></b-form-input>
                </b-form-group>
              </b-form>

              <div v-show="viewOnlyProfile">
                {{ currentDBUser.name }}? No, call me {{ goalName(currentDBUser.goal) }}
              </div>
            </b-card-text>
          </b-card>
        </b-col>

        <b-col
          v-if="workoutLevels.length > 0"
          class="mt-3 col-12 col-sm-6 col-lg-4">
          <b-card
            tag="article"
            bg-variant="dark"
            class="mb-3 text-center"
          >
            <b-card-text>
              <img
                class="icon mt-2 mb-4"
                :src="`${publicPath}img/icons/levels/${currentDBUser.level}.svg`"
                :alt="`Level: ${levelName(currentDBUser.level)}`"
                :title="`Level: ${levelName(currentDBUser.level)}`">

                <h4 class="mb-4">{{ levelName(currentDBUser.level) }}</h4>
                <b-form v-if="!viewOnlyProfile">
                  <b-form-group
                    label="Your current level">
                    <b-form-input id="level-range"
                      number
                      v-model="currentDBUser.level"
                      type="range"
                      :min="workoutLevels[0].id"
                      :max="workoutLevels[workoutLevels.length - 1].id"></b-form-input>
                  </b-form-group>
                </b-form>

                <div v-show="viewOnlyProfile">
                  <span v-show="+currentDBUser.level === 1">Just getting started</span>
                  <span v-show="+currentDBUser.level === 2">Above average</span>
                  <span v-show="+currentDBUser.level === 3">Unstoppable</span>
                </div>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import firebase from 'firebase/app';
import db from '@/db';
import Loader from '@/components/Loader.vue';
import ENDPOINTS from '@/endpoints';

export default {
  components: {
    Loader,
  },
  data() {
    return {
      publicPath: process.env.BASE_URL,
      currentUser: firebase.auth().currentUser,
      currentDBUser: {},
      updating: false,
      users: [],
      viewOnlyProfile: false,
      workoutGoals: [],
      workoutLevels: [],
    };
  },
  firebase: {
    users: db.ref(ENDPOINTS.users),
    workoutGoals: db.ref(ENDPOINTS.workoutGoals),
    workoutLevels: db.ref(ENDPOINTS.workoutLevels),
  },
  mounted() {
    const requestedUserId = parseInt(this.$route.params.user_id, 10);
    // Search our Firebase users data and set it.
    firebase.database().ref(ENDPOINTS.users).once('value').then((snapshot) => {
      this.users = snapshot.val();

      let currentDBUser = snapshot.val().find(o => o.email === this.currentUser.email);

      if (requestedUserId !== currentDBUser.id) {
        // The requested profile is not the logged in user
        this.viewOnlyProfile = true;

        // Find the requested user
        currentDBUser = snapshot.val().find(o => o.id === requestedUserId);
      }

      this.currentDBUser = currentDBUser;
    });
  },
  methods: {
    pushProfileSavedMessage() {
      this.$bvToast.toast('Profile saved.', {
        variant: 'success',
        solid: true,
        toaster: 'b-toaster-top-left',
        autoHideDelay: 2000,
        noCloseButton: true,
      });
    },
    goalName(id) {
      if (this.workoutGoals) {
        const goal = this.workoutGoals.find(o => o.id === parseInt(id, 10));

        if (goal) {
          return goal.name;
        }
      }

      return '';
    },
    levelName(id) {
      if (this.workoutLevels) {
        const level = this.workoutLevels.find(o => o.id === parseInt(id, 10));

        if (level) {
          return level.name;
        }
      }

      return '';
    },
    saveProfile() {
      // Can't think of a better way to do this
      // Since there's only 2 users, might not be so bad performance wise
      this.users.forEach((user, index) => {
        if (user.id === this.currentDBUser.id) {
          this.users[index] = this.currentDBUser;
        }
      });

      // Save the data to the server
      firebase.database().ref(ENDPOINTS.users).set(this.users).then(() => {
        this.pushProfileSavedMessage();
      });
    },
  },
  watch: {
    'currentDBUser.level': function (val, oldVal) {
      // Prevent from firing when Firebase populates de object
      // for the firs time.
      if (oldVal) {
        this.saveProfile();
      }
    },
    'currentDBUser.goal': function (val, oldVal) {
      // Prevent from firing when Firebase populates de object
      // for the firs time.
      if (oldVal) {
        this.saveProfile();
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.avatar {
  max-width: 100px;
}

.icon {
  height: 50px;
}
</style>
