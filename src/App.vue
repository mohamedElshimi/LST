<template>
  <NavBar v-if="!$route.meta.hideNavbar"></NavBar>
  <RouterView class="my-20" />
  <Footer v-if="!$route.meta.hideNavbar"></Footer>
</template>

<script>
import NavBar from "../src/utilities/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>
<style scoped></style>
