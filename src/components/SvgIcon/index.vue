<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconNameUse"></use>
  </svg>
</template>
<script>

import { computed } from 'vue'
export default {
  name: 'SvgIcon',
  props: {
    iconName: {
      type: String,
      default: 'hight-light'
    },
    className: {
      type: String,
      default: 'hight-light'
    }
  },
  setup(props) {
    //计算属性， 得出最终结果，并返回
    const iconNameUse = computed(() => `#icon-${props.iconName}`)

    const svgClass = computed(()=>{
      if(props.iconName) {
         return `svg-icon ${props.iconName}`
      }else{
         return `svg-icon`
      }
    })

    return {
      svgClass,
      iconNameUse
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 16px;
  height: 16px;
  color: #fff;
  fill: currentColor;
}




.icon {
  // position: relative;
  width: 35px;
  height: 35px;
  cursor: pointer;
  // display:inline;
}
// .icon-high-light { background: url(~@/assets/icons/high-light.png) center center / 100% 100% no-repeat; }
// .icon-broom { background: url(~@/assets/icons/icon-broom.png) center center / 100% 100% no-repeat; }
// .icon-camera { background: url(~@/assets/icons/icon-camera.png) center center / 100% 100% no-repeat; }
// .icon-exchange { background: url(~@/assets/icons/icon-exchange.png) center center / 100% 100% no-repeat; }
// .icon-invisible { background: url(~@/assets/icons/icon-invisible.png) center center / 100% 100% no-repeat; }
// .icon-light { background: url(~@/assets/icons/icon-light.png) center center / 100% 100% no-repeat; }
// .icon-measure { background: url(~@/assets/icons/icon-measure.png) center center / 100% 100% no-repeat; }
// .icon-minus { background: url(~@/assets/icons/icon-minus.png) center center / 100% 100% no-repeat; }
// .icon-plus { background: url(~@/assets/icons/icon-plus.png) center center / 100% 100% no-repeat; }
// .icon-shrink { background: url(~@/assets/icons/icon-shrink.png) center center / 100% 100% no-repeat; }
// .icon-trash { background: url(~@/assets/icons/icon-trash.png) center center / 100% 100% no-repeat; }
// .icon-tuceng { background: url(~@/assets/icons/icon-tuceng.png) center center / 100% 100% no-repeat; }
// .icon-video { background: url(~@/assets/icons/icon-video.png) center center / 100% 100% no-repeat; }
// .icon-visible { background: url(~@/assets/icons/icon-visible.png) center center / 100% 100% no-repeat; }
</style>
