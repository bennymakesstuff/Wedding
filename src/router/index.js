import Vue from "vue";
import VueRouter from "vue-router";
import Store from "../store/index.js";
import Home from "../views/loggedOut/Home.vue";
import Rsvp from "../views/loggedOut/RSVP.vue";
import Party from "../views/loggedOut/Party.vue";
import Accomodation from "../views/loggedOut/Accomodation.vue";


Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/accomodation",
    name: "accomodation",
    component: Accomodation
  },
  {
    path: "/rsvp",
    name: "rsvp",
    component: Rsvp
  },
  {
    path: "/wedding-party",
    name: "party",
    component: Party
  },
  { path: "*", component: Home }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});


export default router;
