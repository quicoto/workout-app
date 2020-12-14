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
          <div class="text-center">
            <div class="d-flex align-items-center justify-content-center">

              <ul class="text-left pl-0 mr-4">
                <li>Active time: {{ workoutLevels[user.level - 1].activeTime / 1000 }}"</li>
                <li>Rest time: {{ workoutLevels[user.level - 1].restTime / 1000 }}"</li>
              </ul>

              <img
                class="icon mb-4"
                :src="`${publicPath}img/icons/levels/${user.level}.svg`"
                :alt="`Level: ${levelName(user.level)}`"
                :title="`Level: ${levelName(user.level)}`">
            </div>

            <b-form>
              <b-form-group
                :label="levelName(user.level)">
                <b-form-input id="level-range"
                  number
                  v-model="user.level"
                  type="range"
                  :min="workoutLevels[0].id"
                  :max="workoutLevels[workoutLevels.length - 1].id"></b-form-input>
              </b-form-group>
            </b-form>
          </div>
          <h3
            class="text-center mb-4">Are you Ready?</h3>

          <b-button
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
          <b-row class="header mb-4" v-show="progress < 100">
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
          <div class="footer" v-show="progress < 100">
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
import Loader from '@/components/Loader.vue';

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
      workout: {},
      user: {
        level: 2,
        goal: 2,
      },
      timeline: [],
      publicPath: process.env.BASE_URL,
      wakeLock: null,
    };
  },
  mounted() {
    const data = this.$storage.get('data');
    const requestedWorkoutId = parseInt(this.$route.params.workout_id, 10);

    if (!data?.workouts || !requestedWorkoutId) {
      this.noWorkoutFound = true;
      return;
    }

    this.workoutLevels = data.['workout-levels'];
    this.workoutGoals = data.['workout-goals'];
    this.exercises = data.exercises;

    if (requestedWorkoutId) {
      this.workout = data.workouts.find((o) => o.id === requestedWorkoutId);

      if (!this.workout) {
        this.noWorkoutFound = true;
      }
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
    goalName(id) {
      if (this.workoutGoals) {
        const goal = this.workoutGoals.find((o) => o.id === parseInt(id, 10));

        if (goal) {
          return goal.name;
        }
      }

      return '';
    },
    levelName(id) {
      if (this.workoutLevels) {
        const level = this.workoutLevels.find((o) => o.id === parseInt(id, 10));

        if (level) {
          return level.name;
        }
      }

      return '';
    },
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
    lockScreen() {
      if ('WakeLock' in window && 'request' in window.WakeLock) {
        // const wakeLock = null;

        const requestWakeLock = () => {
          const controller = new AbortController();
          const signal = controller.signal;
          window.WakeLock.request('screen', {
            signal,
          });

          return controller;
        };

        this.wakeLock = requestWakeLock();
      } else if ('wakeLock' in navigator && 'request' in navigator.wakeLock) {
        const requestWakeLock = async () => {
          await navigator.wakeLock.request('screen');
        };

        this.wakeLock = requestWakeLock();
      }
    },
    unlockScreen() {
      if ('WakeLock' in window && 'request' in window.WakeLock) {
        this.wakeLock.abort();
      } else if ('wakeLock' in navigator && 'request' in navigator.wakeLock) {
        this.wakeLock.release();
      }

      this.wakeLock = null;
    },
    start() {
      this.lockScreen();

      this.currentLevel = this.workoutLevels.find((o) => o.id === this.user.level);

      // Prepare the flat exercises array
      for (let i = 0, len = this.workout.rounds.length; i < len; i++) {
        for (let j = 1, repeatLen = this.workout.rounds[i].repeats; j <= repeatLen; j++) {
          this.workout.rounds[i].exercises.forEach((exercise) => {
            // Find all the exercise information
            // Push the item to the timeline
            this.timeline.push(this.exercises.find((o) => o.id === exercise));
            this.timer.totalTime += this.currentLevel.activeTime;

            // Add the rest time to the timeline
            this.timeline.push(this.currentLevel.restTime);
            this.timer.totalTime += this.currentLevel.restTime;
          });
        }
      }

      // Delete the last rest time, as the workout is finished
      this.timeline.pop();
      this.timer.totalTime -= this.currentLevel.restTime;

      this.isUserReady = true;
      this.resume();
    },
    resume() {
      this.timer.paused = false;

      // Start or next exercise
      if (this.timer.remaining === null || this.timer.remaining === 0) {
        // Check if we're on rest or active time
        if (this.timeline[this.currentItem].id) {
          // it's an object, it is an exercise
          this.timer.remaining = this.currentLevel.activeTime;
        } else {
          // It's a rest time
          this.timer.remaining = this.timeline[this.currentItem];
        }
      }

      this.timer.timerId = window.setTimeout(() => {
        if (this.timer.remaining > 0) {
          this.resume();
          this.timer.remaining -= 1000;
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
      this.unlockScreen();
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

.icon {
  height: 50px;
}
</style>
