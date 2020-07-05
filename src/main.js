import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

var user = {
  givenname: 'Benjamin',
  surname: 'Broad',
  is_admin: true
};

localStorage.setItem('user',JSON.stringify(user));
localStorage.setItem('token',JSON.stringify("aiwfb"));

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
