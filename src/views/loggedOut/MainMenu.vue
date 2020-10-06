<template>
  <div class="menu">
    <div class="logo_area"></div>
    <div class="button_area">
      <div class="large_menu">
        <router-link v-if="!userLoggedIn" :to="{ name: 'home'}" class="menu_item">Home</router-link>
        <router-link v-if="!userLoggedIn" :to="{ name: 'local_releases'}" class="menu_item">Local Releases</router-link>
        <router-link :to="{ name: 'register'}" v-if="!userLoggedIn" class="menu_item">Sign Up</router-link>
        <router-link v-if="userLoggedIn && !userIsAdmin" :to="{ name: 'user_scan'}" class="menu_item">Scan</router-link>
        <router-link v-if="userLoggedIn && !userIsAdmin" :to="{ name: 'about'}" class="menu_item">My Lists</router-link>
        <div v-if="userLoggedIn" @click="logout" class="menu_item">Logout</div>
      </div>
      <button class="menu_trigger" @click="openMenu()">
        <div class="icon">
          <div class="menu_bar"/>
          <div class="menu_bar"/>
          <div class="menu_bar"/>
        </div>
        <div class="text">Menu</div>
      </button>
      <button class="menu_login" v-if="!userLoggedIn" @click="navigateTo('login')">
        <div class="icon">

        </div>
        <div class="text">Login</div>
      </button>
    </div>

    <div :class="['mobile_menu_page_overlay', overlayStatus]" @click="closeMenu()"></div>
    <div :class="['mobile_menu', mobileMenuStatus]">
      <div class="logo_area_mobile_menu">
        <div class="logo_inner">
          <div class="beta">BETA</div>
        </div>
      </div>
      <div class="mobile_menu_item scan_item" @click="openScanner()">
        <div class="scan_button">
          <div class="scan_logo"></div>
          <div class="scan_text">Scan a Brew</div>
        </div>
      </div>
      <div class="mobile_menu_item" v-if="userLoggedIn" @click="navigateTo('home')">
        <div class="icon"></div>
        <div class="text">My Beer Journey</div>
      </div>
      <div class="mobile_menu_item" v-if="!userLoggedIn" @click="navigateTo('home')">
        <div class="icon"></div>
        <div class="text">Home</div>
      </div>
      <div class="mobile_menu_item" v-if="userLoggedIn" @click="navigateTo('thecrawl')">
        <div class="icon"></div>
        <div class="text">The Crawl</div>
      </div>
      <div class="mobile_menu_item" @click="navigateTo('local_releases')">
        <div class="icon"></div>
        <div class="text">Local Releases</div>
      </div>
      <div class="mobile_menu_item" @click="navigateTo('local_releases')">
        <div class="icon"></div>
        <div class="text">Not as Local Releases</div>
      </div>
      <div class="mobile_menu_item" v-if="userLoggedIn" @click="navigateTo('user_lists')">
        <div class="icon"></div>
        <div class="text">My Lists</div>
      </div>
      <div class="mobile_menu_item" v-if="!userLoggedIn" @click="navigateTo('login')">
        <div class="icon"></div>
        <div class="text">Login</div>
      </div>
      <div class="mobile_menu_item" v-if="userLoggedIn" @click="logout(), navigateTo('home')">
        <div class="icon"></div>
        <div class="text">Logout</div>
      </div>
      <div class="mobile_menu_item" v-if="!userLoggedIn" @click="navigateTo('register')">
        <div class="icon"></div>
        <div class="text">Sign up</div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../../ui/button.vue';
import UserIcon from '../../ui/icons/icon-person-fill.vue';
import IconBase from '../../ui/icons/icon-base.vue';

