import Vuex from 'vuex'

export const state = () => ({
  movies: [],
  user: null,
})

export const mutations = {
  setMovies(state, movies) {
    state.movies = movies
  },
  setUser(state, user) {
    state.user = user
  },
  clearUser(state) {
    state.user = null
  },
}

export const actions = {
  async fetchMovies({ commit }) {
    const response = await this.$axios.$get('https://api.example.com/movies')
    commit('setMovies', response)
  },
  async login({ commit }, userData) {
    const response = await this.$axios.$post('https://api.example.com/login', userData)
    commit('setUser', response.user)
  },
  logout({ commit }) {
    commit('clearUser')
  },
}

export const getters = {
  movies: (state) => state.movies,
  isAuthenticated: (state) => !!state.user,
  user: (state) => state.user,
}