<template>
  <div class="navbar md:navbar-md" id="nav">
    <button v-clipboard:copy="allColors">
      Copy All Colors
    </button>
    <button @click="getPalette">
      Generate Colors
    </button>
    <select name="model" @change="selectModel" v-model="selected">
      <option v-for="model in allModels" :key="model" v-bind:value="model">
        {{ model.split('_').join(' ') }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  data() {
    return {
      selected: null
    }
  },
  computed: {
    ...mapGetters(['allColors', 'allModels'])
  },
  methods: {
    ...mapActions(['getPalette', 'getModels', 'setModel']),
    selectModel() {
      this.setModel(this.selected)
      return this.getPalette()
    }
  },
  created() {
    this.getModels()
  }
}
</script>
