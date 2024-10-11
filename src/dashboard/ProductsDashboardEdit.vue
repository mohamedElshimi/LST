<template>
  <div class="container">
    <router-link to="/DashboardView"
      ><div class="flex items-center gap-3">
        <i class="fa-solid fa-arrow-left cursor-pointer"></i>
        <div class="text-xl font-semibold">Edit Product</div>
      </div></router-link
    >
    <div class="">
      <form @submit.prevent="EditProduct(id)">
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
          />
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
            v-model="OneProduct.description"
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
import { useImageUploader } from "@/composables/useImageUploader";
import { supabase } from "@/lib/supabaseClient";

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
      OneProduct: {},
      product: {},
      prod2: {},
      id: "",
      category: "",
      edit: "",
    };
  },

  created() {
    this.id = this.$route.params.id;
    this.category = this.$route.params.category;
  },

  mounted() {
    // get one product
    this.fetchProductDetails(this.id);
  },

  methods: {
    handleFileUpload(e) {
      const file = event.target.files[0];
      if (file) {
        this.OneProduct.image = file;
      }
    },

    async EditProduct(productId) {
      try {
        const { uploadImage } = useImageUploader(); // Use the composable
        let imageUrl = this.OneProduct.image; // Existing image URL

        // If a new image is uploaded, handle the upload
        if (this.OneProduct.image && this.OneProduct.image instanceof File) {
          let bucketName = "";

          switch (this.category) {
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

          // Upload the new image using the composable and get the URL
          imageUrl = await uploadImage(this.OneProduct.image, bucketName);
          if (!imageUrl) {
            console.error("Failed to upload new image");
            return;
          }
        }

        // Construct the updated product data with the new image URL or existing one
        const updatedProduct = {
          title: this.OneProduct.title,
          description: this.OneProduct.description,
          brand: this.OneProduct.brand,
          image: imageUrl, // Set the correct image URL
        };

        // Update product based on the category
        switch (this.category) {
          case "surv":
            const { data: updatedSurveillance, error: survError } =
              await supabase
                .from("new_Surveillance")
                .update(updatedProduct)
                .eq("id", productId)
                .select();
            if (survError) {
              console.error("Error updating Surveillance:", survError);
            } else {
              console.log("Updated Surveillance:", updatedSurveillance);
              this.$router.push("/dashboard/products");
            }
            break;

          case "dvr":
            const { data: updatedDVR, error: dvrError } = await supabase
              .from("new_DVR")
              .update(updatedProduct)
              .eq("id", productId)
              .select();
            if (dvrError) {
              console.error("Error updating DVR:", dvrError);
            } else {
              console.log("Updated DVR:", updatedDVR);
              this.$router.push("/dashboard/products");
            }
            break;

          case "fing":
            const { data: updatedFingerprints, error: fingError } =
              await supabase
                .from("new_Fingerprints")
                .update(updatedProduct)
                .eq("id", productId)
                .select();
            if (fingError) {
              console.error("Error updating Fingerprints:", fingError);
            } else {
              console.log("Updated Fingerprints:", updatedFingerprints);
              this.$router.push("/dashboard/products");
            }
            break;

          default:
            console.log("Invalid category");
            break;
        }
      } catch (err) {
        console.error("Error editing product:", err);
      }
    },

    // get one product
    async fetchProductDetails(productId) {
      switch (this.category) {
        case "surv":
          const { data: surveillanceProduct, error: survError } = await supabase
            .from("new_Surveillance")
            .select("*")
            .eq("id", productId)
            .single();
          if (survError) {
            console.error("Error fetching Surveillance product:", survError);
          } else {
            this.OneProduct = surveillanceProduct;
          }
          break;

        case "dvr":
          const { data: dvrProduct, error: dvrError } = await supabase
            .from("new_DVR")
            .select("*")
            .eq("id", productId)
            .single();
          if (dvrError) {
            console.error("Error fetching DVR product:", dvrError);
          } else {
            this.OneProduct = dvrProduct;
          }
          break;

        case "fing":
          const { data: fingerprintsProduct, error: fingError } = await supabase
            .from("new_Fingerprints")
            .select("*")
            .eq("id", productId)
            .single();
          if (fingError) {
            console.error("Error fetching Fingerprints product:", fingError);
          } else {
            this.OneProduct = fingerprintsProduct;
          }
          break;

        default:
          console.log("Invalid category");
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
