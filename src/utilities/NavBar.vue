<template>
  <div class="bg-white text-primary fixed w-full z-50">
    <div class="container mx-auto flex justify-between items-center py-4">
      <!-- Brand Section -->
      <div class="flex items-center">
        <router-link to="/">
          <div class="flex items-center">
            <img src="../assets/Logos/LST.png" class="h-12" alt="Logo" />
          </div>
        </router-link>
      </div>

      <!-- Navigation Items (Desktop) -->
      <div class="hidden md:flex items-center space-x-8">
        <router-link to="/">
          <div
            class="text-primary transition duration-200 font-semibold hover:border-b-4 hover:border-secondry transition-all"
          >
            Home
          </div>
        </router-link>
        <!-- Services with Dropdown -->
        <div
          class="relative"
          @mouseover="showServicesDropdown"
          @mouseleave="hideServicesDropdown"
        >
          <div class="flex items-center cursor-pointer">
            <div
              class="text-primary transition duration-200 font-semibold hover:border-b-4 hover:border-secondry transition-all"
            >
              Services
            </div>
            <span class="ml-1" v-if="!isServicesDropdownOpen">
              <Icon icon="bi:chevron-down" />
            </span>
            <span class="ml-1" v-else>
              <Icon icon="bi:chevron-up" />
            </span>
          </div>
          <!-- Dropdown Content -->
          <div
            v-show="isServicesDropdownOpen"
            class="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 mt-1"
          >
            <router-link
              to="/services/it-solution"
              class="block px-4 py-2 hover:bg-gray-100"
              >IT Solution</router-link
            >
            <router-link
              to="/services/surveillance-systems"
              class="block px-4 py-2 hover:bg-gray-100"
              >Surveillance Systems</router-link
            >
            <router-link
              to="/services/fingerprints"
              class="block px-4 py-2 hover:bg-gray-100"
              >Fingerprints</router-link
            >
            <router-link
              to="/services/gps-tracking"
              class="block px-4 py-2 hover:bg-gray-100"
              >GPS Tracking</router-link
            >
          </div>
        </div>
        <!-- End of Services with Dropdown -->

        <router-link to="/products">
          <div
            class="text-primary transition duration-200 font-semibold hover:border-b-4 hover:border-secondry"
          >
            Products
          </div>
        </router-link>
        <router-link to="/about">
          <div
            class="text-primary transition duration-200 font-semibold hover:border-b-4 hover:border-secondry"
          >
            About
          </div>
        </router-link>
        <router-link to="/contact-us">
          <div
            class="text-primary transition duration-200 font-semibold hover:border-b-4 hover:border-secondry"
          >
            Contact Us
          </div>
        </router-link>
      </div>

      <!-- Responsive Menu Button (Mobile) -->
      <button
        class="md:hidden focus:outline-none hover:border-primary px-6 self-center"
        @click="toggleMenu"
        aria-label="Toggle Menu"
      >
        <Icon icon="line-md:menu-fold-right" color="#004A54" class="w-6 h-6" />
      </button>

      <!-- Responsive Menu Items (Mobile) -->
      <div
        v-show="isMenuOpen"
        class="md:hidden absolute top-0 left-0 right-0 bg-white text-primary z-50"
      >
        <div class="flex justify-between">
          <div class="items-center mt-3 mx-6 self-center">
            <router-link to="/">
              <div class="flex items-center">
                <img src="../assets/Logos/LST.png" class="h-12" alt="Logo" />
              </div>
            </router-link>
          </div>
          <button
            class="lg:hidden focus:outline-none hover:border-primary mt-3 px-6 self-center"
            @click="toggleMenu"
            aria-label="Toggle Menu"
          >
            <Icon
              icon="line-md:menu-fold-right"
              color="#004A54"
              :horizontalFlip="true"
              class="w-6 h-6"
            />
          </button>
        </div>
        <div class="flex flex-col items-center py-2 space-y-2">
          <router-link to="/">
            <div
              class="hover:text-primary transition duration-200 font-semibold"
            >
              Home
            </div>
          </router-link>
          <!-- Services with Dropdown in Mobile -->
          <div class="relative" @click="toggleServicesDropdownMobile">
            <div class="flex items-center cursor-pointer">
              <div
                class="hover:text-primary transition duration-200 font-semibold"
              >
                Services
              </div>
              <span class="ml-1" v-if="!isServicesDropdownOpenMobile">
                <Icon icon="bi:chevron-down" />
              </span>
              <span class="ml-1" v-else>
                <Icon icon="bi:chevron-up" />
              </span>
            </div>
            <div
              v-show="isServicesDropdownOpenMobile"
              class="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 mt-1"
            >
              <router-link
                to="/services/it-solution"
                class="block px-4 py-2 hover:bg-gray-100"
                >IT Solution</router-link
              >
              <router-link
                to="/services/surveillance-systems"
                class="block px-4 py-2 hover:bg-gray-100"
                >Surveillance Systems</router-link
              >
              <router-link
                to="/services/fingerprints"
                class="block px-4 py-2 hover:bg-gray-100"
                >Fingerprints</router-link
              >
              <router-link
                to="/services/gps-tracking"
                class="block px-4 py-2 hover:bg-gray-100"
                >GPS Tracking</router-link
              >
            </div>
          </div>
          <!-- End of Services with Dropdown in Mobile -->
          <router-link to="/products">
            <div
              class="hover:text-primary transition duration-200 font-semibold"
            >
              Products
            </div>
          </router-link>
          <router-link to="/about">
            <div
              class="hover:text-primary transition duration-200 font-semibold"
            >
              About Us
            </div>
          </router-link>
          <router-link to="/contact-us">
            <div
              class="hover:text-primary transition duration-200 font-semibold"
            >
              Contact Us
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  name: "NavBar",
  data() {
    return {
      isMenuOpen: false,
      isServicesDropdownOpen: false,
      isServicesDropdownOpenMobile: false,
    };
  },

  components: {
    Icon,
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    showServicesDropdown() {
      this.isServicesDropdownOpen = true;
    },
    hideServicesDropdown() {
      this.isServicesDropdownOpen = false;
    },
    toggleServicesDropdownMobile() {
      this.isServicesDropdownOpenMobile = !this.isServicesDropdownOpenMobile;
    },
  },
};
</script>

<style scoped></style>
