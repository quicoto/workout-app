<template>
  <div>
    <!-- <Loader /> -->
    <b-container>
      <b-row>
        <b-col class="text-center mb-3">
          <div class="message">{{ currentExercise }}</div>
          <div
            class="timeLeft text-light h2"
            :class="timeLeft > 0 ? 'timeLeft--active' : ''">
            {{ printTimeLeft() }}
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

export default {
  components: {
    // Loader,
  },
  data() {
    return {
      currentExercise: 'Push ups',
      timeLeft: 5000,
    };
  },
  firebase: {
  },
  mounted() {
    const countdown = setInterval(() => {
      this.timeLeft = this.timeLeft - 1000;

      if (this.timeLeft === 0) {
        clearInterval(countdown);
        this.exerciseDone();
      }
    }, 1000);
  },
  methods: {
    printTimeLeft() {
      if (this.timeLeft > 0) return `${this.timeLeft / 1000}"`;

      return '';
    },
    exerciseDone() {
      this.currentExercise = 'Rest time!';
    },
  },
};
</script>

<style scoped lang="scss">
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
</style>
