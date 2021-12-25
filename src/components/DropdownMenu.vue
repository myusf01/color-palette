
<template>
  <div ref="dropdown" class="dropdown-card">
    <!-- for item in array list a span when clicked on an item set it -->
    <span
      v-for="item in menuArray"
      :key="item"
      @click="$emit('change', item)"
      class="dropdown-item"
    >
    <!-- remove underscore from model name comes from api -->
      {{ item.split('_').join(' ') }}</span
    >
  </div>
</template>

<script>
// used Onur Aslan's blog post to create this menu
// https://medium.com/@aslanon/vue-dropdown-component-2895422c6f2a
export default {
  name: 'Dropdown',
  props: {
    // list to store models
    menuList: {
      type: Array,
      // if nothing comes from api there will be only one option
      default: () => ['default']
    }
  },
  data() {
    return {
      // data to store array
      menuArray: this.menuList
    }
  },
  methods: {
    documentClick(e) {
      // manage dropdown menu 
      // show or hide on click
      try {

        let el = this.$refs.dropdown
        let target = e.target
        // close menu when user clicked another content
        if (el !== target && !el.contains(target)) {
          this.$emit('close')
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  beforeMount() {
    // add click event listener to trigger our method
    document.addEventListener('click', this.documentClick)
  },
  beforeDestroy() {
    // remove click event after use to prevent unpredicted errors
    document.removeEventListener('click', this.documentClick)
  }
}
</script>
