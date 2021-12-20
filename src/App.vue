<template>
  <div id="app" class="container antialiased">
    <loading-text v-if="allColors.length <= 0" />
    <div v-else class="container">
      <Navbar />
      <router-view />
    </div>
  </div>
</template>
<script>
import LoadingText from './components/LoadingText.vue'
import { mapActions, mapGetters } from 'vuex'
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar,
    LoadingText
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
