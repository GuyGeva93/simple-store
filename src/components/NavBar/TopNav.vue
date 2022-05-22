<template>
  <v-container class="px-0 layout">
    <v-app-bar>
      <v-toolbar-title>Liquor Store</v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="hidden-sm-and-up">
        <v-btn @click.stop="drawer = !drawer" depressed>
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </span>
      <ToolbarItems />
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
        >
          <v-list-item-icon small>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-item-icon>
          {{ item.title }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
import ToolbarItems from './ToolbarItems.vue';
export default {
  components: { ToolbarItems },
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Home', link: '/', icon: 'home' },
        { title: 'Store', link: '/store', icon: 'liquor' },
        { title: 'Cart', link: '/cart', icon: 'cart' },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.layout {
  grid-column: 2;
}
</style>
