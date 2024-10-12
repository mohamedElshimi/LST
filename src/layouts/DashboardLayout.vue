<template>
  <div class="flex">

    <!-- sidebar examble in just dashboard -->
    <div class="w-3/12 bg-black">
      <sidebar />
    </div>
    <div class="w-9/12">
      <RouterView class="my-20" />

    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Dashboard/Sidebar.vue';
export default {
  components: { Sidebar },};
</script>
