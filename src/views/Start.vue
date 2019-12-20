<template>
  <div>
    <b-container
      v-if="noWorkoutFound">
      <b-row>
        <b-col class="text-center text-danger">
          <h2>No workout was found</h2>
          <font-awesome-icon
            :icon="['far', 'frown']"
            size="5x"
            title="Sad face"
            class="mt-4" />
        </b-col>
      </b-row>
    </b-container>
    <b-container
      v-if="!noWorkoutFound"
      class="timer">
      <Loader v-show="!workout.id" />
      <b-row v-if="workout.id">
        <b-col v-if="!isUserReady">
          <h2 class="text-center mb-4 text-info"><em>{{ workout.name }}</em></h2>
          <h3
            class="text-center mb-4">Are you Ready?</h3>

          <Loader v-show="!user.id" />
          <b-button
            v-if="user.id"
            block
            size="lg"
            @click="start()"
            variant="primary">
              Start!
            </b-button>
        </b-col>

        <b-col
          v-if="isUserReady"
          class="text-center mb-3">
          <b-row class="header mb-4">
            <b-col>
              <b-button
                v-show="currentItem - 1 >= 0"
                @click="previous()"
                variant="primary" size="lg" block>Previous</b-button>
            </b-col>
            <b-col>
              <b-button
                v-show="currentItem + 1 < timeline.length"
                @click="next()"
                variant="primary" size="lg" block>Next</b-button>
            </b-col>
          </b-row>
          <div
            v-if="typeof timeline[currentItem] !== 'undefined' && timeline[currentItem].id"
            class="h1 pt-4 mb-4 itemName text-warning">{{ timeline[currentItem].name }}</div>
          <div
            v-show="typeof timeline[currentItem] !== 'undefined' &&
              !timeline[currentItem].id && currentItem < timeline.length"
            class="h1 pt-4 mb-4 itemName text-success">Rest time</div>
          <div
            v-show="currentItem === timeline.length"
            class="h2 text-success pt-5">
              <p>
                <font-awesome-icon
                size="3x"
                :icon="['far', 'grin-stars']" />
              </p>
              <p>
                Congratulations
              </p>
              <p>
                You're done!
              </p>
            </div>
          <div
            v-if="currentItem < timeline.length"
            class="h1 timeLeft text-light"
            :class="timer.remaining && timer.paused === false >= 0 ? 'timeLeft--active' : ''">
            {{ printTimeLeft() }}
          </div>
          <div
            v-if="typeof timeline[currentItem+1] !== 'undefined' && timeline[currentItem+1].name"
            class="h1 pt-4 text-muted"
            >
            Next up:<br>{{ timeline[currentItem+1].name }}
          </div>
          <div
            v-if="currentItem + 1 <= timeline.length"
            class="text-muted mt-5">
            {{ currentItem + 1 }} of {{ timeline.length }}
          </div>
          <div class="footer">
            <b-progress
              :value="progress"
              variant="success"
              striped
              :animated="progressAnimation"></b-progress>
            <div class="footerActions d-flex align-items-stretch">
              <div class="column align-self-center flex-fill">
                <b-button
                  variant="danger"
                  size="lg"
                  block
                  @click="stop()">STOP</b-button>
              </div>
              <div class="column align-self-center flex-fill">
                <b-button
                  v-show="!timer.paused"
                  @click="pause()"
                  variant="warning" size="lg" block>PAUSE</b-button>
                <b-button
                  v-show="timer.paused"
                  @click="resume()"
                  variant="success" size="lg" block>RESUME</b-button>
              </div>
            </div>
          </div>
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
import VALUES from '@/values';
import { sleep } from '@/plugins/sleep';

