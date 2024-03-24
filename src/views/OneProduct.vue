<template>
  <div>
    {{ product }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      product: {},
      id:""
    };
  },
  created(){
    this.id = this.$route.params.id;
      axios
        .get(`http://localhost:3000/products/surveillance-systems/${this.id}`)
        .then((res) => {
          this.product = res.data;
          console.log(res.data);
        })
        .catch((err) => console.log(err));
        
  },
};
</script>

<style scoped></style>
