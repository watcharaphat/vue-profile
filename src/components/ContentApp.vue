<template>
  <div class="columns is-multiline content-app">
    <about-me-box :size="4"></about-me-box>
  </div>
</template>

<script>
import AboutMeBox from './box/content/AboutMeBox';

export default {
  components: {
    AboutMeBox,
  },
};
</script>

<style scoped>

.content-app {
  margin-left: 1vw;
  margin-right: 1vw;
  margin-top: 1.5vh;
}

</style>