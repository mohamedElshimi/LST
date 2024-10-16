import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import dvr from "../views/dvrProducts.vue";
import fingerprints from "../views/fingerprintsProducts.vue";
import surv from "../views/survProducts.vue";
import gps from "../views/gpsProducts.vue"
import survProduct from "../views/OneProduct.vue";
import editsurvProduct from "../dashboard/ProductsDashboardEdit.vue";

import ContactUs from "../views/ContactUs.vue";
import ServicesPage from "../views/ServicesPage.vue";
import dashboard from "../dashboard/ProductsDashboard.vue";
import Admin from "../dashboard/Dashboard.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
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
    {
      path: "/dashboard/products",
      name: "dashboard",
      component: dashboard,
      meta: {
        hideNavbar: true,
       }
    },
    {
      path: "/dashboard/products/edit/:id",
      name: "editsurvProduct",
      component: editsurvProduct,
      meta: {
        hideNavbar: true,
       }
    },
    {
      path: "/dashboard/Admin",
      name: "Admin",
      component: Admin,
      meta: {
        hideNavbar: true,
       }
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
