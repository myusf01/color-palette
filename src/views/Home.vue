<template>
  <div class="flex flex-col justify-center">
    <div v-if="allColors.length <= 0">
      "Loading Colors..."
    </div>
    <ColorCard v-else v-for="col in allColors" :key="col" :ColorCode="col" />
  </div>
</template>

<script>
import ColorCard from '../components/ColorCard.vue'
import { mapActions, mapGetters } from 'vuex'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
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
