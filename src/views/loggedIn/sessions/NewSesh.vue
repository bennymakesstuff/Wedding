<template>
  <div class="newsesh">
    <h1 v-if="!this.$store.state.seshStarted">NEW SESH</h1>
    <div v-if="!this.$store.state.seshStarted">
      <div :class="['field',dispMode]">
        <input type="text" placeholder=" " v-model.trim="session.session_name">
        <div class="label">Session Title <span>(e.g. Davo's 30th, Jack's Beershare)</span></div>
      </div>
      <button @click="startSession">Start Session</button>
      <h1 class="or">OR</h1>
      <p class="or-text">Grab a code from your mate and join their session.</p>
      <div :class="['field',dispMode]">
        <input type="text" placeholder=" "  v-model.trim="session.session_code">
        <div class="label">Session Code</span></div>
      </div>
      <button @click="joinSession">Join a mates sesh</button>
    </div>


    <div class="session-details" v-if="this.$store.state.seshStarted">
      <div class="session-title">{{this.$store.state.session.session_name}}</div>
      <div class="session-title">{{thisSession}}</div>
      <div class="session-runtime"></div>
      <div :class="['session-participants', dispMode]">

        <div class="participant host">

        </div>
        <div class="participant" v-for="homie in this.$store.state.session.thecrew">
          {{homie[0].given_name[0]}}{{homie[0].family_name[0]}}
        </div>

        <!--<div class="participant" v-for=""></div>-->

      </div>
    </div>

    <div v-if="this.$store.state.seshStarted">
      <button @click="connectNow">Connect a Session</button>
    </div>

    <div v-if="this.$store.state.seshStarted">
      <button @click="disconnectNow(false)">Disconnect Session</button>
    </div>

    <div v-if="this.$store.state.seshStarted">
      <button @click="leaveSession">Leave Session</button>
    </div>

  </div>
</template>


<script>
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';

const EventSource = NativeEventSource || EventSourcePolyfill;

export default {
  name: 'new-beer',
  components: {

  },
  data: function(){
    return {
      session: {
        started: false,
        session_name: '',
        session_code: '',
        checker: null
      },
      eventController: null
    }
  },
  computed: {
    theCrew: function(){
      var crew = this.$store.state.session.thecrew;
      console.log("--The Crew--");
      console.log(crew);
      return crew;
    },
    thisSession: function(){
      return this.$store.state.session.session_code;
    },
    dispMode: function(){
      return  this.$store.state.displayMode;
    },
    theUser: function(){
      return this.$store.state.user;
    }
  },
  mounted(){
    //this.checker = setInterval(this.checkSession,5000);
    if(this.$store.state.seshStarted==true){
      this.connectNow();
    }
  },
  beforeDestroy(){
    console.log("--UNMOUNTING--");
    if(this.eventController!=null){
      this.disconnectFromSession(this.eventController);
    }
  },
  methods: {
    checkSession: function(){
      console.log('Checking');
      if(this.$store.state.session!=null){
        this.$store.dispatch('refresh_drinks_session',this.thisSession);
      }
    },
    startSession: function(){
      if(this.session.session_name.length>0){
        this.$store.dispatch('start_new_session',this.session.session_name);
        this.connectNow();
        //this.checker = setInterval(this.checkSession,5000);
      }
      else{
        alert("You forgot to name your session.");
      }
    },
    joinSession: function(){
      console.log(this.session.session_code);
      if(this.session.session_code.length>0){
        this.$store.dispatch('join_drinks_session',this.session.session_code);
        //this.checker = setInterval(this.checkSession,5000);
      }
      else{
        alert("You must enter a session code.");
      }
    },
    endSession: function(){
      this.checker = null;
    },
    leaveSession: function(){
      
      this.disconnectFromSession(this.eventController);
      //clearInterval(this.checker);
      this.checker = null;
      this.$store.dispatch('leave_drinks_session');
    },
    logout: function(){
      this.$store.dispatch('logout');
    },

    connectNow: function(){
      var url = "http://localhost:8001/connect-to-session/"+this.$store.state.session.session_code;
      this.connectToSession(url, this.onConnect, this.onEvent, this.onError);
    },

    onConnect: function(){
      //console.log("Connected to Session");
    },

    onMessage: function(event){

      //console.log(JSON.parse(event.data));
      var sessionData = JSON.parse(event.data).session;
      console.log(sessionData);
      this.$store.dispatch('refresh_drinks_session', sessionData);
/*
        try {
          var resp = JSON.parse(event.data);
          console.log(resp);
        } catch (e) {
          console.log('INVALID_EVENT');
          return;
        }
*/
    },

    onError: function(){
      //console.log("Error - Invalid Event");
        if (this.eventController.readyState === EventSource.CLOSED) {
          console.log('DEAD CONNECTION');
          this.disconnectNow(true);
        } else if (this.eventController.readyState === EventSource.CONNECTING) {
          //console.log('RECONNECTING');
        }
    },
    disconnectNow: function(reconnectOrNot){
      this.disconnectFromSession(this.eventController);
      if(reconnectOrNot==true){
        this.connectNow();
      }
    },

    disconnectFromSession: function(source){
      source.close();
      source.removeEventListener('open', this.onConnect);
      source.removeEventListener('message', this.onMessage);
      source.removeEventListener('error', this.onError);
      source = null;
      console.log("-- Disconnected from Session --");
    },

    connectToSession: function(url, onConnect, onEvent, onError) {
      //var es = new EventSource(url);
      this.eventController = new EventSourcePolyfill(url, {
        headers: {
          'Authorization': this.$store.state.token,
          'access-control-allow-origin': '*'
        }
      });

      this.eventController.addEventListener('open', this.onConnect);

      this.eventController.addEventListener('error', this.onError);

      this.eventController.addEventListener('message', this.onMessage);
    //  return es;
    }



  }
};

