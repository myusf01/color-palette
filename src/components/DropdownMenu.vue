<template>
  <div ref="dropdown" class="dropdown-card">
    <span
      v-for="item in menuArray"
      :key="item"
      @click="$emit('change', item)"
      class="dropdown-item"
    >
      {{ item.split('_').join(' ') }}</span
    >
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    menuList: {
      type: Array,
      default: () => ['default']
    }
  },
  data() {
    return {
      menuArray: this.menuList
    }
  },
  methods: {
    documentClick(e) {
      try {
        let el = this.$refs.dropdown
        let target = e.target

        if (el !== target && !el.contains(target)) {
          this.$emit('close')
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  beforeMount() {
    document.addEventListener('click', this.documentClick)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.documentClick)
  }
}
</script>
