<template>
  <div class="container">
    <div class="text-4xl font-bold text-primary">Products</div>
    <div class="bg-secondry w-2/12 h-2 rounded-md mb-10"></div>
    <div class="">
      <swiper
        :slides-per-view="4.5"
        :space-between="10"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :navigation="true"
        @swiper="onSwiper"
        class="h-full"
        :modules="modules"
        @slideChange="onSlideChange"
      >
        <template v-for="(prod, index1) in products" :key="index1">
          <swiper-slide
            v-for="(prod2, index) in prod"
            :key="index"
            class="flex flex-col items-center justify-center shadow-lg p-6 hover:shadow-2xl transition duration-300 cursor-pointer w-3/12 h-52"
          >
            <div class="flex justify-center overflow-auto">
              <img
                :src="prod2.image"
                class="w-6/12 self-center hover:w-7/12 transition-width duration-300"
                alt=""
              />
            </div>
            <div class="font-bold text-sm text-primary">{{ prod2.title }}</div>
            <div class="text-sm line-clamp-3">
              {{ prod2.description }}
            </div>
            <div class="flex justify-end">
              <div class="primary-btn mt-2 justify-center flex">See More</div>
            </div>
          </swiper-slide>
        </template>
      </swiper>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
export default {
  name: "ProductSection",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      products: [],
    };
  },
  created() {
    axios
      .get("http://localhost:3000/products")
      .then((res) => {
        this.products = res.data;
        console.log(res.data);
      })
      .catch((err) => console.log(err));
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
  },
};
</script>

<style scoped></style>
