<template>
  <div class="container mt-40 p-10">
    <div
      class="p-14 shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 cursor-pointer mb-10"
    >
      <div class="flex gap-2 mb-8">
        <div
          class="bg-secondry w-5 hover:w-20 transition-width duration-300"
        ></div>
        <div class="font-bold text-primary text-4xl w-3/12">Our Mission</div>
      </div>
      <div class="flex justify-center items-center">
        <div class="w-4/12 justify-center flex">
          <Icon
            icon="game-icons:achievement"
            class="text-primary hover:text-secondry transition duration-300 text-[18rem]"
          />
        </div>
        <div class="text-primary w-10/12 font-medium text-lg">
          Our mission is to provide the best possible IT solutions with highest
          quality, helping companies grow and expand within their market; we
          want their success to be our success.<br /><br />
          To deliver cost effective value propositions to our customers through
          our expertise in end to end IT, development and outsourcing
          solutions.<br /><br />
          We will strive to achieve this through our innovative and quality
          focused strategies on Technology, Business Development, Consulting and
          Customer service.
        </div>
      </div>
    </div>
    <div
      class="p-14 shadow-xl rounded-3xl hover:shadow-2xl transition duration-300 cursor-pointer"
    >
      <div class="flex gap-2 mb-8">
        <div
          class="bg-secondry w-5 hover:w-20 transition-width duration-300"
        ></div>
        <div class="font-bold text-primary text-4xl w-3/12">Our Vision</div>
      </div>
      <div class="flex justify-center items-center">
        <div class="w-4/12 justify-center flex">
          <Icon
            icon="octicon:goal-24"
            class="text-primary hover:text-secondry transition duration-300 text-[15rem]"
          />
        </div>
        <div class="text-primary w-10/12 font-medium text-lg">
          Our goal is to provide our customers with the best service at the best
          possible market price without compromising quality.<br /><br />
          We see our company and the people who are the foundation of our
          business achieving their goals and we hope that our passion for IT and
          new technology can play a part in creating a better business
          environment.<br /><br />
          To be recognized as one of the best solution & IT services provider to
          the industry and in the process create a team, where each member is
          partner in growth and is proud to be associated with the company.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from "@iconify/vue";
export default {
  components: {
    Icon,
  },
};
</script>
<style></style>
