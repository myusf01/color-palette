<template>
  <div class="card-col md:card-row" :style="`background-color: ${ColorCode}`">
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