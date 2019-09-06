import Vue from 'vue'
import Vuex from 'vuex'
import store1 from "./module/store1.js"
import store2 from "./module/store2.js"
Vue.use(Vuex)


export default new Vuex.Store({
  modules: {
    store1: store1,
    store2: store2
  }
})