import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productList: [],
  },
  getters: {
    productList(state) {
      return state.productList;
    },
  },
  mutations: {
    setProducts(state, productList) {
      state.productList = productList;
    },
  },
  actions: {
    fetchProducts({ commit }) {
      const url = 'http://localhost:3500/goods';
      fetch(url)
        .then(response => {
          return response.json()
            .then((data) => {
              commit('setProducts', data);
            }).catch((e) => {
              console.error(e);
            });
        });
    },
  },
  modules: {
  },
});
