<template>
  <main class="container">
    <div class="container flex">
      <div>
        <div class="text-4xl font-bold text-primary">Services</div>
        <div class="bg-secondry h-2 rounded-md mb-10"></div>
      </div>
    </div>
    <div class="service-card">
      <div class="flex gap-2 mb-8">
        <div
          class="bg-secondry w-5 transition-width duration-300 service-child"
        ></div>
        <div class="font-bold text-primary text-4xl">IT Solution</div>
      </div>
      <div class="">
        <div class="flex md:flex-row flex-col mt-10 items-center">
          <Icon
            icon="lets-icons:ito-fill"
            width="120"
            class="mx-10 md:mb-0 mb-5"
            style="color: #004a54"
          />
          <div class="text-primary">
            <p>
              All computers (Desktops or Laptops) new or used, printers and inks
            </p>
            <ul class="list-disc list-outside ms-5">
              <li>Network infrastructure</li>
              <li>Call center system</li>
              <li>VPN</li>
              <li>Firewall</li>
              <li>VOIP System</li>
            </ul>
          </div>
        </div>
        <router-link to="/products/dvr"
          ><button class="primary-btn block ms-auto mt-3">
            Explore Products
          </button></router-link
        >
      </div>
    </div>
    <div class="service-card">
      <!-- <Icon icon="fluent:camera-dome-24-filled" width="192" height="192"  style="color: #004A54" /> -->
      <div class="flex gap-2 mb-8">
        <div
          class="bg-secondry w-5 transition-width duration-300 service-child"
        ></div>
        <div class="font-bold text-primary text-4xl">Surveillance Systems</div>
      </div>
      <div class="">
        <div class="flex md:flex-row flex-col mt-10 items-center">
          <Icon
            icon="fluent:camera-dome-24-filled"
            width="120"
            class="mx-10 md:mb-0 mb-5"
            style="color: #004a54"
          />
          <div class="text-primary">
            <p>
              Monitor through any display unit and provide multiple cameras
              shots in one screen
            </p>
            <ul class="list-disc list-outside ms-5">
              <li>
                Connect from anywhere through PC or Mobile device (Android &
                IOS)
              </li>
              <li>
                Digital video recording with large size that help in post event
                tracking
              </li>
              <li>
                Keep businesses or homes safe from any danger and monitor
                workflow in real time
              </li>
            </ul>
          </div>
        </div>
        <router-link to="/products/surveillance-systems"
          ><button class="primary-btn block ms-auto mt-3">
            Explore Products
          </button></router-link
        >
      </div>
    </div>
    <div class="service-card">
      <div class="flex gap-2 mb-8">
        <div
          class="bg-secondry w-5 transition-width duration-300 service-child"
        ></div>
        <div class="font-bold text-primary text-4xl">Fingerprints</div>
      </div>
      <div class="">
        <div class="flex md:flex-row flex-col mt-10 items-center">
          <Icon
            icon="wpf:fingerprint-scan"
            width="120"
            class="mx-10 md:mb-0 mb-5"
            style="color: #004a54"
          />
          <div class="text-primary">
            <p>Time attendance and management for a diverse workforce.</p>
            <ul class="list-disc list-outside ms-5">
              <li>Simple and easy to use</li>
              <li>
                Your data can be easily copied and pasted to other applications
              </li>
              <li>Hugely reduces time spent managing staff attendance</li>
              <li>Records are kept safe and confidential</li>
            </ul>
          </div>
        </div>
        <router-link to="/products/fingerprints"
          ><button class="primary-btn block ms-auto mt-3">
            Explore Products
          </button></router-link
        >
      </div>
    </div>
    <div class="service-card">
      <div class="flex gap-2 mb-8">
        <div
          class="bg-secondry w-5 transition-width duration-300 service-child"
        ></div>
        <div class="font-bold text-primary text-4xl">GPS Tracking</div>
      </div>
      <div class="">
        <div class="flex md:flex-row flex-col mt-10 items-center">
          <Icon
            icon="mdi:cellphone-gps"
            width="120"
            class="mx-10 md:mb-0 mb-5"
            style="color: #004a54"
          />
          <div class="text-primary">
            <p>Live track your fleet in real-time</p>
            <ul class="list-disc list-outside ms-5">
              <li>
                remotely monitor driving behavior and make sure that fleet
                operations are conducted in a correct manner Keep your
                operations under control.
              </li>
              <li>Control Room</li>
              <li>Fleet Management</li>
            </ul>
          </div>
        </div>
        <router-link to=""
          ><button class="primary-btn block ms-auto mt-3">
            Explore Products
          </button></router-link
        >
      </div>
    </div>
  </main>
</template>

<script>
import { Icon } from "@iconify/vue";
export default {
  name: "ServicesPage",
  components: {
    Icon,
  },
};
</script>

<style scoped></style>
