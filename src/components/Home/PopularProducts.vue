<template>
  <v-container mb-12>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <h2>
          Popular Products
          <v-btn to="/store" color="primary" text>View All</v-btn>
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <v-row>
          <v-col sm="6" md="4" v-for="product in products" :key="product.id">
            <ProductCard :product="product" :addToCart="addToCart" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductCard from '@/components/Products/ProductCard.vue';
import addToCart from '@/mixins/addToCart';

export default {
  mixins: [addToCart],
  components: {
    ProductCard,
  },
  created() {
    try {
      this.products = this.$store.state.products.slice(0, 3);
    } catch (e) {
      console.log(e);
    }
  },
  data() {
    return {
      products: null,
    };
  },
};
</script>

<style>
</style>