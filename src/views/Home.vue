<template>
  <div class="h-[95vh] flex">
    <div class="container md:container-large">
      <ColorCard v-for="col in allColors" :key="col" :ColorCode="col" />
    </div>
  </div>
</template>

<script>
import ColorCard from '../components/ColorCard.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    ColorCard
  },
  computed: {
    ...mapGetters(['allColors'])
  }
}
</script>
