<template>
  <div id="app" class="container-app">
    <!-- show loading screen when loading colors from api -->
    <loading-text v-if="allColors.length <= 0" />
    <!-- main content -->
    <div v-else class="flex min-w-full min-h-full">
      <!-- navigaton bar -->
      <Navbar />
      <!-- page -->
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
    // get all colors come from api
    ...mapGetters(['allColors'])
  },
  methods: {
    // method to fetch palette
    ...mapActions(['getPalette'])
  },
  created() {
    // function to fetch colors from api when page is created.
    this.getPalette()
  }
}
</script>
