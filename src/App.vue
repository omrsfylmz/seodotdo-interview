<template>
  <router-view />
  <h1>Omer</h1>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300&display=swap");
@import url("./styles/variable.scss");

body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Barlow", sans-serif;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--app-bg-color);
  transition: background-color 0.2s ease, color 0.2s ease;
}
</style>
