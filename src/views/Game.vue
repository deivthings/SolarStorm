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

import { buildDamageEventsDeck } from '@/lib/BuildEventsDeck'

const appStore = useAppStore()

/**
 * before mount app, build the events deck
 */
onBeforeMount(() => buildDamageEventsDeck())

/**
 * On click trigger damage event button
 */
const triggerDamageCard = () => {
  appStore.incrementRound()
  console.warn(appStore.getRoundDamageCard)
}

</script>

<style lang="scss" scoped>

</style>