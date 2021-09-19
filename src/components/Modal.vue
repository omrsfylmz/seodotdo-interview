<template>
  <div>
    <div v-if="this.useshowModal" id="myModal" class="modal">
      <div class="modal-content">
        <h2 class="modal-title">
          Search Volume
          <span @click="closeModal()" class="close">
            <i class="fas fa-times close">x</i>
          </span>
        </h2>
        <p class="modal-keyword">{{ this.selectedKeyword }}</p>
        <div v-if="volumeData.length === 0">
          loading
        </div>
        <div v-else>
          <chart :volumeData="volumeData"></chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "./Chart";
import axios from "axios";
import { inject } from "vue";
export default {
  name: "Modal",
  props: ["selectedKeyword"],
  components: {
    Chart,
  },
  setup() {
    const useshowModal = inject("showModal");
    return {
      useshowModal,
    };
  },

  watch: {
    selectedKeyword() {
      axios
        .post(process.env.VUE_APP_ITEM_API, {
          country: "tr",
          lang: "tr",
          keyword: this.selectedKeyword,
        })
        .then(({ data }) => {
          console.log(data);
          this.volumeData = data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },

  //   updated() {
  //     axios
  //       .post(process.env.VUE_APP_ITEM_API, {
  //         country: "tr",
  //         lang: "tr",
  //         keyword: this.selectedKeyword,
  //       })
  //       .then(({ data }) => {
  //         console.log(data);
  //         this.volumeData = data;
  //       })
  //       .catch(function(error) {
  //         console.log(error);
  //       });
  //   },
  data() {
    return {
      volumeData: [],
    };
  },

  methods: {
    closeModal() {
      this.useshowModal = false;
      this.volumeData = [];
    },
  },
};
</script>
<style></style>
