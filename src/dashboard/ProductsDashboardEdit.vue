<template>
  <div class="container">
    <router-link to="/DashboardView"
      ><div class="flex items-center gap-3">
        <i class="fa-solid fa-arrow-left cursor-pointer"></i>
        <div class="text-xl font-semibold">Edit Product</div>
      </div></router-link
    >
    <div class="">
      <form @submit.prevent="EditProduct">
        <div class="mt-8 relative z-0 w-full mb-6 group">
          <label for="" class="font-bold">Category:</label>
          <select class="ml-5" v-model="edit" required>
            <option disabled selected>Categories</option>
            <option value="surv">Surveillance Systems</option>
            <option value="dvr">DVR</option>
            <option value="fing">Fingerprints</option>
          </select>
        </div>
        <div class="mt-8 relative z-0 w-full mb-6 group">
          <input
            v-model="OneProduct.image"
            type="text"
            name="floating_rate"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            for="floating_rate"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Image URL</label
          >
        </div>
        <div class="mt-8 relative z-0 w-full mb-6 group">
          <input
            v-model="OneProduct.title"
            type="text"
            name="floating_first_name"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            for="floating_first_name"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Title</label
          >
        </div>
        <div class="mt-8 relative z-0 w-full mb-6 group">
          <input
            v-model="OneProduct.desc"
            type="text"
            name="floating_desc"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            for="floating_desc"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Description</label
          >
        </div>
        <div class="mt-8 relative z-0 w-full mb-6 group">
          <input
            v-model="OneProduct.brand"
            type="text"
            name="floating_fees"
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-dark appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
            placeholder=" "
            required
          />
          <label
            for="floating_fees"
            class="peer-focus:font-medium absolute text-sm text-dark duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >Brand</label
          >
        </div>
        <button
          class="primary-btn bg-gray-800 hover:bg-secondry text-white font-bold p-2 w-full"
        >
          Submit Edits
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditProduct",
  provide() {
    return {
      changeView: (togg) => {
        this.toggle = togg;
      },
    };
  },
  data() {
    return {
      OneProduct: {
        desc: "",
        title: "",
        brand: "",
        image: "",
      },
      product: {},
      prod2: {},
      id: "",
      type: "",
      edit:""
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.type = this.$route.params.type;
  },
  methods: {
    EditProduct() {
      let url = "";
      switch (this.edit) {
        case "surv":
          url = "http://localhost:3000/Surveillance-systems";
          console.log(this.edit);
          axios
        .put(
          `${url}/${this.id}`,
          this.OneProduct
        )
        .then((res) => {
          console.log(res.data);
          alert("your product has been updated successfully :)");
          this.$router.push('/dashboard/products/');
        })
        .catch((err) => {console.log(err)
        alert("please check the chosen category is compatible with the product");});
          break;
        case "dvr":
          url = "http://localhost:3000/IT-solution";
          console.log(this.edit);
          axios
        .put(
          `${url}/${this.id}`,
          this.OneProduct
        )
        .then((res) => {
          console.log(res.data);
          alert("your product has been updated successfully :)");
          this.$router.push('/dashboard/products/');
        })
        .catch((err) => {console.log(err)
        alert("please check the chosen category is compatible with the product");});
          break;
        case "fing":
          url = "http://localhost:3000/Fingerprints";
          console.log(this.edit);
          axios
        .put(
          `${url}/${this.id}`,
          this.OneProduct
        )
        .then((res) => {
          console.log(res.data);
          alert("your product has been updated successfully :)");
          this.$router.push('/dashboard/products/');
        })
        .catch((err) => {console.log(err)
        alert("please check the chosen category is compatible with the product");});
          break;
        default:
          // default URL
          break;
      }
      
    },
  },
};
</script>

<style lang="scss" scoped></style>
