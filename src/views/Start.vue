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
          <b-row class="header">
            <b-col>
              <b-button
                @click="previous()"
                variant="primary" size="lg" block>Previous</b-button>
            </b-col>
            <b-col>
              <b-button
                @click="next()"
                variant="primary" size="lg" block>Next</b-button>
            </b-col>
          </b-row>
          <div class="message">{{ currentExercise }}</div>
          <div
            class="timeLeft text-light h2"
            :class="timer.remaining && timer.paused === false > 0 ? 'timeLeft--active' : ''">
            {{ printTimeLeft() }}
          </div>
          <div class="footer">
            <b-progress
              :value="progress"
              variant="success"
              striped
              :animated="progressAnimation"></b-progress>
            <div class="footerActions d-flex align-items-stretch">
              <div class="column align-self-center flex-fill">
                <b-button variant="danger" size="lg" block>STOP</b-button>
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
import { sleep } from '@/plugins/sleep';

export default {
  components: {
    Loader,
  },
  data() {
    return {
      isUserReady: false,
      workout: {},
      workoutExercises: [],
      timer: {
        timerId: {},
        start: {},
        remaining: 110000,
        paused: true,
      },
      noWorkoutFound: false,
      user: {},
    };
  },
  firebase: {
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
      return Math.floor((this.workout.elapsed * 100) / this.workout.totalTime);
    },
    progressAnimation() {
      if (this.workout.totalTime === this.workout.elapsed) return false;

      return true;
    },
  },
  methods: {
    start() {
      // Prepare the flat exercises array
      for (let i = 0, len = this.workout.rounds.length; i < len; i++) {
        for (let j = 1, repeatLen = this.workout.rounds[i].repeats; j <= repeatLen; j++) {
          this.workout.rounds[i].exercises.forEach((exercise) => {
            // Find all the exercise information
            this.workoutExercises.push(this.exercises.find(o => o.id === exercise));
          });
        }
      }

      // Calculate the timings based on the profile Level and Goal
      if (this.workout.type === 1) {
        // HIIT
        // Use the Levels
      } else if (this.workout.type === 2) {
        // Strength
        // @TODO
      }


      // this.resume();
    },
    resume() {
      sleep.prevent();
      this.timer.paused = false;
      this.timer.timerId = window.setTimeout(() => {
        if (this.timer.remaining > 0) {
          this.resume();
          this.timer.remaining = this.timer.remaining - 1000;
          this.workout.elapsed = this.workout.elapsed + 1000;
        } else {
          // Next exercise or is the workout done?
          // TODO
          this.pause();
        }
      }, 1000);
    },
    pause() {
      sleep.allow();
      this.timer.paused = true;
      window.clearTimeout(this.timer.timerId);
    },
    printTimeLeft() {
      if (this.timer.remaining > 0) return `${this.timer.remaining / 1000}"`;

      return '';
    },
    exerciseDone() {
      this.currentExercise = 'Rest time!';
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
  font-size: 7em;

  &--active {
    animation: 1s pulse linear infinite;
  }
}

.progress {
  border-radius: 0;
}
</style>
