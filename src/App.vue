<template>
  <grid
    @selectedKeyword="selectedKeyword = $event"
    @showModal="showModal = $event"
  />

  <modal
    :selectedKeyword="selectedKeyword"
    @closeModal="this.showModal = $event"
  />
</template>

<script>
import Grid from "./components/Grid.vue";
import { provide, reactive, ref } from "vue";
import Modal from "./components/Modal.vue";

export default {
  components: {
    Grid,
    Modal,
  },
  setup() {
    const showModal = ref(false);

    provide("showModal", showModal);
  },
  data() {
    return {
      selectedKeyword: "",
    };
  },
};
</script>
