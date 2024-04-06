<template>
  <div class="mt-24 flex flex-col lg:flex-row w-full lg:w-11/12 mx-auto">
  <div class="lg:w-6/12 flex justify-center overflow-hidden">
    <img
      :src="product.image"
      class="w-6/12 lg:w-full object-cover hover:w-7/12 transition-width duration-300"
      alt="Brand Image"
    />
  </div>
  <div class="lg:w-6/12 lg:px-4 flex flex-col justify-center mt-5 lg:mt-0">
    <h2 class="text-primary text-3xl font-semibold text-center lg:text-left">
      {{ product.title }}
    </h2>
    <p class="my-5 text-lg text-center lg:text-left">Brand : {{ product.brand }}</p>
    <p class="text-slate-700 text-center lg:text-left">{{ product.description }}</p>
  </div>
</div>
<div class="flex w-11/12 mx-auto">
  <button @click="goBack" class="primary-btn block mx-auto lg:mx-6 lg:ms-auto mt-5 lg:mt-0">
    Back To Products
  </button>
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
    // console.log(this.id);
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
        // console.log(this.product);
      })
      .catch((err) => console.log(err));
    break;
  case "Surveillance-systems":
    axios.get("../../Products.json")
      .then((res) => {
        this.product = res.data["Surveillance-systems"][this.id-1];
        // console.log(this.product);
      })
      .catch((err) => console.log(err));
    break;
  case "Fingerprints":
    axios.get("../../Products.json")
      .then((res) => {
        this.product = res.data["Fingerprints"][this.id - 1];
        // console.log(this.product);
      })
      .catch((err) => console.log(err));
    break;
  default:
    console.log("Invalid URL or category");
    break;
}

   
   
  },
  methods:{
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped></style>
