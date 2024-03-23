<template>
  <div class="container">
    <div class="text-4xl font-bold text-primary">Products</div>
    <div class="bg-secondry w-2/12 h-2 rounded-md mb-10"></div>
    <div class="h-32">
      <swiper
        :slides-per-view="4"
        :space-between="10"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        
      >
        <swiper-slide
        v-for="(prod, index) in products"
        :key="index" class="flex flex-col items-center justify-center shadow-lg p-6 hover:shadow-2xl transition duration-300 cursor-pointer w-3/12 h-52"
        >
          <div class="flex justify-center overflow-auto">
            <img
              :src="prod.image"
              class="w-6/12 self-center hover:w-7/12 transition-width duration-300"
              alt=""
            />
          </div>
          <div class="font-bold text-sm text-primary">{{ prod.title }}</div>
          <div class="text-sm line-clamp-3">
            {{ prod.description }}
          </div>
          <div class="flex justify-end">
            <div class="primary-btn w-4/12 justify-center flex">See More</div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
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
        this.products = res.data["Surveillance Systems"];
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
    };
  },
};
</script>

<style scoped></style>
