<template>
  <div class="footer-area">
    <div class="footer-menu">

      <div class="menu half-menu">
        <div class="menu-item">Register</div>
        <div class="menu-item">Get in touch</div>
        <div class="menu-item">Full Brewery List</div>
        <div class="menu-item">Merch</div>
        <div class="menu-item">Local Releases</div>
        <div class="menu-item">Not so Local Releases</div>
      </div>

      <div class="menu half-menu">
        <div class="menu-item"><router-link :to="{ name: 'workwithus'}" class="menu-item">Work with us</router-link></div>
        <div class="menu-item">Connect as a Brewer</div>
        <div class="menu-item">Connect as a Venue</div>
        <div class="menu-item"><router-link :to="{ name: 'privacy'}" class="menu-item">Privacy Policy</router-link></div>
        <div class="menu-item">Sitemap</div>
      </div>

      <div class="menu full-menu">
        <div class="menu-item">Support Local</div>
        <div class="menu-item">Have I Had This - 2020</div>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  name: "Footer",
  components: {

  },
  data: function(){
    return {

    }
  },
  computed: {

  },
  methods: {

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

.footer-area {width: 100%;
              background-color: $mainGray;
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

                  .menu-item {
                    text-align: left;
                    width: 100%;
                    margin: 0.5rem 0;
                    color: #ffffff;
                  }

                  a {width: 100%;
                    text-align: left !important;}

                }

                .half-menu {width: calc(50% - 1rem);}
                .full-menu {width: calc(100% - 1rem);
                            text-align: center;

                          .menu-item {text-align: center;}
                        }
              }

            }

</style>
