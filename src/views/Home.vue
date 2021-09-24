<template>
  <div class="home">
    <div class="home-header">
      <h1 class="title">Zeo Interview</h1>
      <button @click="setTheme()" class="toggle-btn">
        <i class="far fa-moon toggle-icon"></i>
      </button>
    </div>
    <grid
      @selectedKeyword="selectedKeyword = $event"
      @showModal="showModal = $event"
    />
    <modal
      :selectedKeyword="selectedKeyword"
      @closeModal="this.showModal = $event"
    />
  </div>
</template>

<script>
import Grid from "@/components/Grid.vue";
import { provide, ref } from "vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "Home",

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
  methods: {
    setTheme() {
      const body = document.querySelector("body");
      const toggleIcon = document.querySelector(".toggle-icon");
      console.log("omer");
      if (body.classList.contains("dark")) {
        body.classList.add("light");
        body.classList.remove("dark");
        toggleIcon.classList.remove("fa-lightbulb");
        toggleIcon.classList.add("fa-moon");
      } else {
        body.classList.add("dark");
        body.classList.remove("light");
        toggleIcon.classList.add("fa-lightbulb");
        toggleIcon.classList.remove("fa-moon");
      }
    },
  },

  computed: {
    darkDark() {
      return this.darkMode && "darkmode-toggled";
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("../styles/variable.scss");
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@600&display=swap");
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 1250px;
  height: 55%;
  margin: 0;
  background: var(--hero-bg-color);
  border-radius: 6px;
  &-header {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    background-color: var(--hero-bg-color);
  }

  .title {
    color: var(--hero-title-color);
    margin-left: 24px;
    font-weight: 600;
  }
  .toggle-icon,
  .toggle-btn {
    border: none;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .toggle-btn {
    margin-right: 12px;
    width: 36px;
    height: 36px;
  }
  .toggle-icon,
  .toggle-btn {
    color: var(--toggle-btn-color);
    background-color: var(--toggle-btn-bg-color);
  }
  .toggle-btn:hover {
    box-shadow: 0 0.5em 0.5em -0.4em var(--toggle-shadow-color);
    transform: translateY(-0.25em);
  }
}

@media screen and (max-width: 1100px) {
  .home {
    width: 95%;
  }
}

@media screen and (max-width: 768px) {
  .home {
    width: 100%;
  }
}
</style>
