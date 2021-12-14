<template>
  <div class="home">
    <ColorCard v-for="col in allColors" :key="col" :ColorCode="col" />
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
