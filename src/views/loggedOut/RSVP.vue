<template>
  <div class="home">

    <div v-if="!sending && !sent" >
        <div><b>Please RSVP by October 1st</b></div>

        <div class="accom">Are you able to make it?</div>
        <div class="text-box">
          <div class="select-container">
          <select v-model="details.canAttend" class="select-css" index="1">
            <option :value="true">Yes</option>
            <option :value="false">No</option>
          </select>
          </div>
        </div>

        <div class="text-box">
          <input type="text" v-model="details.whosComing" required placeholder="" index="2"/>
          <div v-if="details.canAttend" class="label">Who is coming?</div>
          <div v-if="!details.canAttend" class="label">Who can not make it?</div>
        </div>

        <div v-if="details.canAttend">
          <div class="accom">Any dietary requirements?</div>
          <div class="text-box">
            <div class="select-container">
            <select v-model="details.hasDiet" class="select-css" index="3">
              <option :value="true">Yes</option>
              <option :value="false">No</option>
            </select>
            </div>
          </div>

          <div v-if="details.hasDiet" class="text-box">
            <input type="text" required placeholder="" index="4"/>
            <div class="label">Dietary Requirements</div>
          </div>

          <div class="accom">Do you wish to camp / stay on site?</div>
          <div class="text-box">
            <div class="select-container">
            <select v-model="details.isCamping" class="select-css" index="5">
              <option :value="true">Yes, we would like to stay</option>
              <option :value="false">No, thank you</option>
            </select>
            </div>
          </div>

          <div v-if="details.isCamping" class="text-box">
            <input type="number" v-model="details.adults" required placeholder="" index="6" pattern="[0-9]*" inputmode="numeric"/>
            <div class="label">How many adults?</div>
          </div>
      </div>
        <button @click="sendRequirements" :disabled="buttonEnabled" index="4">RSVP</button>
    </div>
    <div v-if="sending && !sent" class="">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#fff;display:block;" width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<g transform="translate(50 50)">
  <path fill="#35602c" transform="scale(0.8)" d="M40.7-34.3c-9.8-9.8-25.6-9.8-35.4,0L0-29l-5.3-5.3c-9.8-9.8-25.6-9.8-35.4,0l0,0c-9.8,9.8-9.8,25.6,0,35.4l5.3,5.3L-23,18.7l23,23l23-23L35.4,6.3L40.7,1C50.4-8.8,50.4-24.6,40.7-34.3z">
    <animateTransform attributeName="transform" type="scale" repeatCount="indefinite" dur="1s" keyTimes="0;0.05;0.39;0.45;0.6;1" values="0.68;0.8;0.6000000000000001;0.7200000000000001;0.68;0.6400000000000001" calcMode="spline" keySplines="0.215 0.61,0.355 1;0.215 0.61,0.355 1;0.215 0.61,0.355 1;0.215 0.61,0.355 1;0.215 0.61,0.355 1"></animateTransform>
  </path>
</g>
</svg>
    </div>
    <div v-if="sent" class="">
      <div v-if="!details.canAttend" class="sorry">We are sorry you can not make it!<br>Thank you for letting us know.<br><b>We love you!</b></div>
      <div v-if="details.canAttend" class="sorry">Amazing! Thanks for letting us know.<br><b>We love you!</b></div>
    </div>

  </div>
</template>

<script>
import MainMenu from './MainMenu.vue';

