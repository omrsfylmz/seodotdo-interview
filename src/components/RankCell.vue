<template>
  <div class="cell-with-icon">
    <img class="star-icon" src="../assets/star.svg" />
    {{ this.params.value }}
  </div>
</template>

<style lang="scss" scoped>
@import url("../styles/cell.scss");

.star-icon {
  width: 18px;
  height: 24px;
  margin-right: 4px;
}
</style>
