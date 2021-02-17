<template>
  <div class="newbeer">
    <h1>NEW BEER</h1>

    <div v-if="!session.started">
      <div :class="['field',dispMode]">
        <input type="text" placeholder=" " v-model.trim="session.title">
        <div class="label">Search Beer</span></div>
      </div>
      <h1 class="or">OR</h1>
      <p class="or-text">If you can not find the beer you're drinking, add a new beer.</p>
      <div :class="['field',dispMode]">
        <input type="text" placeholder=" " v-model.trim="session.title">
        <div class="label">Beer Name</span></div>
      </div>
      <div :class="['field',dispMode]">
        <input type="text" placeholder=" " v-model.trim="session.title">
        <div class="label">Brewery</span></div>
      </div>
      <div :class="['field',dispMode]">
        <input type="text" placeholder=" " v-model.trim="session.title">
        <div class="label">Style</span></div>
      </div>
      <div :class="['field',dispMode]">
        <input type="text" placeholder=" " v-model.trim="session.title">
        <div class="label">ABV</span></div>
      </div>
      <div :class="['field',dispMode]">
        <input type="text" placeholder=" " v-model.trim="session.title">
        <div class="label">IBU</span></div>
      </div>
      <button>Add</button>

    </div>

  </div>
</template>


<script>
export default {
  name: 'new-beer',
  components: {

  },
  data: function(){
    return {
      session: {
        started: false,
        title: '',
      }
    }
  },
  computed: {
    dispMode: function(){
      return  this.$store.state.displayMode;
    },
    theUser: function(){
      return this.$store.state.user;
    }
  },
  methods: {
    startSession: function(){

    },
    endSession: function(){

    },
    logout: function(){
      this.$store.dispatch('logout');
    }
  }
};

</script>

<style lang="scss" scoped>
@import '../../../ui/styles/breakpoints.scss';
@import '../../../ui/styles/colors.scss';
@import '../../../ui/styles/globals.scss';


@font-face {
  font-family: 'goma';
  src: url('../../../ui/goma_block.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

button {padding: 0.8rem 1.8rem;
        margin-top: 0.5rem;
        font-size: 1.5rem;
        color: #ffffff;
        width: 100%;
        //background-color: $bottomMenuBackground;
        background-color: $mainGold;
        border: 0;
        font-family: 'goma';
        border-radius: 0.3rem;
        font-weight: 300;
        cursor: pointer;
        outline: none;
        box-shadow: 0px 1px 1px rgba(106, 80, 12, 0.77);
        transition: box-shadow 150ms ease;}

button:hover {box-shadow: 1px 1px 3px rgba(45, 78, 40, 1);}

.or-text {font-size: 0.9rem;
    margin: 0;
    margin-top: -2.8rem;
    padding-bottom: 0rem;
    text-align: center;
    padding: 1rem;
    font-weight: 500;
    color: #c8c8c8;}

.or {font-size: 2rem;
    margin: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    padding: 1rem;
    font-family: 'goma';
    font-weight: 500;
    color: #c8c8c8;}

.newbeer {font-size: 0.8rem;
              height: auto;
              text-align: left;
              padding: 1.5rem;
              padding-top: 0;
              padding-bottom: 8rem;

  > h1 {font-size: 1.5rem;
      margin: 0;
      text-align: center;
      padding: 1rem;
      font-family: 'goma';
      font-weight: 500;
      color: #c8c8c8;}
}
</style>
