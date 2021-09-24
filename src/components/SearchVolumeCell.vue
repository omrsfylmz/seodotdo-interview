<template>
  <div>
    <div class="cell-with-icon">
      <img
        role="button"
        class="opportunity-icon"
        src="../assets/icon-opportunity.svg"
      />
      {{ kFormatter(this.params.value) }}
    </div>
  </div>
</template>
<script>
export default {
  name: "SearchVolumeCell",
  methods: {
    kFormatter(num) {
      return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
        : Math.sign(num) * Math.abs(num);
    },
  },
};
</script>

<style lang="scss">
@import url("../styles/cell.scss");

.opportunity-icon {
  margin-right: 12px;
}
</style>
