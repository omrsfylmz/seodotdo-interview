<template>
  <span class="change-bg positive" v-if="this.params.value > 0">
    {{ `+${this.params.value}% ` }}
  </span>
  <span class="change-bg negative" v-else-if="this.params.value < 0">{{
    `-${this.params.value}% `
  }}</span>
  <span class="change-bg" v-else>{{ `${this.params.value}% ` }}</span>
</template>

<script>
export default {
  name: "ChangeCell",
};
</script>

<style lang="scss" scoped>
@import url("../styles/cell.scss");
</style>
