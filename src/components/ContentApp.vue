<template>
  <div class="columns is-multiline content-app">
    <box :size="8"></box>
    <box :size="4"></box>
    <box :size="6"></box>
    <box :size="6"></box>
    <box :size="10"></box>
    <box :size="2"></box>
  </div>
</template>

<script>
import Box from './box/Box';

export default {
  components: {
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