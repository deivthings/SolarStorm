<template>
  <section>
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
* {
  box-sizing: border-box;
}
html,body {
  height: 100%;
}
body {
  background-color: #27272A;
  min-height: 100vh;
}
#app {
  color: antiquewhite;
/*   font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
