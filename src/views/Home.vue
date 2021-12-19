<template>
  <div class="w-screen h-screen flex">
    <loading-text v-if="allColors.length <= 0" />
    <div v-else class="container-small md:container-large">
      <ColorCard v-for="col in allColors" :key="col" :ColorCode="col" />
    </div>
  </div>
</template>

<script>
import ColorCard from '../components/ColorCard.vue'
import { mapActions, mapGetters } from 'vuex'
import LoadingText from '../components/LoadingText.vue'

export default {
  name: 'Home',
  components: {
    LoadingText,
    ColorCard
  },
  computed: {
    ...mapGetters(['allColors'])
  },
  methods: {
    ...mapActions(['getPalette'])
  },
  created() {
    this.getPalette()
  }
}
</script>
