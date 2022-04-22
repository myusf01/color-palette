<template>
  <div class="navbar md:navbar-md z-50" id="nav">
    <!-- button to copy all colors from palette -->
    <button
      v-clipboard:copy="allColors"
      @click="$emit('copyAlert', true)"
      class="button button-indigo md:button-md"
    >
      Copy All
    </button>
    <!-- to generate colors from api call getPalette method on click -->
    <button @click="getPalette" class="button button-indigo md:button-md">
      Generate Colors
    </button>

    <div class="relative">
      <!-- show model list -->
      <button
        @click.stop="isShow = !isShow"
        class="button md:button-md button-indigo"
      >
        Select Model
      </button>
      <!-- list models from api to select set selected data to set state -->
      <DropdownMenu
        v-if="isShow"
        v-model="selected"
        :menuList="allModels"
        @close="isShow = false"
        @change="
          (e) => {
            selected = e
            isShow = false
            selectModel(selected)
          }
        "
      />
    </div>
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
      selected: null,
      isShow: false
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
