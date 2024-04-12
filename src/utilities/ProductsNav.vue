<template>
  <div class=" mb-4">
    <div class="flex flex-wrap justify-evenly lg:gap-0">
      <router-link
        to="/products/dvr"
        class="lg:w-2/12 md:w-6/12 w-6/12 lg:mb-0 lg:mx-0 mb-8 mx-0 p-8 cursor-pointer rounded-3xl shadow-lg flex flex-col items-center font-semibold hover:shadow-2xl transition duration-300"
      >
        <div class="flex flex-col items-center">
          <Icon
            icon="material-symbols:fiber-dvr-rounded"
            class="text-primary hover:text-secondry transition duration-300 text-9xl active:text-secondry focus:text-secondry"
            :class="{ active: isActive('/products/dvr') }"
          />
          <p class="text-primary">DVR</p>
        </div>
      </router-link>
      <router-link
        to="/products/surveillance-systems"
        class="lg:w-2/12 md:w-6/12 w-6/12 lg:mb-0 lg:mx-0 mb-8 mx-0 p-8 cursor-pointer rounded-3xl shadow-lg flex flex-col items-center font-semibold hover:shadow-2xl transition duration-300"
      >
        <div class="flex flex-col items-center">
          <Icon
            icon="fluent:camera-dome-24-filled"
            class="text-primary hover:text-secondry transition duration-300 text-9xl active:text-secondry focus:text-secondry"
            :class="{ active: isActive('/products/surveillance-systems') }"
          />
          <p class="text-primary text-center">Surveillance Systems</p>
        </div>
      </router-link>
      <router-link
        to="/products/fingerprints"
        class="lg:w-2/12 md:w-6/12 w-6/12 lg:mb-0 lg:mx-0 mb-8 mx-0 p-8 cursor-pointer rounded-3xl shadow-lg flex flex-col items-center font-semibold hover:shadow-2xl transition duration-300"
      >
        <div class="flex flex-col items-center">
          <Icon
            icon="wpf:fingerprintscan"
            class="text-primary hover:text-secondry transition duration-300 text-9xl active:text-secondry focus:text-secondry"
            :class="{ active: isActive('/products/fingerprints') }"
          />
          <p class="text-primary">Fingerprint</p>
        </div>
      </router-link>
      <router-link
        to="/products/gps"
        class="lg:w-2/12 md:w-6/12 w-6/12 lg:mb-0 lg:mx-0 mb-8 mx-0 p-8 cursor-pointer rounded-3xl shadow-lg flex flex-col items-center font-semibold hover:shadow-2xl transition duration-300"
      >
        <div class="flex flex-col items-center">
          <Icon
            icon="mdi:cellphone-gps"
            class="text-primary hover:text-secondry transition duration-300 text-9xl active:text-secondry focus:text-secondry"
            :class="{ active: isActive('/products/gps') }"
          />
          <p class="text-primary">GPS Tracking</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "ServiceSec",
  components: {
    Icon,
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>

<style scoped>
.active {
  color: #f9c02c;
}
</style>
