<template>
  <Section class="container">
    <h2 class="text-3xl font-bold text-primary">
      <span span class="border-b-4 border-secondry">Contact US</span>
    </h2>
    <div class="flex flex-wrap my-5">
      <div class="lg:w-6/12 w-full lg:mb-0 mb-5 px-3">
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
            <a href="mailto:Info@lucidity-eg.com">
              <div class="contact-card transition duration-200">
                <Icon
                  icon="mdi:envelope"
                  width="90"
                  class="text-primary transition duration-200"
                />
                <h2>Email</h2>
                <h3 class="transition duration-200 text-center">
                  Info@lucidity-eg.com
                </h3>
              </div>
            </a>
          </div>
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
      </div>
      <form
        @submit.prevent="sendEmail"
        class="lg:w-6/12 w-full px-3 flex flex-col justify-between"
      >
        <input
          type="text"
          placeholder="Name"
          class="input w-full mb-2"
          v-model="name"
          id="message"
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          class="input w-full mb-2"
          v-model="phone"
          id="phone"
          required
        />
        <input
          type="email"
          placeholder="Email"
          class="input w-full mb-2"
          v-model="email"
          id="email"
          required
        />
        <textarea
          name="message"
          v-model="message"
          id="message"
          required
          placeholder="Message"
          class="input w-full mb-2"
          rows="10"
        ></textarea>
        <button class="primary-btn w-full">Send Message</button>
      </form>
    </div>
  </Section>
</template>

<script>
import { Icon } from "@iconify/vue";
import emailjs from "emailjs-com";
export default {
  name: "ContactUs",
  components: {
    Icon: Icon,
  },
  data() {
    return {
      name: "",
      email: "",
      phone: "", // Added phone property
      message: "",
    };
  },
  methods: {
    showSuccessPopup() {
      this.$swal({
        title: "Email Sent Successfully!",
        text: "Your email has been sent successfully.",
        icon: "success",
        confirmButtonColor: "#004A54",
        confirmButtonText: "OK",
      });
    },
    showOopsPopup() {
      this.$swal({
        title: "Oops!",
        text: "Something went wrong. Please try again later.",
        icon: "error",
        confirmButtonColor: "#d33",
        confirmButtonText: "OK",
      });
    },
    sendEmail() {
      const templateParams = {
        to_email: "Info@lucidity-eg.com", // Replace with the recipient's email
        from_name: this.name,
        from_email: this.email,
        message: this.message,
        from_phone: this.phone,
      };

      emailjs
        .send(
          "service_9tf4oip",
          "template_u8sud2b",
          templateParams,
          "s9VyFoEeQxGEaLmcI"
        )
        .then(
          (response) => {
            console.log("Email sent successfully:", response);
            this.showSuccessPopup();
            // Reset form fields after successful submission
            this.name = "";
            this.email = "";
            this.message = "";
            this.phoneNum = "";
          },
          (error) => {
            console.error("Email sending failed:", error);
            this.showOopsPopup();
          }
        );
    },
  },
};
</script>

<style scoped></style>
