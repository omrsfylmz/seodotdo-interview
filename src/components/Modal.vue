<template>
  <div v-if="this.useshowModal" class="modal">
    <div class="modal-content">
      <h2 class="modal-title">
        Search Volume
        <span @click="closeModal()" class="close">
          <i class="fa fa-times"></i>
        </span>
      </h2>
      <p class="modal-keyword">{{ this.selectedKeyword }}</p>
      <div v-if="volumeData.length === 0" class="loading">
        <Circle />
      </div>
      <div v-else>
        <chart :volumeData="volumeData"></chart>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "./Chart";
import axios from "axios";
import { inject } from "vue";
import { Circle } from "vue-loading-spinner";
export default {
  name: "Modal",
  props: ["selectedKeyword"],
  components: {
    Chart,
    Circle,
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
          this.volumeData = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

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

<style lang="scss" scoped>
@import url("../styles/variable.scss");
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
}

.modal {
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 9999;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-content {
  flex-direction: column;
  background: var(--modal-bg);
  margin: 12% auto;
  padding: 12px 24px;
  width: 30%;
  position: relative;
  overflow-y: scroll;
}
.modal-title,
.modal-keyword {
  align-self: flex-start;
  margin-left: 3vh;
}

.modal-title {
  color: var(--modal-title);
  padding: 0;
  margin-bottom: 0;
}
.modal-keyword {
  color: var(--modal-keyword);
  font-size: 14px;
}

.close {
  font-size: 24px;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 4vh;
  margin-right: 24px;
  color: var(--modal-close);
}

.close:hover,
.close:focus {
  color: var(--modal-close-hover);
  text-decoration: none;
  cursor: pointer;
}

@media only screen and (max-width: 1440px) {
  .modal-content {
    width: 50%;
  }
}

@media only screen and (max-width: 1200px) {
  .modal-content {
    width: 70%;
  }
}

@media only screen and (max-width: 800px) {
  .modal-content {
    width: 90%;
  }
}
</style>
