<template>
  <v-app>
    <TopNav />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TopNav from '@/components/NavBar/TopNav.vue';
export default {
  name: 'App',
  components: {
    TopNav,
  },
};
</script>
