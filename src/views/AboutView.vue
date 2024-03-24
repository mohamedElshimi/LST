<template>
  <div class="container mt-20 p-10">
    <div
      class="border-4 border-secondry border-dashed rounded-3xl mb-5 relative"
    >
      <div
        class="w-[200px] h-[100px] bg-white absolute bottom-5 right-10 rotate-45 border-4 border-secondry border-dashed z-10"
      ></div>
      <p class="relative p-5 rounded-3xl z-20 bg-white">
        At our core, we are driven by a mission to deliver unparalleled IT
        solutions of the highest quality, fostering the growth and expansion of
        businesses within their respective markets. We are committed to our
        customers' success, ensuring that their triumphs resonate as our own.
        Through our expertise in end-to-end IT, development, and outsourcing
        solutions, we deliver cost-effective value propositions tailored to meet
        their unique needs. Our dedication to innovation and quality guides our
        strategies across Technology, Business Development, Consulting, and
        Customer Service, all aimed at providing unmatched service at
        competitive market prices. We envision a future where our company and
        its people thrive, empowered to achieve their goals while contributing
        to a better business environment through our passion for IT and emerging
        technologies. As we strive to be recognized as a premier solution and IT
        services provider, we foster a culture where every team member is a
        valued partner in our collective growth and takes pride in their
        association with our company.
      </p>
    </div>
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
  <WorkedWith class="mt-10"></WorkedWith>
</template>
<script>
import { Icon } from "@iconify/vue";
import WorkedWith from "@/components/WorkedWith.vue";
export default {
  components: {
    Icon,
    WorkedWith,
  },
};
</script>
<style></style>
