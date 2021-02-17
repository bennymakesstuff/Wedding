<template>
  <div class="login">
    <div class="login_area">
      <div class="login_box">
        <h2 :class="[dispMode]">Signup for beery goodness</h2>
        <div class="input_area" v-if="!registering&&!successfulSignup">

          <div :class="['field',dispMode]">
            <input type="text" placeholder=" " v-model.trim="userInfo.firstname">
            <div class="label">First Name</div>
          </div>

          <div :class="['field',dispMode]">
            <input type="text" placeholder=" " v-model.trim="userInfo.lastname">
            <div class="label">Surame</div>
          </div>

          <div :class="['field',dispMode]">
            <input type="text" placeholder=" " v-model.trim="userInfo.email">
            <div class="label">Email</div>
          </div>

          <div :class="['field',dispMode]">
            <input type="password" class="password" placeholder=" " v-model.trim="userInfo.password">
            <div class="label">Password</div>
          </div>

          <button @click="register">Register</button>
        </div>

        <div class="registering" v-if="registering">Creating Account...</div>
        <div class="success" v-if="successfulSignup">A verification email has been sent to you to finish setting up your acocunt.</div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  components: {
  },
  data: function(){
    return {
      userInfo: {
        firstname: 'Benjamin',
        lastname: 'Broad',
        password: 'G0dzi99a',
        email: 'me@benbroad.com'
      },
      registering: false,
      successfulSignup: false,
    }
  },
  computed: {
    dispMode: function(){
      return  this.$store.state.displayMode;
    },
  },
  methods: {
    register: function(){
      this.registering = true;
      console.log(JSON.parse(JSON.stringify(this.userInfo)));
      this.$store.dispatch('register_for_account', JSON.parse(JSON.stringify(this.userInfo)))
        .then((data)=>{
          console.log("---DATA---");
          console.log(data.data.payload);
          this.successfulSignup = true;
          this.registering = false;
        }).catch((data)=>{
          this.registering = false;
          this.successfulSignup = false;
          console.log("---DATA---");
          console.log(data.data.payload);
        });
    //  alert(this.userInfo.username + ' - ' + this.userInfo.password);
  },
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

.success {font-size: 1rem; width: 100%; text-align: center;color: #e3e3e3; padding: 1.5rem;}
.registering {font-size: 1.3rem; width: 100%; text-align: center; font-family:'goma';color: #e3e3e3;padding: 1.5rem;}

.login {margin-bottom: 4.5rem;}

.login_area {height: auto;
            width: auto;
            margin-left: auto;
            margin-right: auto;
            line-height: 1rem;
            margin-top: 3rem;

      .login_box {line-height: 1.7rem;
                  display: inline-block;
                  padding: 1.5rem 0rem;
                  vertical-align: middle;
                  height: auto;
                  width: calc(100% - 4rem);
                  max-width: 30rem;
                  background-color: transparent;

                  @include respond-to('small'){
                    width: auto;

                  }
                  @include respond-to('medium'){

                  }
                  @include respond-to('large'){

                  }

      .input_area {margin-top: 2rem;
                  line-height: 1rem;

        button {padding: 0.8rem 1.8rem;
                margin-top: 0.5rem;
                font-size: 1.5rem;
                color: #ffffff;
                width: 100%;
                //background-color: $bottomMenuBackground;
                background-color: $mainGold;
                border: 0;
                font-family: 'goma';
                border-radius: 0.3rem;
                font-weight: 400;
                cursor: pointer;
                outline: none;
                box-shadow: 0px 1px 1px rgba(106, 80, 12, 0.77);
                transition: box-shadow 150ms ease;}

        button:hover {box-shadow: 1px 1px 3px rgba(45, 78, 40, 1);}


          }
        }
      }

h2 {font-size: 1.7rem;
    color: $darkModeMainHeader;
    font-family: 'goma';}

h2.dark {color: $darkModeText;}

h1 {font-size: 2rem;
  line-height: 2.5rem;}

</style>
