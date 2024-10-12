<template class="flex flex-col hieghtview justify-between">
  <NavBar v-if="!$route.meta.hideNavbar"></NavBar>
  <RouterView class="my-20" />
  <Footer class="justify-self-end" v-if="!$route.meta.hideNavbar"></Footer>
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
<style>
.hieghtview {
  height: 100vh;
}
</style>
