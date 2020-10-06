<template>
  <div class="application">
    <h1>Scan-a-brew</h1>
    <h2>Scan a beer to check if you have had it before</h2>
    <scanner/>
  </div>
</template>


<script>
import Scanner from '../../../ui/scanner2.vue';

export default {
  name: 'neworder',
  components: {
    'scanner':Scanner
  },
};

</script>

<style lang="scss" scoped>
.application {font-size: 0.8rem;
              height: auto;
              text-align: left;
              padding: 0.5rem;
              color: #131517;

  h1 {font-size: 1.5rem;}
  h3 {color: #8b8b8b;}
}
</style>
