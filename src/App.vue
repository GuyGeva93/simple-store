<template>
  <v-app>
    <TopNav />
    <v-main>
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
  </v-app>
</template>

<script>
import TopNav from '@/components/NavBar/TopNav.vue';
export default {
  name: 'App',
  components: {
    TopNav,
  },
  created () {
    this.$store.commit('getProducts');
  },
};
</script>

<style lang="scss" scoped>
.div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
