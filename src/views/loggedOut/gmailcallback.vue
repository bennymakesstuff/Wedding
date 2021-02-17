<template>
  <div class="home">
    <div class="hero">
      <div class="hero_inner">
        <div class="title_area">
          <h1 :class="[this.$store.state.displayMode]">{{info.code[0]}}</h1>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import LatestLocalReleases from './LatestLocalReleases.vue';
import LatestAfarReleases from './LatestAfarReleases.vue';

export default {
  name: "Home",
  components: {
    'latest-local-releases':LatestLocalReleases,
    'latest-afar-releases':LatestAfarReleases,
  },
  data: function(){
    return {
      info: null
    }
  },
  computed: {

  },
  mounted(){
    this.info = this.parseURLParams(window.location.href);
  },
  methods: {
    parseURLParams: function(url) {
      var queryStart = url.indexOf("?") + 1,
          queryEnd   = url.indexOf("#") + 1 || url.length + 1,
          query = url.slice(queryStart, queryEnd - 1),
          pairs = query.replace(/\+/g, " ").split("&"),
          parms = {}, i, n, v, nv;

      if (query === url || query === "") return;

      for (i = 0; i < pairs.length; i++) {
          nv = pairs[i].split("=", 2);
          n = decodeURIComponent(nv[0]);
          v = decodeURIComponent(nv[1]);

          if (!parms.hasOwnProperty(n)) parms[n] = [];
          parms[n].push(nv.length === 2 ? v : null);
      }
      return parms;
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

.hero {min-height: 20rem;
      width: 100%;
      line-height: 1rem;
      min-height: 10rem;
      padding-bottom: 1rem;
      height: auto;
      position: relative;
      text-align: center;
      font-size: 0;
      margin-bottom: 1rem;

      .hero_inner {width: 100%;
                    border: transparent;
                    height: 100%;
                    display: inline-block;
                    margin-left: auto;
                    margin-right: auto;
                    padding-top: 4rem;

                    @include respond-to('medium'){
                      width: 50rem;
                    }

                    .title_area {width: 100%;
                                height: auto;
                                font-size: 0;
                                position: relative;

                                h1.dark {color: $darkModeText;}

                                h1 {font-size: 2rem;
                                  line-height: 2.6rem;
                                    font-weight: 400;
                                    font-family: 'goma';
                                    margin: 0;
                                    padding: 0;
                                    color: $mainGray;
                                    text-shadow: 0px 1px 5px $heroTextShadow;}

                    }
                    .signup_area {
                      font-family: 'Quicksand', sans-serif;
                      border: 0;
                      min-height: 10rem;
                      width: calc(100% - 4rem);
                      padding: 2rem;
                      display: inline-block;
                      margin-left: auto;
                      margin-right: auto;
                      margin-top: 2rem;

                      .start-account-area {border: 0;
                      min-height: 5rem;
                      margin-top: 0.5rem;
                      width: calc(100%);
                      padding: 0.5rem 2rem;
                      display: inline-block;
                      margin-left: auto;
                      margin-right: auto;

                      button {padding: 0.5rem 1.5rem;
                              margin-top: 0.5rem;
                              font-size: 1.1rem;
                              color: #ffffff;
                              //background-color: $bottomMenuBackground;
                              background-color: $edibundleGreen;
                              border: 0;
                              border-radius: 0.3rem;
                              font-weight: 300;
                              cursor: pointer;
                              outline: none;
                              box-shadow: 0px 1px 1px rgba(63, 102, 57, 0.77);
                              transition: box-shadow 150ms ease;}

                      button:hover {box-shadow: 1px 1px 3px rgba(45, 78, 40, 1);}

                      .social {display: inline-block;
                              margin-top: 1rem;
                              margin-left: 0.3rem;
                              margin-right: 0.3rem;}

                      .facebook {background-color: #304b94; font-weight: 400; font-size: 0.9rem;}
                      .google {background-color: #c94131;font-weight: 400; font-size: 0.9rem;}

                      .field {width: calc(100% - 2rem);
                              margin: 0.5rem 1rem;
                              height: auto;
                              position: relative;
                              min-height: 2.5rem;
                              background-color: rgb(246, 246, 246);
                              border-radius: 0.3rem;
                              box-shadow: 0px 1px 1px rgba(63, 102, 57, 0.77);

                        .label {position: absolute;
                                top: 0.85rem;
                                left: 0.5rem;
                                font-size: 1rem;
                                font-weight: 100;
                                transition: top 250ms ease, top 250ms ease, top 250ms ease;
                                pointer-events: none;}


                        input[type='text'],input[type='password'] {position: absolute;
                              top: 0;
                              left: 0;
                              font-size: 1rem;
                              width: calc(100% - 1rem);
                              padding: 0rem 0.5rem;
                              height: 2.8rem;
                              background-color: transparent;
                              font-family: 'Quicksand', sans-serif;
                              font-weight: 500;
                              border: 0;
                              outline: 0;
                            }
                          input:not(:placeholder-shown) + .label{
                              top: 0rem;
                              left: 0.5rem;
                              font-size: 0.6rem;
                              font-weight: 100;
                          }
                          }
                          .field:focus-within {border: 1px solid $edibundleGreen;}
                          .field:focus-within > .label {top: 0rem;
                                                        left: 0.5rem;
                                                        font-size: 0.6rem;
                                                        font-weight: 100;}


                          .half {width: calc(50% - 1rem);
                                margin-left: 0.5rem;
                                margin-right: 0.5rem;
                                display: inline-block;
                                vertical-align: top;}

                          .quarter {width: calc(25% - 1rem);
                                margin-left: 0.5rem;
                                margin-right: 0.5rem;
                                display: inline-block;
                                vertical-align: top;}

                                h2 {color: $mainGray;
                                    font-size: 1.3rem;
                                    margin-top: 1rem;
                                    }
                    }

                      h2 {color: $mainGray;
                          font-size: 1.5rem;
                          margin-top: 0rem;
                          }
                    }

                  }
    }



</style>
