<template>
  <box :size="size">
    <div slot="content">
      <h1>{{ size }}-content-box</h1>
    </div>
  </box>
</template>

<script>
import Box from './Box';

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
};
</script>