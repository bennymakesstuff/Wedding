<template>
  <div class="application">
    <local-releases/>

  </div>
</template>


<script>

//Widgets
import LocalReleases from '../../loggedOut/LocalReleases.vue';

export default {
  name: 'dashboard',
  components: {
    'local-releases': LocalReleases,
  },
  data: function(){
    return {

    }
  },
};

</script>

<style lang="scss" scoped>
.application {font-size: 0.8rem;
              height: auto;
              text-align: left;
              padding: 1rem;
              color: #131517;


.quicklinks {padding-bottom: 10px;
              padding-top: 5px;
            border-bottom: 1px solid #e3e3e3;}

  h1 {font-size: 1.5rem;}
  h3 {color: #8b8b8b;}
}
</style>
