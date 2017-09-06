<template>
  <box :size="size" :icon="icon" :isHiddenDesktop="isHiddenDesktop">
    <span slot="header">
      {{ header }}
    </span>
    <div slot="content">
      <div v-for="(item, key) in data" :key="key" class="sub-content">
        <span :class="{ 'content-title': !noColon}">
          <span v-if="noColon">-&nbsp;&nbsp;</span>
          {{ item[0] }}<span v-if="!noColon">:</span>
        </span>
        {{ item[1] }}
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
    isHiddenDesktop: {
      default: false,
      type: Boolean,
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
    noColon: {
      default: false,
      type: Boolean,
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