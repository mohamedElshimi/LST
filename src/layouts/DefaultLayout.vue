<template>
  <NavBar v-if="!$route.meta.hideNavbar"></NavBar>
  <RouterView class="my-20" />
  <Footer v-if="!$route.meta.hideNavbar"></Footer>
</template>

<script>
import Footer from "@/components/Footer.vue";
import NavBar from "@/utilities/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
};
</script>