export default {
  name: "RSVP",
  components: {
    'main-menu':MainMenu
  },
  data: function(){
    return {
      details: {
        canAttend: true,
        hasDiet: false,
        whosComing: '',
        dietaryRequirements: '',
        isCamping: false,
        adults: 1,
      },
      sending: false,
      sent: false
    }
  },
  computed: {
    buttonEnabled: function(){
      var guests = (this.details.whosComing.length>0)?false:true;
      return guests;
    }
  },
  methods: {
    sendRequirements: function(){


      this.sending = true;

      var weddingData = this.details;

      fetch('https://api.broad.wedding/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({details:weddingData}),
      })
      .then(response => response.json())
      .then(data => {
        this.sent = true;
        this.sending = false;
        console.log('Success:', data);
      })
      .catch((error) => {
        this.sent = false;
        this.sending = false;
        console.error('Error:', error);
      });




    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../ui/styles/colors.scss';
@import '../../ui/styles/breakpoints.scss';
@import '../../ui/styles/globals.scss';


.home {
  padding: 2rem 1rem;

  > div {font-size: 1.1rem;
        }

.sorry {line-height: 2rem;

      > b {font-size: 3rem;
          line-height: 3.5rem;
          font-family: 'Caveat', cursive;}
      }

.accom {padding-top: 1rem;}

.text-box {width: 100%;
          max-width: 40rem;
          margin: 1rem 0;
          margin-left: auto;
          margin-right: auto;
          background-color: #ffffff;
          border: 2px solid #637460;
          height: 4rem;
          line-height: 4rem;
          border-radius: 0.15rem;
          position: relative;

          > .label {font-size: 1.5rem;
                  color: #adb0ac;
                  font-weight: 200;
                  width: 100%;
                  top: 0;
                  left: 0;
                  height: 100%;
                  background-color: #ffffff;
                  transition: top 200ms ease, left 200ms ease, font-size 200ms ease, text-align 200ms ease;}

          > input[type="text"],input[type="number"] {font-size: 1.5rem;
                  color: #646a62;
                  font-weight: 200;
                  width: 100%;
                  top: 0;
                  padding: 0 0.5rem;
                  position: absolute;
                  left: 0;
                  height: 100%;
                  background-color: transparent;
                  outline: none;
                  border: 0;
                  font-weight: 300;}

         > input[type="text"]:focus ~ .label,input[type="text"]:valid ~ .label, input[type="number"]:valid ~ .label,input[type="number"]:focus ~ .label {position: absolute;
                                              width: auto;
                                              height: 0.5rem;
                                              line-height: 0.5rem;
                                              top: -0.25rem;
                                              left: 0.6rem;
                                              text-align: left;
                                              padding: 0 0.15rem;
                                              font-size: 1rem;
                                              }

          .select-container {overflow: hidden;}

          .select-css {
            	display: block;
            	font-size: 16px;
            	font-family: sans-serif;
            	font-weight: 700;
            	color: #637460;
            	line-height: 1.3;
            	padding: .6em 1.4em .5em .8em;
            	width: 100%;
              height: calc(4rem - 4px);
            	max-width: 100%;
            	box-sizing: border-box;
            	margin: 0;
            	border: 0px solid #aaa;
            	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
            	-moz-appearance: none;
            	-webkit-appearance: none;
            	appearance: none;
            	background-color: #fff;
            	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
            	background-repeat: no-repeat, repeat;
            	background-position: right .7em top 50%, 0 0;
            	background-size: .65em auto, 100%;
              outline: none;
            }
            .select-css::-ms-expand {
            	display: none;
            }
            .select-css:hover {
            	border-color: #888;
            }
            .select-css:focus {
            	border-color: #aaa;
            	box-shadow: 0 0 1px 3px rgba(59, 153, 252, .7);
            	box-shadow: 0 0 0 3px -moz-mac-focusring;
            	color: #222;
            	outline: none;
            }
            .select-css option {
            	font-weight:normal;
            }
        }

        button {width: 100%;
                max-width: 40rem;
                height: 100%;
                margin: 0;
                margin-top: -2px;
                border-radius: 0.25rem;
                color: #ffffff;
                border: 0;
                padding: 1.2rem;
                font-size: 1.3rem;
                background-color: #637460;
                transition: background-color 150ms ease, color 150ms ease;}

      button:disabled {background-color: #6f6f6f;color: #a5a5a5;}
    }
</style>
