<template>
  <div>
    <Loader />
    <b-container>
      <b-row>
        <b-col>
          <h2>Dashboard</h2>

          <b-tabs content-class="mt-3">
            <b-tab title="Exercises" active>
              <exercises />
            </b-tab>
            <b-tab title="Areas">

            </b-tab>
            <b-tab title="Menus">

            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Exercises from '@/components/admin/Exercises.vue';
import Loader from '@/components/Loader.vue';

export default {
  components: {
    Exercises,
    Loader,
  },
  data() {
    return {
    };
  },
  mounted() {

  },
};
</script>
