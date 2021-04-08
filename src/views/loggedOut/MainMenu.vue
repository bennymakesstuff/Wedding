<template>
  <div>
    <div class="hero">
      <div class="hero_inner">
        <div class="title_area">

        </div>
      </div>
    </div>

    <div class="menu">
      <div class="button_area">
        <div class="large_menu">
          <router-link :to="{ name: 'home'}" class="menu_item">Details</router-link>
          <router-link :to="{ name: 'rsvp'}" class="menu_item">RSVP</router-link>
          <router-link :to="{ name: 'party'}" class="menu_item">Wedding Party</router-link>
          <router-link :to="{ name: 'accomodation'}" class="menu_item">Accomodation</router-link>
        </div>
      </div>
    </div>
    <hr class="rule"/>
  </div>
</template>

<script>

export default {
  name: "MainMenu",
};
</script>
<style lang="scss" scoped>
@import '../../ui/styles/colors.scss';
@import '../../ui/styles/breakpoints.scss';
@import '../../ui/styles/globals.scss';

.rule {max-width: calc(100% - 2rem);
      width: 30rem;
      margin: 0.75rem;
      margin-left: auto;
      margin-right: auto;
      background-color:rgba(#637460, 0.3);
      height: 1px;
      }


.menu {height: $mainMenuHeight;
      width: auto;
      position: relative;
      background-color: #ffffff;

      .button_area {width: auto;
                  position: relative;
                  margin-left: auto;
                  margin-right: auto;
                  height: 2rem;
                  margin-left: 0rem;

                  @include respond-to('small'){

                  }
                  @include respond-to('large'){
                    margin-left: 1rem;
                  }

          .large_menu {width: auto;
                      display: inline-block;
                      vertical-align: top;
                      width: 100%;

                      @include respond-to('small'){
                        display: inline-block;
                      }
                      @include respond-to('medium'){
                        display: inline-block;
                      }

            .menu_item {color: #404240;
                        height: 3rem;
                        line-height: 1.75rem;
                        font-size: 1.25rem;
                        padding: 0.5rem 0.5rem;
                        display: inline-block;
                        vertical-align: top;
                        cursor: pointer;
                        border-radius: 0.2rem;
                        font-family: 'Caveat', cursive;
                        transition: border 150ms ease, color 150ms ease;

                        @include respond-to('small'){
                          font-size: 1.2rem;
                        }
                        @include respond-to('medium'){
                          font-size: 1.5rem;
                          padding: 0.5rem 1rem;
                        }
                        @include respond-to('large'){

                        }
                      }

            .menu_item:hover {color: #637460;}
                  }

        }
    }


.hero {min-height: 20rem;
      width: 100%;
      line-height: 1rem;
      min-height: 10rem;
      padding-bottom: 0rem;
      height: auto;
      position: relative;
      text-align: center;
      font-size: 0;
      padding-top: 1rem;
      margin-bottom: 0rem;
      background-color: #ffffff;

      .hero_inner {width: 100%;
                    border: transparent;
                    height: 100%;
                    display: inline-block;
                    margin-left: auto;
                    margin-right: auto;
                    padding-top: 0rem;
                    //margin-top: -3rem;

                    @include respond-to('medium'){
                      width: 50rem;
                    }

                    .title_area {width: 100%;
                                height: 15rem;
                                font-size: 0;
                                position: relative;
                                background: transparent url('../../assets/benchelslogo.png') no-repeat;
                                background-size: contain;
                                background-position: center;

                                @include respond-to('small'){
                                  height: 3.5rem;
                                }
                                @include respond-to('medium'){
                                  height: 20rem;
                                }
                                @include respond-to('large'){
                                  height: 20rem;
                                }

                                h1 {font-size: 2rem;
                                  line-height: 2.6rem;
                                    font-weight: 400;
                                    font-family: 'goma';

                                    margin: 0;
                                    padding: 0;
                                    color: $mainGray;
                                    text-shadow: 0px 1px 5px $heroTextShadow;}

                    }
              }
    }

</style>
