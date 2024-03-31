<template>
  <div class="container mb-4">
    <div class="flex flex-wrap justify-evenly lg:p-12 gap-16 lg:gap-0">
      <router-link
      to="/dashboard/products" @click="sendDataToParent('dvr'),Nav='dvr'" 
        class="lg:w-2/12 md:w-6/12 w-12/12 p-8 cursor-pointer rounded-3xl shadow-lg flex flex-col items-center font-semibold hover:shadow-2xl transition duration-300"
      >
        <div class="flex flex-col items-center">
          <Icon
            icon="material-symbols:fiber-dvr-rounded"
            class="text-primary hover:text-secondry transition duration-300 text-9xl active:text-secondry focus:text-secondry"
            :class="{ active: Nav=='dvr' }"
          />
          <p class="text-primary">DVR</p>
        </div>
      </router-link>
      <router-link
        to="/dashboard/products" @click="sendDataToParent('surv'),Nav='surv'" 
        class="lg:w-2/12 md:w-6/12 w-12/12 p-8 cursor-pointer rounded-3xl shadow-lg flex flex-col items-center font-semibold hover:shadow-2xl transition duration-300"
      >
        <div class="flex flex-col items-center">
          <Icon
            icon="fluent:camera-dome-24-filled"
            class="text-primary hover:text-secondry transition duration-300 text-9xl active:text-secondry focus:text-secondry"
            :class="{ active: Nav=='surv' }"
          />
          <p class="text-primary">Surveillance Systems</p>
        </div>
      </router-link>
      <router-link
      to="/dashboard/products" @click="sendDataToParent('fing'),Nav='fing'" 
        class="lg:w-2/12 md:w-6/12 w-12/12 p-8 cursor-pointer rounded-3xl shadow-lg flex flex-col items-center font-semibold hover:shadow-2xl transition duration-300"
      >
        <div class="flex flex-col items-center">
          <Icon
            icon="wpf:fingerprintscan"
            class="text-primary hover:text-secondry transition duration-300 text-9xl active:text-secondry focus:text-secondry"
            :class="{ active: Nav=='fing' }"
          />
          <p class="text-primary">Fingerprint</p>
        </div>
      </router-link>
      <router-link
        to=""
        class="lg:w-2/12 md:w-6/12 w-12/12 p-8 cursor-pointer rounded-3xl shadow-lg flex flex-col items-center font-semibold hover:shadow-2xl transition duration-300"
      >
        <div class="flex flex-col items-center">
          <Icon
            icon="mdi:cellphone-gps"
            class="text-primary hover:text-secondry transition duration-300 text-9xl active:text-secondry focus:text-secondry"
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
  data(){
return {
  Nav:"surv",
}
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
    sendDataToParent(dta) {
      this.$emit('send-data', dta);
    },
  },

};
</script>

<style scoped>
.active {
  color: #f9c02c;
}
</style>
