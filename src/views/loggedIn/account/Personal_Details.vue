<template>
  <div>
    <div class="button-group">
      <b-button class="button-title">Edit Details</b-button>
    </div>
    <div class="detail-block">
      <div class="title">Name</div>
      <div class="content">{{ this.$store.state.user.given_name }} {{ this.$store.state.user.family_name }}</div>
    </div>
    <div class="detail-block">
      <div class="title">Email Address</div>
      <div class="content">{{ this.$store.state.user.email }}</div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'personal_details',
  components: {
  },
  data: function(){
    return {

    }
  },
};

</script>

<style lang="scss" scoped>


.button-title {font-family: 'goma';}

  .button-group {position: absolute;
                top: 10px;
                right: 0px;}

  .detail-block {
    border: 1px solid #f6f6f6;
    border-radius: 0.3rem;
    padding: 5px;
    font-size: 0.8rem;
    color: #7e7e7e;
    margin-bottom: 10px;

    .title {font-size: 0.8rem;
            color: #7e7e7e;
            margin-bottom: 5px;
          letter-spacing: 0.05rem;}

    .content {font-size: 0.8rem;
            color: #7e7e7e;}
  }
</style>
