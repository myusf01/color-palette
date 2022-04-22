<template>
  <div class="card-container-sm md:card-container-md">
    <ColorCard v-for="col in allColors" :key="col" :ColorCode="col" />
    <a
      class="absolute top-[50%] right-1 bg-white rounded-xl shadow-xl hover:brightness-95"
      href="https://github.com/myusf01"
    >
      <GithubIcon
        width="30"
        height="30"
        class="mx-2 my-2 drop-shadow-lg animate-pulse-slow"
    /></a>
  </div>
</template>

<script>
import ColorCard from '../components/ColorCard.vue'
import GithubIcon from '../assets/github.svg'

import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    ColorCard,
    GithubIcon
  },
  computed: {
    ...mapGetters(['allColors'])
  }
}
</script>
