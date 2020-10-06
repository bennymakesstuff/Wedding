<template>
  <div class="application">
    <h1>Beer Feed</h1>

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
};

</script>

<style lang="scss" scoped>
.application {font-size: 0.8rem;
              height: auto;
              text-align: left;
              padding: 1rem;
              color: #131517;


.quicklinks {padding-bottom: 10px;
              padding-top: 5px;
            border-bottom: 1px solid #e3e3e3;}

  h1 {font-size: 1.5rem;}
  h3 {color: #8b8b8b;}
}
</style>
