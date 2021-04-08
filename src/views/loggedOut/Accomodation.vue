<template>
  <div class="home">
    <div class="onsite">At the Venue</div>
    <div class="standard-text">Guests are welcome to camp at the venue.</div>
    <div class="standard-text">The cost to camp is $25 per adult.</div>
    <div class="standard-text">Children at no cost.</div>
    <div class="standard-text break">Plenty of room for both tents and campers.</div>
    <div class="standard-text break"><b>Please let us know either way in the RSVP.</b></div>
    <hr class="short-rule"/>
    <div class="standard-text">For those wishing to camp please setup before</div>
    <div class="standard-text break">1PM or after the ceremony.</div>
    <hr class="short-rule"/>
    <div class="standard-text">There will be directions at Barrenjoey to</div>
    <div class="standard-text">both parking and camping.</div>
    <div class="offsite">Elsewhere</div>
    <div class="standard-text">There is plenty of accomodation around the area.</div>
    <div class="standard-text">Both Motels and B&B's are spattered around</div>
    <div class="standard-text">the nearby Adelaide Hills towns of</div>
    <div class="standard-text">Birdwood, Gumeracha, Forreston, Woodside</div>
    <div class="standard-text">Lobethal, Mt. Pleasant and Charleston.</div>
  </div>
</template>

<script>
import MainMenu from './MainMenu.vue';

export default {
  name: "accomodation",
  components: {
    'main-menu':MainMenu
  },
  data: function(){
    return {}
  },
};
</script>
<style lang="scss" scoped>
@import '../../ui/styles/colors.scss';
@import '../../ui/styles/breakpoints.scss';
@import '../../ui/styles/globals.scss';

.short-rule {width: 10rem;
            margin: 0.75rem;
            margin-left: auto;
            margin-right: auto;}

.home {
  padding: 1rem 1rem;

  > div {font-size: 1.1rem;
        }
        
  > .break {margin-bottom: 0.75rem;}
  > .onsite {font-family: 'Caveat', cursive;
            font-size: 2rem;}
  > .offsite {font-family: 'Caveat', cursive;
            font-size: 2rem;
            margin-top: 3rem;}
  > .standard-text {font-size: 1rem;}
}

</style>
