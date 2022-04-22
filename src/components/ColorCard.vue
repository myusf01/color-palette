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
    <CopyAlert
      alertMessage="✔ Copy!"
      :triggerAlert="show"
      @hideAlert="
        (e) => {
          this.show = e
        }
      "
    />
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
  }
}
</script>
