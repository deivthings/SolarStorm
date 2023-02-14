<!-- tarjeta de daño basica del juego => dañor en 1/2/3 room-->
<template>
  <div>
    <h2>{{  }}</h2>
    <section class="card-event">
      <ul class="matrix-rooms">
        <li :class="['room', `room${index + 1}`, {'has-damage animate__animated animate__pulse animate__infinite': room === 1}]" 
          v-for="(room, index) in rooms" :key="index">
            <h6 class="room-label">room {{ index + 1 }}</h6>
            <!-- room value::::: {{ room }} -->
            <!-- <bx-Icon v-if="room === 1" icon="bi:x-circle-fill" class="text-rose-500" size="xl"/> -->
            <bx-Icon v-if="room === 1" icon="bx:error" class="text-rose-500" size="xxl"/>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { computed, reactive, ref, toRefs, watch, watchEffect, watchPostEffect } from "@vue/runtime-core"

const props = defineProps({ damage: Object })
const rooms = ref([0,0,0,0,0,0,0,0])

/**
 * Watcher for props damage
 * Usin postEffect in order to access methods resetRooms and AddDamageToRooms before initialization
 * With watchEffect ( without flush ) no puedes acceder a los metodos 
 * en la primera inicialización
 * https://stackoverflow.com/questions/69279288/prevent-running-watcheffect-function-after-app-mounts-in-vue-3
 * https://vuejs.org/api/reactivity-core.html#watcheffect
 * Se podría hacer con un watch normal y con el evento onmounted para la primera vez
 */
let { damage } = toRefs(props)
watchPostEffect(() => {
  resetRooms()
  addDamageToRooms()
})

/**
 * Initiliaze rooms
 */
const resetRooms = () => rooms.value = [0,0,0,0,0,0,0,0]

/**
 * Turn 0 to 1 on random rooms array
 * The number of rooms damaged comes from value of damage object => level2: { level: 2, name: 'Damage on two locations', type: 'damage-location', value: 2
 */
const addDamageToRooms = () => {
  let damagedRooms = []
  let rndRoom = undefined

  while(damagedRooms.length < props.damage.value) {
     rndRoom = Math.floor(Math.random() * (8 - 0)) + 0
     
    if(rooms.value[rndRoom] !== 1) { 
      damagedRooms.push(rndRoom)
      rooms.value[rndRoom] = 1
    }
  }
} 


</script>

<style scoped>
.card-event {
  margin: 0 auto;
  border: 2px solid var(--color-primary);
  border-radius: 20px;
  padding: 3rem;
  width: clamp(715px, 60%, 800px);
  background-color: rgba(0, 0, 0, .5);
  box-shadow: 1px 1px 10px 1px var(--color-primary);
}

.matrix-rooms {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 15px;
  grid-row-gap: 15px;
}

.room {
  position: relative;
  background: #000;
  border-radius: 10px;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-primary);
}

.room.has-damage {
  border: 2px solid var(--color-error);
}

.room-label {
  position: absolute;
  font-size: .8rem;
  font-family: var(--font-primary);
  top: 5px;
  left: 12px;
}

.room1 { grid-area: 1 / 1 / 2 / 2; }
.room2 { grid-area: 1 / 2 / 2 / 3; }
.room3 { grid-area: 1 / 3 / 2 / 4; }
.room4 { grid-area: 2 / 1 / 3 / 2; }
.room5 { grid-area: 2 / 3 / 3 / 4; }
.room6 { grid-area: 3 / 1 / 4 / 2; }
.room7 { grid-area: 3 / 2 / 4 / 3; }
.room8 { grid-area: 3 / 3 / 4 / 4; }


</style>