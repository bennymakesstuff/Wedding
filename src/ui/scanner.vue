<template>
  <div class="reader">
    <v-quagga :onDetected="logIt" :readerSize="readerSize" :readerTypes="['ean_reader']"></v-quagga>
  </div>
</template>

<script>
import Vue from 'vue'
import VueQuagga from 'vue-quaggajs';

// register component 'v-quagga'
Vue.use(VueQuagga);

export default {
  name: 'VueBarcodeTest',
  data () {
    return {

      inputStream : {
      name : "Live",
      type : "LiveStream",
      constraints: {
        facingMode: "environment",
        deviceId: "7832475934759384534"
        },
      },
      detecteds: []
    }
  },
  methods: {
    logIt (data) {
      alert('detected', data)
    }

  }
}
</script>
<style  lang="scss" scoped>

.reader {border: 1px solid red;
        min-height: 15rem;}

</style>
