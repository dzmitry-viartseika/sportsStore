import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productList: [],
    currentPage: 1,
    pageSize: 4,
    categories: [],
  },
  getters: {
    productList(state) {
      return state.productList;
    },
    categories(state) {
      return state.categories;
    },
    processedProducts(state) {
      const index = (state.currentPage - 1) * state.pageSize;
      state.productList.sort((a, b) => {
        if ((Number(a.price) > Number(b.price))) {
          return 1;
        } return -1;
      });
      return state.productList.slice(index, index + state.pageSize);
    },
    pageCount(state) {
      return Math.ceil(state.productList.length / state.pageSize);
    },
  },
  mutations: {
    setProducts(state, productList) {
      state.productList = productList;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
    setPageSize(state, size) {
      state.pageSize = size;
      state.currentPage = 1;
    },
  },
  actions: {
    fetchProducts({ commit }) {
      const url = 'http://localhost:3500/goods';
      fetch(url)
        .then((response) => {
          return response.json()
            .then((data) => {
              commit('setProducts', data);
            }).catch((e) => {
              console.error(e);
            });
        });
    },
    fetchCategories({ commit }) {
      const url = 'http://localhost:3500/category';
      fetch(url)
        .then((response) => {
          return response.json()
            .then((data) => {
              console.log(data);
              commit('setCategories', data);
            }).catch((e) => {
              console.error(e);
            });
        });
    },
  },
  modules: {
  },
});
