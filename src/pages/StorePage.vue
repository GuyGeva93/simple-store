<template>
  <v-container>
    <v-row class="justify-center">
      <v-col sm="3"><SideBar /></v-col>
      <v-col sm="9" lg="7"><ProductDisplay /></v-col>
    </v-row>
  </v-container>
</template>

<script>
//import SideBar from '@/components/SideBar.vue';
import ProductDisplay from '@/components/Products/ProductDisplay.vue';
import SideBar from '@/components/SideBar.vue';
export default {
  components: {
    ProductDisplay,
    SideBar,
  },
};
</script>

<style>
</style>