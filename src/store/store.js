import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    counter: 0,
    loadingText: 'Please Wait'
  },
  mutations: {
    setCounter: function (state, counter) {
      state.counter = counter
    },
    setLoadingText: function (state, loadingText) {
      state.loadingText = loadingText
    }
  },
  actions: {
    updateCounter: function (context, counter) {
        context.commit('setCounter', counter)
    },
    updateLoadingText: function (context, loadingText) {
      context.commit('setLoadingText', loadingText)
    }
  }
})

export default store