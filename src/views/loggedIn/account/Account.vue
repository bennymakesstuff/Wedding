<template>
  <div class="user">
    <div class="image-area">
      <div class="user-image"></div>
      <div :class="['username',dispMode]">{{this.$store.state.user.given_name}}</div>
      <div :class="['username',dispMode]">{{this.$store.state.user.family_name}}</div>
    </div>
    <div class="actions">
      <button class="">Change Password</button>
      <button class="" @click="logout">Logout</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'account',
  components: {

  },
  data: function(){
    return {

    }
  },
  computed: {
    theUser: function(){
      return this.$store.state.user;
    }
  },
  methods: {
    dispMode: function(){
      return  this.$store.state.displayMode;
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

.user {font-size: 0.8rem;
              height: auto;
              text-align: left;
              padding: 0.5rem;
              padding-bottom: 8rem;

  > .image-area {height: auto;
                padding: 1rem 0rem;
                width: calc(100%);

    > .username.dark {color: #e3e3e3 !important;}

    > .username {font-family: 'goma';
                font-size: 1.5rem;
                width: 100%;
                text-align: center;
                color: $darkModeBGColor;}



    > .user-image {background-color: #b0b0b0;
                  width: 10rem;
                  height: 10rem;
                  border: 8px solid #333333;
                  box-shadow: 1px 2px 4px 4px rgba(#333333, 0.05);
                  background: #e3e3e3 url('../../../assets/user-icon.png') no-repeat;
                  background-position: center;
                  background-size: contain;
                  border-radius: 0.65rem;
                  margin: auto;}
  }


  > .actions {width: calc(100% - 8rem);
              margin: auto;}

  > h1 {font-size: 1.5rem;
      margin: 0;
      text-align: center;
      padding: 1rem;
      font-family: 'goma';
      font-weight: 500;
      color: #989898;}

  > .first-pane {margin-top: -1rem;}
}
</style>
