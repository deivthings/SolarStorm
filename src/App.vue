<template>
  <section style="min-height: 100vh;">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <router-view v-slot="{ Component }">
      <transition name="fadeX" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>

<script setup>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');

:root {
--color-primary: #23a7cf;
--color-primary-dark: #1b90b4;
--color-secondary: #f7f7f7;
--color-error: #ff5252;

--font-primary: 'Kdam Thmor Pro', sans-serif;
}

* {
  box-sizing: border-box;
}
html,body {
  height: 100%;
}
body {
  background-color: #27272A;
  background-color: black;
  background: black url("./assets/back-stars-4.jpg") no-repeat center center fixed;
  background-size: cover;

  min-height: 100vh;
}
#app {
  color: antiquewhite;
  min-height: 100%;
/*   font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
