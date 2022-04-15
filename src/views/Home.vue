<template>
  <div class="card-container-sm md:card-container-md">
    <ColorCard v-for="col in allColors" :key="col" :ColorCode="col" />
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
