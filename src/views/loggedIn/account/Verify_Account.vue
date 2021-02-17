<template>
  <div class="verification-area">
    <h1>Verify Account</h1>
    <p>{{ this.$route.params.code }}</p>

  </div>
</template>


<script>
import API from '../../../apirequest';

export default {
  name: 'verify_account',
  components: {

  },
  data: function(){
    return {
      //PaymentMethod: false
    }
  },
  methods: {
    verifyAccount: function(code){
      API.post('verify-user',{code:code}).then((response) => {
        console.log(response);
      });
    }
  },
  mounted() {
    this.verifyAccount(this.$route.params.code);
  }
};

</script>

<style lang="scss" scoped>

@font-face {
  font-family: 'goma';
  src: url('../../../ui/goma_block.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.verification-area {min-height: 10rem;
                    padding-top: 2rem;
                    padding: 1rem;
                    width: calc(100% - 2rem);
                    overflow: hidden;

          > h1 {font-size: 1.5rem;}
          > p {font-size: 1rem;}
          }

</style>
