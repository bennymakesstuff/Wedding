<template>
  <div class="application">
    <div :class="['hello',dispMode]">Hi {{this.$store.state.user.given_name}}</div>
  </div>
</template>


<script>
import Widget from '../../../ui/widget.vue';
import Quicklink from '../../../ui/quicklink.vue';
import SysAlert from '../../../ui/system-alert.vue';

//Icons
import BaseIcon from '../../../ui/icons/icon-base.vue';
import IconCalendarToday from '../../../ui/icons/icon-today-calendar.vue';

//Widgets
import BDUVisitsToday from './BDU_Visits_Today.vue';
import DirectoryVisitsToday from './Directory_Visits_Today.vue';
import BookingsToday from './New_Bookings_Today.vue';

export default {
  name: 'dashboard',
  components: {
    'widget': Widget,
    'quicklink': Quicklink,
    'system-alert':SysAlert,
    'bdu-visits-today':BDUVisitsToday,
    'directory-visits-today':DirectoryVisitsToday,
    'bookings-today':BookingsToday,
    'icon-base':BaseIcon,
    'today-icon':IconCalendarToday
  },
  data: function(){
    return {

    }
  },
  methods: {
    dispMode: function(){
      return  this.$store.state.displayMode;
    },
  }
};

</script>

<style lang="scss" scoped>
@import '../../../ui/styles/breakpoints.scss';
@import '../../../ui/styles/colors.scss';
@import '../../../ui/styles/globals.scss';


.hello.dark {font-size: 1.7rem; font-family: 'goma'; color: #e3e3e3;}
.hello {font-size: 1.7rem; font-family: 'goma'; color: $darkModeBGColor;}

.application {font-size: 0.8rem;
              height: auto;
              text-align: left;
              padding: 0.5rem;
              color: #131517;

.actions.dark {background-color: lighten($darkModeBGColor, 5%);}
.actions.dark {
          > .button {border: 1px solid lighten($darkModeBGColor, 8%);}
}

.actions {background-color: #ffffff;
          height: auto;
          padding: 1rem;
          border-radius: 0.15rem;
          box-shadow: 1px 1px 3px 3px rgba(#333333, 0.1);
          text-align: center;


          > .button {width: calc(45%);
                    padding: 1.5rem 0.5rem;
                    background-color: #d29a1b;
                    font-size: 1.2rem;}

          > .button:first-child {margin-right: 1rem;}

          }


.quicklinks {padding-bottom: 10px;
              padding-top: 5px;
            border-bottom: 1px solid #e3e3e3;}

  h1 {font-size: 1.5rem;}
  h3 {color: #8b8b8b;}
}
</style>
