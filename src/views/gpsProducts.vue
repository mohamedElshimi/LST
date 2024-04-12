<template>
  <div class="container mt-24">
    <div class="text-4xl font-bold text-primary">Products</div>
    <div class="bg-secondry lg:w-2/12 w-6/12  h-2 rounded-md"></div>
    <ProductsNav></ProductsNav>
    <div class="bg-gray-100 min-h-screen">
    <!-- Navigation bar -->
    <nav class="bg-secondry p-4">
      <div class="container mx-auto">
        <h1 class="text-white text-2xl font-semibold">We Have Special Team For :</h1>
      </div>
    </nav>

    <!-- Main content -->
    <div class="container mx-auto px-4 py-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Feature: Real-time Tracking -->
        <div class="p-4 bg-white rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4">Real-time Tracking</h2>
          <p class="text-gray-700">Monitor your fleet's movements and locations in real-time, enabling instant response to any deviations from planned routes or schedules.</p>
        </div>

        <!-- Feature: Geofencing -->
        <div class="p-4 bg-white rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4">Geofencing</h2>
          <p class="text-gray-700">Set up virtual perimeters around designated areas and receive alerts when vehicles enter or exit these zones, ensuring compliance and security.</p>
        </div>

        <!-- Feature: Speed Monitoring -->
        <div class="p-4 bg-white rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4">Speed Monitoring</h2>
          <p class="text-gray-700">Receive notifications and reports on speeding incidents, allowing for proactive measures to promote safe driving habits and reduce risks.</p>
        </div>

        <!-- Feature: Maintenance Reminders -->
        <div class="p-4 bg-white rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4">Maintenance Reminders</h2>
          <p class="text-gray-700">Stay on top of vehicle maintenance schedules with automated reminders based on mileage, engine hours, or specific maintenance tasks, ensuring optimal performance and longevity.</p>
        </div>

        <!-- Feature: Customizable Reporting -->
        <div class="p-4 bg-white rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4">Customizable Reporting</h2>
          <p class="text-gray-700">Access detailed reports on vehicle utilization, idle time, fuel consumption, and other key metrics, with the flexibility to generate daily, weekly, or monthly summaries tailored to your preferences.</p>
        </div>

        <!-- Feature: Driver Behavior Analysis -->
        <div class="p-4 bg-white rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4">Driver Behavior Analysis</h2>
          <p class="text-gray-700">Identify patterns of aggressive driving, unauthorized vehicle usage, or excessive idling, enabling targeted coaching and training interventions to improve overall efficiency and safety.</p>
        </div>

        <!-- Feature: Integration Capabilities -->
        <div class="p-4 bg-white rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4">Integration Capabilities</h2>
          <p class="text-gray-700">Seamlessly integrate our GPS tracking system with your existing fleet management software or third-party applications for enhanced functionality and data exchange.</p>
        </div>

        <!-- Feature: Mobile Accessibility -->
        <div class="p-4 bg-white rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-4">Mobile Accessibility</h2>
          <p class="text-gray-700">Monitor your fleet on the go with our user-friendly mobile app, providing instant access to vital information and alerts from anywhere, at any time.</p>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import ProductsNav from "../utilities/ProductsNav.vue";
    export default {
components:{
    ProductsNav
}
    }
</script>

<style scoped>

</style>