export default {
  name: "MainMenu",
  components: {
    'ben-button':Button,
    'user-icon':UserIcon,
    'icon-base':IconBase
  },
  data: function(){
    return {
      buttonContent: {content: "User Login",
                id: 'defaultButton',
                size: 'medium',
                type: '',
                icon: true,
                shadow: 'low',
                location: 'login'},
      mobile_menu_open: true,
      overlay_open: true
              }
  },
  computed: {
    userLoggedIn: function(){
      if(this.$store.state.user==null){
        return false;
      }
      else{
        return true;
      }
    },
    userIsAdmin: function(){
      if(this.$store.state.user.is_admin==true){
        return true;
      }
      else{
        return false;
      }
    },
    mobileMenuStatus: function(){
      if(this.mobile_menu_open==true){
        return 'mobile_menu_open';
      }
      else{
        return 'mobile_menu_closed';
      }
    },
    overlayStatus: function(){
      if(this.mobile_menu_open==true){
        return 'overlay_open';
      }
      else{
        return 'overlay_closed';
      }
    }
  },
  methods: {
    logout: function(){
      this.$store.dispatch('logout');
    },
    navigateTo: function(location){
        this.$router.push({name: location})
          .catch(function(error){
            console.log("Already at this location. Navigation Ignored.")
          });
          this.closeMenu();
          //window.scrollTo(0, 0);
    },
    closeMenu: function(){
      this.mobile_menu_open = false;
      this.overlay_open = false;
    },
    openMenu: function(){
      this.mobile_menu_open = true;
      this.overlay_open = true;
    },
    closeScanner: function(){
      this.$store.dispatch('toggle_scanner', false);
    },
    openScanner: function(){
      this.closeMenu();
      this.$store.dispatch('toggle_scanner', true);
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../ui/styles/colors.scss';
@import '../../ui/styles/breakpoints.scss';
@import '../../ui/styles/globals.scss';

.loginButton {
  @include respond-to('small'){
    display: none;
  }
  @include respond-to('medium'){
    display: none;
  }
  @include respond-to('large'){
    display: none;
  }
}

.menu {height: $mainMenuHeight;
      width: 100%;
      background-color: $mainMenuColor;
      color: $mainMenuTextColor;
      position: fixed;
      z-index: 100;
      top: 0;
      box-shadow: 0px 0px 5px #d0d0d0;

      .button_area {width: auto;
                  position: absolute;
                  top: 1.5rem;
                  right: 1rem;
                  height: 2rem;

                  @include respond-to('small'){
                    right: 1.3rem;
                  }

          .large_menu {width: auto;
                      display: none;
                      vertical-align: top;
                      margin-right: 0.5rem;

                      @include respond-to('small'){
                        display: none;
                      }
                      @include respond-to('medium'){
                        display: inline-block;
                      }

            .menu_item {color: $mainMenuTextColor;
                        height: 3rem;
                        line-height: 2.25rem;
                        font-size: 0.9rem;
                        padding: 0.5rem 1rem;
                        display: inline-block;
                        vertical-align: top;
                        cursor: pointer;
                        border-radius: 0.2rem;
                      }

            .menu_item:hover {background-color: #fff7da;}
                  }

          .menu_trigger {border-radius: 0.15rem;
                     border: 0;
                     width: auto;
                     height: 2.5rem;
                     background-color: transparent;
                     border: 1px solid $mainGold;
                     color: #f1f1f1;
                     font-size: 0.9rem;
                     cursor: pointer;
                     outline: none;
                     padding: 0.45rem;

                     @include respond-to('small'){

                     }
                     @include respond-to('medium'){
                       display: none;
                     }

                     .icon {height: 1.2rem;
                           width: 1.5rem;
                           background-color: #ffffff;
                           margin: 0.0rem;
                           margin-bottom: 0.15rem;
                           margin-top: 0.05rem;
                           background-color: transparent;
                           display: inline-block;
                           vertical-align: top;
                           position: relative;
                           pointer-events: none;

                        .menu_bar {height: 0.3rem;
                                  margin-bottom: 0.25rem;
                                  border-radius: 0.05rem;
                                  width: 100%;
                                  background-color: $mainGold;
                                  pointer-events: none;}

                        .menu-bar:last-child {margin-bottom: 0;}
                         }

                    .text {height: 1.2rem;
                          width: auto;
                          line-height: 1.3rem;
                          font-size: 0.9rem;
                          background-color: transparent;
                          margin: 0.15rem;
                          display: none;
                          vertical-align: top;
                          position: relative;
                          color: $mainGold;
                          pointer-events: none;

                          @include respond-to('small'){
                            display: inline-block;
                          }
                        }
                  }

                .menu_trigger:hover {background-color: #fff7da;}


                .menu_login {border-radius: 0.15rem;
                           border: 0;
                           width: auto;
                           height: 2.5rem;
                           background-color: transparent;
                           border: 1px solid $mainGold;
                           color: #f1f1f1;
                           font-size: 0.9rem;
                           cursor: pointer;
                           outline: none;
                           padding: 0.45rem;

                           @include respond-to('small'){

                           }
                           @include respond-to('medium'){

                           }

                           .icon {height: 1.2rem;
                                 width: 1.5rem;
                                 background-color: #ffffff;
                                 margin: 0.0rem;
                                 margin-bottom: 0.15rem;
                                 margin-top: 0.05rem;
                                 background-color: transparent;
                                 display: inline-block;
                                 vertical-align: top;
                                 position: relative;
                                 pointer-events: none;

                              .menu_bar {height: 0.3rem;
                                        margin-bottom: 0.25rem;
                                        border-radius: 0.05rem;
                                        width: 100%;
                                        background-color: $mainGray;
                                        pointer-events: none;}

                              .menu-bar:last-child {margin-bottom: 0;}
                               }

                          .text {height: 1.2rem;
                                width: auto;
                                line-height: 1.3rem;
                                font-size: 0.9rem;
                                background-color: transparent;
                                margin: 0.15rem;
                                color: #333333;
                                display: none;
                                vertical-align: top;
                                position: relative;
                                color: $mainGold;
                                pointer-events: none;

                                @include respond-to('small'){
                                  display: inline-block;
                                }
                              }
                        }

                      .menu_login:hover {background-color: #fff7da;}
                      }



      .logo_area {width: auto;
                  position: absolute;
                  top: 0.3rem;
                  left: 1rem;
                  height: 5.5rem;
                  background: transparent url('../../assets/logo_color_600w_beta.png') no-repeat;
                  background-size: contain;
                  background-position: center;
                  line-height: 5.5rem;
                  font-size: 1.5rem;
                  width: 15rem;
                  color: $mainGray;

          @include respond-to('small'){

          }
          @include respond-to('medium'){

          }
          @include respond-to('large'){

          }
        }

.mobile_menu_page_overlay {background-color: rgba(#4f4f4f, 0.4);
                          position: fixed;
                          top: 0;
                          height: 100vh;
                          width: 100vw;}

.overlay_closed {left: -110vw;}
.overlay_open {left: 0;}

.mobile_menu {position: fixed;
              top: 0;
              width: $mobileMenuWidth;
              height: 100vh;
              background-color: $mobileMenuColor;
              box-shadow: $mobileMenuShadow;
              transition: left 100ms ease;



              .logo_area_mobile_menu {width: 100%;
                        border-bottom: 1px solid #e6e6e6;
                        text-align: center;
                        height: 6rem;
                        line-height: 6rem;


                    .logo_inner {height: 4rem;
                                width: 12rem;
                                background: transparent url('../../assets/logo_color_600w_beta.png') no-repeat;
                                background-position: center;
                                background-size: contain;
                                display: inline-block;
                                vertical-align: middle;
                                line-height: 4rem;
                                font-size: 1.5rem;
                                color: $mainGray;
                                position: relative;
                                background-color: transparent;}

                      .beta {position: absolute;
                        display: none;
                            top: -0.1rem;
                            right: -0.8rem;
                            box-shadow: $betaChipShadow;
                            transform: rotate(15deg);
                            background-color: $betaChipBackground;
                            border-radius: 0.15rem;
                            font-size: 0.7rem;
                            padding: 0.15rem;
                            line-height: 0.7rem;
                            color: #ffffff;
                            width: 2rem;
                            height: 0.8rem;}

                      }

          .mobile_menu_item {border-bottom: 1px solid #e6e6e6;
                            height: 4rem;
                            padding: 0;
                            line-height: 4rem;
                            text-align: left;


                            .icon {height: 4rem;
                                  width: 4rem;
                                  background-color: #f0f0f0;
                                  line-height: 4rem;
                                  display: inline-block;
                                  vertical-align: top;}

                            .text {height: 4rem;
                                  line-height: 4rem;
                                  padding: 0rem 0.7rem;
                                  display: inline-block;
                                  vertical-align: top;}

            .scan_button {height: 4rem;
                  border-radius: 0.25rem;
                  width: auto;
                  min-width: 3rem;
                  //max-width: 10rem;
                  line-height: 3rem;
                  font-size: 0rem;
                  background-color: $mainGold;
                  color: #333333;
                  position: fixed;
                  box-shadow: 0px 0px 5px #d0d0d0;
                  position: relative;
                  display: inline-block;
                  vertical-align: middle;


                  @include respond-to('medium'){

                  }


                  .scan_logo {width: 4rem;
                        height: 4rem;
                        background-color: transparent;
                        display: inline-block;
                        vertical-align: top;
                        background: transparent url('../../assets/scan_logo.png') no-repeat;
                        background-position: center;
                        background-size: 70%;}

                  .scan_text {width: auto;
                        height: 4rem;
                        font-size: 1.2rem;
                        background-color: transparent;
                        padding: 0rem 1.4rem;
                        padding-left: 0.3rem;
                        line-height: 4rem;
                        display: inline-block;
                        vertical-align: middle;
                        color: #ffffff;}
            }
          }

        .scan_item {text-align: center;
                    height: 5.5rem;
                    line-height: 5.5rem;}

            }

.mobile_menu_open {left: 0px;}
.mobile_menu_closed {left: -100vw;}


    }

h1 {font-size: 2rem;}

</style>
