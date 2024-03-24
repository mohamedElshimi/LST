<template>
  <NavBar></NavBar>
  <RouterView />
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
