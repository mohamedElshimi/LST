<template>
  <div class="container">
    <div class="text-4xl font-bold text-primary">Products</div>
    <div class="bg-secondry w-2/12 h-2 rounded-md mb-10"></div>
    <ProductsNav></ProductsNav>
    <div class="flex">
      <input
        v-model="searchQuery"
        type="search"
        class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-primary focus:border-primary outline-primary"
        placeholder="Search by products name ..."
      />
      <button
        class="bg-primary w-1/12 flex justify-center items-center text-white rounded-lg hover:bg-white hover:text-primary transition duration-300 border-2 border-primary"
      >
        <Icon icon="ic:round-search" class="text-xl w-8" />
        <p class="font-medium">Search</p>
      </button>
    </div>
    <div class="flex flex-wrap gap-0">
      <div
        v-for="(prod, index) in items"
        :key="index"
        class="flex flex-col rounded-2xl items-center justify-center shadow-lg p-6 hover:shadow-2xl transition duration-300 cursor-pointer lg:w-3/12 md:w-6/12 w-12/12"
      >
        <router-link :to="`/products/IT-solution/${prod.id}`">
          <div class="">
            <div class="flex justify-center relative overflow-hidden">
              <img
                :src="prod.image"
                class="w-8/12 h-full object-cover hover:scale-110 transition duration-300 ease-in-out"
                alt="DVR Image"
              />
            </div>
            <div class="font-bold text-sm text-primary">{{ prod.title }}</div>
            <div class="text-sm line-clamp-3">
              {{ prod.description }}
            </div>
            <div class="flex justify-end">
              <div class="primary-btn mt-3 justify-center flex">See More</div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <div class="text-center">
      <button
        @click="loadMore"
        class="primary-btn w-40 h-12 justify-center m-5"
      >
        More To Explore
      </button>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import axios from "axios";
import ProductsNav from "../utilities/ProductsNav.vue";
import database from "@/data/Products.json"
export default {
  name: "dvr",
  components: {
    Icon,
    ProductsNav,
    database
  },
  data() {
    return {
      database,
      products: [],
      currentIndex: 0,
      searchQuery: "",
    };
  },
  created() {
    
    axios
      .get("http://localhost:3000/IT-solution")
      .then((res) => {
        this.products = res.data;
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  },
  methods: {
    loadMore() {
      this.currentIndex += 12;
    },
  },
  computed: {
    items() {
      return (
        this.products
          // .filter((item) => item.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
          .filter((item) =>
            item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
          )
          .slice(0, this.currentIndex + 12)
      );
    },
  },
};
</script>

<style scoped></style>
