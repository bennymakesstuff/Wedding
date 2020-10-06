<template>
  <div class="home">
    <h1>Latest Afar Releases</h1>
    <div class="release-feed">

      <!-- These releases need to be shifted into a component and loaded dynamically -->

      <div class="release">
        <div class="release-image negroni_ipa">
        </div>
        <div class="release-info">
          <div class="release-title">Negroni IPA</div>
          <div class="release-abv">7.0% ABV</div>
          <div class="release-brewery">Mismatch</div>
          <div class="release-date">6th September 2020</div>
        </div>
        <div class="release-blurb">
          Dark red in colour, with a rich malt backbone to hold up the bitterness. Orange and Italian bitters follow through on the pallet reminiscent of a delicious classic Negroni.
        </div>
      </div>


      <div class="release">
        <div class="release-image hazy_ipa">
        </div>
        <div class="release-info">
          <div class="release-title">Hazy IPA</div>
          <div class="release-abv">6.0% ABV</div>
          <div class="release-brewery">Pirate Life</div>
          <div class="release-date">7th September 2020</div>
        </div>
        <div class="release-blurb">
        So, apparently you don’t have to filter an IPA…who would have thought?!<br><br>

        Expect a luminous yellow hue, thanks to a blend of premium malts. Hop additions in the whirlpool and late ferment supply the fruit, while a persistent haze adds complexity to every sip.<br><br>

        The nose is packed with mango, peach and mandarin, On the palate, passionfruit, low bitterness and a bright, cleansing mouthfeel.
        </div>
      </div>



      <div class="release">
        <div class="release-image hfrv">
        </div>
        <div class="release-info">
          <div class="release-title">Hunt For Red Velvet<br>Dark Imperial Red</div>
          <div class="release-abv">9.6% ABV</div>
          <div class="release-brewery">Prancing Pony</div>
          <div class="release-date">9th September 2020</div>
        </div>
        <div class="release-blurb">
        Developed for GABS 2017, touted as a long-range flying carpet, propelled by a new, top secret fuel, codenamed Black Forest Cake Liquor, because that’s what it tastes like. Awarded Gold at the London International Beer Challenge. We’re bringing back the Hunt for Red Velvet once a year, a very limited edition.
        </div>
      </div>

      <!-- These releases need to be shifted into a component and loaded dynamically -->

    </div>
  </div>
</template>

<script>
export default {
  name: "LatestAfarReleases",
  components: {
  },
  data: function(){
    return {}
  },
  methods: {
    getLocation: function() {
      if (navigator.geolocation) {
        //alert('Getting location');
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        alert('GeoLocation not supported by this browser.');
        //x.innerHTML = "Geolocation is not supported by this browser.";
      }
    },
    showPosition: function(position) {
      console.log('LAT: '+position.coords.latitude);
      console.log('LONG: '+position.coords.longitude);
    }
  },
  mounted(){
    this.getLocation();
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

.hazy_ipa {background: #f0f0f0 url('../../assets/beers/hazy_ipa.png') no-repeat;
          background-size: cover;}
.negroni_ipa {background: #f0f0f0 url('../../assets/beers/negroni_ipa.png') no-repeat;
              background-size: cover;}
.hfrv {background: #f0f0f0 url('../../assets/beers/hfrv.png') no-repeat;
              background-size: cover;}

              .home {
                line-height: 2rem;
                width: 100%;
                text-align: center;

                h1 {font-family: 'goma';
                    padding: 1rem;
                    font-size: 1.5rem;
                    text-align: center;
                    color: $mainGold;
                    word-spacing: 0.5rem;
                    text-shadow: 0px 1px 2px darken($mainGold, 40%);}
              }


.release-feed {background-color: transparent;
              width: 100vw;
              min-height: 10rem;
              height: auto;
              font-size: 1rem;
              color: #333333;

      .release {width: calc(100% - 1rem);
                min-height: 10rem;
                margin-bottom: 1rem;
                display: inline-block;
                border-radius: 0.25rem;
                background-color: #ffffff;
                box-shadow: 0px 0px 5px rgba(63, 102, 57, 0.20);
                overflow: hidden;
                max-width: 25rem;
                vertical-align: top;

                margin-left: 0.5rem;
                margin-right: 0.5rem;

          .release-image {min-height: 12.5rem;}

          .release-info {min-height: 1rem;
                          line-height: 1rem;
                          background-color: transparent;
                          padding: 1rem 0.5rem 0.5rem 0.5rem;


                .release-title {text-align: left;
                                font-size: 1.3rem;
                                line-height: 1.15rem;
                                font-family: 'goma';
                                display: inline-block;
                                vertical-align: top;
                                width: 80%;}

                .release-abv {display: inline-block;
                              vertical-align: top;}

                .release-brewery {text-align: left;
                                  font-size: 0.9rem;
                                  font-family: 'goma';
                                  color: #696969;
                                  }

                .release-date {text-align: left;
                                  font-size: 0.9rem;
                                  color: #696969;}
                      }

          .release-blurb {min-height: 1rem;
                          background-color: transparent;
                          padding: 0.7rem;
                          line-height: 1.1rem;
                          text-align: left;
                          height: 4rem;
                          text-overflow: ellipsis;
                        }

              }

            }


</style>
