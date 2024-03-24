<template>
  <Section class="container">
    <h2 class="text-3xl font-bold text-primary">
      <span span class="border-b-4 border-secondry">Contact US</span>
    </h2>
    <div class="flex flex-wrap my-5">
      <div class="lg:w-6/12 w-full lg:mb-0 mb-5 px-3">
        <div class="flex flex-wrap">
          <div class="md:w-1/2 w-full px-2 md:mb-0 mb-3">
            <div class="contact-card transition duration-200">
              <Icon
                icon="ic:baseline-phone"
                width="90"
                class="text-primary transition duration-200"
              />
              <h2 class="">Phone Number</h2>
              <h3 class="transition duration-200">01277785843</h3>
            </div>
          </div>
          <div class="md:w-1/2 w-full px-2">
            <div class="contact-card transition duration-200">
              <Icon
                icon="mdi:envelope"
                width="90"
                class="text-primary transition duration-200"
              />
              <h2>Email</h2>
              <h3 class="transition duration-200 text-center">
                luciditysolution @outlook.com
              </h3>
            </div>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.175915542509!2d31.34013992564291!3d30.060491617812424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e65c130f951%3A0xd2b9714b75fc3cb5!2z2LnYqNin2LMg2KfZhNi52YLYp9iv2Iwg2KfZhNmF2YbYt9mC2Kkg2KfZhNij2YjZhNmJ2Iwg2YXYr9mK2YbYqSDZhti12LHYjCDZhdit2KfZgdi42Kkg2KfZhNmC2KfZh9ix2KnigKw!5e0!3m2!1sar!2seg!4v1711093301154!5m2!1sar!2seg"
          width="100%"
          height="300"
          class="rounded-2xl mt-5"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="lg:w-6/12 w-full px-3 flex flex-col justify-between">
        <input type="text" placeholder="Name" class="input w-full mb-2" />
        <input type="tel" placeholder="Phone" class="input w-full mb-2" />
        <input type="email" placeholder="Email" class="input w-full mb-2" />
        <textarea
          name="message"
          id=""
          placeholder="Message"
          class="input w-full mb-2"
          rows="10"
        ></textarea>
        <button class="primary-btn w-full">Send Message</button>
      </div>
    </div>
  </Section>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "ContactUs",
  components: {
    Icon: Icon,
  },
};
</script>

<style scoped>
</style>
