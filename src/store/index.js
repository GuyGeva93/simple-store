import Vue from 'vue';
import Vuex from 'vuex';
import productsList from '@/data/products.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: productsList,
    snackbar: {
      show: false,
      variant: 'success',
      message: 'Item added to the cart!',
    },
    cart: [],
  },
  getters: {},
  mutations: {
    addItemToCart(state, { itemId, quantity }) {
      const idx = state.cart.findIndex((product) => {
        return product.itemId === itemId;
      });
      if (idx === -1) {
        state.cart.push({ itemId, quantity });
      } else {
        state.cart[idx].quantity += 1;
      }
    },
    updateSnackbar(state, { show }) {
      state.snackbar.show = show;
    },
  },
  actions: {},
  modules: {},
});
