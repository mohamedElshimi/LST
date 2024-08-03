<template>
  <div class="container mb-16">
    <div class="text-4xl font-bold text-primary">Services</div>
    <div class="bg-secondry w-2/12 h-2 rounded-md mb-10"></div>
    <div class="flex flex-wrap justify-evenly lg:p-12 gap-16 lg:gap-0">
      <div class="lg:w-3/12 md:w-6/12 w-12/12 p-10 cursor-pointer rounded-3xl shadow-lg flex flex-col items-center font-semibold hover:shadow-2xl transition duration-300 -rotate-45">
        <router-link to="/products/dvr" class="rotate-45 flex flex-col items-center">
          <Icon
            icon="lets-icons:ito-fill"
            class="text-primary hover:text-secondry transition duration-300 text-9xl"
          />
          <p class="text-primary">IT Solution</p>
        </router-link>
      </div>
      <div class="lg:w-3/12 md:w-6/12 w-12/12 p-10 cursor-pointer rounded-3xl shadow-lg flex flex-col items-center font-semibold hover:shadow-2xl transition duration-300 -rotate-45">
        <router-link to="/products/surveillance-systems" class="rotate-45 flex flex-col items-center">
          <Icon
            icon="fluent:camera-dome-24-filled"
            class="text-primary hover:text-secondry transition duration-300 text-9xl"
          />
          <p class="text-primary">Surveillance Systems</p>
        </router-link>
      </div>
      <div class="lg:w-3/12 md:w-6/12 w-12/12 p-10 cursor-pointer rounded-3xl shadow-lg flex flex-col items-center font-semibold hover:shadow-2xl transition duration-300 -rotate-45">
        <router-link to="/products/fingerprints" class="rotate-45 flex flex-col items-center">
          <Icon
            icon="wpf:fingerprintscan"
            class="text-primary hover:text-secondry transition duration-300 text-9xl"
          />
          <p class="text-primary">Fingerprint</p>
        </router-link>
      </div>
      <div class="lg:w-3/12 md:w-6/12 w-12/12 p-10 cursor-pointer rounded-3xl shadow-lg flex flex-col items-center font-semibold hover:shadow-2xl transition duration-300 -rotate-45">
        <router-link to="/products/gps" class="rotate-45 flex flex-col items-center">
          <Icon
            icon="mdi:cellphone-gps"
            class="text-primary hover:text-secondry transition duration-300 text-9xl"
          />
          <p class="text-primary">GPS Tracking</p>
        </router-link>
      </div>
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
};
</script>

<style scoped></style>
