<template>
  <div class="columns is-multiline is-gapless">
    <div class="column is-3 is-hidden-touch">
      <panel></panel>
    </div>
    <div class="column is-12 is-hidden-desktop">
      <panel-mobile></panel-mobile>
    </div>
    <div class="column">
      <content-app></content-app>
    </div>
  </div>
</template>

<script>
import Panel from './Panel';
import PanelMobile from './PanelMobile';
import ContentApp from './ContentApp';

export default {
  components: {
    Panel,
    PanelMobile,
    ContentApp,
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
