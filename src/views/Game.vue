<template>
  <article>
    <h1>Game</h1>
    <h2>Round: {{ appStore.round }}</h2>
    <button @click="triggerDamageCard()">Trigger Damage Phase</button>
    <bx-Icon icon="ic:sharp-edit-note" />
    <h2 v-if="loadingEvent">LOADING TIME.....</h2>
    <div v-else>
      <BasicDamageEvent v-if="currentDamageEvent" :damage="currentDamageEvent"/>
    </div>
  </article>
</template>

<script setup>
import { onBeforeMount, ref } from "@vue/runtime-core"
import { useAppStore } from '@/stores/app'
import { buildDamageEventsDeck } from '@/lib/BuildEventsDeck'
import BasicDamageEvent from '@/components/BasicDamageEvent.vue'

const appStore = useAppStore()
const currentDamageEvent = ref(null)
const loadingEvent = ref(false)
const LOADING_EVENT_DELAY = 3000

/**
 * On click trigger damage event button
 */
const triggerDamageCard = () => {
  appStore.incrementRound()
  loadingEvent.value = true

  setTimeout(() => {
    currentDamageEvent.value = appStore.getRoundDamageCard
    loadingEvent.value = false
  }, LOADING_EVENT_DELAY)

  // currentDamageEvent.value = appStore.getRoundDamageCard
  console.warn(appStore.getRoundDamageCard)
}

/**
 * before mount app, build the events deck
 */
onBeforeMount(() => buildDamageEventsDeck())

</script>

<style lang="css" scoped>
h2 {
  font-family: 'Kdam Thmor Pro', sans-serif;
  color: tomato;
}
</style>