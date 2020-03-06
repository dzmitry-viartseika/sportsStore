import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productList: [],
    currentPage: 1,
    pageSize: 4,
    categories: [],
    currentCategory: 'All',
    orderedProducts: [],
    isCheckOut: false,
  },
  getters: {
    isCheckOut(state) {
      return state.isCheckOut;
    },
    totalPrice(state) {
      const res = [];
      let result;
      if (state.orderedProducts.length) {
        state.orderedProducts.forEach((item) => {
          res.push(item.price * item.quantity);
        });
        result = res.reduce((sum, el) => {
          return sum + el;
        });
        return result.toFixed(2);
      }
      return 0;
    },
    orderedProducts(state) {
      return state.orderedProducts;
    },
    productsFilteredByCategory(state) {
      return state.productList.filter((item) => state.currentCategory === 'All' || item.category === state.currentCategory);
    },
    productList(state) {
      return state.productList;
    },
    categories(state) {
      return state.categories;
    },
    processedProducts(state, getters) {
      const index = (state.currentPage - 1) * state.pageSize;
      return getters.productsFilteredByCategory
        .slice(index, index + state.pageSize);
    },
    categoryList(state) {
      return ['All', ...new Set(state.products.map((p) => p.category).sort())];
    },
    pageCount(state) {
      return Math.ceil(state.productList.length / state.pageSize);
    },
  },
  mutations: {
    thankModal(state) {
      state.isCheckOut = true;
    },
    addToCart(state, product) {
      state.orderedProducts.push({
        ...product,
        quantity: 1,
      });
    },
    removeFromCart(state, id) {
      state.orderedProducts.splice(id, 1);
    },
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
    setCurrentCategory(state, category) {
      console.log(category);
      state.currentCategory = category;
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