</script>

<style lang="scss" scoped>
@import '../../../ui/styles/breakpoints.scss';
@import '../../../ui/styles/colors.scss';
@import '../../../ui/styles/globals.scss';


@font-face {
  font-family: 'goma';
  src: url('../../../ui/goma_block.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.codeBox {width: 2rem !important;}

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

.or-text {font-size: 0.9rem;
    margin: 0;
    margin-top: -2.8rem;
    padding-bottom: 0rem;
    text-align: center;
    padding: 1rem;
    font-weight: 500;
    color: #c8c8c8;}

.or {font-size: 2rem;
    margin: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
    padding: 1rem;
    font-family: 'goma';
    font-weight: 500;
    color: #c8c8c8;}

.newsesh {font-size: 0.8rem;
              height: auto;
              text-align: left;
              padding: 1.5rem;
              padding-top: 0;
              padding-bottom: 8rem;

  > h1 {font-size: 1.5rem;
      margin: 0;
      text-align: center;
      padding: 1rem;
      font-family: 'goma';
      font-weight: 500;
      color: #c8c8c8;}
}

.session-details {width: calc(100% + 3rem);
                  margin-left: -1.5rem;
                  background-color: transparent;

            > .session-title {font-size: 1.8rem;
                margin: 0;
                width: calc(100% - 2rem);
                text-align: left;
                padding: 0rem 1rem;
                font-family: 'goma';
                font-weight: 500;
                color: #c8c8c8;}

            > .session-runtime {}

            > .session-participants.dark {background-color: darken($darkModeBGColor, 5%);}
            > .session-participants {height: 5rem;
                                    width: 100%;
                                    overflow-y: hidden;
                                    overflow-x: hidden;
                                    background-color: #e2e2e2;
                                    padding: 0.5rem;
                                    //transform: rotate(-90deg);
                                    //transform-origin: left top;
                                    //transform:rotate(-90deg) translateY(-100px);


              > .participant {width: calc(4rem - 4px);
                              height: calc(4rem - 4px);
                              display: inline-block;
                              line-height: 3.7rem;
                              font-size: 2rem;
                              text-align: center;
                              vertical-align: top;
                              margin-bottom: 0.8rem;
                              border: 2px solid #e3e3e3;
                              margin-right: 0.5rem;
                              box-shadow: 1px 1px 2px 2px rgba(#000000, 0.15);
                              border-radius: 0.25rem;
                              background-color: #8f8f8f;
                              background: #e3e3e3 url('../../../assets/user-icon.png') no-repeat;
                              background-position: center;
                              background-size: contain;}

              > .host {border: 2px solid $mainGold;}
            }
                  }
</style>