export default {
  components: {
    Loader,
  },
  data() {
    return {
      currentItem: 0,
      currentLevel: {},
      currentGoal: {},
      isUserReady: false,
      noWorkoutFound: false,
      timer: {
        totalTime: 0,
        timerId: {},
        start: {},
        remaining: null,
        paused: true,
      },
      user: {},
      users: [],
      workout: {},
      timeline: [],
    };
  },
  firebase: {
    users: db.ref(ENDPOINTS.users),
    exercises: db.ref(ENDPOINTS.exercises),
    workoutGoals: db.ref(ENDPOINTS.workoutGoals),
    workoutLevels: db.ref(ENDPOINTS.workoutLevels),
  },
  mounted() {
    const requestedWorkoutId = parseInt(this.$route.params.workout_id, 10);

    if (requestedWorkoutId) {
      firebase.database().ref(ENDPOINTS.workouts).once('value').then((workoutSnapshot) => {
        this.workout = workoutSnapshot.val().find(o => o.id === requestedWorkoutId);

        if (!this.workout) {
          this.noWorkoutFound = true;
        }

        firebase.database().ref(ENDPOINTS.users).once('value').then((usersSnapshot) => {
          this.user = usersSnapshot.val().find(o => o.email === firebase.auth().currentUser.email);
        });
      });
    } else {
      this.noWorkoutFound = true;
    }
  },
  computed: {
    progress() {
      let elapsed = 0;

      if (this.currentItem === this.timeline.length) {
        return 100;
      }

      // Calculate based on the current item
      for (let i = 0; i < this.currentItem; i++) {
        if (this.timeline[i].id) {
          // It's an exercise
          elapsed += this.currentLevel.activeTime;
        } else {
          // It's a rest time
          elapsed += this.currentLevel.restTime;
        }
      }

      return Math.floor((elapsed * 100) / +this.timer.totalTime);
    },
    progressAnimation() {
      if (this.currentItem === this.timeline.length) return false;

      return true;
    },
  },
  methods: {
    pauseAndClear() {
      this.timer.paused = true;
      window.clearTimeout(this.timer.timerId);
      this.timer.remaining = null;
    },
    next() {
      this.pauseAndClear();
      if (this.currentItem + 1 < this.timeline.length) {
        this.currentItem++;
      }
      this.resume();
    },
    previous() {
      this.pauseAndClear();
      this.currentItem--;
      this.resume();
    },
    start() {
      sleep.prevent();

      // Store the timings based on the profile Level and Goal
      if (this.workout.type === 1) {
        // HIIT
        this.currentLevel = this.workoutLevels.find(o => o.id === this.user.level);
      } else if (this.workout.type === 2) {
        // Strength
        this.currentGoal = this.workoutGoals.find(o => o.id === this.user.goal);
      }


      // Prepare the flat exercises array
      for (let i = 0, len = this.workout.rounds.length; i < len; i++) {
        for (let j = 1, repeatLen = this.workout.rounds[i].repeats; j <= repeatLen; j++) {
          this.workout.rounds[i].exercises.forEach((exercise) => {
            // Find all the exercise information
            // Push the item to the timeline
            this.timeline.push(this.exercises.find(o => o.id === exercise));
            this.timer.totalTime = this.timer.totalTime + this.currentLevel.activeTime;

            // Add the rest time to the timeline
            if (this.workout.type === 1) {
              // HITT
              this.timeline.push(this.currentLevel.restTime);
              this.timer.totalTime = this.timer.totalTime + this.currentLevel.restTime;
            }
          });
        }
      }

      // Delete the last rest time, as the workout is finished
      this.timeline.pop();
      this.timer.totalTime = this.timer.totalTime - this.currentLevel.restTime;

      this.isUserReady = true;
      this.resume();

      this.updateUserWorkout();
    },
    updateUserWorkout() {
      if (!this.user.recentWorkouts) {
        this.user.recentWorkouts = [];
      }

      if (this.user.recentWorkouts
        && this.user.recentWorkouts.length === VALUES.maxRecentWorkouts) {
        this.user.recentWorkouts.pop();
      }

      this.user.recentWorkouts.unshift(this.workout.id);
      this.saveProfile();
    },
    saveProfile() {
      // Can't think of a better way to do this
      // Since there's only 2 users, might not be so bad performance wise
      this.users.forEach((user, index) => {
        if (user.id === this.user.id) {
          this.users[index] = this.user;
        }
      });

      // Save the data to the server
      firebase.database().ref(ENDPOINTS.users).set(this.users);
    },
    resume() {
      this.timer.paused = false;

      // Start or next exercise
      if (this.timer.remaining === null || this.timer.remaining === 0) {
        // Check if we're on rest or active time
        if (this.timeline[this.currentItem].id) {
          // it's an object, it is an exercise
          // @TODO difference between HIIT and Strength
          this.timer.remaining = this.currentLevel.activeTime;
        } else {
          // It's a rest time
          this.timer.remaining = this.timeline[this.currentItem];
        }
      }

      this.timer.timerId = window.setTimeout(() => {
        if (this.timer.remaining > 0) {
          this.resume();
          this.timer.remaining = this.timer.remaining - 1000;
        } else {
          this.currentItem++;

          // Next exercise or is the workout done?
          if (this.currentItem < this.timeline.length) {
            this.resume();
          } else {
            // No more items
            this.pauseAndClear();
          }
        }
      }, 1000);
    },
    pause() {
      sleep.allow();
      this.timer.paused = true;
      window.clearTimeout(this.timer.timerId);
    },
    stop() {
      // Easier to reload, for now.
      // @TODO actually stop and reset everything without reloading?
      this.$router.go(this.$router.currentRoute);
    },
    printTimeLeft() {
      if (this.timer.remaining >= 0) return `${this.timer.remaining / 1000}"`;

      return '';
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/styles/_variables';

.footer {
  bottom: 0;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 1;

  &Actions {
    width: 100%;

    > .column {
      width: 50%;
    }

    .btn {
      border-radius: 0;
      margin-top: 0;
    }
  }
}

.message {
  font-size: 4em;
}

@keyframes pulse{
  0% {
      transform: scale(1);
  }
  85% {
      transform: scale(1);
  }
  100% {
      transform: scale(1.05);
  }
}

.timeLeft {
  font-size: 9em;

  &--active {
    animation: 1s pulse linear infinite;
  }
}

.progress {
  border-radius: 0;
}

.itemName {
  font-size: 45px;
}
</style>
