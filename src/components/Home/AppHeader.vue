<template>
  <v-container>
    <v-sheet :height="sheetHeight">
      <h1 class="text-center display-1">Welcome to Liquor Store!</h1>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  computed: {
    sheetHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return '200px';
        case 'sm':
          return '300px';
        case 'md':
          return '300px';
        case 'lg':
          return '300px';
        case 'xl':
          return '350px';
      }
      return '300px';
    },
  },
};
</script>

<style>
</style>