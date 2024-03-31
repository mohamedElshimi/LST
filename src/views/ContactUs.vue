<template>
  <main class="container">
    <div class="container flex">
      <div>
        <div class="text-4xl font-bold text-primary">Contact US</div>
        <div class="bg-secondry h-2 rounded-md mb-10"></div>
      </div>
    </div>
    <section class="mt-5">
      <div class="flex items-center">
        <Icon icon="mdi:location" width="40" style="color: #f9c02c" />
        <p class="text-primary">
          16 Abo El Ataheia, Emtedad Abbas El Akad, Nasr City
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.1340396855694!2d31.337762425642893!3d30.061692117755385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f19cd2e7547%3A0xe97cd67bb0b6fc4a!2sSara%20Tower!5e0!3m2!1sar!2seg!4v1711322509427!5m2!1sar!2seg"
        width="100%"
        height="300"
        class="rounded-2xl mt-5"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
    <section class="my-5">
      <div class="flex flex-wrap">
        <div class="md:w-1/2 w-full px-2 md:mb-0 mb-3">
          <a href="tel:01277785843">
            <div class="contact-card transition duration-200">
              <Icon
                icon="ic:baseline-phone"
                width="90"
                class="text-primary transition duration-200"
              />
              <h2 class="">Phone Number</h2>
              <h3 class="transition duration-200">01277785843</h3>
            </div>
          </a>
        </div>
        <div class="md:w-1/2 w-full px-2">
          <a href="mailto:Support@lucidity-eg.com">
            <div class="contact-card transition duration-200">
              <Icon
                icon="mdi:envelope"
                width="90"
                class="text-primary transition duration-200"
              />
              <h2>Email</h2>
              <h3 class="transition duration-200 text-center">
                Support@lucidity-eg.com
              </h3>
            </div>
          </a>
        </div>
      </div>
      <div class="border-l-[20px] ps-5 border-secondry mt-5">
        LST, a premier solutions provider, excels in delivering sophisticated
        and tailored smart solutions across diverse sectors. With expertise in
        software development, systems integration, and a commitment to
        cutting-edge technology, LST is a trusted partner for organizations
        seeking innovation and efficiency.
      </div>
    </section>
    <section class="mb-5">
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
    </section>
  </main>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "ContactUs",
  components: {
    Icon,
  },
};
</script>

<style scoped></style>
