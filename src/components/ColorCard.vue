<template>
  <div
    @click="show = !show"
    v-clipboard:copy="ColorCode"
    v-clipboard:success="onCopy"
    class="card-col md:card-row"
    :style="`background-color: ${ColorCode}`"
  >
    <transition name="alertFade">
      <CopyAlert :ColorCode="ColorCode" v-if="show"/>
    </transition>
    {{ ColorCode }}
  </div>
</template>

<script>
import CopyAlert from '../components/CopyAlert.vue'
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
    CopyAlert
  },
  methods: {
    onCopy: function() {
      console.log(this.show)
      this.show = !this.show
    }
  }
}
</script>
