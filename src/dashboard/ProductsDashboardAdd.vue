<template>
  <div class="container">
    <div class="">
      <form @submit.prevent="AddProduct">
        <div class="mt-8 relative z-0 w-full mb-6 group">
          <label for="" class="font-bold">Category:</label>
          <select class="ml-5" v-model="add" required>
            <option disabled selected>Categories</option>
            <option value="surv">Surveillance Systems</option>
            <option value="dvr">DVR</option>
            <option value="fing">Fingerprints</option>
          </select>
        </div>
        <div class="mt-8 relative z-0 w-full mb-6 group">
          <input
            v-model="AddedProduct.image"
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
            v-model="AddedProduct.title"
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
            v-model="AddedProduct.description"
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
            v-model="AddedProduct.brand"
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
          Add Product
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddProduct",
  data() {
    return {
      AddedProduct: {
        id: this.generateUniqueId(),
        title: "",
        brand: "",
        description: "",
        image: "",
      },
      survproducts: [],
      add: "",
    };
  },

  created() {},
  methods: {
    AddProduct() {
      let url = "";
      switch (this.add) {
        case "surv":
          url = "http://localhost:3000/Surveillance-systems";
          console.log(this.add);
          axios
            .post(url, this.AddedProduct)
            .then((res) => {
              console.log(res.data);
              alert("Your product has been added successfully :)");
              this.$router.push('/dashboard/products/');
              window.location.reload()
            })
            .catch((err) => {
              alert(
                "please check the chosen category is compatible with the product"
              );
              console.log(err);
            });
          break;
        case "dvr":
          url = "http://localhost:3000/IT-solution";
          console.log(this.add);
          axios
            .post(url, this.AddedProduct)
            .then((res) => {
              console.log(res.data);
              alert("Your product has been added successfully :)");
              this.$router.push('/dashboard/products/');
              window.location.reload()
            })
            .catch((err) => {
              alert(
                "please check the chosen category is compatible with the product"
              );
              console.log(err);
            });
          break;
        case "fing":
          url = "http://localhost:3000/Fingerprints";
          console.log(this.add);
          axios
            .post(url, this.AddedProduct)
            .then((res) => {
              console.log(res.data);
              alert("Your product has been added successfully :)");
              this.$router.push('/dashboard/products/');
              window.location.reload()
            })
            .catch((err) => {
              alert(
                "please check the chosen category is compatible with the product"
              );
              console.log(err);
            });
          break;
        default:
          // default URL
          break;
      }
    },
    generateUniqueId() {
      // Generate a random unique ID
      return Math.floor(Math.random() * 1000000);
    },
  },
};
</script>

<style lang="scss" scoped></style>
