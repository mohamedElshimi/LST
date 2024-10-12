import { createRouter, createWebHistory } from "vue-router";

// default layout
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";
import dvr from "../views/dvrProducts.vue";
import fingerprints from "../views/fingerprintsProducts.vue";
import surv from "../views/survProducts.vue";
import gps from "../views/gpsProducts.vue";
import survProduct from "../views/OneProduct.vue";
import ContactUs from "../views/ContactUs.vue";
import ServicesPage from "../views/ServicesPage.vue";

// Dashboard layout
import DashboardLayout from "@/layouts/DashboardLayout.vue";
import editsurvProduct from "@/dashboard/ProductsDashboardEdit.vue";
import ProductsDashboard from "@/dashboard/ProductsDashboard.vue";
import Admin from "@/dashboard/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // public routes
    {
      path: "/",
      name: "home",
      component: DefaultLayout,

      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },

        {
          path: "/products/dvr",
          name: "dvr",
          component: dvr,
        },
        {
          path: "/products/surveillance-systems",
          name: "surv",
          component: surv,
        },
        {
          path: "/products/:type/:id",
          name: "survProduct",
          component: survProduct,
        },
        {
          path: "/products/fingerprints",
          name: "fingerprints",
          component: fingerprints,
        },
        {
          path: "/products/gps",
          name: "gps",
          component: gps,
        },

        {
          path: "/about",
          name: "about",
          component: AboutView,
        },
        {
          path: "/ContactUs",
          name: "ContactUs",
          component: ContactUs,
        },
        {
          path: "/Services",
          name: "ServicesPage",
          component: ServicesPage,
        },
      ],
    },

    // dashboard routes
    {
      path: "/dashboard/Admin",
      name: "DashboardLayout",
      component: DashboardLayout,
      children: [
        {
          path: "",   
          name: "Admin",
          component: Admin,
        },
        {
          path: "/dashboard/products",
          name: "dashboard",
          component: ProductsDashboard,
        },
        {
          path: "/dashboard/products/edit/:category/:id",
          name: "editsurvProduct",
          component: editsurvProduct,
        },
      ],
    },


    // {
    //   path: "/dashboard/fingerprints",
    //   name: "dashboardfing",
    //   component: dashboardfing,
    // },
    // {
    //   path: "/dashboard/dvr",
    //   name: "dashboarddvr",
    //   component: dashboarddvr,
    // },
  ],
});

export default router;
