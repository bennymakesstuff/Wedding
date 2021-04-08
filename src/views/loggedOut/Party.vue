<template>
  <div class="home">
    <div class="">Our <span class="special-text">GIANT</span>&nbsp;&nbsp;Wedding Party</div>

    <div class="party">
      <div class="title">Bridesmaids</div>
      <div>
        <div v-for="lady in maidsofhonour" class="person">
            <div class="image"><img v-bind:src="'./'+lady.img" width="100%" height="100%"/></div>
            <div class="name">{{lady.name}}</div>
            <div class="role">Maid of Honour</div>
        </div>
      </div>
      <div>
        <div v-for="lady in bridesmaids" class="person">
            <div class="image"><img v-bind:src="'./'+lady.img" width="100%" height="100%"/></div>
            <div class="name">{{lady.name}}</div>
            <div class="role">Bridesmaid</div>
        </div>
      </div>
    </div>

    <div class="party">
    <div class="title">Groomsmen</div>
    <div>
      <div v-for="man in bestmen" class="person">
          <div class="image"><img v-bind:src="'./'+man.img" width="100%" height="100%"/></div>
          <div class="name">{{man.name}}</div>
          <div class="role">Best Man</div>
      </div>
    </div>
    <div>
      <div v-for="man in groomsmen" class="person">
          <div class="image"><img v-bind:src="'./'+man.img" width="100%" height="100%"/></div>
          <div class="name">{{man.name}}</div>
          <div class="role">Groomsman</div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
import MainMenu from './MainMenu.vue';

export default {
  name: "party",
  components: {
    'main-menu':MainMenu
  },
  data: function(){
    return {
      groomsmen: [
        {name:'Benjamin Turner', img: 'benjamin.png'},
        {name:'Stewart McLaughlin', img: 'stewart.png'},
        {name:'Joe Dwyer', img: 'joe.png'},
        {name:'Andy Katsivas', img: 'andy.png'},
        {name:'Chris Walczak', img: 'chris.png'},
      ],
      bridesmaids: [
        {name:'Georgia Wynne', img: 'georgia.png'},
        {name:'Jessica Broad', img: 'jess.png'},
        {name:'Zoë Wishart', img: 'zoe.png'},
        {name:'Adie Haines', img: 'adie.png'},
      ],
      maidsofhonour: [
        {name:'Amanda Amoroso', img: 'amanda.png'},
        {name:'Ellen Ferguson', img: 'ellen.png'},
      ],
      bestmen: [
        {name:'Travis Broad', img: 'travis.png'},
        {name:'Jack Broad', img: 'jack.png'},
      ]
    }
  },
};
</script>
<style lang="scss" scoped>
@import '../../ui/styles/colors.scss';
@import '../../ui/styles/breakpoints.scss';
@import '../../ui/styles/globals.scss';


.special-text {font-family: 'Caveat', cursive;
              font-size: 2rem;
              vertical-align: sub;
              padding: 0 0.5rem 0 0.35rem;
              color: #637460;}

.home {
  padding: 2rem 0;

  > div {font-size: 1.1rem;
        }

  > .party {
    margin-top: 3rem;
    max-width: calc(100% - 1rem);
    margin-left: auto;
    margin-right: auto;
    text-align: center;

    > .title {}
    > div {
      > .person {width: 12rem;
                display: inline-block;
                min-height: 12rem;
                font-family: 'Caveat', cursive;
                background: #fefefe;
                margin: 0.5rem 0.25rem;
                padding: 0.5rem;
                border-radius: 0.25rem;
                transition: background-color 150ms ease;

              .image {min-height: 11rem;
                      background-color: transparent;
                      border-bottom: 2px groove #637460;}

              .name {font-size: 1.5rem;}

              .role {font-size: 1.3rem;}
                }

      > .person:hover {background-color: rgba(99, 116, 96, 0.05);}
          }
        }
}

</style>
