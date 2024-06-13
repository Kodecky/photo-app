import { createStore } from 'vuex'
import axios from 'axios'
import { apiUrl } from '@/config'

export default createStore({
  state: {
    categories: []
  },
  getters: {
    categories (state) {
      return state.categories
    }
  },
  mutations: {
    UPDATE_CATEGORIES (state, data) {
      state.categories = data
    },
    SET_ERROR (state, error) {
      // Optionally handle the error state
      console.error('Vuex Error:', error)
    }
  },
  actions: {
    async fetchCategories ({ commit }) {
      try {
        const res = await axios.get(`${apiUrl}/categories`)
        commit('UPDATE_CATEGORIES', res.data)
      } catch (error) {
        console.error('Network Error:', error)
        commit('SET_ERROR', error)
      }
    }
  },
  modules: {
  }
})
