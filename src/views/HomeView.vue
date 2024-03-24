<template>
  <div class="">
    <AboutUs></AboutUs>
    <WorkedWith></WorkedWith>
    <ContactUS></ContactUS>
    <Footer></Footer>
  </div>
</template>

<script>
import WorkedWith from "@/components/WorkedWith.vue";
import ContactUS from "@/components/ContactUS.vue";
import Footer from "@/components/Footer.vue";
import AboutUs from "@/components/AboutUs.vue";
export default {
  name: "home",
  components: {
    AboutUs,
    WorkedWith,
    ContactUS,
    Footer,
  },
};
</script>

<style scoped></style>
