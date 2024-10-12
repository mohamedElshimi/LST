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
    <!-- <div class="flex flex-wrap container my-5">
      <div class="lg:w-3/12 md:w-6/12 w-full px-2 lg:h-auto h-[320px] lg:mb-0 mb-2" v-for="(logo, index) in Clients" :key="index">
        <div class="workwith-card">
          <img
            :src="require(`@/assets/${logo}`)"
            class="w-3/4 transition duration-100"
            alt="client-logo"
          />
        </div>
      </div>
    </div> -->
    <swiper class="flex flex-wrap container my-5 h-full" :slides-per-view="4.5"
        :space-between="10"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :navigation="true"
        @swiper="onSwiper"
        
        :modules="modules"
        @slideChange="onSlideChange"
        :breakpoints="{
          '300': {
            slidesPerView: 1.5,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 3.5,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 4.5,
            spaceBetween: 10,
          },
        }">
    
      <swiper-slide
        class="swiper-h lg:w-3/12 md:w-6/12 w-full px-2 h-[320px] lg:mb-0 mb-2"
      >
        <div class="workwith-card">
          <img
            src="../assets/Images/Alemad.png"
            class="w-3/4 transition duration-100"
            alt="Alemad"
          />
        </div>
      </swiper-slide>
      <swiper-slide
        class="swiper-h lg:w-3/12 md:w-6/12 w-full px-2 lg:h-auto h-[320px] lg:mb-0 mb-2"
      >
        <div class="workwith-card">
          <img
            src="../assets/Images/Family Corp.jpg"
            class="w-3/4 transition duration-100"
            alt="Family"
          />
        </div>
      </swiper-slide>
      <swiper-slide
        class="swiper-h lg:w-3/12 md:w-6/12 w-full px-2 lg:h-auto h-[320px] lg:mb-0 mb-2"
      >
        <div class="workwith-card">
          <img
            src="../assets/Images/Hawag.jpg"
            class="w-3/4 h-3/4 transition duration-100"
            alt="Hawag"
          />
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-h lg:w-3/12 md:w-6/12 w-full px-2 h-[320px]">
        <div class="workwith-card">
          <img
            src="../assets/Images/Reliance.jpg"
            class="w-3/4 transition duration-100"
            alt=""
          />
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-h lg:w-3/12 md:w-6/12 w-full px-2 lg:h-auto h-[320px]">
        <div class="workwith-card">
          <img
            src="../assets/Images/Safi.jpg"
            class="w-3/4 transition duration-100"
            alt=""
          />
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-h lg:w-3/12 md:w-6/12 w-full px-2 lg:h-auto h-[320px]">
        <div class="workwith-card">
          <img
            src="../assets/Images/Contracting.jpg"
            class="w-3/4 transition duration-100"
            alt=""
          />
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-h lg:w-3/12 md:w-6/12 w-full px-2 lg:h-auto h-[320px]">
        <div class="workwith-card">
          <img
            src="../assets/Images/Newegypt.jpg"
            class="w-3/4 transition duration-100"
            alt=""
          />
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-h lg:w-3/12 md:w-6/12 w-full px-2 lg:h-auto h-[320px]">
        <div class="workwith-card">
          <img
            src="../assets/Images/AloufTravel.jfif"
            class="w-3/4 transition duration-100"
            alt=""
          />
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
export default {
  name: "WorkedWith",
  components: {
    Swiper,
    SwiperSlide,
  },
  data () {
    return {
      Clients : ["Alemad.png","../assets/Images/Family Corp.jpg","../assets/Images/Hawag.jpg","../assets/Images/Reliance.jpg","../assets/Images/Safi.jpg","../assets/Images/Contracting.jpg","../assets/Images/Newegypt.jpg","../assets/Images/AloufTravel.jfif"]
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return {
      onSwiper,
      onSlideChange,
      modules: [Autoplay, Navigation],
    };
  }
};
</script>

<style scoped>
.workwith-card:hover img {
  transform: scale(1.09);
}
.swiper-h {
  height: 300px;
}
</style>
