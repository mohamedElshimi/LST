<script setup>
import { supabase } from "@/lib/supabaseClient";
import { useRoute } from 'vue-router';
import { ref } from 'vue';
let oneProd = ref({});
const router = useRoute();
const ID = router.params.id;
console.log(ID);
let url = router.fullPath;
console.log(url);
const category = url.includes("IT-solution") ? "IT-solution" :
                url.includes("Surveillance-systems") ? "Surveillance-systems" :
                url.includes("Fingerprints") ? "Fingerprints" :
                null;
const fetchproducts = async ()=> {
// Switch case based on the product category
switch (category) {
  case "IT-solution":
  let { data: new_DVR,  } = await supabase
  .from('new_DVR')
  .select('*').eq('id', ID).single();
  oneProd.value = new_DVR;
  console.table(new_DVR);
    break;
  case "Surveillance-systems":
  let { data: new_Surveillance,  } = await supabase
  .from('new_Surveillance')
  .select('*').eq('id', ID).single();
  oneProd.value = new_Surveillance;
  console.table(new_Surveillance);
    break;
  case "Fingerprints":
  let { data: new_Fingerprints,  } = await supabase
  .from('new_Fingerprints')
  .select('*').eq('id', ID).single();
  oneProd.value = new_Fingerprints;
  console.table(new_Fingerprints);
    break;
  default:
    console.log("Invalid URL or category");
    break;
}
}
fetchproducts();
const goBack=()=> {
  window.history.back();
    }


</script>
<template>
  <div class="mt-24 flex flex-col lg:flex-row w-full lg:w-11/12 mx-auto">
  <div class="lg:w-6/12 flex justify-center overflow-hidden">
    <img
      :src="oneProd.image"
      class="w-6/12 lg:w-6/12 object-cover hover:w-7/12 transition-width duration-300"
      alt="Brand Image"
    />
  </div>
  <div class="lg:w-6/12 lg:px-4 flex flex-col justify-center mt-5 lg:mt-0">
    <h2 class="text-primary text-3xl font-semibold text-center lg:text-left">
      {{ oneProd.title }}
    </h2>
    <p class="my-5 text-lg text-center lg:text-left">Brand : {{ oneProd.brand }}</p>
    <p class="text-slate-700 text-center lg:text-left">{{ oneProd.description }}</p>
  </div>
</div>
<div class="flex w-11/12 mx-auto">
  <button @click="goBack()" class="primary-btn block mx-auto my-10 lg:mx-6 lg:ms-auto mt-5 lg:mt-0">
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
//     this.id = this.$route.params.id;
//     // console.log(this.id);
//     this.type = this.$route.params.type;
//     let url = this.$route.fullPath;
//    // Extracting the product category from the URL
// const category = url.includes("IT-solution") ? "IT-solution" :
//                 url.includes("Surveillance-systems") ? "Surveillance-systems" :
//                 url.includes("Fingerprints") ? "Fingerprints" :
//                 null;

// // Switch case based on the product category
// switch (category) {
//   case "IT-solution":
//     axios.get("../../Products.json")
//       .then((res) => {
//         this.product = res.data["IT-solution"][this.id - 1];
//         // console.log(this.product);
//       })
//       .catch((err) => console.log(err));
//     break;
//   case "Surveillance-systems":
//     axios.get("../../Products.json")
//       .then((res) => {
//         this.product = res.data["Surveillance-systems"][this.id-1];
//         // console.log(this.product);
//       })
//       .catch((err) => console.log(err));
//     break;
//   case "Fingerprints":
//     axios.get("../../Products.json")
//       .then((res) => {
//         this.product = res.data["Fingerprints"][this.id - 1];
//         // console.log(this.product);
//       })
//       .catch((err) => console.log(err));
//     break;
//   default:
//     console.log("Invalid URL or category");
//     break;
// }

   
   
  },
  methods:{
    // goBack() {
    //   this.$router.go(-1);
    // }
  }
};
</script>

<style scoped></style>
