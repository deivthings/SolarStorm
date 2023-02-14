<template>
  <article class="wrapper-game">

    <header class="game-header mb-8">
      <h1>SOLAR STORM DAMAGE APP</h1>
      <h1>
        <span class="mr-3">ROUND</span>  
        <span class="badge">{{ appStore.round }}</span>
      </h1>
    </header>

    <section class="text-center mb-8">
      <button class="btn-action" @click="triggerDamageCard()" :disabled="loadingEvent">
        <bx-Icon icon="ant-design:security-scan-filled" size="xxl" />
        <div>
          Trigger Damage Phase
        </div> 
      </button>
    </section>

    <section v-auto-animate>
      <div v-if="loadingEvent">
        <scanning-ship></scanning-ship>
      </div>
      <div v-else> 
        <BasicDamageEvent v-if="currentDamageEvent" :damage="currentDamageEvent" v-auto-animate/> 
      </div>
    </section>
  </article>
</template>

<script setup>
import { onBeforeMount, ref } from "@vue/runtime-core"
import { useAppStore } from '@/stores/app'
import { buildDamageEventsDeck } from '@/lib/BuildEventsDeck'
import BasicDamageEvent from '@/components/BasicDamageEvent.vue'
import TextAnim from '@/components/testanim.vue'
import scanningShipVue from "@/components/scanning-ship.vue"

const appStore = useAppStore()
const currentDamageEvent = ref(null)
const loadingEvent = ref(false)
const LOADING_EVENT_DELAY = 2000

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
.wrapper-game {
  min-height: 100vh;
}
.game-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 1px 1px 10px 1px var(--color-primary);
}

h2, h1 {
  font-family: 'Kdam Thmor Pro', sans-serif;
}

.badge {
  background-color: var(--color-primary);
  padding: .3rem .8rem;
  border-radius: 20px;
  font-size: 1.3rem;
}

.btn-action {
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 20px;
  padding: 1rem;
  font-size: 1.2em;
  font-family: 'Kdam Thmor Pro', sans-serif;
  font-weight: bold;
  cursor: pointer;
}

.btn-action:hover {
  background-color: var(--color-primary-dark);
}
</style>
