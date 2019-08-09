<template>
  <div class="home">
    <h1 class="text-center">Workout like Thor</h1>
    <HelloWorld />

    <b-container v-if="exercices">
      <h2>Exercices</h2>

      <b-row>
        <b-col cols="12" md="6" v-for="exercice in exercices" :key="exercice.id">
          <b-card
            :header="exercice.name"
            header-tag="h2"
            :img-src="exercice.image ? `${publicPath}img/exercices/${exercice.id}.jpg` : ''"
            :img-alt="exercice.name"
            img-top
            tag="article"
            bg-variant="dark"
            class="mb-3"
          >
            <img slot="img" src="" alt="">
            <b-card-text>
              {{ exercice.description }}
            </b-card-text>

            <b-button href="#" variant="primary">Go to exercice</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      exercices: [],
      publicPath: process.env.BASE_URL,
    };
  },
  mounted() {
    fetch('mocks/exercices.json')
      .then(stream => stream.json())
      .then((data) => {
        this.exercices = data.exercices;
      })
      .catch(error => console.error(error));
  },
};

</script>
