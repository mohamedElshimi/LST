<script setup>
import { supabase } from "@/lib/supabaseClient";
import { ref } from 'vue';

let Products = ref([]);
const fetchproducts = async ()=> {
  try {
let { data: Fingerprints,  } = await supabase
  .from('Fingerprints')
  .select('*')
  Products.value.push(Fingerprints);
  console.table(Fingerprints);
  }
   catch (error) {
    console.log(error);
  }
}
const fetchdvrproducts = async ()=> {
let { data: DVR,  } = await supabase
  .from('DVR')
  .select('*')
  Products.value.push(DVR);
  console.table(DVR);
}
const fetchsurvproducts = async ()=> {
  let { data: Surveillance,  } = await supabase
  .from('Surveillance')
  .select('*')
  Products.value.push(Surveillance);
  console.table(Surveillance);
  console.log(Products.value);
}

fetchsurvproducts();
fetchdvrproducts();
fetchproducts();

</script>

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
    }"
      >
        <template v-for="(prod2, index) in Products"
            :key="index">
          <swiper-slide v-for="(prod,index2) in prod2" :key="index2"
            class="flex flex-col items-center justify-center shadow-lg p-6 hover:shadow-2xl transition duration-300 cursor-pointer w-3/12 h-52"
            ><router-link :to="`/products/Surveillance-systems/${prod.id}`">
              <div class="flex justify-center relative overflow-hidden">
                <img
                  :src="prod.image"
                  class="w-6/12 self-center object-cover hover:scale-150 transition duration-300"
                  alt=""
                />
              </div>
              <div class="font-bold text-sm text-primary">
                {{ prod.title }}
              </div>
              <div class="text-sm line-clamp-3">
                {{ prod.description }}
              </div>
              <div class="flex justify-end">
                <div class="primary-btn mt-2 justify-center flex">See More</div>
              </div></router-link
            >
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
    // axios
    //   .get("../../../Products.json")
    //   .then((res) => {
    //     this.products = res.data["Surveillance-systems"];
    //     // console.log(this.products);
    //   })
    //   .catch((err) => console.log(err));
   
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
