<template>
  <div class="columns is-multiline content-app">
    <small-box></small-box>
    <large-box></large-box>
    <medium-box></medium-box>
    <medium-box></medium-box>
    <full-box></full-box>
  </div>
</template>

<script>
import SmallBox from './box/SmallBox';
import MediumBox from './box/MediumBox';
import LargeBox from './box/LargeBox';
import FullBox from './box/FullBox';

export default {
  components: {
    SmallBox,
    MediumBox,
    LargeBox,
    FullBox,
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