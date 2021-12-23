<template>
  <div class="navbar md:navbar-md z-50" id="nav">
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
      <button
        @click.stop="isShow = !isShow"
        class="button md:button-md button-indigo"
      >
        Select Model
      </button>
      <DropdownMenu
        v-if="isShow"
        v-model="selected"
        :menuList="allModels"
        @close="isShow = false"
        @change="
          e => {
            selected = e
            isShow = false
            selectModel(selected)
          }
        "
      />
    </div>
    <a href="https://github.com/myusf01">
      <GithubIcon width="30" heigth="30" class="mr-2"
    /></a>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import DropdownMenu from './DropdownMenu.vue'
import GithubIcon from '../assets/github.svg'
export default {
  name: 'Navbar',
  components: {
    DropdownMenu,
    GithubIcon
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
