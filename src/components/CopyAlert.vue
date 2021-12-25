<template>
  <div class="text-card alert-card md:alert-card-md">
    <!-- text box contains copied text. -->
    <span class="card-text">
      Copied!
    </span>
  </div>
</template>

<script>
export default {
  name: 'CopyAlert',
  props: {
    ColorCode: {}
  }
}
</script>
