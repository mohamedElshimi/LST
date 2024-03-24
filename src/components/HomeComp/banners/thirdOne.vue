<template>
  <div
    class="relative flex flex-col lg:flex-row bg-last-bannner min-h-[410px] text-xl md:bg-contain bg-cover bg-center bg-no-repeat"
  >
    <!-- Background div -->
    <div
      class="absolute inset-0 lg:w-full h-full shade p-8 lg:rounded-r-2xl animate-slide-in"
    ></div>
    <!-- Text div -->
    <div
      class="relative z-10 lg:w-5/12 h-full p-8 lg:rounded-r-2xl animate-slide-in"
    >
      <div class="h-full flex flex-col justify-center space-y-10 lg:pl-16">
        <div class="text-center lg:text-left lg:w-11/12 space-y-10">
          <h1
            class="font-extrabold text-4xl leading-normal text-white mx-auto lg:mx-0"
          >
            GPS Tracking System
          </h1>
          <p class="text-white text-sm">
            Gain real-time visibility and control over your assets with our
            innovative GPS tracking system. Track vehicles, equipment, and
            personnel effortlessly, ensuring optimal fleet management and
            security. Enhance efficiency, reduce costs, and streamline
            operations with our customizable GPS tracking solution.
          </p>
        </div>
        <div class="text-center lg:text-left">
          <router-link to="/services">
            <button class="primary-btn">Explore More</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-slide-in {
  animation: slideIn 1s ease-in forwards;
}
.shade {
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0));
}
.bg-last-bannner {
  background: url("./src/assets/Banner/GPS.png") no-repeat 100%/100%;
  background-size: cover;
}
</style>
