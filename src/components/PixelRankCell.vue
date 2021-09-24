<template>
  <div class="single-cell">
    {{ kFormatter(this.params.value) }}
  </div>
</template>
<script>
export default {
  name: "PixelRankCell",
  methods: {
    kFormatter(num) {
      return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
        : Math.sign(num) * Math.abs(num);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("../styles/cell.scss");
</style>
