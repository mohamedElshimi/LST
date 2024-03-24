<template>
  <section class="">
    <h2 class="text-3xl font-bold text-primary container hover:cursor-pointer">
      <span class="border-b-4 border-secondry">We Worked With</span>
    </h2>
    <div>
      <img
        src="../assets/Images/Partners.png"
        class="h-[300px] w-full"
        alt=""
      />
    </div>
    <div class="flex flex-wrap container my-5">
      <div
        class="lg:w-3/12 md:w-6/12 w-full px-2 lg:h-auto h-[320px] lg:mb-0 mb-2"
      >
        <div class="workwith-card">
          <img
            src="../assets/Images/Alemad.png"
            class="w-3/4 transition duration-100"
            alt=""
          />
        </div>
      </div>
      <div
        class="lg:w-3/12 md:w-6/12 w-full px-2 lg:h-auto h-[320px] lg:mb-0 mb-2"
      >
        <div class="workwith-card">
          <img
            src="../assets/Images/Family Corp.jpg"
            class="w-3/4 transition duration-100"
            alt=""
          />
        </div>
      </div>
      <div
        class="lg:w-3/12 md:w-6/12 w-full px-2 lg:h-auto h-[320px] lg:mb-0 mb-2"
      >
        <div class="workwith-card">
          <img
            src="../assets/Images/Hawag.jpg"
            class="w-3/4 h-3/4 transition duration-100"
            alt=""
          />
        </div>
      </div>
      <div class="lg:w-3/12 md:w-6/12 w-full px-2 lg:h-auto h-[320px]">
        <div class="workwith-card">
          <img
            src="../assets/Images/Reliance.jpg"
            class="w-3/4 transition duration-100"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WorkedWith",
};
</script>

<style scoped>
.workwith-card:hover img {
  transform: scale(1.09);
}
</style>
