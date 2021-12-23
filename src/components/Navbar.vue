<template>
  <div class="navbar md:navbar-md" id="nav">
    <button
      v-clipboard:copy="allColors"
      class="button button-indigo md:button-md"
    >
      Copy All
    </button>
    <button @click="getPalette" class="button button-indigo md:button-md">
      Generate Colors
    </button>
    <div class="relative">
      <button @click.stop="isShow = !isShow" class="button button-indigo">Show</button>
      <DropdownMenu
        v-if="isShow"
        v-model="selected"
        :menuList="allModels"
        @close="isShow = false"
        @change="
          e => {
            isShow = false
            selectModel(e)
          }
        "
      />
    </div>
    <!-- <select name="model" @change="selectModel" v-model="selected">
      <option v-for="model in allModels" :key="model" v-bind:value="model">
        {{ model.split('_').join(' ') }}
      </option>
    </select> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import DropdownMenu from './DropdownMenu.vue'
export default {
  name: 'Navbar',
  components: {
    DropdownMenu
  },
  data() {
    return {
      selected: 'default',
      isShow: true
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
