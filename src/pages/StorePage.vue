<template>
  <v-container>
    <v-row>
      <!-- <v-col lg="3"><SideBar /></v-col> -->
      <v-col lg="9"><ProductDisplay /></v-col>
    </v-row>
  </v-container>
</template>

<script>
 //import SideBar from '@/components/SideBar.vue';
import ProductDisplay from '@/components/Products/ProductDisplay.vue';
export default {
  
  components: {
    ProductDisplay,
    //SideBar
  },
};
</script>

<style>
</style>