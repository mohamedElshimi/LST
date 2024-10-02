<template>
  <div class="m-48">
    <form @submit.prevent="addProduct">
      <input type="file" @change="handleFileUpload" required />
      <button type="submit">Add Product</button>
    </form>
  </div>
</template>

<script>
import { supabase } from "@/lib/supabaseClient";

export default {
  data() {
    return {
      selectedFile: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
      console.log(`${this.selectedFile.name}`);
    },

    async addProduct() {
      if (!this.selectedFile) {
        alert("Please upload an image.");
        return;
      }

      const fileName = `${Date.now()}-${this.selectedFile.name}`;
      const { data, error } = await supabase.storage
        .from("surv_images")
        .upload(`products/${fileName}`, this.selectedFile)

      if (error) {
        console.return;
      }
    },
  },
};
</script>
