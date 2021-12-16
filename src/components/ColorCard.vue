<template>
  <div
    @click="show = !show"
    v-clipboard:copy="ColorCode"
    v-clipboard:success="onCopy"
    class="card-col md:card-row"
    :style="`background-color: ${ColorCode}`"
  >
    <ColorText :ColorCode="ColorCode" />
    <transition name="alertFade">
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
      show: false,
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
    }
  }
}
</script>
