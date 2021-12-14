<template>
  <div :style="`background-color: ${ColorCode}`">
    {{ ColorCode }}
  </div>
</template>

<script>
export default {
  name: 'ColorCard',
  props: {
    ColorCode: {}
  }
}
</script>
