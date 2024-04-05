<template>
  <div
    class="relative flex flex-col lg:flex-row bg-first-bannner text-xl min-h-[410px] md:bg-contain bg-cover bg-center bg-no-repeat"
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
            IT Solution
          </h1>
          <p class="text-white mx-auto lg:mx-0 text-sm">
            Revolutionize your workflow with our cutting-edge IT solution,
            streamlining processes and boosting efficiency. Harnessing the power
            of advanced technology, our platform ensures seamless integration
            and unparalleled performance. Elevate your business to new heights
            with our customizable and scalable IT solution.
          </p>
        </div>
        <div class="text-center lg:text-left">
          <router-link to="/products/dvr"
            ><button class="primary-btn block">
              Explore Products
            </button></router-link
          >
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
.bg-first-bannner {
  background: url("./../../../assets/Banner/IT-Solution.png") no-repeat 100%/100%;
  background-size: cover;
}
</style>
