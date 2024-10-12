<template>
  <div class="flex">
    <!-- <div class="w-3/12">
      <sidebar />
    </div> -->
    <div class="w-full">
      <RouterView class="my-20" />

    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Dashboard/Sidebar.vue';
export default {
  components: { Sidebar },};
</script>
