<template>
  <div class="columns">
    <div class="column is-3">
      <panel></panel>
    </div>
    <div class="column content">
      Content
    </div>
  </div>
</template>

<script>
import Panel from './Panel';

export default {
  name: 'hello',
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

.content {
}

</style>
