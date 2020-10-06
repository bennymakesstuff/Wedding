<template>
  <div class="login">
    <div class="login_area">
      <div class="login_box">
        <h2>Login for beer</h2>
        <div class="input_area">
          <div class="field">
            <input type="text" placeholder=" " v-model.trim="userInfo.username">
            <div class="label">Email Address</div>
          </div>
          <div class="field">
            <input type="text" placeholder=" " v-model.trim="userInfo.password">
            <div class="label">Password</div>
          </div>
          <button @click="login">Login</button>
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
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login: function(){
      this.$store.dispatch('login',{'username':this.userInfo.username,'password':this.userInfo.password})
    //  alert(this.userInfo.username + ' - ' + this.userInfo.password);
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

.login {margin-bottom: 4rem;}

.login_area {height: auto;
            width: auto;
            background-color: #ffffff;
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

        .field {width: calc(100% - 0rem);
                margin: 0.5rem 0rem;
                height: 4rem;
                position: relative;
                min-height: 2.5rem;
                background-color: #ffffff;
                border: 1px solid #f2f2f2;
                border-radius: 0.3rem;
                box-shadow: 0px 1px 1px rgba(63, 102, 57, 0.20);

          .label {position: absolute;
                  top: 1.45rem;
                  left: 0.5rem;
                  color: #b4b4b4;
                  font-size: 1.2rem;
                  font-weight: 100;
                  transition: top 250ms ease, top 250ms ease, top 250ms ease;
                  pointer-events: none;}


          input[type='text'],input[type='password'] {position: absolute;
                top: 0;
                left: 0;
                font-size: 1.8rem;
                width: calc(100% - 1rem);
                padding: 0rem 0.5rem;
                height: 3rem;
                background-color: transparent;
                font-family: 'Quicksand', sans-serif;
                font-weight: 500;
                border: 0;
                outline: 0;
                margin-top: 0.5rem;
              }
            input:not(:placeholder-shown) + .label{
                top: 0rem;
                left: 0.5rem;
                font-size: 0.6rem;
                font-weight: 100;
            }
            }
            .field:focus-within {border: 1px solid $mainGold;}
            .field:focus-within > .label {top: 0.1rem;
                                          left: 0.5rem;
                                          font-size: 0.6rem;
                                          font-weight: 100;}


            .half {width: calc(50% - 1rem);
                  margin-left: 0.5rem;
                  margin-right: 0.5rem;
                  display: inline-block;
                  vertical-align: top;}

            .quarter {width: calc(25% - 1rem);
                  margin-left: 0.5rem;
                  margin-right: 0.5rem;
                  display: inline-block;
                  vertical-align: top;}
          }
        }
      }

h2 {font-size: 1.7rem;
    color: $mainGray;
    font-family: 'goma';}
h1 {font-size: 2rem;}

</style>
