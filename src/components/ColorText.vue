<template>
  <div class="text-card">
    <!-- text box to show color code above the card -->
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
