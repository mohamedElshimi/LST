<template>
  <div class="flex justify-center items-center parent bg-white w-full h-full">
    <div class="md:w-8/12 w-11/12 my-10 mx-auto">
      <div class="w-full mx-auto logo mt-3">
        <img
          src="../assets/Images/LST.png"
          alt="LST"
          class="image-login mx-auto md:w-[69px] w-[50px]"
        />
      </div>
      <h2 class="text-3xl font-bold text-center text-primary mb-3">
        Admin Login
      </h2>
      <div
        class="w-full flex md:flex-wrap justify-center flex-wrap md:gap-4 gap-1"
      >
        <div class="md:w-2/4 w-full">
          <h3 class="float-text">
            <span class="bg-white ms-2 text-center px-2">Email</span>
          </h3>
          <input
            type="email"
            v-model="state.email"
            placeholder="ex:mid9653@gmail.com"
            class="outline outline-2 px-2 w-full rounded py-2 focus:outline-primary"
          />
        </div>
        <div class="md:w-2/4 w-full">
          <h3 class="float-text">
            <span class="bg-white ms-2 text-center px-2">Password</span>
          </h3>
          <input
            type="password"
            v-model="state.password"
            placeholder="*********"
            class="outline outline-2 px-2 w-full rounded py-2 focus:outline-primary"
          />
        </div>
        <p v-if="state.error">{{ state.error }}</p>
      </div>
      <button
        class="border rounded-xl bg-gray-800 hover:bg-secondry text-white py-2 w-2/4 block mx-auto mt-4"
        @click="signInWithEmail"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { supabase } from "@/lib/supabaseClient";
import router from "@/router";

const state = reactive({
  loading: false,
  disabled: false,
  error: undefined,
  email: "",
  password: "",
});

async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: state.email,
    password: state.password,
  });

  if (error) {
    console.log(error);
    alert("please enter a valid email or password");
  } else if (data) {
    console.log(data);
    router.push("/dashboard/products");
  }
}
</script>
