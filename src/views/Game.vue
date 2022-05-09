<template>
  <article>
    <h1>Game</h1>
    <h2>Round: {{ appStore.round }}</h2>
    <button @click="triggerDamageCard()">Trigger Damage Phase</button>
  </article>
</template>

<script setup>
import { onBeforeMount, ref } from "@vue/runtime-core"
import { useAppStore } from '@/stores/app'
import { useDamageEvents } from '@/stores/damageEvents'

const appStore = useAppStore()
const damageEvents = useDamageEvents()
const eventsDeck = ref([])

/**
 * before mount app, build the events deck
 */
onBeforeMount(() => buildEventsDeck())

/**
 * Build Events Deck
 */
const buildEventsDeck = () => {
  let leapHardnessValue = 8 // 8 => 1 damage || 8 => 2 damage || 8 => 3 damage
  let totalCards = 24

  for (let index = 0; index < totalCards; index++) {
    // level 1
    if (index < leapHardnessValue) { 
      appStore.addDamageCard({id: index, ...damageEvents.basic.find(ev => ev.level === 1) })
      // eventsDeck.value.push({id: index, ...damageEvents.basic.find(ev => ev.level === 1) })
    }

    // level 2
    if (index >= leapHardnessValue && index < leapHardnessValue * 2) {
      appStore.addDamageCard({ id: index, ...damageEvents.basic.find(ev => ev.level === 2) })
      // eventsDeck.value.push({ id: index, ...damageEvents.basic.find(ev => ev.level === 2) })
    }

    // level 3
    if (index >= leapHardnessValue * 2 && index <= leapHardnessValue * 3) {
      appStore.addDamageCard({ id: index, ...damageEvents.basic.find(ev => ev.level === 3) })
      // eventsDeck.value.push({ id: index, ...damageEvents.basic.find(ev => ev.level === 3) })
    }
  }
}

const triggerDamageCard = () => {
  appStore.incrementRound()
  console.warn(appStore.getRoundDamageCard)
}

</script>

<style lang="scss" scoped>

</style>