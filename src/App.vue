<template>
  <div id="app">
    <MainMenu/>
    <router-view />
    <ScannerArea />
    <footer-area/>
  </div>
</template>

<script>
import MainMenu from './views/loggedOut/MainMenu.vue';
import BottomMenu from './views/loggedOut/BottomMenu.vue';
import ScannerArea from './views/loggedOut/ScannerArea.vue';
import FooterArea from './views/loggedOut/Footer.vue';
export default {
  name: "App",
  components: {
    'MainMenu':MainMenu,
    'BottomMenu':BottomMenu,
    'ScannerArea':ScannerArea,
    'footer-area':FooterArea
  },
  data: function(){
    return {}
  },
};
</script>

<style lang="scss">
@import './ui/styles/colors.scss';
@import './ui/styles/breakpoints.scss';
@import './ui/styles/globals.scss';

body {padding: 0;
      margin: 0;}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 0; /* This font size is needed to allow nav and content to appear inline. */
  width: 100vw;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  border: 0;
  padding-top: $mainMenuHeight;
}

h1 {margin: 0;}
</style>
