<template>
  <div>
    <hr class="rule"/>
    <div class="message">We are very excited to share our special day with you!</div>
    <div class="wedding-image">
      <div class="wedding-inner"></div>
    </div>
  <div class="footer-area">
    <div class="footer-menu">

      <div class="menu">
        <div class="menu-item"><router-link :to="{ name: 'home'}" class="menu-item">Details</router-link></div>
        <div class="menu-item"><router-link :to="{ name: 'rsvp'}" class="menu-item">RSVP</router-link></div>
        <div class="menu-item"><router-link :to="{ name: 'party'}" class="menu-item">Wedding Party</router-link></div>
        <div class="menu-item"><router-link :to="{ name: 'accomodation'}" class="menu-item">Accomodation</router-link></div>
      </div>

      <div class="menu foot-text">
        <div class="menu-item">Broad Wedding</div>
      </div>
      <div class="menu foot-text">
        <div class="menu-item">November 6th 2021</div>
      </div>

    </div>
  </div>
</div>
</template>

<script>

export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
@import '../../ui/styles/colors.scss';
@import '../../ui/styles/breakpoints.scss';
@import '../../ui/styles/globals.scss';


.message {font-family: 'Caveat', cursive;
          font-size: 1.8rem;
          text-align: center;
          max-width: calc(100% - 1rem);
          margin-left: auto;
          margin-right: auto;
          background-color: transparent;
          color: #637460;}

.wedding-image {max-width: calc(100% - 1rem);
              width: 50rem;
              margin-left: auto;
              margin-right: auto;
              margin-bottom: 2rem;


      .wedding-inner {padding: 0;
                      height: 0;
                      border-radius: 0.25rem;
                      padding-top: 56.25%;
                      padding-top: 42.85%;
                      width: 100%;
                      background: transparent url('../../assets/benchels2.jpg') no-repeat;
                      background-size: cover;}
          }

.rule {max-width: calc(100% - 2rem);
      width: 30rem;
      margin: 0.75rem;
      margin-left: auto;
      margin-right: auto;
      background-color:rgba(#637460, 0.3);
      height: 1px;
      }

.footer-area {width: 100%;
              background-color: #637460;
              color: #ffffff;
              min-height: 10rem;
              height: auto;
              position: relative;

              .footer-menu {
                width: 100%;
                height: auto;
                padding: 0.5rem;

                .menu {
                  padding: 0.5rem;
                  display: inline-block;
                  background-color: transparent;
                  min-height: 2rem;
                  height: auto;
                  margin: 0.5rem;
                  vertical-align: top;
                  width: auto;

                  .menu-item {
                    text-align: center;
                    width: auto;
                    padding: 0rem rem;
                    margin: 0rem 0.5rem;
                    cursor: pointer;
                    display: inline-block;
                    color: #ffffff;
                    font-family: 'Caveat', cursive;
                    font-size: 1rem;

                    @include respond-to('small'){
                      font-size: 1.2rem;
                    }
                    @include respond-to('medium'){
                      font-size: 1.5rem;
                      padding: 0rem 0.5rem;
                    }
                    @include respond-to('large'){

                    }
                  }

                  a {width: 100%;
                    text-align: left !important;}

                }

                .foot-text {width: 100%;
                            height: 0.5rem;
                            line-height: 0.5rem;

                            .menu-item {cursor:arrow !important;}
                          }

                .foot-text:last-child {margin-top: -0.5rem;}

                .full-menu {width: calc(100% - 1rem);
                            text-align: center;

                          .menu-item {text-align: center;}
                        }
              }

            }

</style>
