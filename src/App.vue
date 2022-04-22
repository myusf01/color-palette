<template>
  <div id="app" class="container-app">
    <!-- show loading screen when loading colors from api -->
    <loading-text v-if="allColors.length <= 0" />
    <!-- main content -->
    <div v-else class="flex min-w-full min-h-full">
      <!-- navigaton bar -->
      <Navbar
        @copyAlert="
          (e) => {
            this.show = e
          }
        "
      />
      <CopyAlertVue
        class="absolute-center z-50 w-64 h-44"
        alertMessage="✔ Copied All Colors!"
        :triggerAlert="show"
        @hideAlert="
          (e) => {
            this.show = e
          }
        "
      />
      <!-- page -->
      <router-view />
    </div>
  </div>
</template>
<script>
import LoadingText from './components/LoadingText.vue'
import { mapActions, mapGetters } from 'vuex'
import Navbar from './components/Navbar.vue'
import CopyAlertVue from './components/CopyAlert.vue'
export default {
  components: {
    Navbar,
    LoadingText,
    CopyAlertVue
  },
  data() {
    return {
      // data to control show/hide copy message
      show: false
    }
  },
  computed: {
    // get all colors come from api
    ...mapGetters(['allColors'])
  },
  methods: {
    // method to fetch palette
    ...mapActions(['getPalette']),
    log(e) {
      console.log(e)
    }
  },
  created() {
    // function to fetch colors from api when page is created.
    this.getPalette()
  }
}
</script>
