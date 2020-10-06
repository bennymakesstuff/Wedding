<template>
  <div class="home">
    <h1>Join Us!</h1>
    <p>As we grow, we will need more talented beer / tech lovers to join our journey and make this the best it can be for beer lovers!</p>
    <section>
      <h2>Positions Available</h2>
      <p>We have no active positions we are looking to fill, but shoot us an email and introduce yourself.</p>
      <p>We are always on the lookout for talented, fun and driven people.</p>
    </section>
  </div>
</template>

<script>

export default {
  name: "Workwithus",
  components: {

  },
  data: function(){
    return {}
  },
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

.home {padding: 1rem;}

h1 {font-size: 1.5rem;
    font-family: 'goma';
    text-align: left;}

h3 {font-size: 0.9rem;
    text-align: left;
    margin-bottom: 1.5rem;}

p {font-size: 1rem;
  text-align: left;}

section {margin: 1.8rem 0rem;
        text-align: left;

  h2 {font-size: 1.2rem;
    font-family: 'goma';}
  p {margin-bottom: 0.25rem;}
}

</style>
