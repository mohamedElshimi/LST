<template>
  <div>
    <HomeBanner></HomeBanner>
    <AboutUs></AboutUs>
    <ServicesSec></ServicesSec>
    <ProductSection></ProductSection>
    <WorkedWith></WorkedWith>
    <ContactUS></ContactUS>
    <Footer></Footer>
  </div>
</template>

<script>
import HomeBanner from "../components/HomeComp/HomeBanner.vue";
import ServicesSec from "../components/HomeComp/ServicesSection.vue";
import ProductSection from "../components/HomeComp/ProductsSection.vue"
import WorkedWith from "@/components/WorkedWith.vue";
import ContactUS from "@/components/ContactUS.vue";
import Footer from "@/components/Footer.vue";
import AboutUs from "@/components/AboutUs.vue";
export default {
  name: "home",
  components: {
    HomeBanner,
    ServicesSec,
    ProductSection,
    AboutUs,
    WorkedWith,
    ContactUS,
    Footer,
  },
};
</script>

<style scoped></style>
