<template>
  <box :size="size" :icon="icon">
    <span slot="header">
      {{ header }}
    </span>
    <div slot="content">
      <div v-for="(item, key) in data" :key="key" class="sub-content">
        <span class="content-title">{{ key }}: </span>
        {{ item }}
      </div>
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
    header: {
      default: 'Header',
      type: String,
    },
    icon: {
      default: 'circle',
      type: String,
    },
    data: {
      type: Object,
    },
  },
  components: {
    Box,
  },
};
</script>

<style scoped>

.content-title {
  font-weight: 500;
}

.sub-content {
  margin-top: 5px;
}

</style>