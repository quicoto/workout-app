<template>
  <div>
    {{ currentDBUser }}
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
            <small class="text-muted">Last workout: today</small>
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
                  alt="Goal">

              <h4 class="mb-4">Goals</h4>

              <b-form
                @submit="onGoalSubmit()">
                <b-form-group
                  label="Your current goal"
                >
                  <b-form-input id="goal-range"
                    v-model="currentDBUser.goal"
                    type="range"
                    :min="workoutGoals[0].id"
                    :max="workoutGoals[workoutGoals.length - 1].id"></b-form-input>
                </b-form-group>
              </b-form>
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
                alt="Level">

                <h4 class="mb-4">{{ levelName(currentDBUser.level) }}</h4>

                <b-form
                  @submit="onLevelSubmit()">
                  <b-form-group
                    label="Your current level">
                    <b-form-input id="level-range"
                      v-model="currentDBUser.level"
                      type="range"
                      :min="workoutLevels[0].id"
                      :max="workoutLevels[workoutLevels.length - 1].id"></b-form-input>
                  </b-form-group>
                </b-form>
            </b-card-text>
          </b-card>
        </b-col>

        <b-col class="mt-3 col-12 col-sm-6 col-lg-4">
          <b-card
            tag="article"
            bg-variant="dark"
            class="mb-3 text-center"
          >

            <b-card-text>
              <img
                class="icon mt-2 mb-4"
                :src="`${publicPath}img/icons/stats.svg`"
                alt="">

              <h4 class="mb-4">Stats</h4>

              <ul class="text-left">
                <li>Squats: 100 times</li>
                <li>Pushups: 1200 times</li>
              </ul>
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

export default {
  components: {
    Loader,
  },
  data() {
    return {
      disableLevelButton: true,
      disableGoalButton: true,
      publicPath: process.env.BASE_URL,
      currentUser: firebase.auth().currentUser,
      currentDBUser: {},
      users: [],
      workoutGoals: [],
      workoutLevels: [],
    };
  },
  firebase: {
    currentDBUser: db.ref('users').find(o => o.email === this.currentUser.email),
    users: db.ref('users'),
    workoutGoals: db.ref('workout-goals'),
    workoutLevels: db.ref('workout-levels'),
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
      const users = firebase.database().ref('users');
      this.pushProfileSavedMessage();
    },
  },
  watch: {
    users(val, oldVal) {
      // Only the first time
      if (oldVal.length === 0) {
        this.currentDBUser = this.users.find(o => o.email === this.currentUser.email);
      }
    },
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
  max-width: 50px;
}
</style>
