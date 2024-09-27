<template>
  <div class="container">
    <p @click="signOut" class="cursor-pointer hover:text-red-600">Logout</p>
    <ProductsNavDashVue @send-data="receiveDataFromChild"></ProductsNavDashVue>
    <div class="flex justify-end mt-10">
      <div
        v-if="showadd === ''"
        @click="showadd = 'show'"
        class="flex items-center cursor-pointer"
      >
        <Icon
          icon="ic:baseline-add"
          width="24"
          height="24"
          style="color: #45ce31"
        />
        <div>Add Product</div>
      </div>
    </div>

    <AddProduct v-if="showadd === 'show'"></AddProduct>

    <table
      class="w-full text-center text-dark bg-white shadow-lg rounded-2xl mb-9"
      v-if="showadd === ''"
    >
      <thead class="text-xs uppercase">
        <tr class="border-b">
          <td
            class="px-6 py-4 text-center text-primary text-lg tracking-widest"
            colspan="4"
          ></td>
        </tr>
        <tr class="bg-primary text-white tracking-wider">
          <th scope="col" class="px-6 py-3 w-2">Id</th>
          <th scope="col" class="px-6 py-3 w-6/12">Image</th>
          <th scope="col" class="px-6 py-3 w-2/12">Title</th>
          <th scope="col" class="px-6 py-3 w-2/12">Brand</th>
          <th scope="col" class="px-6 py-3 w-2/12">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b" v-for="(prod, Indx) in prodd" :key="Indx">
          <template v-if="Indx >= pre && Indx <= nxt">
            <th
              scope="row"
              class="px-6 py-4 font-medium text-dark whitespace-nowrap"
            >
              {{ Indx }}
            </th>
            <td class="px-6 py-4 flex justify-center">
              <img :src="prod.image" class="w-4/12" alt="" />
            </td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-dark whitespace-nowrap"
            >
              {{ prod.title }}
            </th>
            <td class="px-6 py-4">
              {{ prod.brand }}
            </td>
            <td class="px-6 py-4">
              <div>
                <router-link
                  :to="`/dashboard/products/edit/${receivedData}/${prod.id}`"
                  class="flex justify-center my-4"
                >
                  <Icon
                    icon="material-symbols:edit-outline"
                    width="24"
                    height="24"
                    style="color: #004a54"
                /></router-link>
              </div>
              <div
                class="flex justify-center my-4 cursor-pointer"
                @click="confirmDelete(prod.id)"
              >
                <Icon
                  icon="uiw:delete"
                  width="24"
                  height="24"
                  style="color: #db2424"
                />
              </div>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { supabase } from "@/lib/supabaseClient";
import { ref, onMounted } from "vue";
import Swal from "sweetalert2";
const prodd = ref([]);
let showadd = ref(""),
  receivedData = "surv",
  added = "",
  nxt = 50,
  pre = 0;

// get all products
const fetchproducts = async () => {
  switch (receivedData) {
    case "dvr":
      let { data: DVR } = await supabase.from("new_DVR").select("*");
      prodd.value = DVR;
      break;
    case "surv":
      let { data: Surveillance } = await supabase
        .from("new_Surveillance")
        .select("*");
      prodd.value = Surveillance;
      break;
    case "fing":
      let { data: Fingerprints } = await supabase
        .from("new_Fingerprints")
        .select("*");
      prodd.value = Fingerprints;
      break;
    default:
      console.log("Invalid URL or category");
      break;
  }
};

// delete product
const deleteProduct = async (productId) => {
  try {
    let response = null;
    switch (receivedData) {
      case "surv":
        response = await supabase
          .from("new_Surveillance")
          .delete()
          .eq("id", productId);
        break;

      case "dvr":
        response = await supabase.from("new_DVR").delete().eq("id", productId);
        break;

      case "fing":
        response = await supabase
          .from("new_Fingerprints")
          .delete()
          .eq("id", productId);
        break;

      default:
        console.log("Invalid category");
        return;
    }

    // Check if response is not null or undefined
    if (response && response.error) {
      console.error("Error deleting product:", response.error);
    } else {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your product has been deleted successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      await fetchproducts(); // Refresh the list after deletion
    }
  } catch (err) {
    console.error("Error during deletion:", err);
  }
};

// confirm delete
const confirmDelete = (productId) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(deleteProduct(productId));
    }
  });
};

const receiveDataFromChild = (data) => {
  receivedData = data;
  fetchproducts();
};

async function signOut() {
  const { error } = await supabase.auth.signOut();
  console.log(error);
  router.push("/dashboard/Admin");
}

async function seeCurrent() {
  const localuser = await supabase.auth.getSession();
  if (!localuser.data.session) {
    router.push("/dashboard/Admin");
  }
}

fetchproducts();
seeCurrent();
</script>

<script>
import axios from "axios";
import AddProduct from "../dashboard/ProductsDashboardAdd.vue";
import ProductsNavDashVue from "@/utilities/ProductsNavDash.vue";
import { Icon } from "@iconify/vue";
import { supabase } from "@/lib/supabaseClient";
import router from "@/router";

export default {
  name: "ProductsDashboard",
  components: {
    AddProduct,
    Icon,
    ProductsNavDashVue,
  },

  // data() {
  //   return {
  //     products: [],
  //     id: "",
  //     nxt: 50,
  //     pre: 0,
  //     showadd: "",
  //     receivedData: "surv",
  //     added: "",
  //   };
  // },

  created() {
    // axios
    //   .get("../../Products.json")
    //   .then((res) => {
    //     this.products = res.data["Surveillance-systems"];
    //     console.log(this.products);
    //   })
    //   .catch((err) => console.log(err));
  },
  methods: {
    deleteRow(id) {
      let url = "";
      let conf = confirm("Are you sure you want to delete this item ?");
      if (conf == true) {
        switch (this.receivedData) {
          case "surv":
            url = "http://localhost:3000/Surveillance-systems";
            console.log(this.receivedData);
            axios
              .delete(`${url}/${id}`)
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
            break;
          case "dvr":
            url = "http://localhost:3000/IT-solution";
            console.log(this.receivedData);
            axios
              .delete(`${url}/${id}`)
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
            break;
          case "fing":
            url = "http://localhost:3000/Fingerprints";
            console.log(this.receivedData);
            axios
              .delete(`${url}/${id}`)
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
            break;
          default:
            // default URL
            break;
        }
      }
    },

    // receiveDataFromChild(data) {
    //   this.receivedData = data;
    //   console.log(this.receivedData);
    //   this.fetching();
    // },
    // fetching() {
    //   switch (this.receivedData) {
    //     case "surv":
    //       axios
    //         .get("../../Products.json")
    //         .then((res) => {
    //           this.products = res.data["Surveillance-systems"];
    //           console.log(this.products);
    //         })
    //         .catch((err) => console.log(err));
    //       break;
    //     case "dvr":
    //       axios
    //         .get("../../Products.json")
    //         .then((res) => {
    //           this.products = res.data["IT-solution"];
    //           console.log(this.products);
    //         })
    //         .catch((err) => console.log(err));
    //       break;
    //     case "fing":
    //       axios
    //         .get("../../Products.json")
    //         .then((res) => {
    //           this.products = res.data["Fingerprints"];
    //           console.log(this.products);
    //         })
    //         .catch((err) => console.log(err));
    //     default:
    //       // default URL
    //       break;
    //   }
    // },
  },
};
</script>

<style lang="scss" scoped></style>
