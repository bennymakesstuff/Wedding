<template>
  <div class="scanner_outer">
      <div :class="['scanner_overlay', isScannerOverlayOpen]">
      </div>

      <div :class="['scanner_area', isScannerOpen]">
        <div class="scanner-title-area">
          <div class="close-button" @click="closeScanner()">x</div>
          <div class="scanner-title">Scan-o-beero</div>
        </div>
        <scanner/>
      </div>

      <div class="scanner_button" @click="openScanner()" v-if="!isPrivacyPage">
        <div class="logo">

        </div>
        <div class="text">
          Scan a Brew
        </div>
      </div>
  </div>
</template>

<script>
import Scanner from '../../ui/scanner3.vue';

export default {
  name: "ScannerButton",
  components: {
    'scanner':Scanner
  },
  data: function(){
    return {
      ScannerOpen: false,
      ScannerOverlayOpen: false,
    }
  },
  computed: {
    isPrivacyPage: function(){
      console.log(this.$router.path);
      if(this.$route.path=="/privacy"||this.$route.path=="/sitemap"){
        return true;
      }
      else{
        return false;
      }
    },
    isScannerOpen: function(){
      if(this.$store.state.scanner.isOpen==true){
      //if(this.ScannerOpen==true){
        return 'scanner_open';
      }else{
        return 'scanner_closed';
      }
    },
    isScannerOverlayOpen: function(){
      if(this.$store.state.scanner.isOpen==true){
      //if(this.ScannerOverlayOpen==true){
        return 'scanner_overlay_open';
      }else{
        return 'scanner_overlay_closed';
      }
    }
  },
  methods: {
    closeScanner: function(){
      this.$store.dispatch('toggle_scanner', false);
    },
    openScanner: function(){
      this.$store.dispatch('toggle_scanner', true);
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../ui/styles/colors.scss';
@import '../../ui/styles/breakpoints.scss';
@import '../../ui/styles/globals.scss';

@font-face {
  font-family: 'goma';
  src: url('../../ui/goma_block.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.scanner_overlay {width: 100vw;
                height: 100vh;
                background-color: rgba(#4a4a4a, 0.44);
                position: fixed;
                top: 0;
                left: 0;
                z-index: 149;}

.scanner_overlay_open {display: block;}
.scanner_overlay_closed {display: none;}

.scanner_area {width: calc(100vw - 1rem);
              height: auto;
              padding: 0.25rem;
              background-color: #ffffff;
              border: 1px solid #f1f1f1;
              box-shadow: 0px 0px 5px #333333;
              position: fixed;
              top: 5vh;
              left: 0.5rem;
              z-index: 150;
              border-radius: 0.25rem;

              @include respond-to('small'){
                width: calc(80vw - 1rem);
                left: calc(50vw - ((80vw - 1rem) / 2));

              }
              @include respond-to('medium'){
                width: calc(60vw - 1rem);
                left: calc(50vw - ((60vw - 1rem) / 2));
              }

              @include respond-to('large'){
                width: calc(40vw - 1rem);
                left: calc(50vw - ((40vw - 1rem) / 2));
              }

        .scanner-title-area {position: relative;

          .scanner-title {
            font-family: 'goma';
            font-size: 1.5rem;
            padding: 1rem;
          }

          .close-button {position: absolute;
                        top: 0.5rem;
                        right: 0rem;
                        height: 3rem;
                        width: 3rem;
                        border-radius: 0.25rem;
                        background-color: $mainGold;
                        color: #ffffff;
                        font-size: 3rem;
                        line-height: 2.6rem;
                        }
        }

            }

.scanner_open {display: block;}
.scanner_closed {display: none;}

.scanner_button {height: 3rem;
      border-radius: 0.25rem;
      width: auto;
      min-width: 3rem;
      line-height: 3rem;
      font-size: 0rem;
      background-color: $mainGold;
      color: #333333;
      position: fixed;
      box-shadow: 0px 0px 5px #d0d0d0;
      position: fixed;
      bottom: 1rem;
      right: 1rem;


      @include respond-to('medium'){

      }


      .logo {width: 3rem;
            height: 3rem;
            background-color: transparent;
            display: inline-block;
            vertical-align: top;
            background: transparent url('../../assets/scan_logo.png') no-repeat;
            background-position: center;
            background-size: 70%;}

      .text {width: auto;
            height: 4rem;
            font-size: 1rem;
            background-color: transparent;
            padding: 0rem 0.7rem;
            line-height: 3rem;
            padding-left: 0.1rem;
            display: inline-block;
            vertical-align: top;
            color: #ffffff;}
}

</style>
