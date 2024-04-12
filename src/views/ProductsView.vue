<template>
  <div class="container mt-24">
    <div class="text-4xl font-bold text-primary">Products</div>
    <div class="bg-secondry h-2 rounded-md"></div>
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
      <template v-for="(prod, index1) in products" :key="index1">
        <div
          v-for="(prod2, index2) in prod"
          :key="index2"
          class="flex flex-col rounded-2xl items-center justify-center shadow-lg p-6 hover:shadow-2xl transition duration-300 cursor-pointer lg:w-3/12 md:w-6/12 w-12/12"
        >
          <router-link :to="`/products/${index1}/${prod2.id}`">
            <div class="">
              <div class="flex justify-center relative overflow-hidden">
                <img
                  :src="prod2.image"
                  class="w-8/12 h-full object-cover hover:scale-110 transition duration-300 ease-in-out"
                  alt="Product Image"
                />
              </div>
              <div class="font-bold text-sm text-primary">
                {{ prod2.title }}
              </div>
              <div class="text-sm line-clamp-3">
                {{ prod2.description }}
              </div>
              <div class="flex justify-end">
                <div class="primary-btn mt-3 justify-center flex">See More</div>
              </div>
            </div>
          </router-link>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";
import axios from "axios";
import ProductsNav from "../utilities/ProductsNav.vue";

export default {
  name: "Products",
  components: {
    Icon,
    ProductsNav,
  },
  data() {
    return {
      products: [],
      survproducts: [],
      fingproducts: [],
      dvrproducts: [],
      currentIndex: 0,
      searchQuery: "",
    };
  },
  created() {
    axios
      .get("../../Products.json")
      .then((res) => {
        this.dvrproducts = res.data["IT-solution"];
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    axios
      .get("../../Products.json")
      .then((res) => {
        this.survproducts = res.data["Surveillance-systems"];
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    axios
      .get("../../Products.json")
      .then((res) => {
        this.fingproducts = res.data["Fingerprints"];
        console.log(res.data);
        this.products.push(
          this.dvrproducts,
          this.survproducts,
          this.fingproducts
        );
        console.log(this.products);
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
      return this.products.forEach((x) => {
        x.filter((item) =>
          item.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        ).slice(0, this.currentIndex + 12);
      });
    },
  },
};
</script>

<style scoped></style>
