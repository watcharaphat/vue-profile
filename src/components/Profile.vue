<template>
  <div class="columns is-multiline">
    <div class="column is-3 is-hidden-touch">
      <panel></panel>
    </div>
    <div class="column is-12 is-hidden-desktop">
      Mobile-Header
    </div>
    <div class="column">
      Content
    </div>
  </div>
</template>

<script>
import Panel from './Panel';

export default {
  components: {
    Panel,
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
