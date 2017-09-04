<template>
  <div class="columns is-multiline content-app">
    <content-box :size="4"></content-box>
  </div>
</template>

<script>
import ContentBox from './box/ContentBox';
import Box from './box/Box';

export default {
  components: {
    ContentBox,
    Box,
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