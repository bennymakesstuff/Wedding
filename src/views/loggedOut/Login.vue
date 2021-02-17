<template>
  <div class="login">
    <div class="login_area">
      <div class="login_box">
        <h2 :class="[dispMode]">Login for beer</h2>
        <div class="input_area">
          <div :class="['field',dispMode]">
            <input type="text" placeholder=" " v-model.trim="userInfo.email">
            <div class="label">Email Address</div>
          </div>
          <div :class="['field',dispMode]">
            <input type="password" class="password" placeholder=" " v-model.trim="userInfo.password" v-on:keyup.enter="login">
            <div class="label">Password</div>
          </div>
          <button @click="login">Login</button>
          <div v-if="response!=null" :class="['login-message',dispMode]">{{response.payload.message}}</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  components: {
  },
  data: function(){
    return {
      userInfo: {
        email: 'me@benbroad.com',
        password: ''
      },
      response: null
    }
  },
  computed: {
    dispMode: function(){
      return  this.$store.state.displayMode;
    },
  },
  methods: {
    login: function(){
      console.log({'email':this.userInfo.email,'password':this.userInfo.password});
      this.$store.dispatch('login',{'email':this.userInfo.email,'password':this.userInfo.password})
        .then((response)=>{
          console.log(response);
        })
        .catch(err => {
          console.log("--ERROR--");
          this.response = err;
        })
    }
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

.field > .label {top: 1.5rem;}

.login {margin-bottom: 4rem;}

.login_area {height: auto;
            width: auto;
            margin-left: auto;
            margin-right: auto;
            line-height: 1rem;
            margin-top: 3rem;

      .login_box {line-height: 1rem;
                  display: inline-block;
                  padding: 1.5rem 0rem;
                  vertical-align: middle;
                  height: auto;
                  width: calc(100% - 4rem);
                  max-width: 30rem;
                  background-color: transparent;

                  @include respond-to('small'){
                    min-width: 10rem;

                  }
                  @include respond-to('medium'){
                    min-width: 10rem;
                  }
                  @include respond-to('large'){
                    min-width: 10rem;
                  }


      .input_area {margin-top: 2rem;

        > .login-message.dark {color: #e3e3e3;}
        > .login-message {width: 100%;
                          text-align: center;
                          color: #333333;
                          font-size: 1rem;
                          padding: 0.5rem;
                          margin-top: 1rem;
                          border: 1px solid #dedede;
                          border-radius: 0.25rem;}

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
                font-weight: 300;
                cursor: pointer;
                outline: none;
                box-shadow: 0px 1px 1px rgba(106, 80, 12, 0.77);
                transition: box-shadow 150ms ease;}

        button:hover {box-shadow: 1px 1px 3px rgba(45, 78, 40, 1);}

          }
        }
      }

h2 {font-size: 1.7rem;
    color: $mainGray;
    font-family: 'goma';}

h2.dark {color: $darkModeText;}

h1 {font-size: 2rem;}

</style>
