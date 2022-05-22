<template>
  <div>
    <v-row>
      <v-col sm="6" md="4" v-for="product in products" :key="product.id">
        <ProductCard :product="product" :addToCart="addToCart" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProductCard from '@/components/Products/ProductCard.vue';
import addToCart from '@/mixins/addToCart';

export default {
  mixins: [addToCart],
  created() {
    try {
      this.products = this.$store.getters.products;
    } catch (e) {
      console.log(e);
    }
  },
  data() {
    return {
      products: null,
    };
  },
  components: {
    ProductCard,
  },
};
</script>

<style>
</style>