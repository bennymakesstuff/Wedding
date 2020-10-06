import Vue from "vue";
import Vuex from "vuex";
import router from '../router'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    scanner: {
      isOpen: true,
      code: null
    }
  },
  mutations: {
    login_user (state, userData) {

      if(userData.username=="ben"){
        var user = {fname:"Benjamin",sname:"Broad",is_admin:false};
        state.user = user;
        localStorage.setItem('user',JSON.stringify(state.user));
        localStorage.setItem('token','12a5d4aef95efawf5fa65afw651af');
        router.push({name:'user_dashboard'});
      }
      else if(userData.username=="admin"){
        var user = {fname:"Admin",sname:"Broad",is_admin:true};
        state.user = user;
        localStorage.setItem('user',JSON.stringify(state.user));
        localStorage.setItem('token','12a5d4aef95efawf5fa65afw651af');
        router.push({name:'admin_dashboard'});
      }
      else{
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      }

    },
    logout_user (state) {
      state.user = null;
      router.push({name:'login'});
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
    toggleScanner(state, data){
      state.scanner.isOpen = data;
    }
  },
  actions: {
    login (context, userData) {
      context.commit('login_user',userData);
    },
    logout (context) {
      context.commit('logout_user');
    },
    toggle_scanner (context, data){
      context.commit('toggleScanner', data);
    }
  },
  modules: {}
});
