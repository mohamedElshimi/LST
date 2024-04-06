<template>
  <div>
    <div class="mt-20 flex w-11/12">
      <!-- {{ prod2 }} -->
      <div class="w-6/12 flex justify-center overflow-hidden">
        <img
          :src="product.image"
          class="w-6/12 object-cover hover:w-7/12 transition-width duration-300"
          alt="Brand Image"
        />
      </div>
      <div class="w-6/12 px-4 flex flex-col justify-center">
        <h2 class="text-primary text-3xl font-semibold">
          {{ product.title }}
        </h2>
        <p class="my-5 text-lg">Brand : {{ product.brand }}</p>
        <p class="text-slate-700">{{ product.description }}</p>
      </div>
    </div>
    <div class="flex w-11/12 mx-auto">
      <router-link to="/products" class="primary-btn block ms-auto"
        >Back To Products</router-link
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      product: {},
      prod2: {},
      id: "",
      id2: "",
      id3: "",
      type: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    console.log(this.id);
    this.type = this.$route.params.type;
    let url = this.$route.fullPath;
   // Extracting the product category from the URL
const category = url.includes("IT-solution") ? "IT-solution" :
                url.includes("Surveillance-systems") ? "Surveillance-systems" :
                url.includes("Fingerprints") ? "Fingerprints" :
                null;

// Switch case based on the product category
switch (category) {
  case "IT-solution":
    axios.get("../../Products.json")
      .then((res) => {
        this.product = res.data["IT-solution"][this.id - 1];
        console.log(this.product);
      })
      .catch((err) => console.log(err));
    break;
  case "Surveillance-systems":
    axios.get("../../Products.json")
      .then((res) => {
        this.product = res.data["Surveillance-systems"][this.id-1];
        console.log(this.product);
      })
      .catch((err) => console.log(err));
    break;
  case "Fingerprints":
    axios.get("../../Products.json")
      .then((res) => {
        this.product = res.data["Fingerprints"][this.id - 1];
        console.log(this.product);
      })
      .catch((err) => console.log(err));
    break;
  default:
    console.log("Invalid URL or category");
    break;
}

   
   
  },
};
</script>

<style scoped></style>
