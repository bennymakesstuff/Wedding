<template>
  <div class="reader">
    <div class="">{{toggleCamera}}</div>
    <div ref="cameraContainer" class="scannerArea">

    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Quagga from 'quagga';


export default {
  name: 'VueBarcodeTest',
  data () {
    return {
      scanner: null
    }
  },
  methods: {
    onDetected: function(data){
      console.log(data.codeResult.code);
      Quagga.stop();
    },
    startCamera: function(){
        this.scanner.start();
    }
  },
  computed: {
    toggleCamera: function(){
      if(this.$store.state.scanner.isOpen==true){
        console.log('Camera is On');
        this.startCamera();
      return 'On';
      }else{
        console.log('Camera is Off');
        this.scanner.stop();
      return 'Off';
      }
    }
  },
  created(){
    this.scanner = Quagga;
    console.log("Quagga added to scanner variable.");
    console.log(this.scanner);
  },
  mounted(){
    //console.log('CAMERA: '+this.$store.state.scanner.isOpen);
  /*  this.scanner.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      target: this.$refs.cameraContainer
    },
    decoder : {
      readers : ["ean_reader","code_128_reader"]
    }
  }, function(err) {
      if (err) {
          console.log(err);
          return
      }
      console.log("Initialization finished. Ready to start");
      this.scanner.start();
  });
  this.scanner.onDetected(this.onDetected);*/
}
}
</script>
<style  lang="scss" scoped>

.reader {border: 0px solid red;
        min-height: 15rem;
        width: 100%;
        padding: 0;
        border-radius: 0.5rem;
        overflow: hidden;}

.scannerArea {width: 100%;
                background-color: rgb(128, 128, 128);
                display: block;
                border-radius: 50%;
                height: 20rem;
                border-radius: 0.5rem;
                overflow: hidden;}

</style>
