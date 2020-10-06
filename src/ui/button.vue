<template>

  <button v-bind:class="['thebutton', buttonContent.size, buttonContent.type, buttonContent.shadow]" v-bind:id="buttonContent.id" v-on:click="navigateTo()">
    <div v-if="showIcon" class="icon">
      <slot name="button-icon"></slot>
    </div>
    <div class="text">
      {{buttonContent.content}}
    </div>
  </button>

</template>

<script>

export default {
  name: "Button",
  props: {
    buttonContent: {
      type: Object,
      default: {content: "Some Content",
                id: 'defaultButton',
                icon: null,
                size: 'medium',
                type: '',
                shadow: '',
                location: null}
    }
  },
  computed: {
    showIcon: function(){

      if(this.buttonContent.icon!=null){
        return true;
      }else{
        return false;
      }

    }
  },
  components: {
  },
  methods: {
    navigateTo: function(){
      if(this.buttonContent.location!=null){
        this.$router.push({name: this.buttonContent.location});
      }
    }
  }
};
</script>

<style  lang="scss" scoped>
@import './styles/colors.scss';
@import './styles/breakpoints.scss';

 .thebutton {border-radius: 0.2rem;
            border: 1px;
            background-color: #3c1361;
            color: #f1f1f1;
            font-size: 1rem;
            cursor: pointer;
            outline: none;
            margin-top: 0.0rem;

            @include respond-to('small'){
            }
            @include respond-to('medium'){
            }
            @include respond-to('large'){

            }

            .icon {height: 1.15rem;
                  width: 1.15rem;
                  background-color: transparent;
                  color: #ffffff;
                  margin: 0.15rem;
                  display: inline-block;
                  vertical-align: top;
                  position: relative;
                  pointer-event: none;
                  padding: 0;}

            .text {height: 1.2rem;
                  width: auto;
                  line-height: 1.35rem;
                  margin: 0.15rem;
                  display: inline-block;
                  vertical-align: top;
                  display: none;
                  pointer-event: none;

                  @include respond-to('small'){
                    display: inline-block;
                  }
                  @include respond-to('medium'){
                    display: inline-block;
                  }
                  @include respond-to('large'){
                    display: inline-block;
                  }
                }
        }

.thebutton:hover {background-color: $edibundleGreen;}

.clear {border: 1px solid #868686;
        background-color: transparent;
        color: #868686;
        box-shadow: none;
        transition: background-color 50ms ease; }

.clear:hover {background-color: #f4e7bd;}

.small {font-size: 0.75rem;
        padding: 0.25rem 0.5rem;}

.medium {font-size: 0.9rem;
        padding: 0.5rem 0.5rem;}

.large {font-size: 1.2rem;
        padding: 0.75rem 1.25rem;}

//.low {box-shadow: 1px 2px 3px #443750;}
//.middle {box-shadow: 1px 2px 8px #443750;}
//.high {box-shadow: 1px 2px 12px #443750;}
</style>
