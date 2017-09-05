<template>
  <box :size="size" :icon="'user'">
    <span slot="header">
      {{ header }}
    </span>
    <div slot="content">
      <h1>{{ size }}-content-box</h1>
    </div>
  </box>
</template>

<script>
import Box from '../Box';

export default {
  props: {
    size: {
      default: 4,
      type: Number,
    },
  },
  components: {
    Box,
  },
  data() {
    return {
      header: 'About Me',
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
};
</script>