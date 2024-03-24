<template>
  <div>
    <HomeBanner></HomeBanner>
    <ServicesSec></ServicesSec>
    <ProductSection></ProductSection>
  </div>
</template>

<script>
import HomeBanner from "../components/HomeComp/HomeBanner.vue";
import ServicesSec from "../components/HomeComp/ServicesSection.vue";
import ProductSection from "../components/HomeComp/ProductsSection.vue"
  export default {
    name:'home',
    components:{
      HomeBanner,
      ServicesSec,
      ProductSection,
    }
  }
</script>

<style scoped>

</style>
