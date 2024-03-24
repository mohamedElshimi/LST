<template>
    <div>
      <div class="flex justify-between cursor-pointer mt-10" >
        <div v-if="showadd==='show'" @click="showadd=''"><i class="fa-solid fa-arrow-left"></i></div>
        <div v-if="showadd===''" @click="showadd='show'" class="flex items-center"><i class="fa-solid fa-plus text-green-500 mr-2"></i><div>Add Product</div></div>
      </div>
      
      <AddProduct v-if="showadd==='show'"></AddProduct>
        <table
                      class="w-full text-center text-dark bg-white shadow-lg rounded-2xl mb-9" v-if="showadd===''">
                     
                      <thead class="text-xs uppercase">
                        <tr class="border-b" >
                          <td
                            class="px-6 py-4 text-center text-primary text-lg tracking-widest"
                            colspan="4">
                          </td>
                        </tr>
                        <tr class="bg-sky-950 text-white tracking-wider">
                          <th scope="col" class="px-6 py-3 w-2/12">Id</th>
                          <th scope="col" class="px-6 py-3 w-6/12">Image</th>
                          <th scope="col" class="px-6 py-3 w-2/12">Title</th>
                          <th scope="col" class="px-6 py-3 w-2/12">Price</th>
                          <th scope="col" class="px-6 py-3 w-2/12">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        
                        <tr class="border-b" v-for="prod,Indx in products" :key="Indx">
                            <template v-if="Indx > pre && Indx <= nxt">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-dark whitespace-nowrap">
                          {{ Indx }}</th>
                          <td class="px-6 py-4">
                            <img :src="prod.image" alt="">
                          </td>
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-dark whitespace-nowrap">
                          {{ prod.title }}</th>
                          <td class="px-6 py-4">
                           {{ prod.price }}
                          </td>
                          <td class="px-6 py-4">
                            <router-link :to="`/productsdata/${prod.id}/edit`"><i class="fa-solid fa-pen cursor-pointer"></i></router-link>
                            <i class="fa-solid fa-trash text-primary ml-4 cursor-pointer" @click="deleteRow(Indx)"></i>
                          </td>
                        </template>
                        </tr>
                        
                      </tbody>
                    </table>
    </div>
</template>

<script>
import axios from 'axios'
import AddProduct from "../ProductsDashboard/ProductsDashboardAdd.vue"
    export default {
        name:'ProductsDashboard',
        components:{
          AddProduct,
        },
        data(){
            return {
          products: [],
          id: '',
          nxt: 10,
          pre: 0,
          showadd:'',
            }
        },
        created(){
          axios.get("http://localhost:3000/supplements").then((res)=>{
            this.products = res.data
          }).catch((err)=>console.log(err))
        },
        methods:{
          deleteRow(id){
       let conf = confirm("Are you sure you want to delete this item ?")
        if (conf==true){
          axios.delete(`http://localhost:3000/supplements/${id}`).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
            this.getData()
        }
    },
        }
    }
</script>

<style lang="scss" scoped>

</style>