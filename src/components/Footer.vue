<template>
  <footer class="bg-baseC border-t-primary border-t-2">
    <section class="flex lg:flex-row flex-col lg:gap-24 gap-10 lg:p-8 p-6">
      <div class="lg:w-4/12 md:w-4/12 sm:w-12/12 flex justify-center">
        <a href="#" target="_top" class="lg:w-12/12 w-6/12">
          <img src="../assets/Images/LST-White.png" alt=""
        /></a>
      </div>
      <div class="lg:w-8/12 flex flex-col items-center">
        <div class="text-secondry lg:text-lg text-md">
          We can give you a hand. Please get in contact to see what we can do
          for you.
        </div>
        <div class="flex lg:flex-row flex-col">
          <div class="flex hover:text-secondry text-white gap-4">
            <Icon icon="ic:baseline-email" class="text-3xl" /><a
              href="mailto:info@tag-sis.com"
              class="hover:text-secondry"
              >Info@lucidity-eg.com</a
            >
          </div>
          <div class="flex gap-3 hover:text-secondry text-white">
            <Icon icon="ic:baseline-phone" class="text-3xl" />
            <a href="tel:01277785843" class="hover:text-secondry"
              >01277785843</a
            >
          </div>
          <div class="flex text-white">
            <Icon icon="mdi:location" class="text-3xl me-2" />
            <div>
              Sara Tower - 23 El-Batrawy St - Appas El Aaad - Madina Nasr ,Cairo
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-3/12 flex flex-col justify-center gap-y-3">
        <div class="text-lg text-white lg:text-start text-center">
          Follow us :
        </div>
        <div class="flex gap-5 lg:justify-start justify-center pt-2">
          <a
            href="https://www.facebook.com/profile.php?id=61554643216879"
            target="_blank"
            class="text-white hover:text-secondry transition duration-200 cursor-pointer"
          >
            <Icon icon="uil:facebook" class="text-3xl" />
          </a>
          <a
            href="https://www.instagram.com/tag.sis/"
            target="_blank"
            class="hover:text-secondry text-white transition duration-200 cursor-pointer"
          >
            <Icon icon="ri:instagram-fill" class="text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/tag-sis-889b0b2a6/"
            target="_blank"
            class="hover:text-secondry text-white transition duration-200 cursor-pointer"
          >
            <Icon icon="bi:linkedin" class="text-3xl" />
          </a>
        </div>
      </div>
    </section>
  </footer>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "Footer",
  components: {
    Icon,
  },
};
</script>

<style scoped>
.bg-baseC {
  background: #004a54 url(../assets/Images/pattern.png);
}
</style>
