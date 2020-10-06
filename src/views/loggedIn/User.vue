<template>
  <div>
    <main-navigation id="main-navigation"/>
    <div id="view-content">
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
  }
};

</script>



<style lang="scss" scoped>
@import '../../ui/styles/breakpoints.scss';
@import '../../ui/styles/colors.scss';
@import '../../ui/styles/globals.scss';

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
