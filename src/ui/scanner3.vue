<template>
  <div class="reader">
    <div class="title">Scanner</div>
    <button @click="restartCamera">On</button>
    <button @click="stopCamera">Off</button>
    <div ref="cameraContainer" class="scannerArea">

    </div>
    <h1 class="currentCode">{{currentCode}}</h1>
    <h1 v-for="code in checkedSet">{{code}}</h1>
    <h1 v-for="code in countSet">{{code}}</h1>
  </div>
</template>

<script>
import Vue from 'vue'
import Quagga from 'quagga';


export default {
  name: 'scanner',
  data () {
    return {
      scanner: null,
      currentCode: '',
      codesCaptured: [],
      checkedSet: [],
      countSet: []
    }
  },
  computed: {
    mostProbableBarcode: function(){

    }
  },
  methods: {
    buildCamera: function(){

    },
    foundCode: function(data){
      if(this.codesCaptured.length<10){
        console.log(data[0].codeResult.code);
        this.codesCaptured.push(data[0].codeResult.code);
        console.log(this.codesCaptured.length);
      }
      else{

        for(var i = 0;i<this.codesCaptured.length;i++){

          // Sort into unique
          if(!this.checkedSet.includes(this.codesCaptured[i])){
            this.checkedSet.push(this.codesCaptured[i]);
            this.countSet.push(1);
          }
          else{
            this.countSet[this.checkedSet.indexOf(this.codesCaptured[i])] += 1;
          }
        }

        this.currentCode = this.checkedSet[this.indexOfMax(this.countSet)];
        console.log(this.checkedSet);
      }

    },
    indexOfMax: function(arr) {
        if (arr.length === 0) {
            return -1;
        }

        var max = arr[0];
        var maxIndex = 0;

        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }

        return maxIndex;
    },
    restartCamera: function(){
      //alert("Restart");
      this.scanner = Quagga;
      this.startCamera();
      this.codesCaptured = [];
      this.currentCode = '';
      this.checkedSet = [];
      this.countSet = [];
    },
    startCamera: function(){
      this.scanner.init({
                      numOfWorkers: 4,
                      inputStream : {
                        name : "Live",
                        type : "LiveStream",
                        target: this.$refs.cameraContainer   // Or '#yourElement' (optional)
                      },
                      debug: {
                          drawBoundingBox: true,
                          showFrequency: true,
                          drawScanline: true,
                          showPattern: true
                      },
                      locate: true,
                      frequency: 10,
                      decoder : {
                        readers : ["ean_reader"],
                        locator: {
                          halfSample: true,
                          patchSize: "x-large", // x-small, small, medium, large, x-large
                          debug: {
                            showCanvas: true,
                            showPatches: true,
                            showFoundPatches: true,
                            showSkeleton: true,
                            showLabels: false,
                            showPatchLabels: false,
                            showRemainingPatchLabels: false,
                            boxFromPatches: {
                              showTransformed: false,
                              showTransformedBox: false,
                              showBB: false
                            }
                          }
                        },
                        multiple: true
                      }
                    }, function(err) {
                        if (err) {
                            console.log(err);
                            return
                        }

                        console.log("Initialization finished. Ready to start");
                        Quagga.start();
                    });

                    this.scanner.onDetected(this.foundCode);

    },
    stopCamera: function(){
    //  alert("Stop");
      this.scanner.stop();
      this.scanner = null;
    }
  },
  computed: {

  },
  created(){

  },
  beforeMount(){
  //  this.cameraPermission();
    this.scanner = Quagga;
  },
  mounted(){
    this.startCamera();
  }
}
</script>
<style  lang="scss" scoped>

.currentCode {color: red;}

.reader {border: 0px solid red;
        min-height: 15rem;
        width: 100%;
        padding: 0;
        border-radius: 0.5rem;
        overflow: hidden;

        > .title {font-size: 2rem;}
        > h1 {font-size: 1rem;}
      }

.scannerArea {width: 100%;
                background-color: rgb(128, 128, 128);
                display: block;
                border-radius: 50%;
                height: 20rem;
                border-radius: 0.5rem;
                overflow: hidden;}

</style>
