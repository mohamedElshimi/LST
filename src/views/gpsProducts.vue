<template>
  <div class="container">
    <div class="text-4xl font-bold text-primary">Products</div>
    <div class="bg-secondry w-2/12 h-2 rounded-md mb-10"></div>
    <ProductsNav></ProductsNav>
    <div class="text-4xl font-bold text-primary">There is no GPS products right now, stay tuned</div>
  </div>
</template>

<script>
import ProductsNav from "../utilities/ProductsNav.vue";
    export default {
components:{
    ProductsNav
}
    }
</script>

<style scoped>

</style>