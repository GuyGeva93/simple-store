<template>
  <v-app>
    <div class="app-layout">
      <TopNav />
      <v-main class="main-app">
        <router-view></router-view>
      </v-main>
      <v-snackbar
        v-model="$store.state.snackbar.show"
        :top="true"
        :timeout="5000"
        :color="$store.state.snackbar.variant"
        :transition="'slide-y-transition'"
      >
        {{ $store.state.snackbar.message }}
      </v-snackbar>
    </div>
  </v-app>
</template>

<script>
import TopNav from '@/components/NavBar/TopNav.vue';
export default {
  name: 'App',
  components: {
    TopNav,
  },
  created() {
    this.$store.commit('getProducts');
  },
};
</script>

<style lang="scss" scoped>
.app-layout {
  display: grid;
  grid-template-columns: 1fr 1260px 1fr;
}
.main-app  {
  grid-column: 2;
}
</style>
