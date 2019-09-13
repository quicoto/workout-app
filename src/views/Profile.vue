<template>
  <div>
    <Loader v-show="!currentDBUser" />
    <b-container v-if="currentDBUser">
      <b-row>
        <b-col class="text-center mb-3">
          <b-img
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
         v-if="workoutGoals && workoutLevels"
         class="mt-3 col-12 col-sm-6 col-lg-4">
          <b-card
            tag="article"
            bg-variant="dark"
            class="mb-3 text-center"
          >

            <b-card-text>
              <img
                class="icon mt-2 mb-4"
                :src="`${publicPath}img/icons/goals.svg`"
                alt="">

              <h4 class="mb-4">Goals</h4>
              <p>
                Set your level and future goal.
              </p>

              <b-form
              @submit="onGoalsSubmit()"
              v-if="workoutGoals.length > 0 && workoutLevels.length > 0">
                {{ currentDBUser }}
                <b-form-group
                  label="Current Goal"
                >
                  <b-form-input id="goal-range"
                    v-model="currentDBUser.goal"
                    type="range"
                    :min="workoutGoals[0].id"
                    :max="workoutGoals[workoutGoals.length - 1].id"></b-form-input>
                  <img
                  class="icon mt-2 mb-4"
                  :src="`${publicPath}img/icons/goals/${currentDBUser.goal}.svg`"
                  alt="">
                </b-form-group>

                <b-form-group
                  label="Current Level"
                >
                  <b-form-input id="level-range"
                    v-model="currentDBUser.level"
                    type="range"
                    :min="workoutLevels[0].id"
                    :max="workoutLevels[workoutLevels.length - 1].id"></b-form-input>
                  <div class="mt-2">Value: {{ currentDBUser.level }}</div>
                </b-form-group>

                <b-button
                  variant="primary"
                  block>
                    Save
                </b-button>
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
                :src="`${publicPath}img/icons/favourite.svg`"
                alt="">

              <h4 class="mb-4">Favourite exercises</h4>

              <ul class="text-left">
                <li>Squats: 100 times</li>
                <li>Pushups: 1200 times</li>
              </ul>
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
      publicPath: process.env.BASE_URL,
      currentUser: firebase.auth().currentUser,
      currentDBUser: {},
      workoutGoals: [],
      workoutLevels: []
    };
  },
  firebase: {
    workoutGoals: db.ref('workout-goals'),
    workoutLevels: db.ref('workout-levels'),
  },
  mounted() {
    // Search our Firebase users data and set it.
    firebase.database().ref('users').once('value').then((snapshot) => {
      this.currentDBUser = snapshot.val().find(o => o.email === this.currentUser.email);
    });
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
