<template>
  <v-card outlined max-width="250px">
    <v-img :src="product.imgSrc" max-height="120px" contain />
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle>{{ product.price }}</v-card-subtitle>
    <v-card-actions>
      <v-btn color="success" outlined @click="addToCart">
        <v-icon small>mdi-plus</v-icon>
        Add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: null,
      required: false,
    },
    addToCart: {
      type: Function,
    },
  },
};
</script>

<style>
</style>