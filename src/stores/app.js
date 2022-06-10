import { registerRuntimeHelpers } from '@vue/compiler-core'
import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    // Ronda ( cada jugador es una ronda - no todos los jugadores componen una ronda)
    round: 0,

    // El mazo de daño.
    damageDeck: []
  }),

  getters: {
    getRoundDamageCard: (state) => state.damageDeck[state.round - 1],
    doubleCount: (state) => state.counter * 2
  },
  
  actions: {
    incrementRound() {
      this.round++
    },

    decrementRound() {
      this.round--
    },

    addDamageCard(damageCard) {
      this.damageDeck.push(damageCard)
    }
  }
})
