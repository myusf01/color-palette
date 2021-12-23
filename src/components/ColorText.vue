<template>
  <div class="text-card">
    <div class="card-text">
      {{ ColorCode }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColorText',
  props: { ColorCode: {} }
}
</script>
