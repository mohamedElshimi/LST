<template>
  <div class="container">
    <div class="">
      <form @submit.prevent="AddProduct()">
        <div class="mt-8 relative z-0 w-full  group">
          <label for="" class="font-medium">Category *:</label>
          <select class="w-full mt-3 border border-gray-900 rounded" v-model="add" required>
            <option disabled selected>Categories</option>
            <option value="surv">Surveillance Systems</option>
            <option value="dvr">DVR</option>
            <option value="fing">Fingerprints</option>
          </select>
        </div>
        <!-- <div class="mt-8 relative z-0 w-full mb-6 group">
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
        </div> -->
        <div class="m relative z-0 w-full mb-6 group">
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            for="user_avatar"
            >Upload file</label
          >
          <input
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
            id="image"
            type="file"
            @change="handleFileUpload"
            accept="image/*"
            required
          />
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

<script setup>
import { supabase } from "@/lib/supabaseClient";
import { ref, reactive } from "vue";
let add = "";

let AddedProduct = reactive({
  title: "",
  brand: "",
  description: "",
  image: "",
});

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    AddedProduct.image = file;
  }
};

// Upload image to storage and return public URL
const uploadImage = async (file, bucketName) => {
  try {
    const fileName = `${Date.now()}essam_${file.name}`;
    const { error } = await supabase.storage
      .from(bucketName)
      .upload(fileName, file);

    if (error) {
      throw error;
    }

    // Retrieve the public URL after uploading the image
    const { data, error: urlError } = supabase.storage
      .from(bucketName)
      .getPublicUrl(fileName);

    if (urlError) {
      throw urlError;
    }


    return data.publicUrl; // Ensure this returns a valid URL
  } catch (err) {
    console.log("Error uploading image:", err);
    return null;
  }
};

const AddProduct = async () => {
  try {
    let imageUrl = "";

    if (AddedProduct.image && AddedProduct.image instanceof File) {
      // Select the appropriate bucket based on the category
      let bucketName = "";
      switch (add) {
        case "surv":
          bucketName = "surv_images";
          break;
        case "dvr":
          bucketName = "dvr_images";
          break;
        case "fing":
          bucketName = "fing_images";
          break;
        default:
          console.log("Invalid category");
          return;
      }

      // Upload image and get the public URL
      imageUrl = await uploadImage(AddedProduct.image, bucketName);
      if (!imageUrl) {
        console.error("Failed to upload image");
        return;
      }
      console.log("imageUrl:", imageUrl);
    } else {
      imageUrl = AddedProduct.image; // Use existing image URL if already set
    }

    const productData = { ...AddedProduct, image: imageUrl };

    switch (add) {
      case "surv":
        await supabase.from("new_Surveillance").insert(productData).select();
        break;
      case "dvr":
        await supabase.from("new_DVR").insert(productData).select();
        break;
      case "fing":
        await supabase.from("new_Fingerprints").insert(productData).select();
        break;
      default:
        console.log("Invalid category");
        return;
    }

    window.location.reload();
  } catch (err) {
    console.error("Error adding product:", err);
  }
};

// // add without new image upload
// const AddProduct = async () => {
//   switch (add) {
//     case "surv":
//       const { data: Surveillance } = await supabase
//         .from("new_Surveillance")
//         .insert(AddedProduct)
//         .select();
//       window.location.reload();
//       break;
//     case "dvr":
//       const { data: DVR } = await supabase
//         .from("new_DVR")
//         .insert(AddedProduct)
//         .select();
//       window.location.reload();
//       break;
//     case "fing":
//       const { data: Fingerprints } = await supabase
//         .from("new_Fingerprints")
//         .insert(AddedProduct)
//         .select();
//       window.location.reload();
//       break;
//     default:
//       // default case
//       break;
//   }
// };
</script>

<script>
import axios from "axios";
import database from "../../Products.json";
export default {
  name: "AddProduct",
  // data() {
  //   return {
  //     AddedProduct: {
  //       id: this.generateUniqueId(),
  //       title: "",
  //       brand: "",
  //       description: "",
  //       image: "",
  //     },
  //     survproducts: [],
  //     add: "",
  //   };
  // },

  // created() {
  //   console.log(database);
  // },
  //   methods: {
  //     AddProduct() {
  //   switch (this.add) {
  //     case "surv":
  //       database['Surveillance-systems'] = [...database['Surveillance-systems'], this.AddedProduct];
  //       break;
  //     case "dvr":
  //       database['IT-solution'] = [...database['IT-solution'], this.AddedProduct];
  //       break;
  //     case "fing":
  //       database['Fingerprints'] = [...database['Fingerprints'], this.AddedProduct];
  //       break;
  //     default:
  //       // default case
  //       break;
  //   }
  //   alert("Your product has been added successfully :)");
  //   this.$router.push('/dashboard/products/');
  //   window.location.reload();
  // },
  //     generateUniqueId() {
  //       // Generate a random unique ID
  //       return Math.floor(Math.random() * 1000000);
  //     },
  //   },
};
</script>

<style lang="scss" scoped></style>
