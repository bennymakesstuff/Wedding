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

//Error Reporting
const Reporting = false;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
    page: 'home',
    displayMode: 'dark',
    scanning: false,
    scanner: {
      isOpen: false,
      code: null
    },
    menu: {
      isOpen: false
    },
    showButtons: false,
    reporting: false,
    drinks_session: null,
    session: {
      started: false,
      title: '',
    }
  },


  mutations: {
    OPEN_MENU (state){
      state.menu.isOpen = true;
      state.showButtons = false;
    },
    CLOSE_MENU (state){
      state.menu.isOpen = false;
    },
    TOGGLE_MENU (state){
      state.menu.isOpen = !state.menu.isOpen;
    },
    TOGGLE_BUTTONS (state){
      state.showButtons = !state.showButtons;
    },
    AUTH_SUCCESS (state, token){
      state.token = token;
      localStorage.setItem('token', token);
    },
    AUTH_ERROR (state){
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      state.user = null;
      state.token = null;
      delete axios.defaults.headers.common['Authorization'];
    },

    USER_SUCCESS (state, user){

      if(user.currentSession!=null){
        var sesh = user.currentSession;
        state.session.code = sesh.session_code;
        state.session.title = sesh.session_name;
        state.session.owner = sesh.session_owner;
        state.session.started = true;
        state.session.started_at = sesh.created_at;
        state.session.crew = sesh.thecrew;
      }
      state.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    },

    LOGOUT (state) {
      state.user = null;
      state.token = null;
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      localStorage.setItem('nav', 'home');
      state.page = 'home';
      router.push({name:'home'}).catch(()=>{if(Reporting==true){console.log('Duplicate Page')}});
    },
    toggleScanner(state, data){
      state.scanner.isOpen = data;
    },
    UPDATE_PAGE (state, page){
      state.page = page;
      localStorage.setItem('nav', page);
    },
    CHANGE_PAGE (state, page) {
      state.page = page;
      localStorage.setItem('nav', page);
      router.push({name:page}).catch(()=>{if(Reporting==true){console.log('Duplicate Page')}});
    },
    REMOVE_DATA (state){
      state.user = null;
      state.token = null;
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },

    // Drinking Session related
    START_DRINKS_SESSION (state, sessionName){
      state.drinks_session = {
        sessionStart: Date.now(),
        name: sessionName,
        drinks: []
      };
    },
    ADD_DRINK_TO_SESSION (state, drink){
      state.drinks_session.drinks.push(drink);
    },
    REMOVE_DRINK_FROM_SESSION (state, drink){
      //remove a drink from the session
    },
    TOGGLE_DARK_MODE (state){
      if(state.displayMode=='light'){
        state.displayMode='dark';
      }
      else{
        state.displayMode='light';
      }
    },

    //Adds Session Code to drinks session
    START_DRINK_SESSION (state, sesh){
      state.session.code = sesh.session_code;
      state.session.title = sesh.session_name;
      state.session.owner = sesh.session_owner;
      state.session.started = true;
      state.session.started_at = sesh.created_at;
    },

    //Adds Session Code to drinks session
    JOIN_DRINK_SESSION (state, sesh){
      state.session.code = sesh.session_code;
      state.session.title = sesh.session_name;
      state.session.owner = sesh.session_owner;
      state.session.started = true;
      state.session.started_at = sesh.created_at;
      state.session.crew = sesh.thecrew;
    },
    //REFRESHES Session Code to drinks session
    REFRESH_DRINK_SESSION (state, sesh){
      console.log("--SESHDATA--");
      console.log(sesh.thecrew);
      state.session.code = sesh.session_code;
      state.session.title = sesh.session_name;
      state.session.owner = sesh.session_owner;
      state.session.started = true;
      state.session.started_at = sesh.created_at;
      state.session.crew = sesh.thecrew;
    },
    LEAVE_DRINK_SESSION (state, sesh){
      state.session = {
                      started: false,
                      title: '',
                    };
    }
  },


  actions: {

    //Authentication related Actions
    login (context, userData) {
      console.log("--USER-DATA--");
      console.log(userData);
      return new Promise((resolve, reject) => {
        axios({url: server+'login', data: {email: userData.email, password: userData.password}, method: 'POST'})
          .then(resp => {
            const loginResponseFromServer = resp.data.response;
            console.log(loginResponseFromServer);
            if(loginResponseFromServer===true){

              //Set the token in Application State, Local Storage and Axios Header
              const token = resp.data.payload;
              context.commit('AUTH_SUCCESS', token);
              axios.defaults.headers.common['Authorization'] = token;

              //Request the users user data
              axios({url: server+'get-user-details', method: 'GET'})
                .then(resp => {
                  const userResponseFromServer = resp.data.response;
                  console.log(userResponseFromServer);
                  if(userResponseFromServer===true){

                    //Successfull Login
                    context.commit('USER_SUCCESS', resp.data.payload);
                    context.commit('UPDATE_PAGE', 'user_dashboard');
                    router.push({name:'user_dashboard'}).catch(()=>{if(Reporting==true){console.log('Duplicate Page')}});
                    resolve(resp);
                  }
                  else{
                    context.commit('AUTH_ERROR');
                    reject(resp);
                  }
                })
                .catch(err => {
                  context.commit('AUTH_ERROR', err);
                  reject(err);
                })

            }
            else{
              context.commit('AUTH_ERROR', resp.data.payload);
              reject(resp.data);
            }
          })
        .catch(err => {
          context.commit('AUTH_ERROR', err);
          reject(err);
        })
      })

    },
    logout (context) {
      context.commit('LOGOUT');
    },
    remove_user_data (context){
      context.commit('REMOVE_DATA');
    },


    //Function to check if an older token is still valid and return results
    check_valid_token (context, foundToken){

      console.log(foundToken);
      return new Promise((resolve, reject) => {

              axios.defaults.headers.common['Authorization'] = foundToken;

              //Request the users user data
              axios({url: server+'get-user-details', method: 'GET'})
                .then(resp => {
                  const userResponseFromServer = resp.data.response;
                  console.log(userResponseFromServer);
                  if(userResponseFromServer===true){

                    //Successfull Login
                    context.commit('USER_SUCCESS', resp.data.payload);
                    context.commit('AUTH_SUCCESS', foundToken);

                    //Code to route to correct page ot to dashboard
                    if(localStorage.hasOwnProperty('nav')){
                      router.push({name:localStorage['nav']}).catch(()=>{if(Reporting==true){console.log('Duplicate Page')}});
                      context.commit('UPDATE_PAGE', localStorage['nav']);
                    }
                    else{
                      router.push({name:'user_dashboard'}).catch(()=>{if(Reporting==true){console.log('Duplicate Page')}});
                      context.commit('UPDATE_PAGE', 'user_dashboard');
                    }

                    resolve(resp);
                  }
                  else{
                    context.commit('AUTH_ERROR');
                    reject();
                  }
                })
                .catch(err => {
                  context.commit('AUTH_ERROR', err);
                  reject(err);
                })
          });
    },


    //UI Related Actions
    toggle_scanner (context, data){
      context.commit('toggleScanner', data);
    },
    change_page (context, page){
      context.commit('CHANGE_PAGE', page);
    },
    menu_control(context, action){
      if(action=='open'){
        context.commit('OPEN_MENU');
      }
      else if(action=='close'){
        context.commit('CLOSE_MENU');
      }
      else{
        context.commit('TOGGLE_MENU');
      }
    },


    // Create Account Related Actions
    register_for_account (context, user){

      console.log(user);
      return new Promise((resolve, reject) => {

              //Request the users user data
              axios({url: server+'register', data: user, method: 'POST'})
                .then(resp => {
                  const newUserResponseFromServer = resp.data.response;
                  console.log(newUserResponseFromServer);
                  if(newUserResponseFromServer===true){
                    //New User Created Successfully
                    resolve(resp);
                  }
                  else{
                    // New User could not be created
                    context.commit('AUTH_ERROR');
                    reject(resp);
                  }
                })
                .catch(err => {
                  // New User could not be created
                  context.commit('AUTH_ERROR', err);
                  reject(err);
                })
          });
    },

  // Drinks Session related actions
  start_drinks_session (context, sessionName){
    context.commit('START_DRINKS_SESSION',sessionName);
  },

  //Toggles the "Add" button set
  toggle_buttons (context){
    context.commit('TOGGLE_BUTTONS');
  },

  //Toggles Dark Mode
  toggle_dark_mode (context){
    context.commit('TOGGLE_DARK_MODE');
  },

  //Start a new session
  start_new_session(context, sessionName){

    return new Promise((resolve, reject) => {

            //Request the users user data
            axios({url: server+'start-session', data: {sessionName:sessionName}, method: 'POST'})
              .then(resp => {
                const newSessionResponseFromServer = resp.data.response;
                console.log(newSessionResponseFromServer);
                if(newSessionResponseFromServer===true){

                  //New Session Created Successfully
                  context.commit('START_DRINK_SESSION', resp.data.payload);
                  resolve(resp);
                }
                else{
                  // New Session could not be created
                  reject();
                }
              })
              .catch(err => {
                // New Session could not be created

                reject(err);
              })
        });
  },

//Join a drinks session
  join_drinks_session(context, sessionCode){

    return new Promise((resolve, reject) => {

            //Request the users user data
            axios({url: server+'join-session', data: {sessionCode:sessionCode}, method: 'POST'})
              .then(resp => {
                const joinSessionResponseFromServer = resp.data.response;
                console.log(joinSessionResponseFromServer);
                if(joinSessionResponseFromServer===true){

                  //New Session Created Successfully
                  context.commit('JOIN_DRINK_SESSION', resp.data.payload);
                  resolve(resp);
                }
                else{
                  // New Session could not be created
                  reject();
                }
              })
              .catch(err => {
                // New Session could not be created

                reject(err);
              })
        });
  },

  //Refresh a drinks session
    refresh_drinks_session(context, sessionCode){

      return new Promise((resolve, reject) => {

              //Request the users user data
              axios({url: server+'get-session', data: {sessionCode:sessionCode}, method: 'POST'})
                .then(resp => {
                  const getSessionResponseFromServer = resp.data.response;
                  console.log(getSessionResponseFromServer);
                  if(getSessionResponseFromServer===true){

                    //Refreshed Session Created Successfully
                    context.commit('REFRESH_DRINK_SESSION', resp.data.payload);
                    resolve(resp);
                  }
                  else{
                    // New Session could not be created
                    reject();
                  }
                })
                .catch(err => {
                  // New Session could not be created

                  reject(err);
                })
          });
    },


    //Leave a drinks session
      leave_drinks_session(context){

        return new Promise((resolve, reject) => {

                //Request the users user data
                axios({url: server+'leave-session', method: 'POST'})
                  .then(resp => {
                    const getSessionResponseFromServer = resp.data.response;
                    console.log(getSessionResponseFromServer);
                    if(getSessionResponseFromServer===true){

                      //Refreshed Session Created Successfully
                      context.commit('LEAVE_DRINK_SESSION', resp.data.payload);
                      resolve(resp);
                    }
                    else{
                      // New Session could not be created
                      reject();
                    }
                  })
                  .catch(err => {
                    // New Session could not be created

                    reject(err);
                  })
            });
      }



  }, //End of ACTIONS


  modules: {}
});
