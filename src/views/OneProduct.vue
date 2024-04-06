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
      type: "",
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.type = this.$route.params.type;
    axios
      .get(`../../Products.json/IT-solution/${this.id}`)
      .then((res) => {
        // this.product = res.data[this.type];
        // console.log(this.id);
        // this.prod2 = this.product.find((obj) => {
        //   return obj.id == this.id;
        // });
        this.product=res.data
        // console.log(this.prod2);
      })
      .catch((err) => console.log(err));
    axios
      .get(`../../Products.json/Surveillance-systems/${this.id}`)
      .then((res) => {
        // this.product = res.data[this.type];
        // console.log(this.id);
        // this.prod2 = this.product.find((obj) => {
        //   return obj.id == this.id;
        // });
        this.product=res.data
        // console.log(this.prod2);
      })
      .catch((err) => console.log(err));
    axios
      .get(`../../Products.json/Fingerprints/${this.id}`)
      .then((res) => {
        // this.product = res.data[this.type];
        // console.log(this.id);
        // this.prod2 = this.product.find((obj) => {
        //   return obj.id == this.id;
        // });
        this.product=res.data
        // console.log(this.prod2);
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style scoped></style>
