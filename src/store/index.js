import Vue from "vue";
import Vuex from "vuex";
import router from '../router';
import axios from 'axios';

//Import rest of Store
//import actions from './actions';
//import getters from './getters';
//import mutations from './mutations';

//const server = 'http://192.168.1.220:8001/'
const server = 'http://localhost:8001/'
//const server = 'https://dev-api.haveihadthis.beer/'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    page: 'home',
  },

  mutations: {
    UPDATE_PAGE (state, page){
      state.page = page;
      localStorage.setItem('nav', page);
    },
    CHANGE_PAGE (state, page) {
      state.page = page;
      localStorage.setItem('nav', page);
      router.push({name:page}).catch(()=>{if(Reporting==true){console.log('Duplicate Page')}});
    },
  },


  actions: {

    change_page (context, page){
      context.commit('CHANGE_PAGE', page);
    },

  }, //End of ACTIONS


  modules: {}
});
