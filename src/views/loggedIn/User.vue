<template>
  <div :class="['logged-in-area',dispMode]">
    <div :class="['float-button', showMinus]" @click="toggleButtons">
      <div :class="['floating-button', 'add-beer-button', hideButtons]" @click="gotToPage('new_beer')">
        <h1>
          <span class="char1">B</span>
          <span class="char2">E</span>
          <span class="char3">E</span>
          <span class="char4">R</span>
        </h1>
      </div>
      <div :class="['floating-button', 'start-session-button', hideButtons]"  @click="gotToPage('new_sesh')">
        <span>
        </span>
        <h1>
          <span class="char1">S</span>
          <span class="char2">E</span>
          <span class="char3">S</span>
          <span class="char4">H</span>
        </h1>
      </div>
    </div>
    <div class="float-overlay" v-if="this.$store.state.showButtons" @click="toggleButtons"></div>
    <main-navigation id="main-navigation"/>
    <div id="view-content" :class="[dispMode]">
      <router-view/>
    </div>
  </div>
</template>


<script>
import Nav from './navigation/Navigation.vue';
import Notifications from './notifications/Notifications.vue';
import VueRouter from 'vue-router';

export default {
  name: 'user',
  components: {
    'main-navigation': Nav,
    'notification-area': Notifications
  },
  data: function(){
    return {

    }
  },
  computed: {
    dispMode: function(){
      return  this.$store.state.displayMode;
    },
    hideButtons: function(){
      return (this.$store.state.showButtons==true) ? '' : 'hidden-button';
    },
    showMinus: function(){
      return (this.$store.state.showButtons==true) ? 'activated' : '';
    },
  },
  methods: {
    toggleButtons: function(){
      this.$store.dispatch('toggle_buttons');
    },
    startSession: function(){
      this.$store.dispatch('start_drinks_session', 'Pissup Sesh');
    },
    gotToPage: function(page){
      this.$store.dispatch('change_page', page);
      this.menuControl('close');
    },
    menuControl: function(action){
      this.$store.dispatch('menu_control', action);
    },
  }
};

</script>



<style lang="scss" scoped>
@import '../../ui/styles/breakpoints.scss';
@import '../../ui/styles/colors.scss';
@import '../../ui/styles/globals.scss';


.float-overlay {position: fixed;
                height: 100vh;
                width: 100vw;
                background-color: rgba(#333333, 0.7);
                z-index: 90;
                backdrop-filter: blur(2px);}

.float-button.activated {background: #d29a1b url('../../assets/minus-dark-border.png') no-repeat;
                        background-size: contain;
                        background-position: center;}

.float-button {position: fixed;
              cursor: pointer;
              bottom: 1rem;
              right: 1rem;
              border-radius: 2.25rem;
              box-shadow: 1px 1px 3px 3px rgba(#333333, 0.5);
              width: 4.5rem;
              height: 4.5rem;
              background-color: #d29a1b;
              z-index: 100;
              background: #d29a1b url('../../assets/plus-dark-border.png') no-repeat;
              background-size: contain;
              background-position: center;


    > .floating-button {border-radius: 2.5rem;
                      cursor: pointer;
                      box-shadow: 1px 1px 3px 3px rgba(#333333, 0.5);
                      width: 5rem;
                      height: 5rem;
                      background-color: #d29a1b;
                      z-index: 100;
                      text-align: center;
                      line-height: 5rem;
                      transition: margin-left 100ms linear, margin-top 100ms linear;

                  > span {color: #333333; font-size: 2rem;}
                  > h1 span {font: 1.2rem Monaco, MonoSpace;
                            height: 5rem;
                            position: absolute;
                            width: 20px;
                            left: 2rem;
                            color: #d29a1b;
                            //color: red;
                            //outline: 1px solid red;
                            top: -2.1rem;
                            transform-origin: bottom center;
                            -webkit-user-select: none;  /* Chrome all / Safari all */
                            -moz-user-select: none;     /* Firefox all */
                            -ms-user-select: none;      /* IE 10+ */
                            user-select: none;
                          }
                    }

    > .add-beer-button {position: absolute;
                      margin-left: -8rem;
                      margin-top: -2rem;
                      background: #d29a1b url('../../assets/beer.png') no-repeat;
                      background-size: contain;
                      background-position: center;

                      > h1 {
                      .char4 { transform: rotate(-25deg); }
                      .char3 { transform: rotate(-40deg); }
                      .char2 { transform: rotate(-55deg); }
                      .char1 { transform: rotate(-70deg); }
                      }
                    }

    > .start-session-button {position: absolute;
                      margin-left: -3rem;
                      margin-top: -7rem;
                      background: #d29a1b url('../../assets/sesh.png') no-repeat;
                      background-size: contain;
                      background-position: center;

                      > h1 {
                      .char4 { transform: rotate(-5deg); }
                      .char3 { transform: rotate(-20deg); }
                      .char2 { transform: rotate(-35deg); }
                      .char1 { transform: rotate(-50deg); }
                      }
                    }

    > .hidden-button {margin-left: 8rem;
                    margin-top: 8rem;}

              }

#main-navigation {height: 100vh;
                  display: inline-block;
                  width: $menu_width;
                  vertical-align: top;
                  background-color: $accountMenuBackground;
                  color: $accountMenuBackground;
                  font-size: 0.8;
                  position: fixed;
                  top: $mainMenuHeight;
                  left: calc(0px - #{$menu_width});

                  @include respond-to('medium'){
                    left: 0;
                  }
                }

#view-content.dark {background-color: $darkModeBGColor;}

#view-content {height: 100vh;
              min-height: 100vh;
              display: inline-block;
              width: calc(100vw);
              vertical-align: top;
              background-color: $contentBackground;
              color: #131517;
              font-size: 0.8;
              position: relative;
              overflow-y: scroll;
              overflow-x: hidden;

              @include respond-to('medium'){
                width: calc(100vw - #{$menu_width});
                position: absolute;
                left: $menu_width;
              }
            }



</style>
