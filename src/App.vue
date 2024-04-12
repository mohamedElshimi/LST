<template>
  <NavBar v-if="!$route.meta.hideNavbar"></NavBar>
  <RouterView class="mt-20" />
  <Footer></Footer>
</template>
<script>
import NavBar from "../src/utilities/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    NavBar,Footer
  },
};
</script>
<style scoped></style>
