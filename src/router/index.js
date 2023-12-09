import Vue from "vue";
import VueRouter from "vue-router";
import ConsumerLayout from "../layouts/ConsumerLayout";
import BusinessLayout from "../layouts/BusinessLayout";
// import Store from "@/store/store";
// import {createRouter, createWebHistory} from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Consumer",
      component: ConsumerLayout,
      props: true,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../views/HomeView.vue"),
        },
       
      ],
    },
    {
      path: "/business",
      name: "Business",
      component: BusinessLayout,
      props: true,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "/business/machines",
          name: "Machines",
          component: () => import("../views/BusinessView.vue"),
        },
        {
          path: "/business/app",
          name: "App",
          component: () => import("../views/AppView.vue"),
        },
        {
          path: "/business/refillment",
          name: "Refillment",
          component: () => import("../views/RefillementView.vue"),
        },
        {
          path: "/business/digitalization",
          name: "Digitalization",
          component: () => import("../views/DigitalizationView.vue"),
        },
        {
          path: "/business/about",
          name: "About",
          component: () => import("../views/AboutView.vue"),
        },
        {
          path: "/business/contact",
          name: "Contact",
          component: () => import("../views/ContactView.vue"),
        },
       
      ],
    },

  ],
  
});

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

router.beforeEach((to, from, next) => {
  let isAuthenticated = false;
  const admin = localStorage.getItem("roleAdmin");
  console.log("router", to, isAuthenticated);
  if (to.meta.needsAuth) {
    if (admin) {
      next();
    } else {
      next("/");
    }
  } 
  else {
    next();
  }
});

// const router = new VueRouter({
//   routes,
// });

export default router;
