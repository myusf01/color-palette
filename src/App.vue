<template>
  <div id="app" class="container antialiased">
    <loading-text v-if="allColors.length <= 0" />
    <div v-else class="container">
      <router-view />
      <div class="navbar md:navbar-md" id="nav">
        <button v-clipboard:copy="allColors">Copy All Colors</button>
        <button @click="getPalette">Generate Colors</button>
        <select name="model">
          <option v-for="model in allModels" :key="model">{{
            model.split('_').join(' ')
          }}</option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
import LoadingText from './components/LoadingText.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    LoadingText
  },
  computed: {
    ...mapGetters(['allColors', 'allModels'])
  },
  methods: {
    ...mapActions(['getPalette', 'getModels'])
  },
  created() {
    this.getPalette()
    this.getModels()
  }
}
</script>
