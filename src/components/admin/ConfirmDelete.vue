<template>
  <div>
    <b-button
      v-show="showConfirmation"
      variant="danger"
      size="sm"
      class="mr-1"
      @click="emitMessage">
        Yes
      </b-button>
    <b-button
      v-show="showConfirmation"
      variant="success"
      size="sm"
      @click="showConfirmation = false">
        No
      </b-button>

    <font-awesome-icon
      class="cursor--pointer"
      v-on:click="showConfirmation = !showConfirmation"
      v-show="!showConfirmation"
      size="lg"
      :icon="['far', 'trash-alt']"
      title="Delete?" />
  </div>
</template>

<script>
export default {
  name: 'ConfirmDelete',
  props: {
    item: Object,
  },
  data() {
    return {
      showConfirmation: false,
    };
  },
  methods: {
    emitMessage() {
      this.showConfirmation = false;
      this.$emit('confirm-delete', this.item.id);
    },
  },
};
</script>
