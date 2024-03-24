<template>
  <div class="">
    <transition name="fade" mode="out-in">
      <div :key="currentIndex">
        <firstOne v-if="currentIndex === 0" />
        <secOne v-if="currentIndex === 1" />
        <thirdOne v-if="currentIndex === 2" />
      </div>
    </transition>

    <!-- Add more components as needed -->

    <!-- <button @click="prevSlide">Previous</button>
      <button @click="nextSlide">Next</button> -->
  </div>
</template>

<script>
import firstOne from "./banners/firstOne.vue";
import secOne from "./banners/secOne.vue";
import thirdOne from "./banners/thirdOne.vue";
export default {
  components: {
    firstOne,
    secOne,
    thirdOne,
  },
  data() {
    return {
      currentIndex: 0,
      intervalId: null,
    };
  },
  mounted() {
    // Delay the start of auto-slide and fade transition by 2 seconds
    setTimeout(() => {
      this.startAutoSlide();
    }, 2000);
  },
  methods: {
    startAutoSlide() {
      this.intervalId = setInterval(this.nextSlide, 8000); // Change slide every 6000 milliseconds (6 seconds)
    },
    prevSlide() {
      this.stopAutoSlide();
      this.currentIndex = (this.currentIndex - 1 + 3) % 3;
      this.startAutoSlide();
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % 3;
    },
    stopAutoSlide() {
      clearInterval(this.intervalId);
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s ease-in-out; /* Adjust the duration and timing function for a smoother fade */
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0.1;
}
</style>
