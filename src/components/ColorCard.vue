<template>
  <div
    @click="onCopy"
    v-clipboard:copy="ColorCode"
    class="card-col md:card-row"
    :style="`background-color: ${ColorCode}`"
  >
    <ColorText :ColorCode="ColorCode" />
    <transition name="fade" v-on:enter="enter">
      <CopyAlert :ColorCode="ColorCode" v-if="show" />
    </transition>
  </div>
</template>

<script>
import CopyAlert from '../components/CopyAlert.vue'
import ColorText from './ColorText.vue'
export default {
  name: 'ColorCard',
  data() {
    return {
      show: false
    }
  },
  props: {
    ColorCode: {}
  },
  components: {
    ColorText,
    CopyAlert
  },
  methods: {
    onCopy: function() {
      this.show = !this.show
    },
    enter: function() {
      // let that = this
      // this.show = true
      setTimeout(() => {
        this.show = false
      }, 1000)
    }
  }
}
</script>
<style lang="postcss" scoped>
.fade-leave-active,
.fade-enter-active {
  @apply duration-500 transition-opacity;
}
.fade-enter,
.fade-leave-to {
  @apply opacity-0;
}
</style>
