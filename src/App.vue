<template>
  <NavBar v-if="!$route.meta.hideNavbar"></NavBar>
  <RouterView class="mt-20" />
</template>
<script>
import NavBar from "../src/utilities/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
<style scoped></style>
