<template>
  <!-- color card to show and copy colors on click -->
  <div
    @click="show = !show"
    v-clipboard:copy="ColorCode"
    class="color-card md:color-card-md"
    :style="`background-color: ${ColorCode}`" 
  >
    <ColorText :ColorCode="ColorCode" />
    <!-- show copy message on click -->
    <transition name="fade" v-on:enter="enter">
      <CopyAlert v-if="show" />
    </transition>
  </div>
</template>

<script>
import CopyAlert from './CopyAlert.vue'
import ColorText from './ColorText.vue'
export default {
  name: 'ColorCard',
  data() {
    return {
      // data to control show/hide copy message
      show: false
    }
  },
  props: {
    // property to get color from main component
    ColorCode: {}
  },
  components: {
    ColorText,
    CopyAlert
  },
  methods: {
    enter: function() {
      // set timeout to manage how long the message will be on screen
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
