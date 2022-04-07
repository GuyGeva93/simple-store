export default {
  methods: {
    addToCart(index, quantity = 1) {
      this.$store.commit('addItemToCart', { itemId: index, quantity });
      this.$store.commit('updateSnackbar', { show: true });
    },
  },
};
