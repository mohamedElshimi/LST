<template>
  <section class="">
    <div class="container flex">
      <div>
        <div class="text-4xl font-bold text-primary">We Worked With</div>
        <div class="bg-secondry h-2 rounded-md mb-10"></div>
      </div>
    </div>
    <div>
      <img
        src="../assets/Images/Partners.png"
        class="h-[300px] w-full"
        alt="Partners"
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
            alt="Alemad"
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
            alt="Family"
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
            alt="Hawag"
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
