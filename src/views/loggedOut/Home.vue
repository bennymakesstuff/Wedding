<template>
  <div class="home">
    <div class="title">- Our Day -</div>
    <div class="when">November 6th 2021</div>
    <div class="ceremony">Ceremony starts at <b>2:30PM</b></div>
    <div class="reception">Reception following the ceremony</div>
    <div class="ec">Extra curricular activities till the AM</div>
    <div class="location">Location</div>
    <div class="where"><b>Barrenjoey Hideaway</b></div>
    <div class="where">219 Winton Road Forreston, SA, 5233</div>


    <div class="notice">This location is a little out of the way,<br>located 10 minutes from Birdwood SA.</div>

    <div class="location" style="margin-top: 2rem;">Gifts</div>
    <div class="where"><b>We do not need , nor expect gifts</b></div>
    <div class="where">but for those that wish to, a tree or bunnings voucher would be appreciated</div>
  </div>
</template>

<script>
import MainMenu from './MainMenu.vue';

export default {
  name: "Home",
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


.home {
  padding: 1rem 0;
  background-color: #ffffff;

  > div {font-size: 1.1rem;
        }

  > .title {font-size: 2rem;
            color: #637460;
            font-family: 'Caveat', cursive;
            }

  > .when, .where, .ceremony, .reception, .ec {font-size: 1.5rem;
            color: #30392e;
            }

  > .when {margin-bottom: 0rem;
          font-size: 2.8rem;
          font-family: 'Caveat', cursive;}

  > .ceremony {margin-bottom: 0.5rem;
          margin-top: -0.25rem;
          font-size: 1rem;
          line-height: 1.5rem;}

  > .reception {margin-bottom: 0.5rem;
          font-size: 1rem;
          line-height: 0.7rem;}

  > .ec {margin-bottom: 1rem;
          font-size: 1rem;
          line-height: 1.5rem;}

  > .location {font-size: 2.8rem;
              font-family: 'Caveat', cursive;}

  > .where {font-size: 1rem;}

  > .notice {margin-top: 3rem;font-size: 1rem;}

}

</style>
