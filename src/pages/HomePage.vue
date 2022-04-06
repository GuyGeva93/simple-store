<template>
  <v-container style="border: 1px solid">
    <AppHeader />
    <PopularProducts />
    <Footer />
  </v-container>
</template>

<script>
import AppHeader from '@/components/Home/AppHeader.vue';
import PopularProducts from '@/components/Home/PopularProducts.vue';
import Footer from '@/components/Home/AppFooter.vue';
export default {
  components: {
    AppHeader,
    PopularProducts,
    Footer,
  },
};
</script>

<style>
</style>