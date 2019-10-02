<template>
  <div>
    <!-- <Loader /> -->
    <b-container class="timer">
      <b-row>
        <b-col class="text-center mb-3">
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
// import firebase from 'firebase/app';
// import db from '@/db';
// import Loader from '@/components/Loader.vue';
import { sleep } from '@/plugins/sleep';

export default {
  components: {
    // Loader,
  },
  data() {
    return {
      workout: {
        totalTime: 45000,
        elapsed: 0,
      },
      currentExercise: 'Push ups',
      timer: {
        timerId: {},
        start: {},
        remaining: 10000,
        paused: true,
      },
    };
  },
  firebase: {
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
