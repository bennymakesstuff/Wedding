<template>

  <div :class="['pane-container', size]">
    <div :class="['pane-inner','low-shadow', size]">
      <div class="pane-logo high-shadow" :style="iconStyle">
        <slot name="pane-icon"></slot>
      </div>
      <div class="title">{{ title }}</div>
      <div class="content">
        <slot name="pane-content"></slot>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "Pane",
  props: {
    size: {
      type: String,
      default: 'standard'
    },
    title: {
      type: String,
      default: 'No Title Provided'
    },
    color: {
      type: String,
      default: '#606060'
    }
  },
  computed: {
    iconStyle: function(){
      var color = 'background-color:' + this.color + ';';
      return color;
    }
  },
  components: {},
  methods: {}
};
</script>

<style  lang="scss" scoped>
.pane-container {   height: auto;
                    display: inline-block;
                    vertical-align: top;
                    background-color: transparent;
                    position: relative;
                    //outline: 1px solid rgb(139, 139, 139);

      .pane-inner { min-height: 300px;
                    height: auto;
                    width: 100%;
                    margin-top: 20px;
                    border-radius: 0.3rem;
                    background-color: #ffffff;
                    position: relative;

      .title {height: 40px;
              width: 70px;
              position: absolute;
              top: 30px;
              left: 80px;
              color: #333333;
              font-weight: 200;
              font-size: 1.5rem;
              width: 300px;}

      .pane-logo {height: 60px;
                    width: 60px;
                    position: absolute;
                    top: 10px;
                    left: 10px;
                    color: #eeeeee;
                    border-radius: 0.25rem;
                    line-height: 60px;
                    padding-top: 5px;
                    text-align: center;

                    svg {margin-left: 7px;
                      margin-top: 8px;
                      }
                  }


      .content {height: auto;
              width: calc(100% - 20px);
              position: relative;
              padding-top: 80px;
              margin-left: 10px;
              color: #6a6a6a;
              font-weight: 200;
              font-size: 0.8rem;
              padding-bottom: 10px;}

            }

}

.narrow {width: 200px !important;}
.standard {width: 350px !important;}
.wide {width: 650px !important;}
.full {width: calc(100%) !important;}

.low-shadow {box-shadow: 1px 2px 4px #969393;}
.high-shadow {box-shadow: 1px 2px 8px #969393;}
</style>
