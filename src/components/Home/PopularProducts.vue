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
            <v-card outlined>
              <v-img :src="product.imgSrc" max-height="10px" contain/>
              <v-card-title>{{ product.name }}</v-card-title>
              <v-card-subtitle>{{ product.price }}</v-card-subtitle>
              <v-card-actions>
                <v-btn color="success" outlined>Add to cart</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import products from '@/data/products.js';
export default {
  created() {
    this.products = products;
    console.log('products.imgSrc',products[0].imgSrc);
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