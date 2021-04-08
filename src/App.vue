<template>
  <div id="app">
    <MainMenu/>
    <router-view />
    <footer-area/>
  </div>
</template>

<script>
import MainMenu from './views/loggedOut/MainMenu.vue';
import FooterArea from './views/loggedOut/Footer.vue';
export default {
  name: "App",
  components: {
    'MainMenu':MainMenu,
    'footer-area':FooterArea
  },
  data: function(){
    return {
    }
  },
  methods: {
  },
  mounted() {
  }
};
</script>

<style lang="scss">
@import './ui/styles/colors.scss';
@import './ui/styles/breakpoints.scss';
@import './ui/styles/globals.scss';

body {padding: 0;
      margin: 0;
      background-color: #637460;}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ffffff;
  font-size: 0; /* This font size is needed to allow nav and content to appear inline. */
  width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  border: 0;
  border-top: 0.4rem solid #637460;
}

h1 {margin: 0;}
</style>
