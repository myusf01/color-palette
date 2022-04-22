<template>
  <transition name="fade" v-on:enter="enter">
    <div class="text-card alert-card md:alert-card-md" v-if="triggerAlert">
      <!-- text box contains copied text. -->
      <span class="card-text"> {{ alertMessage }}</span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CopyAlert',
  props: {
    triggerAlert: Boolean,
    alertMessage: { type: String, default: 'Copy' }
  },
  methods: {
    enter() {
      // set timeout to manage how long the message will be on screen
      setTimeout(() => {
        this.$emit('hideAlert', false)
      }, 1000)
    }
  }
}
</script>
<style lang="postcss" scoped>
.fade-leave-active,
.fade-enter-active {
  @apply duration-500 transition-opacity;
}
.fade-enter,
.fade-leave-to {
  @apply opacity-0;
}
</style>
