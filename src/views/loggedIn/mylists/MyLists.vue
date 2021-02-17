<template>
  <div class="home">
    <div class="hero">
      <div class="hero_inner">
        <div class="title_area">
          <h1>My Lists</h1>
          <h2>Your own currations.</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mylists",
  components: {
  },
  data: function(){
    return {}
  },
  methods: {

  },
  mounted(){

  }
};
</script>
<style lang="scss" scoped>
@import '../../../ui/styles/colors.scss';
@import '../../../ui/styles/breakpoints.scss';
@import '../../../ui/styles/globals.scss';

@font-face {
  font-family: 'goma';
  src: url('../../../ui/goma_block.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}


.hero {min-height: 2rem;
      width: 100%;
      padding-bottom: 1rem;
      line-height: 1rem;
      height: auto;
      position: relative;
      text-align: center;
      font-size: 0;

      .hero_inner {width: 100%;
                    border: transparent;
                    height: 100%;
                    display: inline-block;
                    margin-left: auto;
                    margin-right: auto;
                    padding-top: 1rem;

                    @include respond-to('medium'){
                      width: 50rem;
                    }

                    .title_area {width: 100%;
                                height: auto;
                                font-size: 0;
                                position: relative;

                                h1 {font-size: 1.5rem;
                                  line-height: 1.5rem;
                                    font-weight: 400;
                                    font-family: 'goma';
                                    margin: 0;
                                    padding: 0;
                                    color: $mainGray;
                                    text-shadow: 0px 1px 5px $heroTextShadow;}

                                h2 {font-size: 1rem;
                                  line-height: 1rem;
                                    font-weight: 400;
                                    //font-family: 'goma';
                                    margin: 0;
                                    padding: 0;
                                    color: lighten($mainGray, 40%);
                                    }

                    }
            }
    }




</style>
