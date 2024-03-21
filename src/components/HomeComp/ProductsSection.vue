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
          class="flex flex-col items-center justify-center shadow-lg p-6 hover:shadow-2xl transition duration-300 cursor-pointer w-3/12 h-52"
        >
          <div class="flex justify-center overflow-auto">
            <img
              src="/src/assets/31ol2fxeFaL._AC_UF1000,1000_QL80_.jpg"
              class="w-6/12 self-center hover:w-7/12 transition-width duration-300"
              alt=""
            />
          </div>
          <div class="font-bold text-sm text-primary">Zero Tech -ZTGIP-D2M</div>
          <div class="text-sm">
            Sony 1/2.9" Exmor CMOS Sensor • 2.8mm Megapixel Lens • Full
            HD(1080P)
          </div>
          <div class="flex justify-end">
            <div class="primary-btn w-4/12 justify-center flex">See More</div>
          </div>
        </swiper-slide>
        <swiper-slide
          class="flex flex-col items-center justify-center shadow-lg p-6 hover:shadow-2xl transition duration-300 cursor-pointer w-3/12 h-52"
        >
          <div class="flex justify-center overflow-auto">
            <img
              src="/src/assets/k14-1.png"
              class="w-6/12 self-center hover:w-7/12 transition-width duration-300"
              alt=""
            />
          </div>
          <div class="font-bold text-sm text-primary">Zero Tech -ZTGIP-D2M</div>
          <div class="text-sm">
            Sony 1/2.9" Exmor CMOS Sensor • 2.8mm Megapixel Lens • Full
            HD(1080P)
          </div>
          <div class="flex justify-end">
            <div class="primary-btn w-4/12 justify-center flex">See More</div>
          </div>
        </swiper-slide>
        <swiper-slide
          class="flex flex-col items-center justify-center shadow-lg p-6 hover:shadow-2xl transition duration-300 cursor-pointer w-3/12 h-52"
        >
          <div class="flex justify-center overflow-auto">
            <img
              src="/src/assets/S100576935_1.jpg"
              class="w-6/12 self-center hover:w-7/12 transition-width duration-300"
              alt=""
            />
          </div>
          <div class="font-bold text-sm text-primary">Zero Tech -ZTGIP-D2M</div>
          <div class="text-sm">
            Sony 1/2.9" Exmor CMOS Sensor • 2.8mm Megapixel Lens • Full
            HD(1080P)
          </div>
          <div class="flex justify-end">
            <div class="primary-btn w-4/12 justify-center flex">See More</div>
          </div>
        </swiper-slide>
        <swiper-slide
          class="flex flex-col items-center justify-center shadow-lg p-6 hover:shadow-2xl transition duration-300 cursor-pointer w-3/12 h-52"
        >
          <div class="flex justify-center overflow-auto">
            <img
              src="/src/assets/slide1619528518.png"
              class="w-6/12 self-center hover:w-7/12 transition-width duration-300"
              alt=""
            />
          </div>
          <div class="font-bold text-sm text-primary">Zero Tech -ZTGIP-D2M</div>
          <div class="text-sm">
            Sony 1/2.9" Exmor CMOS Sensor • 2.8mm Megapixel Lens • Full
            HD(1080P)
          </div>
          <div class="flex justify-end">
            <div class="primary-btn w-4/12 justify-center flex">See More</div>
          </div>
        </swiper-slide>
        <swiper-slide
          class="flex flex-col items-center justify-center shadow-lg p-6 hover:shadow-2xl transition duration-300 cursor-pointer w-3/12 h-52"
        >
          <div class="flex justify-center overflow-auto">
            <img
              src="/src/assets/k14-1.png"
              class="w-6/12 self-center hover:w-7/12 transition-width duration-300"
              alt=""
            />
          </div>
          <div class="font-bold text-sm text-primary">Zero Tech -ZTGIP-D2M</div>
          <div class="text-sm">
            Sony 1/2.9" Exmor CMOS Sensor • 2.8mm Megapixel Lens • Full
            HD(1080P)
          </div>
          <div class="flex justify-end">
            <div class="primary-btn w-4/12 justify-center flex">See More</div>
          </div>
        </swiper-slide>
        <swiper-slide
          class="flex flex-col items-center justify-center shadow-lg p-6 hover:shadow-2xl transition duration-300 cursor-pointer w-3/12 h-52"
        >
          <div class="flex justify-center overflow-auto">
            <img
              src="/src/assets/31ol2fxeFaL._AC_UF1000,1000_QL80_.jpg"
              class="w-6/12 self-center hover:w-7/12 transition-width duration-300"
              alt=""
            />
          </div>
          <div class="font-bold text-sm text-primary">Zero Tech -ZTGIP-D2M</div>
          <div class="text-sm">
            Sony 1/2.9" Exmor CMOS Sensor • 2.8mm Megapixel Lens • Full
            HD(1080P)
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
    };
  },
};
</script>

<style scoped></style>
